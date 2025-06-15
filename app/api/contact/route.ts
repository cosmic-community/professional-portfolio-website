import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { ContactFormData, ContactApiResponse } from '@/types';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest): Promise<NextResponse<ContactApiResponse>> {
  try {
    // Parse the request body
    const body: ContactFormData = await request.json();
    const { name, email, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        {
          success: false,
          message: 'All fields are required',
          error: 'Missing required fields'
        },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        {
          success: false,
          message: 'Please enter a valid email address',
          error: 'Invalid email format'
        },
        { status: 400 }
      );
    }

    // Check if required environment variables are set
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured');
      return NextResponse.json(
        {
          success: false,
          message: 'Email service is not configured',
          error: 'Missing API configuration'
        },
        { status: 500 }
      );
    }

    const toEmail = process.env.CONTACT_EMAIL_TO || 'hello@example.com';
    const fromEmail = process.env.CONTACT_EMAIL_FROM || 'noreply@example.com';

    // Send email using Resend
    const emailData = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #374151; margin-bottom: 10px;">Contact Details:</h3>
            <p style="margin: 5px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 5px 0;"><strong>Email:</strong> ${email}</p>
          </div>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #374151; margin-bottom: 10px;">Message:</h3>
            <div style="background-color: #f9fafb; padding: 15px; border-left: 4px solid #2563eb; border-radius: 4px;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 14px;">
            <p>This email was sent from your portfolio website contact form.</p>
            <p>Reply directly to this email to respond to ${name}.</p>
          </div>
        </div>
      `,
      reply_to: email,
    });

    if (emailData.error) {
      console.error('Resend API error:', emailData.error);
      return NextResponse.json(
        {
          success: false,
          message: 'Failed to send email. Please try again later.',
          error: 'Email service error'
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Message sent successfully! I\'ll get back to you soon.'
    });

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'An unexpected error occurred. Please try again later.',
        error: 'Internal server error'
      },
      { status: 500 }
    );
  }
}
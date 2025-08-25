# Professional Portfolio Website

![Professional Portfolio Preview](https://imgix.cosmicjs.com/70bee9f0-81e1-11f0-b0ac-f12686cb9ade-photo-1507003211169-0a1dd7228f2d-1756146570573.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A professionally designed personal portfolio website showcasing Jeff Hovinga's professional experience, skills, and achievements. Built with Next.js 15 and Cosmic CMS, featuring responsive design optimized for all devices and professional networking.

## ✨ Features

- **Professional Hero Section** - Eye-catching introduction with professional headshot and branding
- **Experience Timeline** - Detailed work history with company logos and descriptions
- **Education & Certifications** - Academic background and professional credentials
- **Client Testimonials** - Social proof with photos and LinkedIn integration
- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **SEO Optimized** - Meta tags and structured data for search visibility
- **Contact Integration** - Professional contact information and social links
- **Dynamic Content** - Content managed through Cosmic CMS

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=68acab10f01fd26965584649&clone_repository=68acac9804ea77b1e31e5532)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "I want to create a professional looking landing page using all of the information from my LinkedIn"

### Code Generation Prompt

> Build a professionally designed website based on my LinkedIn profile. Have it be well designed and optimized for all platforms.

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## 🛠 Technologies Used

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Cosmic CMS** - Headless content management
- **Responsive Design** - Mobile-first approach

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or Bun
- A Cosmic account and bucket

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   bun install
   ```

3. Set up your environment variables:
   ```env
   COSMIC_BUCKET_SLUG=your-bucket-slug
   COSMIC_READ_KEY=your-read-key
   COSMIC_WRITE_KEY=your-write-key
   ```

4. Run the development server:
   ```bash
   bun dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) to view the site

## 📚 Cosmic SDK Examples

### Fetching Portfolio Data
```typescript
// Fetch main portfolio page (singleton)
const portfolioPage = await cosmic.objects.findOne({
  type: 'portfolio-page'
}).depth(1)

// Fetch all experience entries
const experience = await cosmic.objects.find({
  type: 'experience'
}).props(['id', 'title', 'metadata']).depth(1)
```

### Fetching Testimonials
```typescript
// Get testimonials with photos
const testimonials = await cosmic.objects.find({
  type: 'testimonials'
}).props(['id', 'title', 'metadata']).depth(1)
```

## 🎨 Cosmic CMS Integration

This application integrates with your Cosmic bucket's content structure:

- **Portfolio Page** - Main profile information (singleton)
- **Experience** - Work history and job details
- **Education** - Academic background
- **Certifications** - Professional credentials
- **Testimonials** - Client and colleague recommendations

Content is automatically pulled from your Cosmic bucket and displayed with professional styling and responsive design.

## 🚀 Deployment Options

### Vercel (Recommended)
1. Connect your repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Netlify
1. Connect repository to Netlify
2. Add environment variables in Netlify dashboard
3. Set build command: `bun run build`
4. Set publish directory: `.next`

Remember to add your Cosmic environment variables in your hosting platform's dashboard.

<!-- README_END -->
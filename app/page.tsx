import { getPortfolioPage, getExperience, getEducation, getCertifications, getTestimonials } from '@/lib/cosmic'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import ExperienceSection from '@/components/ExperienceSection'
import EducationSection from '@/components/EducationSection'
import CertificationsSection from '@/components/CertificationsSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import ContactSection from '@/components/ContactSection'
import Navigation from '@/components/Navigation'
import type { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  const portfolioPage = await getPortfolioPage()
  
  if (!portfolioPage) {
    return {
      title: 'Professional Portfolio',
      description: 'Professional portfolio and resume website'
    }
  }

  return {
    title: portfolioPage.metadata?.seo_title || portfolioPage.metadata?.full_name || 'Professional Portfolio',
    description: portfolioPage.metadata?.seo_description || portfolioPage.metadata?.professional_summary || 'Professional portfolio and resume website',
  }
}

export default async function HomePage() {
  const [
    portfolioPage,
    experience,
    education,
    certifications,
    testimonials
  ] = await Promise.all([
    getPortfolioPage(),
    getExperience(),
    getEducation(),
    getCertifications(),
    getTestimonials()
  ])

  if (!portfolioPage) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Portfolio Not Found</h1>
          <p className="text-gray-600">Please check your Cosmic CMS configuration.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation portfolioPage={portfolioPage} />
      
      <main>
        <HeroSection portfolioPage={portfolioPage} />
        
        {portfolioPage.metadata?.about_section && (
          <AboutSection portfolioPage={portfolioPage} />
        )}
        
        {experience && experience.length > 0 && (
          <ExperienceSection experience={experience} />
        )}
        
        {education && education.length > 0 && (
          <EducationSection education={education} />
        )}
        
        {certifications && certifications.length > 0 && (
          <CertificationsSection certifications={certifications} />
        )}
        
        {testimonials && testimonials.length > 0 && (
          <TestimonialsSection testimonials={testimonials} />
        )}
        
        <ContactSection portfolioPage={portfolioPage} />
      </main>
    </div>
  )
}
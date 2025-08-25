'use client'

import { PortfolioPage } from '@/types'

interface HeroSectionProps {
  portfolioPage: PortfolioPage
}

export default function HeroSection({ portfolioPage }: HeroSectionProps) {
  const { metadata } = portfolioPage

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      {metadata?.hero_image && (
        <div className="absolute inset-0 z-0">
          <img
            src={`${metadata.hero_image.imgix_url}?w=2000&h=1200&fit=crop&auto=format,compress`}
            alt="Hero background"
            className="w-full h-full object-cover"
            width="2000"
            height="1200"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
      )}

      {/* Content */}
      <div className="container-max section-padding relative z-10">
        <div className="text-center text-white max-w-4xl mx-auto">
          {metadata?.full_name && (
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {metadata.full_name}
            </h1>
          )}
          
          {metadata?.professional_title && (
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-light mb-8 text-gray-100">
              {metadata.professional_title}
            </h2>
          )}
          
          {metadata?.location && (
            <p className="text-lg sm:text-xl mb-8 text-gray-200 flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              {metadata.location}
            </p>
          )}
          
          {metadata?.professional_summary && (
            <div 
              className="text-lg sm:text-xl mb-12 text-gray-100 max-w-3xl mx-auto leading-relaxed"
              dangerouslySetInnerHTML={{ __html: metadata.professional_summary }}
            />
          )}

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button
              onClick={() => scrollToSection('about')}
              className="px-8 py-4 bg-accent-600 text-white font-semibold rounded-lg hover:bg-accent-700 transition-colors duration-300 min-w-[200px]"
            >
              Learn More
            </button>
            
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 bg-transparent text-white font-semibold rounded-lg border-2 border-white hover:bg-white hover:text-gray-900 transition-colors duration-300 min-w-[200px]"
            >
              Get In Touch
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <button
              onClick={() => scrollToSection('about')}
              className="text-white/80 hover:text-white transition-colors"
              aria-label="Scroll down"
            >
              <svg className="w-6 h-6 mx-auto" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
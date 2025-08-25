import { PortfolioPage } from '@/types'

interface HeroSectionProps {
  portfolioPage: PortfolioPage
}

export default function HeroSection({ portfolioPage }: HeroSectionProps) {
  const { metadata } = portfolioPage

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-700 via-primary-600 to-accent-600">
      {/* Background Image Overlay */}
      {metadata?.hero_image && (
        <div className="absolute inset-0">
          <img
            src={`${metadata.hero_image.imgix_url}?w=1920&h=1080&fit=crop&auto=format,compress&blend=000000&blend-alpha=60`}
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 text-center text-white section-padding">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          {metadata?.hero_image && (
            <div className="mb-8 animate-fade-in">
              <img
                src={`${metadata.hero_image.imgix_url}?w=300&h=300&fit=crop&auto=format,compress`}
                alt={metadata?.full_name || 'Profile'}
                className="w-32 h-32 sm:w-40 sm:h-40 rounded-full mx-auto border-4 border-white/20 shadow-2xl"
                width="160"
                height="160"
              />
            </div>
          )}

          {/* Name and Title */}
          <div className="animate-slide-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-balance">
              {metadata?.full_name || 'Professional Portfolio'}
            </h1>
            
            {metadata?.professional_title && (
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-light mb-6 text-white/90">
                {metadata.professional_title}
              </h2>
            )}

            {metadata?.location && (
              <p className="text-lg sm:text-xl text-white/80 mb-8 flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                {metadata.location}
              </p>
            )}

            {/* Professional Summary */}
            {metadata?.professional_summary && (
              <div 
                className="text-lg sm:text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed"
                dangerouslySetInnerHTML={{ __html: metadata.professional_summary }}
              />
            )}

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-white text-primary-700 font-semibold rounded-lg hover:bg-white/90 transition-all transform hover:scale-105 shadow-xl"
              >
                Get In Touch
              </button>
              
              {metadata?.linkedin_url && (
                <a
                  href={metadata.linkedin_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary-700 transition-all transform hover:scale-105"
                >
                  View LinkedIn
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
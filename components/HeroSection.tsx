import { PortfolioPage } from '@/types'

interface HeroSectionProps {
  portfolioPage: PortfolioPage
}

export default function HeroSection({ portfolioPage }: HeroSectionProps) {
  const { metadata } = portfolioPage

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-accent-50 px-4 sm:px-6 lg:px-8">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Profile Image */}
        {metadata?.hero_image && (
          <div className="mb-8">
            <img
              src={`${metadata.hero_image.imgix_url}?w=400&h=400&fit=crop&auto=format,compress`}
              alt={metadata?.full_name || 'Profile'}
              className="w-32 h-32 sm:w-40 sm:h-40 rounded-full mx-auto shadow-xl ring-4 ring-white"
              width="160"
              height="160"
            />
          </div>
        )}

        {/* Name */}
        <div className="mb-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Hello, I'm{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">
              {metadata?.full_name || 'Professional'}
            </span>
          </h1>

          {/* Professional Title */}
          {metadata?.professional_title && (
            <p className="text-xl sm:text-2xl text-gray-600 font-medium mb-6">
              {metadata.professional_title}
            </p>
          )}
        </div>

        {/* Location */}
        {metadata?.location && (
          <div className="flex items-center justify-center gap-2 mb-8">
            <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-600">{metadata.location}</span>
          </div>
        )}

        {/* Professional Summary */}
        {metadata?.professional_summary && (
          <div className="mb-10">
            <div 
              className="prose prose-lg prose-gray max-w-3xl mx-auto text-center"
              dangerouslySetInnerHTML={{ __html: metadata.professional_summary }}
            />
          </div>
        )}

        {/* Contact Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {metadata?.email && (
            <a
              href={`mailto:${metadata.email}`}
              className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-full font-medium transition-colors shadow-lg hover:shadow-xl"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              Get In Touch
            </a>
          )}

          {metadata?.linkedin_url && (
            <a
              href={metadata.linkedin_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white px-8 py-3 rounded-full font-medium transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
              </svg>
              LinkedIn Profile
            </a>
          )}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
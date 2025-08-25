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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container-max section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh]">
          
          {/* Content Side */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            {metadata?.full_name && (
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900">
                <span className="block">Hello, I'm</span>
                <span className="block bg-gradient-to-r from-accent-600 to-accent-700 bg-clip-text text-transparent">
                  {metadata.full_name}
                </span>
              </h1>
            )}
            
            {metadata?.professional_title && (
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-light mb-6 text-gray-600">
                {metadata.professional_title}
              </h2>
            )}
            
            {metadata?.location && (
              <p className="text-lg mb-8 text-gray-600 flex items-center justify-center lg:justify-start gap-2">
                <svg className="w-5 h-5 text-accent-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                {metadata.location}
              </p>
            )}
            
            {metadata?.professional_summary && (
              <div 
                className="text-lg mb-12 text-gray-700 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: metadata.professional_summary }}
              />
            )}

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-16">
              <button
                onClick={() => scrollToSection('about')}
                className="px-8 py-4 bg-accent-600 text-white font-semibold rounded-lg hover:bg-accent-700 hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 min-w-[200px]"
              >
                Learn More
              </button>
              
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 bg-transparent text-accent-600 font-semibold rounded-lg border-2 border-accent-600 hover:bg-accent-600 hover:text-white hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 min-w-[200px]"
              >
                Get In Touch
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start gap-6">
              {metadata?.linkedin_url && (
                <a
                  href={metadata.linkedin_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-accent-600 transform hover:scale-110 transition-all duration-300"
                  aria-label="LinkedIn Profile"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                  </svg>
                </a>
              )}
              {metadata?.email && (
                <a
                  href={`mailto:${metadata.email}`}
                  className="text-gray-600 hover:text-accent-600 transform hover:scale-110 transition-all duration-300"
                  aria-label="Email"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </a>
              )}
            </div>
          </div>

          {/* Photo Side */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Main Photo Container */}
              <div className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[450px] lg:h-[450px]">
                {/* Background Decorative Elements */}
                <div className="absolute -inset-4 bg-gradient-to-r from-accent-400 to-accent-600 rounded-full blur-lg opacity-20 animate-pulse"></div>
                <div className="absolute inset-0 bg-white rounded-full shadow-2xl"></div>
                
                {/* Professional Photo */}
                {metadata?.hero_image && (
                  <div className="relative w-full h-full rounded-full overflow-hidden border-8 border-white shadow-xl">
                    <img
                      src={`${metadata.hero_image.imgix_url}?w=900&h=900&fit=crop&auto=format,compress&crop=faces`}
                      alt={`${metadata?.full_name || 'Professional'} headshot`}
                      className="w-full h-full object-cover object-center"
                      width="450"
                      height="450"
                    />
                  </div>
                )}
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-accent-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                
                <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center shadow-lg transform rotate-12">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection('about')}
            className="text-gray-600 hover:text-accent-600 transition-colors flex flex-col items-center gap-2"
            aria-label="Scroll down"
          >
            <span className="text-sm font-medium">Scroll Down</span>
            <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
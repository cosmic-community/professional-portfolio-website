import { PortfolioPage } from '@/types'

interface HeroSectionProps {
  portfolioPage: PortfolioPage
}

export default function HeroSection({ portfolioPage }: HeroSectionProps) {
  const { metadata } = portfolioPage

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gray-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            {/* Hello Greeting */}
            <div>
              <p className="text-lg text-blue-600 font-medium mb-4">Hello</p>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                I'm <span className="text-blue-600">{metadata?.full_name || 'GraphixPro'}</span>
              </h1>
              
              {/* Professional Title */}
              {metadata?.professional_title && (
                <p className="text-xl text-gray-700 font-medium mb-6">
                  {metadata.professional_title}
                </p>
              )}
            </div>

            {/* Professional Summary */}
            {metadata?.professional_summary && (
              <div className="text-gray-600 leading-relaxed max-w-lg">
                <div dangerouslySetInnerHTML={{ __html: metadata.professional_summary }} />
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gray-900 text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-colors inline-flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                About Me
              </button>

              {/* Social Media Links */}
              <div className="flex items-center gap-4">
                {metadata?.linkedin_url && (
                  <a
                    href={metadata.linkedin_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:text-blue-600 hover:border-blue-200 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                    </svg>
                  </a>
                )}
                
                {/* Instagram */}
                <a
                  href="#"
                  className="w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:text-pink-600 hover:border-pink-200 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 0C4.478 0 0 4.478 0 10s4.478 10 10 10 10-4.478 10-10S15.522 0 10 0zm5 8h-1.5c0-.463-.037-.926-.112-1.376-.125-.754-.333-1.46-.625-2.1C13.17 3.96 12.487 3.5 11.73 3.5c-.757 0-1.44.46-1.933 1.024-.292.64-.5 1.346-.625 2.1C9.037 7.074 9 7.537 9 8H7.5c0-.463.037-.926.112-1.376.125-.754.333-1.46.625-2.1C8.83 3.96 9.513 3.5 10.27 3.5c.757 0 1.44.46 1.933 1.024.292.64.5 1.346.625 2.1.075.45.112.913.112 1.376z" clipRule="evenodd" />
                  </svg>
                </a>

                {/* Twitter */}
                <a
                  href="#"
                  className="w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:text-blue-400 hover:border-blue-200 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Image with Floating Icons */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Main Profile Image */}
            <div className="relative">
              {metadata?.hero_image ? (
                <img
                  src={`${metadata.hero_image.imgix_url}?w=800&h=800&fit=crop&auto=format,compress&mask=ellipse`}
                  alt={metadata?.full_name || 'Profile'}
                  className="w-80 h-80 lg:w-96 lg:h-96 rounded-full object-cover shadow-2xl"
                  width="384"
                  height="384"
                />
              ) : (
                <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 shadow-2xl flex items-center justify-center">
                  <div className="text-6xl">👤</div>
                </div>
              )}

              {/* Floating Tool Icons */}
              {/* Adobe Illustrator */}
              <div className="absolute -top-8 -left-8 w-16 h-16 bg-orange-600 rounded-2xl shadow-lg flex items-center justify-center animate-float">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M10.5 8.5L8.3 14h4.4l-2.2-5.5zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.5 15h-1.2l-.8-2H9.5l-.8 2H7.5l3.5-8h2l3.5 8z"/>
                </svg>
              </div>

              {/* Adobe Photoshop */}
              <div className="absolute top-8 -right-12 w-16 h-16 bg-blue-600 rounded-2xl shadow-lg flex items-center justify-center animate-float-delayed">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15V7h3c1.1 0 2 .9 2 2s-.9 2-2 2h-1v6h-2zm2-8h1V7h-1v2z"/>
                </svg>
              </div>

              {/* Figma */}
              <div className="absolute -bottom-4 left-0 w-14 h-14 bg-purple-600 rounded-xl shadow-lg flex items-center justify-center animate-float">
                <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 12a3 3 0 1 1 6 0 3 3 0 0 1-6 0zM6 6a3 3 0 0 1 3-3h3v6H9a3 3 0 0 1-3-3zM6 12a3 3 0 0 1 3-3h3v6H9a3 3 0 0 1-3-3zM6 18a3 3 0 0 1 3-3h3v3a3 3 0 0 1-6 0zM12 3h3a3 3 0 0 1 0 6h-3V3z"/>
                </svg>
              </div>

              {/* Circular decorative elements */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border-2 border-dashed border-gray-300 rounded-full opacity-30 animate-spin-slow"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border border-gray-200 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
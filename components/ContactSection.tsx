import { PortfolioPage } from '@/types'

interface ContactSectionProps {
  portfolioPage: PortfolioPage
}

export default function ContactSection({ portfolioPage }: ContactSectionProps) {
  const { metadata } = portfolioPage

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-accent-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Let's discuss how we can work together to achieve your goals
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
              
              <div className="space-y-6">
                {metadata?.email && (
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-accent-600 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold">Email</p>
                      <a 
                        href={`mailto:${metadata.email}`}
                        className="text-accent-400 hover:text-accent-300 transition-colors"
                      >
                        {metadata.email}
                      </a>
                    </div>
                  </div>
                )}
                
                {metadata?.phone && (
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-accent-600 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold">Phone</p>
                      <a 
                        href={`tel:${metadata.phone}`}
                        className="text-accent-400 hover:text-accent-300 transition-colors"
                      >
                        {metadata.phone}
                      </a>
                    </div>
                  </div>
                )}
                
                {metadata?.location && (
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-accent-600 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold">Location</p>
                      <p className="text-gray-300">{metadata.location}</p>
                    </div>
                  </div>
                )}
                
                {metadata?.linkedin_url && (
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-accent-600 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold">LinkedIn</p>
                      <a 
                        href={metadata.linkedin_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent-400 hover:text-accent-300 transition-colors"
                      >
                        View Profile
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gray-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Ready to Connect?</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                I'm always interested in new opportunities and meaningful conversations. 
                Whether you're looking for strategic partnerships, consultation, or just want to discuss 
                the latest in headless CMS technology, I'd love to hear from you.
              </p>
              
              <div className="space-y-4">
                {metadata?.email && (
                  <a
                    href={`mailto:${metadata.email}?subject=Let's Connect`}
                    className="block w-full bg-accent-600 text-white text-center py-3 px-6 rounded-lg font-semibold hover:bg-accent-700 transition-colors duration-300"
                  >
                    Send Email
                  </a>
                )}
                
                {metadata?.linkedin_url && (
                  <a
                    href={metadata.linkedin_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-transparent text-accent-400 text-center py-3 px-6 rounded-lg font-semibold border-2 border-accent-400 hover:bg-accent-400 hover:text-white transition-colors duration-300"
                  >
                    Connect on LinkedIn
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
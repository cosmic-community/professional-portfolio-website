import { PortfolioPage } from '@/types'

interface ContactSectionProps {
  portfolioPage: PortfolioPage
}

export default function ContactSection({ portfolioPage }: ContactSectionProps) {
  const { metadata } = portfolioPage

  return (
    <section id="contact" className="py-20 bg-primary-700">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-accent-400 mx-auto mb-6"></div>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Ready to discuss opportunities or have a question? I'd love to hear from you.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Email */}
            {metadata?.email && (
              <div className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                <a
                  href={`mailto:${metadata.email}`}
                  className="text-white/80 hover:text-white transition-colors text-lg"
                >
                  {metadata.email}
                </a>
              </div>
            )}

            {/* Phone */}
            {metadata?.phone && (
              <div className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
                <a
                  href={`tel:${metadata.phone}`}
                  className="text-white/80 hover:text-white transition-colors text-lg"
                >
                  {metadata.phone}
                </a>
              </div>
            )}

            {/* LinkedIn */}
            {metadata?.linkedin_url && (
              <div className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">LinkedIn</h3>
                <a
                  href={metadata.linkedin_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors text-lg"
                >
                  Connect on LinkedIn
                </a>
              </div>
            )}
          </div>

          {/* Call-to-Action */}
          <div className="text-center mt-16">
            <div className="inline-flex flex-col sm:flex-row gap-4">
              {metadata?.email && (
                <a
                  href={`mailto:${metadata.email}`}
                  className="px-8 py-4 bg-white text-primary-700 font-semibold rounded-lg hover:bg-white/90 transition-all transform hover:scale-105 shadow-xl"
                >
                  Send Email
                </a>
              )}
              
              {metadata?.linkedin_url && (
                <a
                  href={metadata.linkedin_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary-700 transition-all transform hover:scale-105"
                >
                  Connect on LinkedIn
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
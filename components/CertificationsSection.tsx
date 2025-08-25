import { Certification } from '@/types'

interface CertificationsSectionProps {
  certifications: Certification[]
}

export default function CertificationsSection({ certifications }: CertificationsSectionProps) {
  if (!certifications || certifications.length === 0) {
    return null
  }

  return (
    <section className="py-20 bg-white">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Certifications & Training
          </h2>
          <div className="w-24 h-1 bg-accent-500 mx-auto"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert) => {
              const { metadata } = cert
              
              return (
                <div key={cert.id} className="bg-white rounded-2xl card-shadow p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-accent-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    
                    <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight">
                      {metadata?.certification_name}
                    </h3>
                    
                    <p className="text-accent-600 font-semibold mb-2">
                      {metadata?.issuing_organization}
                    </p>
                    
                    {metadata?.issue_date && (
                      <p className="text-gray-600 text-sm mb-4">
                        Issued: {metadata.issue_date}
                      </p>
                    )}
                  </div>

                  {metadata?.description && (
                    <p className="text-gray-700 text-sm leading-relaxed mb-4">
                      {metadata.description}
                    </p>
                  )}

                  <div className="flex flex-col gap-2">
                    {metadata?.credential_url && (
                      <a
                        href={metadata.credential_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-accent-600 text-white text-sm font-semibold rounded-lg hover:bg-accent-700 transition-colors"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                          <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                        </svg>
                        View Certificate
                      </a>
                    )}
                    
                    {metadata?.credential_id && (
                      <p className="text-xs text-gray-500 text-center">
                        ID: {metadata.credential_id}
                      </p>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
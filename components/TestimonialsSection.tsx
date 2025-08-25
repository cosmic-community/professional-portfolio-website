import { Testimonial } from '@/types'

interface TestimonialsSectionProps {
  testimonials: Testimonial[]
}

export default function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  if (!testimonials || testimonials.length === 0) {
    return null
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            What People Say
          </h2>
          <div className="w-24 h-1 bg-accent-500 mx-auto"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => {
              const { metadata } = testimonial
              
              return (
                <div key={testimonial.id} className="bg-white rounded-2xl card-shadow p-8 hover:shadow-xl transition-shadow duration-300">
                  {/* Quote Icon */}
                  <div className="mb-6">
                    <svg className="w-8 h-8 text-accent-200" fill="currentColor" viewBox="0 0 32 32">
                      <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14h-4c0-2.2 1.8-4 4-4V8zm16 0c-3.3 0-6 2.7-6 6v10h10V14h-4c0-2.2 1.8-4 4-4V8z" />
                    </svg>
                  </div>

                  {/* Testimonial Content */}
                  {metadata?.testimonial && (
                    <div 
                      className="prose prose-gray max-w-none mb-8 text-gray-700 leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: metadata.testimonial }}
                    />
                  )}

                  {/* Author Info */}
                  <div className="flex items-center gap-4">
                    {metadata?.photo && (
                      <div className="flex-shrink-0">
                        <img
                          src={`${metadata.photo.imgix_url}?w=120&h=120&fit=crop&auto=format,compress`}
                          alt={metadata?.name || 'Testimonial author'}
                          className="w-12 h-12 rounded-full object-cover"
                          width="48"
                          height="48"
                        />
                      </div>
                    )}
                    
                    <div>
                      {metadata?.name && (
                        <p className="font-semibold text-gray-900">
                          {metadata.name}
                        </p>
                      )}
                      
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        {metadata?.title && (
                          <span>{metadata.title}</span>
                        )}
                        
                        {metadata?.company && metadata?.title && (
                          <span className="text-gray-400">•</span>
                        )}
                        
                        {metadata?.company && (
                          <span>{metadata.company}</span>
                        )}
                        
                        {metadata?.linkedin_profile && (
                          <>
                            <span className="text-gray-400">•</span>
                            <a
                              href={metadata.linkedin_profile}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-accent-600 hover:text-accent-700 transition-colors"
                            >
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                              </svg>
                              LinkedIn
                            </a>
                          </>
                        )}
                      </div>
                    </div>
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
import { Experience } from '@/types'

interface ExperienceSectionProps {
  experience: Experience[]
}

export default function ExperienceSection({ experience }: ExperienceSectionProps) {
  if (!experience || experience.length === 0) {
    return null
  }

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-accent-500 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {experience.map((job) => {
              const { metadata } = job
              
              return (
                <div key={job.id} className="relative bg-white rounded-2xl card-shadow p-8 sm:p-10 hover:shadow-xl transition-shadow duration-300">
                  {/* Company Logo */}
                  {metadata?.company_logo && (
                    <div className="absolute top-8 right-8 w-16 h-16 rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
                      <img
                        src={`${metadata.company_logo.imgix_url}?w=64&h=64&fit=crop&auto=format,compress`}
                        alt={`${metadata?.company || 'Company'} logo`}
                        className="w-full h-full object-cover"
                        width="64"
                        height="64"
                      />
                    </div>
                  )}

                  {/* Job Details */}
                  <div className="pr-20">
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {metadata?.job_title || job.title}
                      </h3>
                      
                      <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 text-accent-600 font-semibold mb-2">
                        <span className="text-lg">{metadata?.company}</span>
                        {metadata?.location && (
                          <>
                            <span className="hidden sm:inline text-gray-400">•</span>
                            <span className="flex items-center gap-1">
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                              </svg>
                              {metadata.location}
                            </span>
                          </>
                        )}
                      </div>

                      {/* Date Range */}
                      <div className="flex items-center gap-2 text-gray-600 mb-6">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                        </svg>
                        <span className="font-medium">
                          {metadata?.start_date} - {metadata?.current_position ? 'Present' : metadata?.end_date}
                          {metadata?.current_position && (
                            <span className="ml-2 px-2 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">
                              Current
                            </span>
                          )}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    {metadata?.description && (
                      <div 
                        className="prose prose-gray max-w-none text-gray-700 leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: metadata.description }}
                      />
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
import { PortfolioPage } from '@/types'

interface AboutSectionProps {
  portfolioPage: PortfolioPage
}

export default function AboutSection({ portfolioPage }: AboutSectionProps) {
  const { metadata } = portfolioPage

  if (!metadata?.about_section) {
    return null
  }

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container-max section-padding">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-accent-500 mx-auto"></div>
          </div>

          <div className="bg-white rounded-2xl card-shadow p-8 sm:p-12">
            <div 
              className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: metadata.about_section }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
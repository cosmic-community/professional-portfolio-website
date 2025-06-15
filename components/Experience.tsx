import { getWorkExperience } from '@/lib/cosmic';
import ExperienceCard from '@/components/ExperienceCard';

export default async function Experience() {
  const experiences = await getWorkExperience();

  if (!experiences || experiences.length === 0) {
    return (
      <section id="experience" className="py-20 bg-white">
        <div className="container section-padding">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Work Experience
            </h2>
            <p className="text-gray-600">No work experience data available at the moment.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Work Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My professional journey and key achievements in various roles,
            showcasing growth and expertise development.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <div
                key={experience.id}
                className={`animate-slide-up animation-delay-${index * 200}`}
              >
                <ExperienceCard experience={experience} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
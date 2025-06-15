import { getSkillsGroupedByCategory } from '@/lib/cosmic';
import SkillCategory from '@/components/SkillCategory';

const categoryLabels: Record<string, string> = {
  frontend: 'Frontend Development',
  backend: 'Backend Development',
  database: 'Database & Storage',
  tools: 'Tools & Frameworks',
  design: 'Design & UI/UX'
};

export default async function Skills() {
  const skillsGrouped = await getSkillsGroupedByCategory();
  const categories = Object.keys(skillsGrouped);

  if (categories.length === 0) {
    return (
      <section id="skills" className="py-20 bg-gray-50">
        <div className="container section-padding">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Skills & Expertise
            </h2>
            <p className="text-gray-600">No skills data available at the moment.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels
            across different areas of development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={category}
              className={`animate-slide-up animation-delay-${index * 200}`}
            >
              <SkillCategory
                title={categoryLabels[category] || category}
                skills={skillsGrouped[category]}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
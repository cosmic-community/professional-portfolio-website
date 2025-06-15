import { Skill, getProficiencyLevel } from '@/types';

interface SkillCategoryProps {
  title: string;
  skills: Skill[];
}

const proficiencyColors: Record<string, string> = {
  'Beginner': 'bg-gray-200',
  'Intermediate': 'bg-blue-200',
  'Advanced': 'bg-green-200',
  'Expert': 'bg-purple-200'
};

export default function SkillCategory({ title, skills }: SkillCategoryProps) {
  if (!skills || skills.length === 0) {
    return null;
  }

  return (
    <div className="card">
      <h3 className="text-xl font-semibold text-gray-900 mb-6">{title}</h3>
      
      <div className="space-y-4">
        {skills.map((skill) => {
          const proficiency = getProficiencyLevel(skill);
          const years = skill.metadata?.years_experience;
          const icon = skill.metadata?.icon;
          
          return (
            <div key={skill.id} className="flex items-center gap-3">
              {icon && (
                <img
                  src={`${icon.imgix_url}?w=64&h=64&fit=crop&auto=format,compress`}
                  alt={skill.title}
                  width={32}
                  height={32}
                  className="w-8 h-8 rounded"
                />
              )}
              
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-medium text-gray-900">
                    {skill.metadata?.skill_name || skill.title}
                  </span>
                  {years && (
                    <span className="text-sm text-gray-500">
                      {years}y exp
                    </span>
                  )}
                </div>
                
                <div className="flex items-center gap-2">
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    proficiencyColors[proficiency] || 'bg-gray-200'
                  }`}>
                    {proficiency}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
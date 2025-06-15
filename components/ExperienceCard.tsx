import { WorkExperience } from '@/types';
import { formatDate, calculateExperience } from '@/types';

interface ExperienceCardProps {
  experience: WorkExperience;
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  const startDate = experience.metadata?.start_date || '';
  const endDate = experience.metadata?.end_date;
  const isCurrent = experience.metadata?.current_position || false;

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-600">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900 mb-1">
            {experience.metadata?.position_title || experience.title}
          </h3>
          <p className="text-lg text-blue-600 font-semibold mb-2">
            {experience.metadata?.company_name || 'Company'}
          </p>
          <div className="text-sm text-gray-600">
            {startDate && (
              <span>
                {formatDate(startDate)} - {isCurrent ? 'Present' : endDate ? formatDate(endDate) : 'Present'}
              </span>
            )}
            {startDate && (
              <span className="ml-2 text-gray-500">
                ({calculateExperience(startDate, endDate)})
              </span>
            )}
          </div>
        </div>
        
        {experience.metadata?.company_logo && (
          <div className="ml-4">
            <img
              src={`${experience.metadata.company_logo.imgix_url}?w=80&h=80&fit=crop&auto=format,compress`}
              alt={experience.metadata?.company_name || 'Company'}
              className="w-12 h-12 object-contain"
            />
          </div>
        )}
      </div>

      {experience.metadata?.job_description && (
        <div className="mb-4">
          <p className="text-gray-700 leading-relaxed">
            {experience.metadata.job_description}
          </p>
        </div>
      )}

      {experience.metadata?.achievements && (
        <div className="mb-4">
          <h4 className="font-semibold text-gray-900 mb-2">Key Achievements:</h4>
          <div className="text-gray-700 leading-relaxed">
            {experience.metadata.achievements.split('\n').map((achievement, index) => (
              <div key={index} className="flex items-start mb-1">
                <span className="text-blue-600 mr-2">•</span>
                <span>{achievement.trim()}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {experience.metadata?.technologies && experience.metadata.technologies.length > 0 && (
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Technologies Used:</h4>
          <div className="flex flex-wrap gap-2">
            {experience.metadata.technologies.map((tech) => (
              <span
                key={tech.id}
                className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
              >
                {tech.metadata?.skill_name || tech.title}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
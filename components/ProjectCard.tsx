import { ExternalLink, Github } from 'lucide-react';
import { Project, getProjectStatus } from '@/types';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const status = getProjectStatus(project);
  const technologies = project.metadata?.technologies || [];
  const featuredImage = project.metadata?.featured_image;
  const projectUrl = project.metadata?.project_url;
  const githubUrl = project.metadata?.github_url;

  return (
    <div className="card group hover:shadow-xl transition-all duration-300">
      {featuredImage && (
        <div className="relative overflow-hidden rounded-lg mb-6">
          <img
            src={`${featuredImage.imgix_url}?w=800&h=400&fit=crop&auto=format,compress`}
            alt={project.title}
            width={400}
            height={200}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-4 left-4">
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
              status === 'Completed' ? 'bg-green-100 text-green-800' :
              status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
              'bg-gray-100 text-gray-800'
            }`}>
              {status}
            </span>
          </div>
        </div>
      )}

      <div className="flex-1">
        <h3 className="text-xl font-semibold text-gray-900 mb-3">
          {project.metadata?.project_name || project.title}
        </h3>

        {project.metadata?.description && (
          <div 
            className="prose text-gray-600 mb-4 line-clamp-3"
            dangerouslySetInnerHTML={{ __html: project.metadata.description }}
          />
        )}

        {technologies.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {technologies.slice(0, 3).map((tech) => (
              <span key={tech.id} className="skill-badge">
                {tech.metadata?.icon && (
                  <img
                    src={`${tech.metadata.icon.imgix_url}?w=32&h=32&fit=crop&auto=format,compress`}
                    alt={tech.title}
                    width={16}
                    height={16}
                    className="w-4 h-4 rounded"
                  />
                )}
                {tech.metadata?.skill_name || tech.title}
              </span>
            ))}
            {technologies.length > 3 && (
              <span className="skill-badge">
                +{technologies.length - 3} more
              </span>
            )}
          </div>
        )}

        <div className="flex gap-3">
          {projectUrl && (
            <a
              href={projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 hover:text-gray-800 font-medium"
            >
              <Github className="w-4 h-4" />
              Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
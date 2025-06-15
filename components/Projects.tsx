import { getProjects } from '@/lib/cosmic';
import ProjectCard from '@/components/ProjectCard';
import { Project } from '@/types';

export default async function Projects() {
  const projects = await getProjects();

  if (!projects || projects.length === 0) {
    return (
      <section id="projects" className="py-20 bg-white">
        <div className="container section-padding">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-gray-600">No projects available at the moment.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of my recent work, demonstrating expertise in modern web technologies
            and problem-solving capabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`animate-slide-up animation-delay-${index * 200}`}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
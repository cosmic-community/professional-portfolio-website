// Base Cosmic object interface
export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type_slug: string;
  created_at: string;
  modified_at: string;
}

// Skill object type
export interface Skill extends CosmicObject {
  type_slug: 'skills';
  metadata: {
    skill_name?: string;
    proficiency_level?: {
      key: ProficiencyLevel;
      value: string;
    };
    category?: {
      key: SkillCategory;
      value: string;
    };
    years_experience?: number;
    icon?: {
      url: string;
      imgix_url: string;
    };
  };
}

// Project object type
export interface Project extends CosmicObject {
  type_slug: 'projects';
  metadata: {
    project_name?: string;
    description?: string;
    technologies?: Skill[];
    project_url?: string;
    github_url?: string;
    featured_image?: {
      url: string;
      imgix_url: string;
    };
    gallery?: Array<{
      url: string;
      imgix_url: string;
    }>;
    status?: {
      key: ProjectStatus;
      value: string;
    };
  };
}

// Work Experience object type
export interface WorkExperience extends CosmicObject {
  type_slug: 'work-experience';
  metadata: {
    company_name?: string;
    position_title?: string;
    start_date?: string;
    end_date?: string | null;
    current_position?: boolean;
    job_description?: string;
    achievements?: string;
    technologies?: Skill[];
    company_logo?: {
      url: string;
      imgix_url: string;
    };
  };
}

// Testimonial object type
export interface Testimonial extends CosmicObject {
  type_slug: 'testimonials';
  metadata: {
    client_name?: string;
    company?: string;
    role?: string;
    testimonial_text?: string;
    rating?: {
      key: string;
      value: string;
    };
    profile_photo?: {
      url: string;
      imgix_url: string;
    };
    related_project?: Project;
  };
}

// Type literals for select-dropdown values
export type ProficiencyLevel = 'beginner' | 'intermediate' | 'advanced' | 'expert';
export type SkillCategory = 'frontend' | 'backend' | 'database' | 'tools' | 'design';
export type ProjectStatus = 'completed' | 'in-progress' | 'planned';

// API response types
export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit: number;
  skip: number;
}

// Utility types for components
export type OptionalMetadata<T> = Partial<T['metadata']>;
export type CreateProjectData = Omit<Project, 'id' | 'created_at' | 'modified_at'>;

// Type guards for runtime validation
export function isSkill(obj: CosmicObject): obj is Skill {
  return obj.type_slug === 'skills';
}

export function isProject(obj: CosmicObject): obj is Project {
  return obj.type_slug === 'projects';
}

export function isWorkExperience(obj: CosmicObject): obj is WorkExperience {
  return obj.type_slug === 'work-experience';
}

export function isTestimonial(obj: CosmicObject): obj is Testimonial {
  return obj.type_slug === 'testimonials';
}

// Helper functions for safe property access
export function getSkillCategory(skill: Skill): string {
  return skill.metadata?.category?.value || 'Other';
}

export function getProficiencyLevel(skill: Skill): string {
  return skill.metadata?.proficiency_level?.value || 'Beginner';
}

export function getProjectStatus(project: Project): string {
  return project.metadata?.status?.value || 'Unknown';
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long'
  });
}

export function calculateExperience(startDate: string, endDate?: string | null): string {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date();
  
  const diffTime = Math.abs(end.getTime() - start.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  const years = Math.floor(diffDays / 365);
  const months = Math.floor((diffDays % 365) / 30);
  
  if (years > 0) {
    return months > 0 ? `${years}y ${months}m` : `${years}y`;
  }
  return `${months}m`;
}
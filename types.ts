// Base Cosmic object interface
interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

// Portfolio page interface (singleton)
interface PortfolioPage extends CosmicObject {
  type: 'portfolio-page';
  metadata: {
    full_name?: string;
    professional_title?: string;
    hero_image?: {
      url: string;
      imgix_url: string;
    };
    location?: string;
    professional_summary?: string;
    about_section?: string;
    email?: string;
    linkedin_url?: string;
    phone?: string;
    seo_title?: string;
    seo_description?: string;
  };
}

// Experience interface
interface Experience extends CosmicObject {
  type: 'experience';
  metadata: {
    job_title?: string;
    company?: string;
    location?: string;
    start_date?: string;
    end_date?: string;
    current_position?: boolean;
    description?: string;
    company_logo?: {
      url: string;
      imgix_url: string;
    };
  };
}

// Education interface
interface Education extends CosmicObject {
  type: 'education';
  metadata: {
    institution?: string;
    degree?: string;
    field_of_study?: string;
    year?: string;
    description?: string;
  };
}

// Certification interface
interface Certification extends CosmicObject {
  type: 'certifications';
  metadata: {
    certification_name?: string;
    issuing_organization?: string;
    issue_date?: string;
    credential_id?: string;
    credential_url?: string;
    description?: string;
  };
}

// Testimonial interface
interface Testimonial extends CosmicObject {
  type: 'testimonials';
  metadata: {
    name?: string;
    title?: string;
    company?: string;
    testimonial?: string;
    photo?: {
      url: string;
      imgix_url: string;
    };
    linkedin_profile?: string;
  };
}

// Blog Category interface
interface BlogCategory extends CosmicObject {
  type: 'blog-categories';
  metadata: {
    name?: string;
    description?: string;
    color?: string;
  };
}

// Blog Post interface
interface BlogPost extends CosmicObject {
  type: 'blog-posts';
  metadata: {
    title?: string;
    content?: string;
    excerpt?: string;
    featured_image?: {
      url: string;
      imgix_url: string;
    };
    category?: BlogCategory;
    author_name?: string;
    reading_time?: string;
    published_date?: string;
    seo_title?: string;
    seo_description?: string;
  };
}

// API response types
interface CosmicResponse<T> {
  objects: T[];
  total: number;
}

interface CosmicSingleResponse<T> {
  object: T;
}

export type {
  CosmicObject,
  PortfolioPage,
  Experience,
  Education,
  Certification,
  Testimonial,
  BlogCategory,
  BlogPost,
  CosmicResponse,
  CosmicSingleResponse
};
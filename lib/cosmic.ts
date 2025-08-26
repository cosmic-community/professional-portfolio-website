import { createBucketClient } from '@cosmicjs/sdk'
import { 
  PortfolioPage, 
  Experience, 
  Education, 
  Certification, 
  Testimonial,
  BlogPost,
  BlogCategory,
  CosmicResponse,
  CosmicSingleResponse
} from '@/types'

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
  writeKey: process.env.COSMIC_WRITE_KEY as string,
})

// Helper function for error handling
function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error;
}

// Fetch portfolio page (singleton)
export async function getPortfolioPage(): Promise<PortfolioPage | null> {
  try {
    const response = await cosmic.objects.findOne({
      type: 'portfolio-page'
    }).depth(1);
    
    return response.object as PortfolioPage;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null;
    }
    throw new Error('Failed to fetch portfolio page');
  }
}

// Fetch all experience entries
export async function getExperience(): Promise<Experience[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'experience' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.objects as Experience[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch experience');
  }
}

// Fetch all education entries
export async function getEducation(): Promise<Education[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'education' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.objects as Education[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch education');
  }
}

// Fetch all certifications
export async function getCertifications(): Promise<Certification[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'certifications' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.objects as Certification[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch certifications');
  }
}

// Fetch all testimonials
export async function getTestimonials(): Promise<Testimonial[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'testimonials' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.objects as Testimonial[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch testimonials');
  }
}

// Fetch all blog posts
export async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'blog-posts' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    // Sort by published date (newest first)
    const posts = response.objects as BlogPost[];
    return posts.sort((a, b) => {
      const dateA = new Date(a.metadata?.published_date || '').getTime();
      const dateB = new Date(b.metadata?.published_date || '').getTime();
      return dateB - dateA;
    });
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch blog posts');
  }
}

// Fetch single blog post by slug
export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const response = await cosmic.objects.findOne({
      type: 'blog-posts',
      slug: slug
    }).depth(1);
    
    return response.object as BlogPost;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null;
    }
    throw new Error(`Failed to fetch blog post: ${slug}`);
  }
}

// Fetch all blog categories
export async function getBlogCategories(): Promise<BlogCategory[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'blog-categories' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.objects as BlogCategory[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch blog categories');
  }
}

// Fetch single blog category by slug
export async function getBlogCategory(slug: string): Promise<BlogCategory | null> {
  try {
    const response = await cosmic.objects.findOne({
      type: 'blog-categories',
      slug: slug
    }).depth(1);
    
    return response.object as BlogCategory;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null;
    }
    throw new Error(`Failed to fetch blog category: ${slug}`);
  }
}

// Fetch blog posts by category
export async function getBlogPostsByCategory(categoryId: string): Promise<BlogPost[]> {
  try {
    const response = await cosmic.objects
      .find({ 
        type: 'blog-posts',
        'metadata.category': categoryId
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    // Sort by published date (newest first)
    const posts = response.objects as BlogPost[];
    return posts.sort((a, b) => {
      const dateA = new Date(a.metadata?.published_date || '').getTime();
      const dateB = new Date(b.metadata?.published_date || '').getTime();
      return dateB - dateA;
    });
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error(`Failed to fetch blog posts for category: ${categoryId}`);
  }
}
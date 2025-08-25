import { createBucketClient } from '@cosmicjs/sdk'
import { 
  PortfolioPage, 
  Experience, 
  Education, 
  Certification, 
  Testimonial,
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
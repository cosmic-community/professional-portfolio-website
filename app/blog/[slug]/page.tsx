// app/blog/[slug]/page.tsx
import { getBlogPost, getBlogPosts } from '@/lib/cosmic'
import { getPortfolioPage } from '@/lib/cosmic'
import Navigation from '@/components/Navigation'
import BlogPostContent from '@/components/BlogPostContent'
import CosmicContext from '@/components/CosmicContext'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await getBlogPost(slug)

  if (!post) {
    return {
      title: 'Blog Post Not Found',
      description: 'The requested blog post could not be found.'
    }
  }

  return {
    title: post.metadata?.seo_title || post.metadata?.title || post.title,
    description: post.metadata?.seo_description || post.metadata?.excerpt || 'Blog post by Jeff Hovinga',
    keywords: `${post.metadata?.category?.metadata?.name || ''}, blog, article, web development`,
    openGraph: {
      title: post.metadata?.title || post.title,
      description: post.metadata?.excerpt || 'Blog post by Jeff Hovinga',
      type: 'article',
      images: post.metadata?.featured_image ? [
        {
          url: `${post.metadata.featured_image.imgix_url}?w=1200&h=630&fit=crop&auto=format,compress`,
          width: 1200,
          height: 630,
          alt: post.metadata?.title || post.title,
        }
      ] : [],
    },
  }
}

export async function generateStaticParams() {
  const posts = await getBlogPosts()
  
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const [portfolioPage, post] = await Promise.all([
    getPortfolioPage(),
    getBlogPost(slug)
  ])

  if (!portfolioPage) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Portfolio Not Found</h1>
          <p className="text-gray-600">Please check your Cosmic CMS configuration.</p>
        </div>
      </div>
    )
  }

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Cosmic Insights object tracking */}
      <CosmicContext objectId={post.id} objectType="blog-posts" />

      <Navigation portfolioPage={portfolioPage} />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back to Blog */}
        <div className="mb-8">
          <Link 
            href="/blog"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>
        </div>

        {/* Blog Post Content */}
        <BlogPostContent post={post} />
      </main>
    </div>
  )
}
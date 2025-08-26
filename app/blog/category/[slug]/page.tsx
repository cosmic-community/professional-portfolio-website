// app/blog/category/[slug]/page.tsx
import { getBlogCategory, getBlogPostsByCategory, getBlogCategories } from '@/lib/cosmic'
import { getPortfolioPage } from '@/lib/cosmic'
import BlogPostCard from '@/components/BlogPostCard'
import Navigation from '@/components/Navigation'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

interface CategoryPageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params
  const category = await getBlogCategory(slug)

  if (!category) {
    return {
      title: 'Category Not Found',
      description: 'The requested blog category could not be found.'
    }
  }

  return {
    title: `${category.metadata?.name || category.title} - Blog Category`,
    description: category.metadata?.description || `Blog posts in the ${category.metadata?.name || category.title} category`,
    keywords: `${category.metadata?.name || category.title}, blog, category, articles`,
  }
}

export async function generateStaticParams() {
  const categories = await getBlogCategories()
  
  return categories.map((category) => ({
    slug: category.slug,
  }))
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params
  const [portfolioPage, category] = await Promise.all([
    getPortfolioPage(),
    getBlogCategory(slug)
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

  if (!category) {
    notFound()
  }

  const posts = await getBlogPostsByCategory(category.id)

  return (
    <div className="min-h-screen bg-white">
      <Navigation portfolioPage={portfolioPage} />
      
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
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

        {/* Category Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full" 
               style={{ backgroundColor: category.metadata?.color || '#3B82F6' }}>
            <span className="text-2xl font-bold text-white">
              {(category.metadata?.name || category.title).charAt(0)}
            </span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {category.metadata?.name || category.title}
          </h1>
          {category.metadata?.description && (
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {category.metadata.description}
            </p>
          )}
        </div>

        {/* Blog Posts Grid */}
        {posts && posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No posts in this category yet
            </h3>
            <p className="text-gray-600">
              Check back soon for new articles in {category.metadata?.name || category.title}.
            </p>
          </div>
        )}
      </main>
    </div>
  )
}
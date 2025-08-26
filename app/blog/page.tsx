import { getBlogPosts, getBlogCategories } from '@/lib/cosmic'
import BlogPostCard from '@/components/BlogPostCard'
import BlogCategoryFilter from '@/components/BlogCategoryFilter'
import Navigation from '@/components/Navigation'
import { getPortfolioPage } from '@/lib/cosmic'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog - Jeff Hovinga',
  description: 'Technical articles, insights, and thoughts on modern web development, CMS technology, and business development.',
  keywords: 'blog, articles, web development, CMS, technology, business development',
}

export default async function BlogPage() {
  const [portfolioPage, blogPosts, categories] = await Promise.all([
    getPortfolioPage(),
    getBlogPosts(),
    getBlogCategories()
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

  return (
    <div className="min-h-screen bg-white">
      <Navigation portfolioPage={portfolioPage} />
      
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Technical articles, insights, and thoughts on modern web development, 
            CMS technology, and business development.
          </p>
        </div>

        {/* Category Filter */}
        {categories && categories.length > 0 && (
          <BlogCategoryFilter categories={categories} />
        )}

        {/* Blog Posts Grid */}
        {blogPosts && blogPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium text-gray-900 mb-2">No blog posts yet</h3>
            <p className="text-gray-600">Check back soon for new articles and insights.</p>
          </div>
        )}
      </main>
    </div>
  )
}
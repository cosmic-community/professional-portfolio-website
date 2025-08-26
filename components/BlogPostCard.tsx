import Link from 'next/link'
import { BlogPost } from '@/types'

interface BlogPostCardProps {
  post: BlogPost
}

export default function BlogPostCard({ post }: BlogPostCardProps) {
  const formatDate = (dateString: string) => {
    if (!dateString) return ''
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <article className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Featured Image */}
      {post.metadata?.featured_image && (
        <div className="aspect-w-16 aspect-h-9 relative overflow-hidden">
          <Link href={`/blog/${post.slug}`}>
            <img
              src={`${post.metadata.featured_image.imgix_url}?w=600&h=400&fit=crop&auto=format,compress`}
              alt={post.metadata?.title || post.title}
              className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
            />
          </Link>
        </div>
      )}

      <div className="p-6">
        {/* Category Badge */}
        {post.metadata?.category && (
          <div className="mb-3">
            <Link
              href={`/blog/category/${post.metadata.category.slug}`}
              className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium text-white transition-colors"
              style={{ backgroundColor: post.metadata.category.metadata?.color || '#3B82F6' }}
            >
              {post.metadata.category.metadata?.name || post.metadata.category.title}
            </Link>
          </div>
        )}

        {/* Title */}
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          <Link 
            href={`/blog/${post.slug}`}
            className="hover:text-blue-600 transition-colors"
          >
            {post.metadata?.title || post.title}
          </Link>
        </h2>

        {/* Excerpt */}
        {post.metadata?.excerpt && (
          <p className="text-gray-600 mb-4 line-clamp-3">
            {post.metadata.excerpt}
          </p>
        )}

        {/* Meta Information */}
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center space-x-4">
            {post.metadata?.author_name && (
              <span>By {post.metadata.author_name}</span>
            )}
            {post.metadata?.published_date && (
              <span>{formatDate(post.metadata.published_date)}</span>
            )}
          </div>
          {post.metadata?.reading_time && (
            <span>{post.metadata.reading_time}</span>
          )}
        </div>
      </div>
    </article>
  )
}
import { BlogPost } from '@/types'
import Link from 'next/link'

interface BlogPostContentProps {
  post: BlogPost
}

export default function BlogPostContent({ post }: BlogPostContentProps) {
  const formatDate = (dateString: string) => {
    if (!dateString) return ''
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  // Simple markdown-to-HTML converter for basic formatting
  const parseMarkdown = (markdown: string) => {
    if (!markdown) return ''
    
    return markdown
      // Headers
      .replace(/^### (.*$)/gim, '<h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">$1</h3>')
      .replace(/^## (.*$)/gim, '<h2 class="text-2xl font-bold text-gray-900 mt-12 mb-6">$1</h2>')
      .replace(/^# (.*$)/gim, '<h1 class="text-3xl font-bold text-gray-900 mt-12 mb-8">$1</h1>')
      // Bold and italic
      .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-gray-900">$1</strong>')
      .replace(/\*(.*?)\*/g, '<em class="italic">$1</em>')
      // Links
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-blue-600 hover:text-blue-700 underline" target="_blank" rel="noopener noreferrer">$1</a>')
      // Line breaks
      .replace(/\n\n/g, '</p><p class="text-gray-700 leading-relaxed mb-6">')
      // Lists
      .replace(/^\- (.*$)/gim, '<li class="ml-4 mb-2">• $1</li>')
  }

  return (
    <article className="max-w-none">
      {/* Featured Image */}
      {post.metadata?.featured_image && (
        <div className="mb-8 -mx-4 sm:-mx-6 lg:-mx-8">
          <img
            src={`${post.metadata.featured_image.imgix_url}?w=1200&h=600&fit=crop&auto=format,compress`}
            alt={post.metadata?.title || post.title}
            className="w-full h-64 md:h-96 object-cover"
          />
        </div>
      )}

      {/* Article Header */}
      <header className="mb-8">
        {/* Category */}
        {post.metadata?.category && (
          <div className="mb-4">
            <Link
              href={`/blog/category/${post.metadata.category.slug}`}
              className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium text-white transition-colors"
              style={{ backgroundColor: post.metadata.category.metadata?.color || '#3B82F6' }}
            >
              {post.metadata.category.metadata?.name || post.metadata.category.title}
            </Link>
          </div>
        )}

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          {post.metadata?.title || post.title}
        </h1>

        {/* Meta Information */}
        <div className="flex flex-wrap items-center gap-4 text-gray-600 pb-8 border-b border-gray-200">
          {post.metadata?.author_name && (
            <div className="flex items-center">
              <span className="text-sm">By {post.metadata.author_name}</span>
            </div>
          )}
          {post.metadata?.published_date && (
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="text-sm">{formatDate(post.metadata.published_date)}</span>
            </div>
          )}
          {post.metadata?.reading_time && (
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm">{post.metadata.reading_time}</span>
            </div>
          )}
        </div>
      </header>

      {/* Article Content */}
      <div className="prose prose-lg max-w-none">
        {post.metadata?.content ? (
          <div 
            className="text-gray-700 leading-relaxed"
            dangerouslySetInnerHTML={{ 
              __html: `<p class="text-gray-700 leading-relaxed mb-6">${parseMarkdown(post.metadata.content)}</p>` 
            }} 
          />
        ) : (
          <p className="text-gray-700 leading-relaxed">
            {post.metadata?.excerpt || 'No content available.'}
          </p>
        )}
      </div>

      {/* Article Footer */}
      <footer className="mt-12 pt-8 border-t border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            {post.metadata?.category && (
              <Link
                href={`/blog/category/${post.metadata.category.slug}`}
                className="text-blue-600 hover:text-blue-700 text-sm font-medium"
              >
                More in {post.metadata.category.metadata?.name || post.metadata.category.title}
              </Link>
            )}
          </div>
          <Link
            href="/blog"
            className="text-blue-600 hover:text-blue-700 text-sm font-medium"
          >
            ← Back to all posts
          </Link>
        </div>
      </footer>
    </article>
  )
}
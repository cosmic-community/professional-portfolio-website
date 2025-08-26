'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { BlogCategory } from '@/types'

interface BlogCategoryFilterProps {
  categories: BlogCategory[]
}

export default function BlogCategoryFilter({ categories }: BlogCategoryFilterProps) {
  const pathname = usePathname()

  const isActiveCategory = (slug: string) => {
    return pathname === `/blog/category/${slug}`
  }

  const isAllActive = pathname === '/blog'

  return (
    <div className="mb-12">
      <div className="flex flex-wrap gap-2 justify-center">
        {/* All Categories */}
        <Link
          href="/blog"
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            isAllActive
              ? 'bg-gray-900 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          All Posts
        </Link>

        {/* Category Filters */}
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/blog/category/${category.slug}`}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              isActiveCategory(category.slug)
                ? 'text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            style={
              isActiveCategory(category.slug)
                ? { backgroundColor: category.metadata?.color || '#3B82F6' }
                : {}
            }
          >
            {category.metadata?.name || category.title}
          </Link>
        ))}
      </div>
    </div>
  )
}
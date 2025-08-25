import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import CosmicBadge from '@/components/CosmicBadge'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jeff Hovinga - Professional Portfolio',
  description: 'Senior Account Executive at Cosmic helping companies and developers build modern applications with headless CMS technology.',
  keywords: 'Jeff Hovinga, Account Executive, Cosmic CMS, Sales Professional, Business Development',
  authors: [{ name: 'Jeff Hovinga' }],
  openGraph: {
    title: 'Jeff Hovinga - Professional Portfolio',
    description: 'Senior Account Executive at Cosmic helping companies and developers build modern applications with headless CMS technology.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const bucketSlug = process.env.COSMIC_BUCKET_SLUG as string

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Console capture script for dashboard debugging */}
        <script src="/dashboard-console-capture.js"></script>
      </head>
      <body className={inter.className}>
        {children}
        <CosmicBadge bucketSlug={bucketSlug} />
      </body>
    </html>
  )
}
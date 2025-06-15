import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Professional Portfolio | Full Stack Developer',
  description: 'Showcasing innovative projects and technical expertise in modern web development',
  keywords: ['portfolio', 'full stack developer', 'react', 'next.js', 'typescript', 'web development'],
  authors: [{ name: 'Portfolio Developer' }],
  openGraph: {
    title: 'Professional Portfolio | Full Stack Developer',
    description: 'Showcasing innovative projects and technical expertise in modern web development',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Portfolio | Full Stack Developer',
    description: 'Showcasing innovative projects and technical expertise in modern web development',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
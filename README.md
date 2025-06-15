# Professional Portfolio Website

A modern, responsive portfolio website built with Next.js and powered by Cosmic CMS. This application showcases your professional work, skills, experience, and client testimonials in a clean, professional design.

## Features

- **Modern Design**: Clean, professional interface with smooth animations and responsive layout
- **Project Showcase**: Display your projects with detailed descriptions, technologies used, and live demos
- **Skills Matrix**: Organize and display your technical skills by category with proficiency levels
- **Work Experience Timeline**: Showcase your career journey with detailed job descriptions and achievements
- **Client Testimonials**: Build trust with authentic client feedback and ratings
- **Dynamic Content**: All content is managed through Cosmic CMS for easy updates
- **SEO Optimized**: Meta tags and structured data for better search engine visibility
- **Mobile Responsive**: Optimized for all device sizes and screen resolutions

## Clone this Bucket

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket to get started instantly:

[![Clone this Bucket](https://img.shields.io/badge/Clone%20this%20Bucket-4F46E5?style=for-the-badge&logo=cosmic&logoColor=white)](http://localhost:3040/projects/new?clone_bucket=portfolio-production)

## Original Prompt

This application was built based on the following request:

> Build a Next.js website that uses my existing objects in this bucket. Add apiEnvironment: "staging" to cosmic config

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **CMS**: Cosmic (Staging Environment)
- **Deployment**: Vercel-ready
- **Icons**: Lucide React
- **Font**: Inter

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- A Cosmic account with your portfolio content

### Installation

1. Clone this repository
2. Install dependencies:
   ```bash
   bun install
   ```

3. Create your environment file:
   ```bash
   cp .env.example .env.local
   ```

4. Add your Cosmic credentials to `.env.local`:
   ```env
   COSMIC_BUCKET_SLUG=your-bucket-slug
   COSMIC_READ_KEY=your-read-key
   COSMIC_WRITE_KEY=your-write-key
   ```

5. Run the development server:
   ```bash
   bun dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## Cosmic SDK Examples

### Fetching Projects with Related Skills
```typescript
const projects = await cosmic.objects
  .find({ type: 'projects' })
  .depth(1) // Include related skills
  .props(['id', 'title', 'slug', 'metadata'])
```

### Getting Skills by Category
```typescript
const frontendSkills = await cosmic.objects
  .find({ 
    type: 'skills',
    'metadata.category.key': 'frontend'
  })
  .props(['id', 'title', 'metadata'])
```

### Fetching Work Experience with Technologies
```typescript
const experience = await cosmic.objects
  .find({ type: 'work-experience' })
  .depth(1) // Include related technologies
  .sort('metadata.start_date')
```

## Cosmic CMS Integration

This application integrates with your existing Cosmic bucket structure:

- **Projects**: Showcase your work with descriptions, technologies, and media
- **Skills**: Display technical competencies organized by category
- **Work Experience**: Professional timeline with achievements and technologies
- **Testimonials**: Client feedback with ratings and related projects

All content is fetched from Cosmic using the staging environment as requested, ensuring you can test changes before going live.

## Deployment Options

### Vercel (Recommended)
1. Connect your repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on every commit

### Netlify
1. Connect your repository to Netlify
2. Add environment variables in Netlify dashboard
3. Set build command: `bun run build`
4. Set publish directory: `.next`

### Environment Variables for Production
Set these in your hosting platform:
- `COSMIC_BUCKET_SLUG`
- `COSMIC_READ_KEY` 
- `COSMIC_WRITE_KEY`
<!-- README_END -->
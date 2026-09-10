"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, Calendar, Share2, Tag } from "lucide-react";
import { sampleBlogPosts, type BlogPost } from "@/lib/blog-data";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function BlogPostPage({ params }: PageProps) {
  // In a real app, we'd fetch the post by slug
  // For demo purposes, we'll use the first post
  const slug = "getting-started-with-nextjs-15";
  const post = sampleBlogPosts.find((p) => p.slug === slug) || sampleBlogPosts[0];

  if (!post) {
    return (
      <div className="min-h-screen pt-24 pb-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Post Not Found</h1>
          <Link href="/blog" className="text-emerald-400 hover:text-emerald-300">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-1/3 h-1/3 bg-emerald-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-1/3 h-1/3 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Back Link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft size={18} />
          Back to Blog
        </Link>

        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          {/* Category */}
          <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 mb-4">
            {post.category}
          </span>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {post.title}
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 text-slate-400">
            <span className="flex items-center gap-2">
              <Calendar size={16} />
              {post.date}
            </span>
            <span className="flex items-center gap-2">
              <Clock size={16} />
              {post.readingTime}
            </span>
            <button className="flex items-center gap-2 hover:text-white transition-colors">
              <Share2 size={16} />
              Share
            </button>
          </div>
        </motion.header>

        {/* Featured Image */}
        {post.image && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-8 rounded-2xl overflow-hidden"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-auto"
            />
          </motion.div>
        )}

        {/* MDX Content - Using static content for demo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mdx-content"
        >
          <h2>Introduction</h2>
          <p>
            Learn how to build modern web applications with Next.js 15, featuring the App Router, server actions, and improved performance. This comprehensive guide will walk you through everything you need to know to get started.
          </p>

          <h2>What's New in Next.js 15?</h2>
          <p>
            Next.js 15 introduces several groundbreaking features that make building web applications easier and more performant than ever.
          </p>

          <ul>
            <li><strong>Partial Prerendering</strong> - Combine static and dynamic content seamlessly</li>
            <li><strong>Improved Server Actions</strong> - Better type safety and caching</li>
            <li><strong>Turbopack</strong> - Now stable and significantly faster</li>
            <li><strong>Enhanced Metadata API</strong> - Better SEO and social sharing</li>
          </ul>

          <h2>Setting Up Your Project</h2>
          <p>
            Creating a new Next.js 15 project is straightforward. Run the following command in your terminal:
          </p>

          <pre><code>npx create-next-app@latest my-app --typescript --tailwind --eslint</code></pre>

          <p>
            This sets up everything you need to start building with Next.js 15, including TypeScript support, Tailwind CSS, and ESLint configuration.
          </p>

          <h2>Using the App Router</h2>
          <p>
            The App Router is now the default and brings a new mental model for routing in Next.js applications.
          </p>

          <blockquote>
            Server components are a game-changer for building performant web applications. By default, components render on the server, sending only HTML to the client.
          </blockquote>

          <h3>Benefits of Server Components</h3>
          <ol>
            <li><strong>Zero Bundle Size</strong> - Server components don't add to your JavaScript bundle</li>
            <li><strong>Automatic Code Splitting</strong> - Only load what you need</li>
            <li><strong>Improved Performance</strong> - Faster initial page loads</li>
            <li><strong>Better SEO</strong> - Search engines can easily crawl your content</li>
          </ol>

          <h2>Conclusion</h2>
          <p>
            Next.js 15 is a major step forward in web development. With its improved performance, better developer experience, and powerful new features, it's the best time to start building with Next.js. Whether you're creating a simple blog or a complex web application, Next.js 15 has the tools you need to succeed.
          </p>
        </motion.div>

        {/* Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap gap-2 mt-8 pt-8 border-t border-slate-800"
        >
          <Tag size={16} className="text-slate-400" />
          <span className="px-3 py-1 text-sm rounded-full bg-slate-800 text-slate-300">
            {post.category}
          </span>
          <span className="px-3 py-1 text-sm rounded-full bg-slate-800 text-slate-300">
            Next.js
          </span>
          <span className="px-3 py-1 text-sm rounded-full bg-slate-800 text-slate-300">
            React
          </span>
        </motion.div>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 mt-8 pt-8 border-t border-slate-800"
        >
          <Link
            href="/blog"
            className="flex-1 p-4 rounded-xl glass-card hover:border-emerald-500/30 transition-all group text-center"
          >
            <span className="text-white font-medium group-hover:text-emerald-400 transition-colors">
              ← Back to All Articles
            </span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
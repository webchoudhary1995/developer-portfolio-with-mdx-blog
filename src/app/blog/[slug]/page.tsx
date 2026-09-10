"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, Calendar, Share2, Tag } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const blogPosts: Record<string, {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  category: string;
  image?: string;
  content: string;
}> = {
  "getting-started-with-nextjs-15": {
    slug: "getting-started-with-nextjs-15",
    title: "Getting Started with Next.js 15: A Complete Guide",
    excerpt: "Learn how to build modern web applications with Next.js 15, featuring the App Router, server actions, and improved performance.",
    date: "2026-09-01",
    readingTime: "5 min read",
    category: "Next.js",
    image: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?w=800&h=400&fit=crop",
    content: "",
  },
  "building-ai-applications": {
    slug: "building-ai-applications",
    title: "Building AI-Powered Applications with LangChain and OpenAI",
    excerpt: "A comprehensive guide to building intelligent applications using LangChain, OpenAI's GPT models, and vector databases.",
    date: "2026-08-15",
    readingTime: "8 min read",
    category: "AI/ML",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
    content: "",
  },
  "modern-css-techniques": {
    slug: "modern-css-techniques",
    title: "Modern CSS Techniques for Beautiful Web Interfaces",
    excerpt: "Explore advanced CSS techniques including container queries, cascade layers, and modern layout systems.",
    date: "2026-08-01",
    readingTime: "6 min read",
    category: "CSS",
    image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800&h=400&fit=crop",
    content: "",
  },
};

export default function BlogPostPage({ params }: PageProps) {
  const slug = "getting-started-with-nextjs-15";
  const post = blogPosts[slug] || blogPosts["getting-started-with-nextjs-15"];

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
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-1/3 h-1/3 bg-emerald-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-1/3 h-1/3 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft size={18} />
          Back to Blog
        </Link>

        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 mb-4">
            {post.category}
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {post.title}
          </h1>

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

        {post.image && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-8 rounded-2xl overflow-hidden"
          >
            <img src={post.image} alt={post.title} className="w-full h-auto" />
          </motion.div>
        )}

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
          <p>Creating a new Next.js 15 project is straightforward:</p>
          <pre><code>npx create-next-app@latest my-app --typescript --tailwind --eslint</code></pre>

          <blockquote>
            Server components are a game-changer for building performant web applications.
          </blockquote>

          <h2>Conclusion</h2>
          <p>
            Next.js 15 is a major step forward in web development. With its improved performance, better developer experience, and powerful new features, it's the best time to start building with Next.js.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap gap-2 mt-8 pt-8 border-t border-slate-800"
        >
          <Tag size={16} className="text-slate-400" />
          <span className="px-3 py-1 text-sm rounded-full bg-slate-800 text-slate-300">{post.category}</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 pt-8 border-t border-slate-800"
        >
          <Link href="/blog" className="text-emerald-400 hover:text-emerald-300">
            ← Back to All Articles
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, ArrowLeft, Search } from "lucide-react";

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  category: string;
  image?: string;
}

const allPosts: BlogPost[] = [
  {
    slug: "getting-started-with-nextjs-15",
    title: "Getting Started with Next.js 15: A Complete Guide",
    excerpt: "Learn how to build modern web applications with Next.js 15, featuring the App Router, server actions, and improved performance.",
    date: "2026-09-01",
    readingTime: "5 min read",
    category: "Next.js",
    image: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?w=800&h=400&fit=crop",
  },
  {
    slug: "building-ai-applications",
    title: "Building AI-Powered Applications with LangChain and OpenAI",
    excerpt: "A comprehensive guide to building intelligent applications using LangChain, OpenAI's GPT models, and vector databases.",
    date: "2026-08-15",
    readingTime: "8 min read",
    category: "AI/ML",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
  },
  {
    slug: "modern-css-techniques",
    title: "Modern CSS Techniques for Beautiful Web Interfaces",
    excerpt: "Explore advanced CSS techniques including container queries, cascade layers, and modern layout systems.",
    date: "2026-08-01",
    readingTime: "6 min read",
    category: "CSS",
    image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800&h=400&fit=crop",
  },
];

const categories = ["All", "Next.js", "AI/ML", "CSS"];

export default function BlogPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-1/3 h-1/3 bg-emerald-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-1/3 h-1/3 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-12">
          <Link href="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-6">
            <ArrowLeft size={18} />
            Back to Home
          </Link>

          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Blog <span className="gradient-text">Articles</span>
          </h1>
          <p className="text-slate-400 max-w-2xl">
            Thoughts, tutorials, and insights on web development, AI integration, and modern technologies.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <div className="relative flex-1">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full pl-12 pr-4 py-3 bg-slate-900/50 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500/50 transition-colors"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  category === "All"
                    ? "bg-gradient-to-r from-emerald-500 to-cyan-500 text-white"
                    : "glass-card text-slate-400 hover:text-white hover:border-slate-600"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allPosts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-2xl overflow-hidden hover:border-emerald-500/30 transition-all duration-300 group"
            >
              {post.image && (
                <div className="relative h-48 overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />
                  <span className="absolute top-4 left-4 px-3 py-1 text-xs font-medium rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    {post.category}
                  </span>
                </div>
              )}

              <div className="p-5">
                <div className="flex items-center gap-3 text-sm text-slate-500 mb-3">
                  <span>{post.date}</span>
                  <span className="w-1 h-1 rounded-full bg-slate-600" />
                  <span className="flex items-center gap-1">
                    <Clock size={14} />
                    {post.readingTime}
                  </span>
                </div>

                <h2 className="text-lg font-semibold text-white mb-2 group-hover:text-emerald-400 transition-colors line-clamp-2">
                  {post.title}
                </h2>

                <p className="text-slate-400 text-sm mb-4 line-clamp-3">{post.excerpt}</p>

                <Link href={`/blog/${post.slug}`} className="inline-flex items-center gap-2 text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors">
                  Read Article
                  <ArrowLeft size={16} className="rotate-180" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
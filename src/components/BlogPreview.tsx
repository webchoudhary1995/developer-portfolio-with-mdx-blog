"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, ArrowRight, FileText } from "lucide-react";

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  category: string;
  image?: string;
}

const posts: BlogPost[] = [
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

export default function BlogPreview() {
  const latestPosts = posts.slice(0, 3);

  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1/2 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            Latest <span className="gradient-text">Blog Posts</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Insights and tutorials on web development, AI, and modern technologies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {latestPosts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group glass-card rounded-2xl overflow-hidden hover:border-emerald-500/30 transition-all duration-300"
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

                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-emerald-400 transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-slate-400 text-sm mb-4 line-clamp-2">{post.excerpt}</p>

                <Link href={`/blog/${post.slug}`} className="inline-flex items-center gap-2 text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors">
                  Read Article
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <Link href="/blog" className="inline-flex items-center gap-2 px-8 py-4 text-base font-medium text-white border border-slate-700 rounded-xl hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-all group">
            <FileText size={20} />
            View All Articles
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
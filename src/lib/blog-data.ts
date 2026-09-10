// Static blog data for client components
// This is a simplified version that can be imported in client components

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  category: string;
  image?: string;
  content: string;
}

export const sampleBlogPosts: BlogPost[] = [
  {
    slug: "getting-started-with-nextjs-15",
    title: "Getting Started with Next.js 15: A Complete Guide",
    excerpt: "Learn how to build modern web applications with Next.js 15, featuring the App Router, server actions, and improved performance.",
    date: "2026-09-01",
    readingTime: "5 min read",
    category: "Next.js",
    image: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?w=800&h=400&fit=crop",
    content: "",
  },
  {
    slug: "building-ai-applications",
    title: "Building AI-Powered Applications with LangChain and OpenAI",
    excerpt: "A comprehensive guide to building intelligent applications using LangChain, OpenAI's GPT models, and vector databases.",
    date: "2026-08-15",
    readingTime: "8 min read",
    category: "AI/ML",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
    content: "",
  },
  {
    slug: "modern-css-techniques",
    title: "Modern CSS Techniques for Beautiful Web Interfaces",
    excerpt: "Explore advanced CSS techniques including container queries, cascade layers, and modern layout systems to create stunning interfaces.",
    date: "2026-08-01",
    readingTime: "6 min read",
    category: "CSS",
    image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800&h=400&fit=crop",
    content: "",
  },
];

export function getLatestPosts(count: number = 3): BlogPost[] {
  return sampleBlogPosts.slice(0, count);
}

export function getAllPosts(): BlogPost[] {
  return sampleBlogPosts;
}

export function getAllCategories(): string[] {
  const categories = new Set(sampleBlogPosts.map((post) => post.category));
  return ["All", ...Array.from(categories)];
}
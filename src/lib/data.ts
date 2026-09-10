export const personalInfo = {
  name: "Alex Chen",
  title: "Full Stack Developer",
  email: "alex@example.com",
  location: "San Francisco, CA",
  availability: "Available for freelance projects",
  social: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    discord: "https://discord.com",
  },
  resumeUrl: "/resume.pdf",
};

export const experience = [
  {
    id: 1,
    role: "Senior Full Stack Developer",
    company: "TechCorp Inc.",
    period: "2023 - Present",
    description: [
      "Led development of microservices architecture serving 1M+ users",
      "Implemented CI/CD pipelines reducing deployment time by 60%",
      "Mentored junior developers and conducted code reviews",
    ],
    techStack: ["Next.js", "TypeScript", "AWS", "PostgreSQL", "Docker"],
  },
  {
    id: 2,
    role: "AI Integration Engineer",
    company: "InnovateAI Labs",
    period: "2021 - 2023",
    description: [
      "Integrated LLM APIs into customer-facing applications",
      "Built RAG pipelines for document retrieval systems",
      "Optimized AI inference costs by 40% through caching strategies",
    ],
    techStack: ["Python", "OpenAI", "LangChain", "Vector DB", "FastAPI"],
  },
  {
    id: 3,
    role: "Frontend Developer",
    company: "StartupXYZ",
    period: "2019 - 2021",
    description: [
      "Developed responsive web applications with React",
      "Implemented design systems and component libraries",
      "Improved page load times by 35% through optimization",
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "GraphQL", "Jest"],
  },
  {
    id: 4,
    role: "Junior Developer",
    company: "WebAgency Co.",
    period: "2017 - 2019",
    description: [
      "Built and maintained client websites",
      "Collaborated with design team on UI/UX improvements",
      "Learned agile methodologies and version control",
    ],
    techStack: ["JavaScript", "HTML/CSS", "PHP", "MySQL", "WordPress"],
  },
];

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  liveUrl: string;
  githubUrl: string;
  category: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "AI-Powered Dashboard",
    description: "Real-time analytics dashboard with AI predictions and custom visualizations",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
    techStack: ["Next.js", "TypeScript", "Tailwind", "Python", "OpenAI"],
    liveUrl: "#",
    githubUrl: "#",
    category: "Next.js",
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    description: "Full-featured online store with payment integration and inventory management",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop",
    techStack: ["Next.js", "React Native", "Stripe", "Sanity", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#",
    category: "Full Stack",
  },
  {
    id: 3,
    title: "ML Model Registry",
    description: "Platform for versioning and deploying machine learning models at scale",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
    techStack: ["Python", "FastAPI", "Kubernetes", "MLflow", "Docker"],
    liveUrl: "#",
    githubUrl: "#",
    category: "AI/ML",
  },
  {
    id: 4,
    title: "Mobile Fitness App",
    description: "Cross-platform fitness tracking app with social features and workout plans",
    image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&h=400&fit=crop",
    techStack: ["React Native", "TypeScript", "Firebase", "Redux", "GraphQL"],
    liveUrl: "#",
    githubUrl: "#",
    category: "React Native",
  },
  {
    id: 5,
    title: "Developer Portfolio",
    description: "Modern portfolio with MDX blog, animations, and dark theme",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
    techStack: ["Next.js", "TypeScript", "Tailwind", "MDX", "Framer Motion"],
    liveUrl: "#",
    githubUrl: "#",
    category: "Next.js",
  },
  {
    id: 6,
    title: "API Gateway Service",
    description: "Enterprise API gateway with rate limiting, authentication, and monitoring",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop",
    techStack: ["Go", "gRPC", "Redis", "Prometheus", "Terraform"],
    liveUrl: "#",
    githubUrl: "#",
    category: "Full Stack",
  },
];

export interface Skill {
  name: string;
  icon: string;
  proficiency: number;
}

export const skills = {
  frontend: [
    { name: "React", icon: "react", proficiency: 95 },
    { name: "Next.js", icon: "nextjs", proficiency: 90 },
    { name: "TypeScript", icon: "typescript", proficiency: 92 },
    { name: "Tailwind CSS", icon: "tailwind", proficiency: 95 },
    { name: "Vue.js", icon: "vue", proficiency: 75 },
  ],
  backend: [
    { name: "Node.js", icon: "nodejs", proficiency: 90 },
    { name: "Python", icon: "python", proficiency: 85 },
    { name: "Go", icon: "go", proficiency: 70 },
    { name: "PostgreSQL", icon: "postgresql", proficiency: 85 },
    { name: "MongoDB", icon: "mongodb", proficiency: 80 },
  ],
  aiCloud: [
    { name: "OpenAI", icon: "openai", proficiency: 90 },
    { name: "AWS", icon: "aws", proficiency: 80 },
    { name: "Docker", icon: "docker", proficiency: 85 },
    { name: "Kubernetes", icon: "kubernetes", proficiency: 70 },
    { name: "LangChain", icon: "langchain", proficiency: 85 },
  ],
  tools: [
    { name: "Git", icon: "git", proficiency: 95 },
    { name: "VS Code", icon: "vscode", proficiency: 98 },
    { name: "Figma", icon: "figma", proficiency: 75 },
    { name: "Jest", icon: "jest", proficiency: 85 },
    { name: "Vercel", icon: "vercel", proficiency: 90 },
  ],
};

export const categories = ["All", "Next.js", "AI/ML", "React Native", "Full Stack"];
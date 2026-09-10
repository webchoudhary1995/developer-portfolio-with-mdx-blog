"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Cloud,
  Wrench,
  Terminal,
  Box,
  Cpu,
  GitBranch,
  Figma,
  Globe,
  Server,
  Sparkles,
  Palette,
} from "lucide-react";
import { skills } from "@/lib/data";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  react: Globe,
  nextjs: Globe,
  typescript: Terminal,
  tailwind: Palette,
  vue: Globe,
  nodejs: Server,
  python: Terminal,
  go: Terminal,
  postgresql: Database,
  mongodb: Database,
  openai: Cpu,
  aws: Cloud,
  docker: Box,
  kubernetes: Box,
  langchain: Sparkles,
  git: GitBranch,
  vscode: Terminal,
  figma: Figma,
  jest: Terminal,
  vercel: Cloud,
};

function SkillBadge({
  name,
  icon,
  proficiency,
}: {
  name: string;
  icon: string;
  proficiency: number;
}) {
  const Icon = iconMap[icon] || Terminal;

  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -2 }}
      className="flex items-center gap-3 px-4 py-3 rounded-xl glass-card hover:border-emerald-500/30 transition-all duration-300 group"
    >
      <div className="p-2 rounded-lg bg-slate-800/80 group-hover:bg-emerald-500/20 transition-colors">
        <Icon size={20} className="text-slate-400 group-hover:text-emerald-400 transition-colors" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-1">
          <span className="text-sm font-medium text-slate-200">{name}</span>
          <span className="text-xs text-slate-500">{proficiency}%</span>
        </div>
        <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${proficiency}%` }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-full bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full"
          />
        </div>
      </div>
    </motion.div>
  );
}

function SkillCategory({
  title,
  icon: Icon,
  skills: categorySkills,
  delay,
}: {
  title: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  skills: Array<{ name: string; icon: string; proficiency: number }>;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="glass-card rounded-2xl p-6 hover:border-cyan-500/30 transition-all duration-300"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20">
          <Icon size={24} className="text-emerald-400" />
        </div>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
      </div>
      <div className="space-y-3">
        {categorySkills.map((skill) => (
          <SkillBadge
            key={skill.name}
            name={skill.name}
            icon={skill.icon}
            proficiency={skill.proficiency}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      {/* Background Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-1/4 h-1/4 bg-orange-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-1/4 h-1/4 bg-emerald-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and tools I work
            with daily.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SkillCategory
            title="Frontend"
            icon={Code2}
            skills={skills.frontend}
            delay={0}
          />
          <SkillCategory
            title="Backend"
            icon={Database}
            skills={skills.backend}
            delay={0.1}
          />
          <SkillCategory
            title="AI & Cloud"
            icon={Cloud}
            skills={skills.aiCloud}
            delay={0.2}
          />
          <SkillCategory
            title="Tools"
            icon={Wrench}
            skills={skills.tools}
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
}
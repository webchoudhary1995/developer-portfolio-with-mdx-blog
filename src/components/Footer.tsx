"use client";

import { motion } from "framer-motion";
import { ChevronUp, Heart, Activity } from "lucide-react";
import { personalInfo } from "@/lib/data";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <div className="flex items-center gap-2 text-slate-400 text-sm">
            <span>© {currentYear} {personalInfo.name}. All rights reserved.</span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:flex items-center gap-1">
              Built with <Heart size={14} className="text-red-500" /> using Next.js
            </span>
          </div>

          {/* Status Indicator */}
          <div className="flex items-center gap-2 px-4 py-2 rounded-full glass-card">
            <Activity size={14} className="text-emerald-400" />
            <span className="text-sm text-slate-400">All systems operational</span>
          </div>

          {/* Back to Top Button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 rounded-full glass-card text-slate-400 hover:text-white hover:border-emerald-500/30 transition-all group"
          >
            <ChevronUp
              size={16}
              className="group-hover:-translate-y-1 transition-transform"
            />
            Back to top
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
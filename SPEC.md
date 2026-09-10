# Developer Portfolio with MDX Blog - Specification

## 1. Project Overview

**Project Name:** DevPortfolio - Developer & Freelancer Portfolio with MDX Blog  
**Type:** Next.js 15 Web Application (App Router)  
**Core Functionality:** A production-ready portfolio website featuring a sleek developer dark theme with glassmorphic elements, neon accent glows, interactive animations, and a fully integrated MDX-powered blog system.  
**Target Users:** Developers, freelancers, and tech professionals seeking to showcase their work and share technical articles.

---

## 2. UI/UX Specification

### 2.1 Layout Structure

**Global Layout:**
- Floating glassmorphism header (fixed top)
- Main content area with smooth scroll behavior
- Footer with copyright and navigation

**Page Sections:**
1. Home Page: Hero → Experience → Projects → Skills → Contact
2. Blog Page: Blog listing with category filters
3. Blog Post Page: MDX content with TOC sidebar

**Responsive Breakpoints:**
- Mobile: < 640px (single column, hamburger menu)
- Tablet: 640px - 1024px (2-column grids)
- Desktop: > 1024px (full layout, 3-4 column grids)

### 2.2 Visual Design

**Color Palette:**
- Base Background: `slate-950` (#020617)
- Card Background: `slate-900/80` with backdrop blur
- Primary Accent: `emerald-500` (#10b981)
- Secondary Accent: `cyan-400` (#22d3ee)
- Tertiary Accent: `coral-orange` `orange-500` (#f97316)
- Text Primary: `slate-50` (#f8fafc)
- Text Secondary: `slate-400` (#94a3b8)
- Border Color: `slate-800` (#1e293b)
- Glow Effects: `emerald-500/20`, `cyan-500/20`, `orange-500/20`

**Typography:**
- Headings: "Outfit" (Google Fonts) - weights 600, 700
- Body: "DM Sans" (Google Fonts) - weights 400, 500
- Monospace/Code: "JetBrains Mono" (Google Fonts) - weight 400

**Font Sizes:**
- H1: 4rem (64px) / responsive 2.5rem
- H2: 2.5rem (40px) / responsive 1.75rem
- H3: 1.5rem (24px)
- Body: 1rem (16px)
- Small: 0.875rem (14px)

**Spacing System:**
- Section padding: 6rem (96px) vertical
- Container max-width: 1280px
- Card padding: 1.5rem (24px)
- Element gap: 1rem (16px)

**Visual Effects:**
- Glassmorphism: `backdrop-blur-lg bg-slate-950/80`
- Neon glow borders: `border-emerald-500/20`, `border-cyan-500/20`
- Hover lift: `hover:-translate-y-1`
- Gradient text: `bg-gradient-to-r from-emerald-500 via-cyan-400 to-orange-500`
- Card shadows: `shadow-lg shadow-emerald-500/10`

### 2.3 Components

**Navbar:**
- Fixed position, glassmorphism background
- Logo with monospace styling
- Navigation links with hover underline animation
- "Hire Me" CTA with glowing aura effect
- Mobile hamburger drawer with slide animation

**Hero Section:**
- Typewriter effect cycling through roles
- Bio badge with pulse animation
- Social icons with tooltips and hover effects
- CTA buttons with gradient borders

**Experience Timeline:**
- Vertical timeline with glowing nodes
- Scroll-triggered animations (Framer Motion)
- Cards with company info, duration, bullets, tech tags

**Project Showcase:**
- Filter buttons with active state
- Grid of project cards
- Hover overlay with links
- Tech stack badges

**Skills Grid:**
- Categorized cards (Frontend, Backend, AI/Cloud, Tools)
- Icon badges with proficiency indicators

**Blog Components:**
- Preview cards with image, title, excerpt, reading time, date, category
- Full listing with search/filter
- MDX renderer with syntax highlighting
- TOC sidebar for articles

**Contact Form:**
- Floating label inputs
- Submit button with loading/success states
- Direct contact info cards

**Footer:**
- Copyright text
- Status indicator
- Back-to-top button

---

## 3. Functionality Specification

### 3.1 Core Features

1. **Typewriter Animation**
   - Cycle through: "Full Stack Developer", "AI Integration Engineer", "Open Source Contributor"
   - Type and delete animations
   - 2 second pause between words

2. **Interactive Project Filtering**
   - Categories: All, Next.js, AI/ML, React Native, Full Stack
   - Smooth transition animations
   - URL query parameter sync

3. **MDX Blog System**
   - Blog posts stored as .mdx files in content/blog
   - Frontmatter: title, excerpt, date, readingTime, category, image
   - Syntax highlighting with rehype-pretty-code
   - Table of contents generation
   - Category filtering

4. **Contact Form**
   - Client-side validation
   - Simulated form submission (console log)
   - Loading and success states

5. **Smooth Scroll Navigation**
   - Anchor links with smooth scroll
   - Active section highlighting in nav

### 3.2 User Interactions

- Hover effects on all interactive elements
- Scroll-triggered animations
- Mobile menu toggle
- Filter button clicks
- Form input interactions
- Button click feedback

### 3.3 Data Handling

- Static blog posts from filesystem
- No database required
- Form data handled client-side

---

## 4. Technical Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS 3.4+
- **Animations:** Framer Motion 11+
- **Icons:** Lucide React
- **MDX:** next-mdx-remote / @next/mdx
- **Syntax Highlighting:** rehype-pretty-code
- **Fonts:** Google Fonts (Outfit, DM Sans, JetBrains Mono)

---

## 5. File Structure

```
f:\developer-portfolio-with-mdx-blog
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx (Home)
│   │   ├── blog/
│   │   │   ├── page.tsx (Blog listing)
│   │   │   └── [slug]/
│   │   │       └── page.tsx (Blog post)
│   │   └── globals.css
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   ├── BlogPreview.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   └── ui/
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       ├── Badge.tsx
│   │       ├── Input.tsx
│   │       └── SocialIcon.tsx
│   ├── lib/
│   │   ├── blog.ts (MDX utilities)
│   │   └── data.ts (Static data)
│   └── content/
│       └── blog/
│           ├── getting-started-with-nextjs-15.mdx
│           ├── building-ai-applications.mdx
│           └── modern-css-techniques.mdx
├── tailwind.config.ts
├── next.config.mjs
├── package.json
├── tsconfig.json
└── SPEC.md
```

---

## 6. Acceptance Criteria

1. ✅ All pages load without errors
2. ✅ Responsive design works on mobile, tablet, desktop
3. ✅ Typewriter animation cycles smoothly
4. ✅ Project filtering works correctly
5. ✅ Blog posts render with MDX content
6. ✅ All hover/interaction animations work
7. ✅ No TypeScript errors
8. ✅ All links and buttons are functional
9. ✅ Contact form shows loading/success states
10. ✅ Footer back-to-top scrolls smoothly
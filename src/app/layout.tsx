import type { Metadata } from "next";
import { Outfit, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "DevPortfolio | Full Stack Developer & AI Engineer",
  description: "Portfolio of a Full Stack Developer, AI Integration Engineer, and Open Source Contributor. View projects, experience, and blog articles.",
  keywords: ["portfolio", "developer", "full stack", "AI", "Next.js", "React"],
  authors: [{ name: "Developer Name" }],
  openGraph: {
    title: "DevPortfolio | Full Stack Developer & AI Engineer",
    description: "Portfolio of a Full Stack Developer, AI Integration Engineer, and Open Source Contributor.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.variable} ${dmSans.variable} ${jetbrainsMono.variable} font-sans bg-slate-950 text-slate-50 antialiased`}
      >
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
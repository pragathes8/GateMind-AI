import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "GateMind AI | AI-Powered GATE Preparation Platform",
  description:
    "Learn Smarter. Revise Faster. Crack GATE with AI. Personalized notes, 24/7 AI tutoring, adaptive quizzes, spaced repetition flashcards, and progress tracking.",
  keywords: [
    "GATE preparation",
    "AI tutor",
    "Smart Notes",
    "Quiz Generator",
    "Flashcards",
    "GATE computer science",
    "GateMind AI",
  ],
  openGraph: {
    title: "GateMind AI - Crack GATE with AI",
    description: "The premium AI-driven study platform designed specifically for GATE aspirants.",
    type: "website",
  },
};

export default function Home() {
  return (
    <div className="main-wrapper">
      {/* Decorative Glow Backdrops and Grid Overlays */}
      <div className="glow-backdrop-1"></div>
      <div className="glow-backdrop-2"></div>
      <div className="grid-overlay"></div>

      {/* Navigation Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main style={{ position: "relative", zIndex: 10 }}>
        <Hero />
        <Features />
        <CTA />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

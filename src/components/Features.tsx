"use client";

import React from "react";
import FeatureCard from "./FeatureCard";

interface FeatureItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function Features() {
  const features: FeatureItem[] = [
    {
      id: "ai-tutor",
      title: "AI Tutor",
      description: "Provides a 24/7 personal guide trained in engineering disciplines to answer tricky technical questions and resolve conceptual blockers.",
      icon: (
        <svg
          className="card-icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="11" width="18" height="10" rx="2" />
          <circle cx="12" cy="5" r="2" />
          <path d="M12 7v4" />
          <line x1="8" y1="16" x2="8.01" y2="16" />
          <line x1="16" y1="16" x2="16.01" y2="16" />
        </svg>
      ),
    },
    {
      id: "smart-planner",
      title: "Smart Planner",
      description: "Generates custom preparation timelines, pacing schedules, and revision trackers tailored to your GATE paper disciplines.",
      icon: (
        <svg
          className="card-icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
      ),
    },
    {
      id: "notes",
      title: "Notes",
      description: "Generates semantic, structured study material from complex lectures, textbooks, and engineering reference guides automatically.",
      icon: (
        <svg
          className="card-icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
          <path d="M6 6h10" />
          <path d="M6 10h10" />
          <path d="M6 14h6" />
        </svg>
      ),
    },
    {
      id: "mock-tests",
      title: "Mock Tests",
      description: "Instantly compile mock exams, PYQs, and topic-wise practice modules with adaptive difficulty matching your skill profile.",
      icon: (
        <svg
          className="card-icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
      ),
    },
    {
      id: "analytics",
      title: "Analytics",
      description: "Visualizes subject proficiency and accuracy over time, helping identify hidden weaknesses before the test day.",
      icon: (
        <svg
          className="card-icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      ),
    },
    {
      id: "revision",
      title: "Revision",
      description: "Uses spaced repetition algorithms to optimize retention of formula sheets, standard constants, and engineering laws.",
      icon: (
        <svg
          className="card-icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M21 7.5H3" />
          <path d="M7.5 21V3" />
        </svg>
      ),
    },
    {
      id: "gate-predictor",
      title: "GATE Predictor",
      description: "Analyzes mock score patterns and historical data to predict your GATE rank, percentile, and PSU/IIT cutoff matchings.",
      icon: (
        <svg
          className="card-icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      ),
    },
    {
      id: "daily-challenges",
      title: "Daily Challenges",
      description: "Tackle high-yield, curated daily problems from core engineering subjects to maintain your study streak and sharpness.",
      icon: (
        <svg
          className="card-icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
          <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
          <path d="M4 22h16" />
          <path d="M10 14.66V17c0 .55-.45 1-1 1H4v2h16v-2h-5c-.55 0-1-.45-1-1v-2.34" />
          <path d="M12 2a15.3 15.3 0 0 1 4 7H8a15.3 15.3 0 0 1 4-7z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="features-section" id="features">
      {/* Background radial accent specifically under features */}
      <div
        style={{
          position: "absolute",
          top: "30%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "800px",
          height: "400px",
          background: "radial-gradient(circle, rgba(99, 102, 241, 0.04) 0%, transparent 80%)",
          filter: "blur(60px)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      ></div>

      <div className="container">
        {/* Features Header */}
        <div className="section-header animate-slide-up">
          <span className="section-badge">GATE PREPARATION REDEFINED</span>
          <h2 className="section-title">Everything you need to crack GATE</h2>
          <p className="section-subtitle">
            Skip the tedious manual tracking. Master your topics efficiently with our set of automated, smart study tools.
          </p>
        </div>

        {/* Features Grid */}
        <div className="features-grid">
          {features.map((feature, idx) => (
            <FeatureCard
              key={feature.id}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              animationDelay={`${(idx + 1) * 100}ms`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import DashboardPreview from "./DashboardPreview";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Text & CTA */}
          <div className="hero-content animate-slide-up">
            <div className="badge">
              <span className="badge-dot"></span>
              AI Powered GATE Preparation Platform
            </div>

            <div className="hero-title-container">
              <div className="title-glow-overlay"></div>
              <h1 className="hero-title">GateMind AI</h1>
            </div>

            <p className="hero-subtitle">
              Learn Smarter. Revise Faster. Crack GATE with AI. Personalize your preparation, generate instant assessments, and master complex engineering concepts.
            </p>

            <div className="hero-actions">
              <a href="#get-started" className="btn btn-primary">
                Get Started
              </a>
              <a href="#features" className="btn btn-secondary">
                Explore Features
              </a>
            </div>
          </div>

          {/* Right Column: Visual Dashboard Mockup */}
          <DashboardPreview className="animate-fade-in delay-200" />
        </div>
      </div>
    </section>
  );
}

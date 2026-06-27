import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About Us | GateMind AI",
  description: "Learn more about GateMind AI's mission to democratize GATE coaching through cutting-edge artificial intelligence.",
};

export default function AboutPage() {
  const faqs = [
    {
      q: "What is GateMind AI?",
      a: "GateMind AI is an AI-powered preparation platform engineered specifically for GATE (Graduate Aptitude Test in Engineering) candidates. It personalizes learning schedules, answers technical queries, maps weaknesses, and automates study plans.",
    },
    {
      q: "Which engineering streams do you support?",
      a: "We currently support Computer Science & IT (CS), Electronics & Communication (EC), Electrical Engineering (EE), Mechanical Engineering (ME), and Civil Engineering (CE).",
    },
    {
      q: "How does the AI Tutor work?",
      a: "The AI Tutor is built on state-of-the-art LLMs fine-tuned on core engineering reference books, standard syllabi, and years of previous GATE questions. It can solve equations, outline concepts step-by-step, and grade answers.",
    },
    {
      q: "Is it free to start?",
      a: "Yes! You can sign up for the Starter tier and access basic notes, 15 daily AI Tutor query credits, and simple planners completely free.",
    },
  ];

  return (
    <div className="main-wrapper">
      {/* Glow overlays */}
      <div className="glow-backdrop-1"></div>
      <div className="glow-backdrop-2"></div>
      <div className="grid-overlay"></div>

      <Navbar />

      <main className="container" style={{ paddingTop: "140px", paddingBottom: "80px", position: "relative", zIndex: 10 }}>
        {/* Page Header */}
        <div className="section-header animate-slide-up" style={{ marginBottom: "5rem" }}>
          <span className="section-badge">Our Mission</span>
          <h1 className="section-title" style={{ fontSize: "3.5rem" }}>Democratizing GATE Coaching</h1>
          <p className="section-subtitle" style={{ maxWidth: "680px", margin: "0 auto" }}>
            We believe that every engineering aspirant deserves top-tier, personalized preparation tools. GateMind AI merges expert pedagogy with artificial intelligence.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="features-grid" style={{ marginBottom: "7rem" }}>
          <div className="feature-card animate-slide-up" style={{ animationDelay: "100ms" }}>
            <div className="icon-wrapper">🚀</div>
            <h3 className="card-title">AI-First Learning</h3>
            <p className="card-description">
              Adaptive pacing modules that automatically modify question difficulty based on accuracy metrics.
            </p>
          </div>
          <div className="feature-card animate-slide-up" style={{ animationDelay: "200ms" }}>
            <div className="icon-wrapper">📚</div>
            <h3 className="card-title">Rigorous Pedagogy</h3>
            <p className="card-description">
              Syllabus coverage mapped precisely to IIT Gate guidelines, ensuring zero time is wasted on out-of-syllabus topics.
            </p>
          </div>
          <div className="feature-card animate-slide-up" style={{ animationDelay: "300ms" }}>
            <div className="icon-wrapper">📈</div>
            <h3 className="card-title">Empirical Analytics</h3>
            <p className="card-description">
              Deep-dive metrics showing your subject proficiency, helping you optimize and allocate study hours effectively.
            </p>
          </div>
        </div>

        {/* FAQ Section */}
        <div style={{ maxWidth: "720px", margin: "0 auto 4rem auto" }} className="animate-slide-up">
          <div className="section-header" style={{ marginBottom: "3rem" }}>
            <span className="section-badge">Got Questions?</span>
            <h2 className="section-title" style={{ fontSize: "2.5rem" }}>Frequently Asked Questions</h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {faqs.map((faq, index) => (
              <div 
                key={index}
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border-glass)",
                  borderRadius: "16px",
                  padding: "1.5rem 2rem",
                  backdropFilter: "blur(8px)"
                }}
              >
                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.5rem" }}>
                  {faq.q}
                </h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.925rem", lineHeight: "1.6" }}>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

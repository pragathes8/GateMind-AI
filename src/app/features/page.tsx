import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Features from "@/components/home/Features";
import CTA from "@/components/home/CTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Features | GateMind AI",
  description: "Explore GateMind AI's features, including AI Tutor, Smart Notes, Flashcard Spaced Repetition, and Study Timelines.",
};

export default function FeaturesPage() {
  const deepFeatures = [
    {
      title: "Adaptive Grading Engine",
      desc: "Our model reads your subjective answers and mathematical derivations, providing step-by-step correction, identifying exactly which line the calculation error occurred.",
      accent: "var(--color-indigo)"
    },
    {
      title: "Engineering Concept Maps",
      desc: "Knowledge graphs mapped out for each GATE branch. Understand how Operating Systems concepts link with Computer Architecture, and study dependency topics dynamically.",
      accent: "var(--color-teal)"
    },
    {
      title: "Active Recall Spaced Repetition",
      desc: "Our card scheduler predicts exactly when a formula or standard constant is fading from memory, sending review sessions at perfect cognitive intervals.",
      accent: "var(--color-violet)"
    }
  ];

  return (
    <div className="main-wrapper">
      {/* Glow overlays */}
      <div className="glow-backdrop-1"></div>
      <div className="glow-backdrop-2"></div>
      <div className="grid-overlay"></div>

      <Navbar />

      <main style={{ paddingTop: "80px", position: "relative", zIndex: 10 }}>
        {/* Render the standard Features grid */}
        <Features />

        {/* Deep Dive Section */}
        <section className="container" style={{ paddingBottom: "80px" }}>
          <div className="section-header animate-slide-up" style={{ marginBottom: "5rem" }}>
            <span className="section-badge">Under The Hood</span>
            <h2 className="section-title" style={{ fontSize: "2.5rem" }}>How the AI powers your prep</h2>
            <p className="section-subtitle">
              Traditional platforms rely on static question banks. GateMind AI builds a mathematical model of your knowledge state.
            </p>
          </div>

          {/* Detailed Features Columns */}
          <div 
            style={{ 
              display: "grid", 
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", 
              gap: "2.5rem" 
            }}
            className="animate-slide-up delay-200"
          >
            {deepFeatures.map((item, index) => (
              <div 
                key={index}
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border-glass)",
                  borderRadius: "20px",
                  padding: "2.5rem 2rem",
                  position: "relative",
                  overflow: "hidden"
                }}
              >
                <div style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "4px",
                  height: "100%",
                  background: item.accent
                }}></div>
                <h3 style={{ fontSize: "1.3rem", fontWeight: 700, color: "#fff", marginBottom: "0.85rem" }}>
                  {item.title}
                </h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: "1.6" }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA section */}
        <CTA />
      </main>

      <Footer />
    </div>
  );
}

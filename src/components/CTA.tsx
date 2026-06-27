"use client";

export default function CTA() {
  return (
    <section className="container" style={{ margin: "6rem auto", position: "relative", zIndex: 10 }} id="get-started">
      <div 
        className="animate-slide-up"
        style={{
          background: "linear-gradient(135deg, rgba(15, 23, 42, 0.8) 0%, rgba(30, 41, 59, 0.4) 100%)",
          border: "1px solid var(--border-glass)",
          borderRadius: "24px",
          padding: "5rem 2rem",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 40px rgba(99, 102, 241, 0.05)"
        }}
      >
        {/* Ambient background glow inside the CTA box */}
        <div style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "350px",
          height: "350px",
          background: "radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)",
          filter: "blur(50px)",
          pointerEvents: "none",
          zIndex: 0
        }}></div>

        <div style={{ position: "relative", zIndex: 2, maxWidth: "640px", margin: "0 auto" }}>
          <span style={{ 
            color: "var(--color-teal)", 
            fontWeight: 700, 
            fontSize: "0.85rem", 
            letterSpacing: "0.1em", 
            textTransform: "uppercase",
            marginBottom: "1rem",
            display: "inline-block"
          }}>
            Accelerate Your Learning
          </span>
          <h2 style={{ 
            fontSize: "2.75rem", 
            fontWeight: 800, 
            lineHeight: "1.2", 
            marginBottom: "1.5rem",
            background: "linear-gradient(to right, #ffffff, #e2e8f0)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            letterSpacing: "-0.02em"
          }}>
            Ready to Supercharge Your GATE Prep?
          </h2>
          <p style={{ 
            color: "var(--text-secondary)", 
            fontSize: "1.1rem", 
            lineHeight: "1.6", 
            marginBottom: "2.5rem" 
          }}>
            Join thousands of engineering aspirants who are using AI to target their weak topics, build retention, and master the syllabus. Sign up today and get started for free.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "1.25rem", flexWrap: "wrap" }}>
            <a href="#" className="btn btn-primary" style={{ padding: "1rem 2.5rem" }}>
              Get Started for Free
            </a>
            <a href="#features" className="btn btn-secondary" style={{ padding: "1rem 2.5rem" }}>
              Explore Platform Features
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

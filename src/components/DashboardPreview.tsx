"use client";

interface DashboardPreviewProps {
  className?: string;
}

export default function DashboardPreview({ className = "" }: DashboardPreviewProps) {
  return (
    <div className={`hero-visual ${className}`}>
      {/* Ambient Background Glow inside the dashboard visual */}
      <div
        style={{
          position: "absolute",
          width: "350px",
          height: "350px",
          background: "radial-gradient(circle, rgba(139, 92, 246, 0.2) 0%, transparent 70%)",
          filter: "blur(40px)",
          zIndex: 1,
        }}
      ></div>

      {/* Dashboard Mockup Card */}
      <div className="mockup-container animate-float">
        {/* Decorative Mockup Header */}
        <div className="mockup-header">
          <div className="mockup-dots">
            <div className="mockup-dot"></div>
            <div className="mockup-dot"></div>
            <div className="mockup-dot"></div>
          </div>
          <div className="mockup-title">GATEMIND_AI_CORE_V1</div>
        </div>

        {/* Mockup Body Content */}
        <div className="mockup-content">
          {/* AI Tutor Chat bubble */}
          <div className="chat-bubble">
            <div className="chat-avatar ai">🤖</div>
            <div className="chat-text ai">
              <strong>GateMind AI Tutor</strong>
              <p style={{ marginTop: "4px" }}>
                I've analyzed your mock test on <em>Data Structures & Algorithms</em>. You are strong in <strong>Trees & Graphs</strong>, but need 15% more practice in <strong>Dynamic Programming</strong>.
              </p>
            </div>
          </div>

          {/* Student Query */}
          <div className="chat-bubble" style={{ justifyContent: "flex-end" }}>
            <div className="chat-text" style={{ borderRadius: "14px 0px 14px 14px" }}>
              How can I improve my DP scores?
            </div>
            <div className="chat-avatar" style={{ order: 1 }}>
              👨‍🎓
            </div>
          </div>

          {/* Progress Tracking Widget */}
          <div className="chart-card">
            <div className="chart-header">
              <span className="chart-label">Overall Readiness Score</span>
              <span className="chart-value">78%</span>
            </div>
            <div className="progress-bar-container">
              <div className="progress-bar-fill"></div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "6px",
              }}
            >
              <span className="chart-sub">Target: GATE AIR &lt; 100</span>
              <span className="chart-sub" style={{ color: "var(--color-teal)" }}>
                +4.5% this week
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Badges */}
      <div className="floating-accent-1 animate-float-reverse">
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
        Smart Analytics Active
      </div>

      <div className="floating-accent-2 animate-float" style={{ animationDelay: "1s" }}>
        🚀 AIR 1 Strategy Ready
      </div>
    </div>
  );
}

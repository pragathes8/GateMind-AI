export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Col */}
          <div className="footer-info">
            <a href="#" className="logo" style={{ background: "none", WebkitTextFillColor: "initial", color: "var(--text-primary)" }}>
              <div className="logo-icon" style={{ width: "32px", height: "32px" }}>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
              <span style={{ fontWeight: 700, fontSize: "1.15rem", fontFamily: "var(--font-heading)" }}>
                GateMind AI
              </span>
            </a>
            <p className="footer-desc">
              Next-generation preparation platform empowering GATE aspirants with custom learning tools.
            </p>
            <div className="footer-socials">
              <a href="#" className="social-link" aria-label="Twitter">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="#" className="social-link" aria-label="GitHub">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.479C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
              </a>
              <a href="#" className="social-link" aria-label="LinkedIn">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links Col 1 */}
          <div className="footer-col">
            <span className="footer-heading">Features</span>
            <ul className="footer-links">
              <li>
                <a href="#features" className="footer-link">
                  Smart Notes
                </a>
              </li>
              <li>
                <a href="#features" className="footer-link">
                  AI Tutor
                </a>
              </li>
              <li>
                <a href="#features" className="footer-link">
                  Practice Quizzes
                </a>
              </li>
              <li>
                <a href="#features" className="footer-link">
                  Flashcards
                </a>
              </li>
            </ul>
          </div>

          {/* Links Col 2 */}
          <div className="footer-col">
            <span className="footer-heading">Resources</span>
            <ul className="footer-links">
              <li>
                <a href="#" className="footer-link">
                  Syllabus Guides
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  PYQ Archives
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Sample Papers
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Help Center
                </a>
              </li>
            </ul>
          </div>

          {/* Links Col 3 */}
          <div className="footer-col">
            <span className="footer-heading">Company</span>
            <ul className="footer-links">
              <li>
                <a href="#" className="footer-link">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Press
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} GateMind AI. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#" className="footer-link" style={{ fontSize: "0.825rem" }}>
              Privacy Policy
            </a>
            <a href="#" className="footer-link" style={{ fontSize: "0.825rem" }}>
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

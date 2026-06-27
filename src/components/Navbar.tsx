"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [prepToolsOpen, setPrepToolsOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setPrepToolsOpen(false);
    setProfileOpen(false);
  };

  const isActive = (path: string) => {
    return pathname === path ? "nav-link active" : "nav-link";
  };

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        {/* Logo */}
        <Link href="/" className="logo">
          <div className="logo-icon">
            <svg
              width="20"
              height="20"
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
          GateMind AI
        </Link>

        {/* Desktop Nav Links */}
        <ul className="nav-links desktop-nav">
          <li>
            <Link href="/dashboard" className={isActive("/dashboard")}>
              Dashboard
            </Link>
          </li>
          <li>
            <Link href="/ai-tutor" className={isActive("/ai-tutor")}>
              AI Tutor
            </Link>
          </li>
          <li>
            <Link href="/study-planner" className={isActive("/study-planner")}>
              Study Plan
            </Link>
          </li>
          <li>
            <Link href="/mock-tests" className={isActive("/mock-tests")}>
              Mock Tests
            </Link>
          </li>

          {/* Prep Tools Dropdown */}
          <li 
            className="relative"
            onMouseEnter={() => setPrepToolsOpen(true)}
            onMouseLeave={() => setPrepToolsOpen(false)}
          >
            <button 
              className={`nav-link flex items-center gap-1 bg-transparent border-none cursor-pointer focus:outline-none ${
                ["/notes", "/pyqs", "/flashcards", "/analytics"].includes(pathname || "") ? "active" : ""
              }`}
            >
              Prep Tools
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={`transition-transform duration-200 ${prepToolsOpen ? "rotate-180" : ""}`}>
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>

            {prepToolsOpen && (
              <div className="dropdown-menu">
                <Link href="/notes" className="dropdown-item">
                  📚 Notes
                </Link>
                <Link href="/pyqs" className="dropdown-item">
                  📝 PYQs
                </Link>
                <Link href="/flashcards" className="dropdown-item">
                  🧠 Flashcards
                </Link>
                <Link href="/analytics" className="dropdown-item">
                  📈 Analytics
                </Link>
              </div>
            )}
          </li>

          <li>
            <Link href="/pricing" className={isActive("/pricing")}>
              Pricing
            </Link>
          </li>
        </ul>

        {/* Auth CTAs & Profile */}
        <div className="desktop-nav" style={{ display: "flex", alignItems: "center", gap: "1.25rem" }}>
          {/* User Profile Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setProfileOpen(true)}
            onMouseLeave={() => setProfileOpen(false)}
          >
            <button 
              className="flex items-center gap-2 bg-slate-900 border border-slate-800 rounded-full pl-2.5 pr-3 py-1.5 cursor-pointer hover:border-slate-700 transition-all focus:outline-none"
            >
              <div className="w-6 h-6 rounded-full bg-indigo-600 flex items-center justify-center font-bold text-white text-[10px]">
                PS
              </div>
              <span className="text-xs font-semibold text-slate-300">Profile</span>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={`transition-transform duration-200 ${profileOpen ? "rotate-180" : ""}`}>
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>

            {profileOpen && (
              <div className="dropdown-menu" style={{ right: 0, left: "auto" }}>
                <Link href="/profile" className="dropdown-item">
                  👤 Settings
                </Link>
                <Link href="/admin-panel" className="dropdown-item">
                  🔧 Admin Panel
                </Link>
                <div style={{ height: "1px", background: "var(--border-glass)", margin: "0.25rem 0" }}></div>
                <Link href="/login" className="dropdown-item" style={{ color: "#EF4444" }}>
                  🚪 Sign Out
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="mobile-menu-toggle"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <span style={{ transform: isOpen ? "rotate(45deg) translate(5px, 5px)" : "none" }}></span>
          <span style={{ opacity: isOpen ? 0 : 1 }}></span>
          <span style={{ transform: isOpen ? "rotate(-45deg) translate(5px, -5px)" : "none" }}></span>
        </button>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-nav ${isOpen ? "open" : ""}`}>
        <ul className="nav-links">
          <li>
            <Link href="/dashboard" className={isActive("/dashboard")} onClick={toggleMenu}>
              Dashboard
            </Link>
          </li>
          <li>
            <Link href="/ai-tutor" className={isActive("/ai-tutor")} onClick={toggleMenu}>
              AI Tutor
            </Link>
          </li>
          <li>
            <Link href="/study-planner" className={isActive("/study-planner")} onClick={toggleMenu}>
              Study Plan
            </Link>
          </li>
          <li>
            <Link href="/mock-tests" className={isActive("/mock-tests")} onClick={toggleMenu}>
              Mock Tests
            </Link>
          </li>
          <li>
            <Link href="/notes" className={isActive("/notes")} onClick={toggleMenu}>
              Notes
            </Link>
          </li>
          <li>
            <Link href="/pyqs" className={isActive("/pyqs")} onClick={toggleMenu}>
              PYQs
            </Link>
          </li>
          <li>
            <Link href="/flashcards" className={isActive("/flashcards")} onClick={toggleMenu}>
              Flashcards
            </Link>
          </li>
          <li>
            <Link href="/analytics" className={isActive("/analytics")} onClick={toggleMenu}>
              Analytics
            </Link>
          </li>
          <li>
            <Link href="/pricing" className={isActive("/pricing")} onClick={toggleMenu}>
              Pricing
            </Link>
          </li>
          <li>
            <Link href="/profile" className={isActive("/profile")} onClick={toggleMenu}>
              Profile Settings
            </Link>
          </li>
          <li>
            <Link href="/admin-panel" className={isActive("/admin-panel")} onClick={toggleMenu}>
              Admin Panel
            </Link>
          </li>
          <li>
            <Link href="/login" className={isActive("/login")} onClick={toggleMenu}>
              Sign Out
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

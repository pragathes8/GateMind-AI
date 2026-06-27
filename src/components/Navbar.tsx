"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
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
            <Link href="/features" className={isActive("/features")}>
              Features
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
            <Link href="/about" className={isActive("/about")}>
              About
            </Link>
          </li>
          <li>
            <Link href="/dashboard" className={isActive("/dashboard")}>
              Dashboard
            </Link>
          </li>
        </ul>

        {/* Auth CTAs */}
        <div className="desktop-nav" style={{ display: "flex", alignItems: "center", gap: "1.25rem" }}>
          <Link
            href="/login"
            style={{
              color: "var(--text-secondary)",
              textDecoration: "none",
              fontSize: "0.9rem",
              fontWeight: 600,
              transition: "var(--transition-fast)"
            }}
            className="hover-bright"
          >
            Sign In
          </Link>
          <Link href="/signup" className="nav-cta">
            Get Started
          </Link>
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
            <Link href="/features" className={isActive("/features")} onClick={toggleMenu}>
              Features
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
            <Link href="/about" className={isActive("/about")} onClick={toggleMenu}>
              About
            </Link>
          </li>
          <li>
            <Link href="/dashboard" className={isActive("/dashboard")} onClick={toggleMenu}>
              Dashboard
            </Link>
          </li>
          <li>
            <Link href="/login" className={isActive("/login")} onClick={toggleMenu}>
              Sign In
            </Link>
          </li>
        </ul>
        <Link href="/signup" className="nav-cta" onClick={toggleMenu} style={{ width: "100%", textAlign: "center", marginTop: "1rem" }}>
          Get Started
        </Link>
      </div>
    </nav>
  );
}

"use client";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        {/* Logo */}
        <a href="#" className="logo">
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
        </a>

        {/* Desktop Nav Links */}
        <ul className="nav-links desktop-nav">
          <li>
            <a href="#features" className="nav-link">
              Features
            </a>
          </li>
          <li>
            <a href="#tutor" className="nav-link">
              AI Tutor
            </a>
          </li>
          <li>
            <a href="#planner" className="nav-link">
              Study Plan
            </a>
          </li>
          <li>
            <a href="#about" className="nav-link">
              About
            </a>
          </li>
        </ul>

        {/* CTA Button */}
        <a href="#get-started" className="nav-cta">
          Get Started
        </a>

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
            <a href="#features" className="nav-link" onClick={toggleMenu}>
              Features
            </a>
          </li>
          <li>
            <a href="#tutor" className="nav-link" onClick={toggleMenu}>
              AI Tutor
            </a>
          </li>
          <li>
            <a href="#planner" className="nav-link" onClick={toggleMenu}>
              Study Plan
            </a>
          </li>
          <li>
            <a href="#about" className="nav-link" onClick={toggleMenu}>
              About
            </a>
          </li>
        </ul>
        <a href="#get-started" className="nav-cta" onClick={toggleMenu}>
          Get Started
        </a>
      </div>
    </nav>
  );
}

"use client";

import React from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  animationDelay?: string;
}

export default function FeatureCard({
  title,
  description,
  icon,
  animationDelay = "0ms",
}: FeatureCardProps) {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <div
      className="feature-card animate-slide-up"
      style={{ animationDelay }}
      onMouseMove={handleMouseMove}
    >
      <div className="icon-wrapper">{icon}</div>
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
    </div>
  );
}

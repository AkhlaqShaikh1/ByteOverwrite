"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg"
    >
      {/* Spotlight effects */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="absolute w-[600px] h-[600px] bg-purple-dark rounded-full opacity-20 blur-3xl animate-spotlight"></div>
        <div className="absolute w-[400px] h-[400px] bg-blue-600 rounded-full opacity-10 blur-3xl animate-spotlight" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className={`transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            Securing the Digital{" "}
            <span className="gradient-text">Frontier</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto">
            Elite cybersecurity solutions, penetration testing, and security training
            to protect your digital assets
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="gradient-btn px-8 py-4 rounded-full text-lg font-semibold text-white"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="glass px-8 py-4 rounded-full text-lg font-semibold text-white hover:bg-white/10 transition-all"
            >
              Let's Talk
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <svg
              className="w-6 h-6 text-gray-400"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

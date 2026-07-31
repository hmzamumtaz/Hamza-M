"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import ProjectThumbnail from "./ProjectThumbnail";

const featured = [
  {
    slug: "trust-drive",
    title: "Trust Drive",
    color: "#1a1a2e",
    category: "UX Research · UI Design",
  },
  {
    slug: "hr-management-saas-dashboard",
    title: "HR Management SaaS Dashboard",
    color: "#2d3436",
    category: "Dashboard · Data Viz",
  },
  {
    slug: "mobile-checkout-redesign",
    title: "Mobile Checkout Redesign",
    color: "#6c5ce7",
    category: "UX Research · Mobile",
  },
  {
    slug: "camp-quest",
    title: "Camp Quest",
    color: "#e17055",
    category: "UX Research · Accessibility",
  },
];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((i) => (i + 1) % featured.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-md bg-[#0d7377]/10 px-3 py-1 text-xs font-medium text-[#0d7377] mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0d7377]" />
              UX/UI Developer & Designer at Databiqs
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-gray-900 mb-5">
              Hi, I&apos;m
              <br />
              <span className="text-[#0d7377] whitespace-nowrap">Hamza M.</span>
            </h1>

            <p className="text-lg text-gray-500 leading-relaxed mb-8 max-w-lg">
              AI-driven UX/UI Developer & Designer at Databiqs. I craft
              intuitive digital experiences through research, prototyping,
              and AI-assisted frontend development.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#work"
                className="inline-flex items-center gap-2 rounded-md bg-[#0d7377] px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#0b5e62]"
              >
                View My Work
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-md border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 transition-all duration-200 hover:border-gray-400 hover:bg-gray-50"
              >
                Get In Touch
              </a>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="grid grid-cols-2 gap-3">
              {featured.map((project, i) => (
                <Link
                  key={project.slug}
                  href={`/work/${project.slug}`}
                  className={`group relative overflow-hidden rounded-xl bg-gray-100 border transition-all duration-500 ${
                    i === activeIndex
                      ? "border-[#0d7377] shadow-lg shadow-[#0d7377]/10 scale-[1.02]"
                      : "border-gray-200 opacity-60 hover:opacity-90"
                  }`}
                  style={{ aspectRatio: i === activeIndex ? "5/4" : "4/3" }}
                >
                  <div className="absolute inset-0">
                    <ProjectThumbnail
                      title={project.title}
                      color={project.color}
                      category={
                        project.slug === "mobile-checkout-redesign" || project.slug === "camp-quest"
                          ? "mobile"
                          : "web"
                      }
                    />
                  </div>
                  <div className={`absolute inset-0 transition-opacity duration-300 ${
                    i === activeIndex
                      ? "bg-gradient-to-t from-[#0d7377]/90 via-[#0d7377]/20 to-transparent opacity-100"
                      : "bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100"
                  }`} />
                  <div className={`absolute bottom-0 left-0 right-0 p-3 transition-all duration-300 ${
                    i === activeIndex ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
                  }`}>
                    <p className="text-white text-xs font-semibold leading-tight">{project.title}</p>
                    <p className="text-white/70 text-[10px] mt-0.5">{project.category}</p>
                  </div>
                </Link>
              ))}
            </div>

            <div className="flex items-center justify-center gap-1.5 mt-4">
              {featured.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === activeIndex ? "w-6 bg-[#0d7377]" : "w-1.5 bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="grid grid-cols-3 gap-4">
            {[
              { value: "12+", label: "Projects Delivered", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
              { value: "3+", label: "Years Experience", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
              { value: "UX Designer @ Databiqs", label: "Current Role", icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
            ].map((s) => (
              <div key={s.label} className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#0d7377]/10">
                  <svg className="h-5 w-5 text-[#0d7377]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d={s.icon} />
                  </svg>
                </div>
                <div className="min-w-0">
                  <p className="text-xl font-bold text-gray-900 leading-none mb-0.5">{s.value}</p>
                  <p className="text-[11px] text-gray-500 tracking-wide truncate">{s.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { getProjectsByCategory } from "@/data/projects";

const categories = [
  { label: "All Work", value: "all" },
  { label: "Web Design", value: "web" },
  { label: "Mobile", value: "mobile" },
  { label: "Case Studies", value: "case-study" },
];

export default function Work() {
  const [activeCategory, setActiveCategory] = useState("all");
  const filtered = getProjectsByCategory(activeCategory);
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);

  return (
    <section id="work" className="py-20 md:py-28 bg-[#fafafa]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
          <div>
            <div className="text-xs uppercase tracking-widest text-[#0d7377] font-medium mb-2">
              Selected Work
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Featured Projects
            </h2>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`px-3.5 py-1.5 rounded-md text-xs font-medium transition-all duration-200 ${
                  activeCategory === cat.value
                    ? "bg-[#0d7377] text-white shadow-sm"
                    : "bg-white text-gray-500 border border-gray-200 hover:border-gray-300 hover:text-gray-700"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-400 text-sm">No projects in this category yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project, i) => (
              <Link
                key={project.slug}
                href={`/work/${project.slug}`}
                className="group block"
                onMouseEnter={() => setHoveredSlug(project.slug)}
                onMouseLeave={() => setHoveredSlug(null)}
              >
                <div className="relative overflow-hidden rounded-xl bg-gray-100 border border-gray-200 shadow-sm transition-all duration-300 group-hover:shadow-md group-hover:-translate-y-0.5">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={project.thumbnail}
                      alt={project.title}
                      unoptimized
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <div className="absolute top-3 left-3 flex gap-1.5">
                    <span className={`text-[10px] font-medium px-2 py-0.5 rounded-md shadow-sm backdrop-blur-sm ${
                      project.category === "case-study"
                        ? "bg-purple-500/90 text-white"
                        : project.category === "mobile"
                        ? "bg-[#0d7377]/90 text-white"
                        : "bg-gray-800/80 text-gray-100"
                    }`}>
                      {project.category === "case-study"
                        ? "Case Study"
                        : project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                    </span>
                    <span className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-white/90 text-gray-600 shadow-sm backdrop-blur-sm">
                      {project.year}
                    </span>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-4 pt-8 bg-gradient-to-t from-black/70 via-black/20 to-transparent translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="flex flex-wrap gap-1">
                      {project.services.slice(0, 2).map((service) => (
                        <span
                          key={service}
                          className="text-[10px] px-2 py-0.5 rounded bg-white/20 text-white/90"
                        >
                          {service}
                        </span>
                      ))}
                      {project.services.length > 2 && (
                        <span className="text-[10px] px-2 py-0.5 rounded bg-white/10 text-white/70">
                          +{project.services.length - 2}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="mt-3.5 px-0.5">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-gray-900 font-semibold text-base group-hover:text-[#0d7377] transition-colors leading-snug">
                      {project.title}
                    </h3>
                    <svg
                      className={`w-4 h-4 text-gray-400 shrink-0 transition-all duration-300 ${
                        hoveredSlug === project.slug ? "translate-x-0.5 -translate-y-0.5 text-[#0d7377]" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed mt-1 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-2.5">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] text-gray-400 bg-gray-100 px-2 py-0.5 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {activeCategory !== "all" && filtered.length > 0 && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setActiveCategory("all")}
              className="text-xs text-gray-400 hover:text-[#0d7377] transition-colors underline underline-offset-4"
            >
              View all projects
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

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

  return (
    <section id="work" className="py-20 md:py-28 bg-[#fafafa]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-xs uppercase tracking-widest text-[#0d7377] font-medium mb-2">
          Selected Work
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-10">
          Featured Projects
        </h2>

        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                activeCategory === cat.value
                  ? "bg-[#0d7377] text-white"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-gray-300"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((project) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              className="group block"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-gray-100 border border-gray-200">
                <Image
                  src={project.thumbnail}
                  alt={project.title}
                  unoptimized
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                  <h3 className="text-white font-bold mb-0.5">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-1">
                    {project.services.slice(0, 2).map((service) => (
                      <span
                        key={service}
                        className="text-[10px] px-2 py-0.5 rounded bg-white/20 text-white/90"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-3">
                <div className="flex items-center gap-2 mb-1">
                  <span className={`text-[10px] font-medium px-1.5 py-0.5 rounded ${
                    project.category === "case-study"
                      ? "bg-purple-100 text-purple-700"
                      : project.category === "mobile"
                      ? "bg-teal-100 text-teal-700"
                      : "bg-gray-100 text-gray-600"
                  }`}>
                    {project.category === "case-study"
                      ? "Case Study"
                      : project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                  </span>
                  <span className="text-xs text-gray-400">{project.year}</span>
                </div>
                <h3 className="text-gray-900 font-semibold text-base mb-1 group-hover:text-[#0d7377] transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
                  {project.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

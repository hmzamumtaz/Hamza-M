"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
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
    <section id="work" className="py-28 lg:py-36 bg-[#0a0a0e]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14"
        >
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-[#d4a853] font-medium">
              Selected Work
            </span>
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-[#f2f0ed] mt-2">
              Featured Projects
            </h2>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap gap-2 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeCategory === cat.value
                  ? "bg-[#d4a853] text-[#0a0a0e]"
                  : "bg-[#121218] text-[#8b8b96] border border-[#22222c] hover:border-[#d4a853]/30 hover:text-[#f2f0ed]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: i * 0.05, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <Link href={`/work/${project.slug}`} className="group block">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-[#121218] border border-[#22222c]">
                    <Image
                      src={project.thumbnail}
                      alt={project.title}
                      unoptimized
                      fill
                      className="object-cover transition-all duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0e] via-[#0a0a0e]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                      <h3 className="text-[#f2f0ed] text-lg font-bold mb-1">
                        {project.title}
                      </h3>
                      <div className="flex flex-wrap gap-1.5">
                        {project.services.slice(0, 2).map((service) => (
                          <span
                            key={service}
                            className="text-xs px-2 py-0.5 rounded-md bg-[#d4a853]/10 text-[#d4a853] border border-[#d4a853]/20"
                          >
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 px-0.5">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className={`text-xs font-medium px-2 py-0.5 rounded ${
                        project.category === "case-study"
                          ? "bg-[#8b7cf7]/10 text-[#8b7cf7] border border-[#8b7cf7]/20"
                          : project.category === "mobile"
                          ? "bg-[#d4a853]/10 text-[#d4a853] border border-[#d4a853]/20"
                          : "bg-[#8b8b96]/10 text-[#8b8b96] border border-[#8b8b96]/20"
                      }`}>
                        {project.category === "case-study"
                          ? "Case Study"
                          : project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                      </span>
                      <span className="text-xs text-[#5b5b66]">{project.year}</span>
                    </div>
                    <h3 className="text-[#f2f0ed] font-semibold text-base mb-1.5 group-hover:text-[#d4a853] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-[#5b5b66] text-sm leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

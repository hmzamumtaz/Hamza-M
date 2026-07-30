"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { getProjectsByCategory } from "@/data/projects";

const categories = [
  { label: "All Work", value: "all" },
  { label: "Web", value: "web" },
  { label: "Mobile", value: "mobile" },
  { label: "Case Studies", value: "case-study" },
];

export default function Work() {
  const [activeCategory, setActiveCategory] = useState("all");
  const filtered = getProjectsByCategory(activeCategory);

  return (
    <section id="work" className="bg-[#0a0a0a] py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-start gap-4 mb-16">
          <span className="uppercase tracking-widest text-sm text-gray-400">
            Selected Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold">Featured Projects</h2>
        </div>

        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat.value
                  ? "bg-gradient-to-r from-white to-gray-300 text-black"
                  : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <Link href={`/work/${project.slug}`} className="group block">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-white/5">
                    <Image
                      src={project.thumbnail}
                      alt={project.title}
                      unoptimized
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <h3 className="text-white text-xl font-bold mb-1">
                        {project.title}
                      </h3>
                      <p className="text-gray-300 text-sm mb-2">
                        {project.category === "case-study"
                          ? "Case Study"
                          : project.category.charAt(0).toUpperCase() +
                            project.category.slice(1)}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {project.services.slice(0, 3).map((service) => (
                          <span
                            key={service}
                            className="text-xs px-2 py-0.5 rounded-full bg-white/10 text-gray-300"
                          >
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 px-1">
                    <h3 className="text-white font-semibold text-lg mb-1 group-hover:text-white/90 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {project.services.slice(0, 3).map((service) => (
                        <span
                          key={service}
                          className="text-xs px-2 py-0.5 rounded-full bg-white/5 text-gray-400"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                    <p className="text-gray-500 text-sm line-clamp-2">
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

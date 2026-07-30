"use client";

import { motion } from "framer-motion";

const skills = [
  { icon: "🔍", name: "UX Research" },
  { icon: "🎨", name: "UI Design" },
  { icon: "✏️", name: "Prototyping" },
  { icon: "👥", name: "User Testing" },
  { icon: "🧩", name: "Design Systems" },
  { icon: "🤖", name: "AI-Driven Design" },
];

const tools = [
  "Figma",
  "Adobe XD",
  "Photoshop",
  "Illustrator",
  "After Effects",
  "Framer",
  "Webflow",
  "Miro",
];

const stats = [
  { value: "12+", label: "Projects" },
  { value: "2+", label: "Years Experience" },
  { value: "P&G", label: "Current Role" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

export default function About() {
  return (
    <section id="about" className="py-32 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">
        {/* Left — Bio */}
        <div>
          <motion.span
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            className="inline-block uppercase tracking-widest text-sm text-gray-400 mb-4"
          >
            About Me
          </motion.span>

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            className="text-4xl md:text-5xl font-bold leading-tight mb-8"
          >
            Designing the future, one pixel at a time
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
            className="text-gray-400 leading-relaxed mb-4"
          >
            I&apos;m a Junior UX/UI Designer at Procter &amp; Gamble with hands-on
            experience in usability testing, UX research, and prototyping within
            an enterprise environment.
          </motion.p>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={3}
            className="text-gray-400 leading-relaxed mb-4"
          >
            My approach combines AI-driven design methodologies with traditional
            UX principles to create solutions that are both innovative and
            user-centered.
          </motion.p>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={4}
            className="text-gray-400 leading-relaxed mb-6"
          >
            Based in Lahore, Pakistan, I&apos;m passionate about turning user
            insights into clear, actionable design solutions.
          </motion.p>

          {/* Google UX badge */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={5}
            className="inline-flex items-center gap-2 bg-green-500/10 text-green-400 border border-green-500/20 rounded-full px-4 py-1.5 text-sm font-medium mb-10"
          >
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm-1 15-4-4 1.41-1.41L11 14.17l5.59-5.59L18 10l-7 7Z" />
            </svg>
            Google UX Certified
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={6}
            className="flex gap-10"
          >
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-2xl font-bold">{s.value}</p>
                <p className="text-sm text-gray-500">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right — Skills */}
        <div>
          <motion.h3
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            className="text-2xl font-bold mb-8"
          >
            Skills &amp; Expertise
          </motion.h3>

          {/* Skills grid */}
          <div className="grid grid-cols-2 gap-4 mb-10">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i + 1}
                className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-4"
              >
                <span className="text-xl">{skill.icon}</span>
                <span className="text-sm font-medium">{skill.name}</span>
              </motion.div>
            ))}
          </div>

          {/* Tools */}
          <motion.h4
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            className="text-lg font-semibold mb-4"
          >
            Tools
          </motion.h4>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            className="flex flex-wrap gap-2"
          >
            {tools.map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-gray-300"
              >
                {tool}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "UX Research", level: 90 },
  { name: "UI Design", level: 95 },
  { name: "Prototyping", level: 85 },
  { name: "User Testing", level: 80 },
  { name: "Design Systems", level: 88 },
  { name: "AI-Driven Design", level: 92 },
];

const tools = [
  "Figma", "Adobe XD", "Photoshop", "Illustrator",
  "After Effects", "Framer", "Webflow", "Miro",
];

const easeOut = [0.25, 0.1, 0.25, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: easeOut },
  }),
};

export default function About() {
  return (
    <section id="about" className="py-28 lg:py-36 bg-[#0a0a0e]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          variants={fadeUp}
          className="mb-6"
        >
          <span className="text-xs uppercase tracking-[0.2em] text-[#d4a853] font-medium">
            About Me
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              variants={fadeUp}
              className="text-4xl sm:text-5xl font-serif font-bold leading-tight text-[#f2f0ed] mb-8"
            >
              Crafting digital experiences at the intersection of{" "}
              <span className="gold-shimmer">design &amp; technology</span>
            </motion.h2>

            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
              variants={fadeUp}
              className="text-[#8b8b96] leading-relaxed mb-4"
            >
              I&apos;m a Junior UX/UI Designer at Procter &amp; Gamble with hands-on
              experience in usability testing, UX research, and prototyping within
              an enterprise environment.
            </motion.p>

            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={3}
              variants={fadeUp}
              className="text-[#8b8b96] leading-relaxed mb-4"
            >
              My approach combines AI-driven design methodologies with traditional
              UX principles to create solutions that are both innovative and
              user-centered.
            </motion.p>

            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={4}
              variants={fadeUp}
              className="text-[#8b8b96] leading-relaxed mb-8"
            >
              Based in Lahore, Pakistan — I&apos;m passionate about turning user
              insights into clear, actionable design solutions.
            </motion.p>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={5}
              variants={fadeUp}
              className="inline-flex items-center gap-2 bg-[#8b7cf7]/10 text-[#8b7cf7] border border-[#8b7cf7]/20 rounded-lg px-4 py-2 text-sm font-medium"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm-1 15-4-4 1.41-1.41L11 14.17l5.59-5.59L18 10l-7 7Z" />
              </svg>
              Google UX Certified
            </motion.div>
          </div>

          <div>
            <motion.h3
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
              variants={fadeUp}
              className="text-xl font-semibold text-[#f2f0ed] mb-8"
            >
              Skills &amp; Expertise
            </motion.h3>

            <div className="space-y-5 mb-12">
              {skills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i + 1}
                  variants={fadeUp}
                >
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-sm font-medium text-[#f2f0ed]">{skill.name}</span>
                    <span className="text-xs text-[#5b5b66]">{skill.level}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-[#1a1a24] overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                      className="h-full rounded-full bg-gradient-to-r from-[#d4a853] to-[#e0b86a]"
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.h4
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={skills.length + 1}
              variants={fadeUp}
              className="text-sm font-semibold text-[#f2f0ed] uppercase tracking-wider mb-4"
            >
              Tools &amp; Technologies
            </motion.h4>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={skills.length + 2}
              variants={fadeUp}
              className="flex flex-wrap gap-2"
            >
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-lg border border-[#22222c] bg-[#121218] px-3.5 py-1.5 text-xs font-medium text-[#8b8b96] hover:border-[#d4a853]/20 hover:text-[#d4a853] transition-colors"
                >
                  {tool}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

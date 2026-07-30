"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: "12+", label: "Projects Delivered" },
  { value: "2+", label: "Years of Experience" },
  { value: "P&G", label: "Current Role" },
];

const easeOut = [0.25, 0.1, 0.25, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } },
};

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0e]"
    >
      <div className="pointer-events-none absolute inset-0 bg-noise" />

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full bg-[#d4a853]/5 blur-[150px] animate-pulse-soft" />
        <div className="absolute -bottom-1/2 -left-1/4 w-[600px] h-[600px] rounded-full bg-[#8b7cf7]/5 blur-[120px] animate-pulse-soft" style={{ animationDelay: "2s" }} />
      </div>

      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="relative z-10 mx-auto max-w-6xl px-6 pt-24 pb-16"
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div variants={fadeUp} className="mb-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#d4a853]/20 bg-[#d4a853]/5 px-4 py-1.5 text-sm text-[#d4a853]">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#d4a853] opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#d4a853]" />
                </span>
                UX/UI Designer at P&amp;G
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold leading-[1.1] tracking-tight text-[#f2f0ed] mb-6"
            >
              Designing
              <br />
              <span className="gold-shimmer">Experiences</span>
              <br />
              That Matter
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-lg text-[#8b8b96] leading-relaxed max-w-lg mb-10"
            >
              AI-driven UX/UI Designer at Procter &amp; Gamble. I craft
              intuitive digital experiences through research, prototyping,
              and data-informed design.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <a
                href="#work"
                className="inline-flex items-center gap-2 rounded-lg bg-[#d4a853] px-7 py-3.5 text-sm font-semibold text-[#0a0a0e] transition-all duration-300 hover:bg-[#e0b86a] hover:shadow-lg hover:shadow-[#d4a853]/20"
              >
                View My Work
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3.333 8h9.334M8 3.333L12.667 8 8 12.667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg border border-[#22222c] px-7 py-3.5 text-sm font-semibold text-[#f2f0ed] transition-all duration-300 hover:border-[#d4a853]/30 hover:bg-[#d4a853]/5"
              >
                Get In Touch
              </a>
            </motion.div>
          </div>

          <motion.div variants={fadeUp} className="hidden lg:flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-full border border-[#22222c] bg-[#121218] flex items-center justify-center overflow-hidden">
                <div className="text-center">
                  <div className="text-[#d4a853] text-7xl font-serif font-bold mb-2">HM</div>
                  <div className="text-[#5b5b66] text-xs uppercase tracking-[0.2em]">UX/UI Designer</div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 rounded-lg border border-[#22222c] bg-[#121218] flex items-center justify-center text-[#d4a853] text-3xl animate-float-slow">
                ✦
              </div>
              <div className="absolute -bottom-2 -left-6 w-20 h-20 rounded-full border border-[#22222c] bg-[#121218] flex items-center justify-center text-[#8b7cf7] text-lg animate-float-slow" style={{ animationDelay: "1s" }}>
                ◆
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={fadeUp}
          className="flex flex-wrap items-center justify-center gap-10 sm:gap-16 mt-20 pt-12 border-t border-[#22222c]"
        >
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-2xl sm:text-3xl font-bold text-[#f2f0ed]">{s.value}</p>
              <p className="mt-1 text-xs text-[#5b5b66] tracking-wide">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-[#5b5b66] tracking-widest uppercase">Scroll</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-[#5b5b66]">
            <path d="M8 3v10m0 0l-3.5-3.5M8 13l3.5-3.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}

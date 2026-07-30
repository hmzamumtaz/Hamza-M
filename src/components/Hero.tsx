"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: "12+", label: "Projects" },
  { value: "2+", label: "Years Exp" },
  { value: "UX", label: "Certified" },
];

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      id="hero"
      ref={ref}
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0a0a0a]"
    >
      {/* Gradient Blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="blob-1 absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/20 blur-[120px]" />
        <div className="blob-2 absolute right-1/4 top-1/2 h-[400px] w-[400px] rounded-full bg-pink-600/15 blur-[100px]" />
        <div className="blob-3 absolute bottom-1/4 left-1/3 h-[350px] w-[350px] rounded-full bg-violet-600/10 blur-[100px]" />
      </div>

      <style jsx>{`
        @keyframes blobMove1 {
          0%, 100% { transform: translate(-50%, -50%) scale(1); }
          33% { transform: translate(-40%, -60%) scale(1.1); }
          66% { transform: translate(-60%, -40%) scale(0.95); }
        }
        @keyframes blobMove2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(40px, -30px) scale(1.15); }
        }
        @keyframes blobMove3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-30px, 20px) scale(1.08); }
        }
        .blob-1 { animation: blobMove1 8s ease-in-out infinite; }
        .blob-2 { animation: blobMove2 10s ease-in-out infinite; }
        .blob-3 { animation: blobMove3 12s ease-in-out infinite; }
      `}</style>

      <motion.div
        variants={stagger}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="relative z-10 mx-auto max-w-5xl px-6 text-center"
      >
        {/* Badge */}
        <motion.div variants={fadeUp} className="mb-8 flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
            </span>
            Available for Work
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1 variants={fadeUp} className="mb-6 text-6xl font-bold leading-tight tracking-tight text-white md:text-8xl">
          Hi, I&apos;m{" "}
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500 bg-clip-text text-transparent">
            Hamza M.
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p variants={fadeUp} className="mb-6 text-lg font-medium text-white/50 md:text-xl">
          AI-driven UX/UI Designer &amp; Google UX Certified
        </motion.p>

        {/* Description */}
        <motion.p variants={fadeUp} className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-white/40 md:text-lg">
          Crafting intuitive digital experiences at Procter &amp; Gamble. Specializing in
          AI-driven design, user research, and creating products that make a difference.
        </motion.p>

        {/* CTAs */}
        <motion.div variants={fadeUp} className="mb-16 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#work"
            className="rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="rounded-full border border-white/15 px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:border-white/30 hover:bg-white/5"
          >
            Get In Touch
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div variants={fadeUp} className="flex items-center justify-center gap-12 sm:gap-20">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-2xl font-bold text-white md:text-3xl">{s.value}</p>
              <p className="mt-1 text-xs text-white/40">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" as const }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-white/30">Scroll</span>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-white/30">
            <path d="M10 4v12m0 0l-4-4m4 4l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}

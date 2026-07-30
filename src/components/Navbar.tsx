"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

function scrollTo(id: string) {
  const el = document.getElementById(id.replace("#", ""));
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    scrollTo(href);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 h-20 transition-all duration-500 ${
        scrolled
          ? "bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold tracking-tight text-white">
          Hamza M<span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">.</span>
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="text-sm font-medium text-white/60 transition-colors duration-300 hover:text-white"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNav("#contact")}
            className="rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25"
          >
            Let&apos;s Talk
          </button>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMobileOpen((o) => !o)}
          className="relative z-[60] flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
            className="block h-0.5 w-6 bg-white origin-center"
          />
          <motion.span
            animate={mobileOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
            className="block h-0.5 w-6 bg-white"
          />
          <motion.span
            animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
            className="block h-0.5 w-6 bg-white origin-center"
          />
        </button>
      </div>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0a0a0a]/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col items-center gap-10">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  onClick={() => handleNav(link.href)}
                  className="text-4xl font-bold text-white transition-colors hover:text-purple-400"
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: navLinks.length * 0.1 }}
                onClick={() => handleNav("#contact")}
                className="mt-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-10 py-4 text-lg font-semibold text-white"
              >
                Let&apos;s Talk
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

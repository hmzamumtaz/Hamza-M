"use client";

import { useState, useEffect } from "react";
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
    const onScroll = () => setScrolled(window.scrollY > 60);
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
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-300 ${
          scrolled
            ? "bg-white/80 backdrop-blur-md border-b border-gray-200/60 shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="flex items-center justify-center w-8 h-8 rounded-md bg-[#0d7377] text-white text-xs font-bold">
              HM
            </span>
            <span className="text-sm font-medium text-gray-900 hidden sm:block">
              Hamza M.
            </span>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="text-sm font-medium text-gray-500 transition-colors duration-200 hover:text-[#0d7377]"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNav("#contact")}
              className="rounded-md bg-[#0d7377] px-5 py-2 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#0b5e62]"
            >
              Let&apos;s Talk
            </button>
          </div>

          <button
            onClick={() => setMobileOpen((o) => !o)}
            className="z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
            aria-label="Toggle menu"
          >
            <span className={`block h-0.5 w-6 bg-gray-800 origin-center transition-all duration-300 ${
              mobileOpen ? "rotate-45 translate-y-[6px]" : ""
            }`} />
            <span className={`block h-0.5 w-6 bg-gray-800 transition-all duration-300 ${
              mobileOpen ? "opacity-0" : ""
            }`} />
            <span className={`block h-0.5 w-6 bg-gray-800 origin-center transition-all duration-300 ${
              mobileOpen ? "-rotate-45 -translate-y-[6px]" : ""
            }`} />
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-white/98 md:hidden">
          <div className="flex flex-col items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="text-3xl font-bold text-gray-900 transition-colors hover:text-[#0d7377]"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNav("#contact")}
              className="mt-4 rounded-md bg-[#0d7377] px-10 py-3.5 text-base font-semibold text-white"
            >
              Let&apos;s Talk
            </button>
          </div>
        </div>
      )}
    </>
  );
}

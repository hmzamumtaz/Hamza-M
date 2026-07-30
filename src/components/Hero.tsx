"use client";

export default function Hero() {
  return (
    <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-md bg-[#0d7377]/10 px-3 py-1 text-xs font-medium text-[#0d7377] mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0d7377]" />
              UX/UI Designer at P&amp;G
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-gray-900 mb-5">
              Hi, I&apos;m{" "}
              <span className="text-[#0d7377]">Hamza M.</span>
            </h1>

            <p className="text-lg text-gray-500 leading-relaxed mb-8 max-w-lg">
              AI-driven UX/UI Designer at Procter &amp; Gamble. I craft
              intuitive digital experiences through research, prototyping,
              and data-informed design.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#work"
                className="inline-flex items-center gap-2 rounded-md bg-[#0d7377] px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#0b5e62]"
              >
                View My Work
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-md border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 transition-all duration-200 hover:border-gray-400 hover:bg-gray-50"
              >
                Get In Touch
              </a>
            </div>
          </div>

          <div className="hidden md:flex justify-center">
            <div className="relative">
              <div className="w-72 h-72 rounded-2xl bg-gradient-to-br from-[#0d7377] to-[#14b8a6] flex items-center justify-center shadow-xl">
                <div className="text-center text-white">
                  <div className="text-6xl font-bold mb-1">HM</div>
                  <div className="text-sm opacity-80 tracking-widest uppercase">UX/UI</div>
                </div>
              </div>
              <div className="absolute -top-3 -right-3 w-16 h-16 rounded-xl bg-white shadow-lg border border-gray-100 flex items-center justify-center text-[#0d7377] text-2xl">
                ✦
              </div>
              <div className="absolute -bottom-3 -left-3 w-14 h-14 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center text-[#14b8a6] text-lg">
                ◆
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 mt-16 pt-10 border-t border-gray-200">
          {[
            { value: "12+", label: "Projects Delivered" },
            { value: "2+", label: "Years Experience" },
            { value: "P&G", label: "Current Role" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-2xl font-bold text-gray-900">{s.value}</p>
              <p className="mt-0.5 text-xs text-gray-400 tracking-wide">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

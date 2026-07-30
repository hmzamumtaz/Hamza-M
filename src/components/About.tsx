"use client";

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

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-xs uppercase tracking-widest text-[#0d7377] font-medium mb-2">
          About Me
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 mt-2">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold leading-tight text-gray-900 mb-6">
              Crafting digital experiences at the intersection of{" "}
              <span className="text-[#0d7377]">design &amp; technology</span>
            </h2>

            <div className="space-y-4 text-gray-500 leading-relaxed">
              <p>
                I&apos;m a Junior UX/UI Designer at Procter &amp; Gamble with hands-on
                experience in usability testing, UX research, and prototyping within
                an enterprise environment.
              </p>
              <p>
                My approach combines AI-driven design methodologies with traditional
                UX principles to create solutions that are both innovative and
                user-centered.
              </p>
              <p>
                Based in Lahore, Pakistan — I&apos;m passionate about turning user
                insights into clear, actionable design solutions.
              </p>
            </div>

            <div className="inline-flex items-center gap-2 bg-[#0d7377]/10 text-[#0d7377] border border-[#0d7377]/20 rounded-md px-3.5 py-1.5 text-sm font-medium mt-6">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm-1 15-4-4 1.41-1.41L11 14.17l5.59-5.59L18 10l-7 7Z" />
              </svg>
              Google UX Certified
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-6">
              Skills &amp; Expertise
            </h3>

            <div className="space-y-4 mb-10">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                    <span className="text-xs text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-gray-100 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-[#0d7377] transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <h4 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-3">
              Tools &amp; Technologies
            </h4>

            <div className="flex flex-wrap gap-2">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-md border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-medium text-gray-600"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

const skills = [
  { name: "UX Research", level: 90 },
  { name: "UI Design", level: 95 },
  { name: "Prototyping", level: 85 },
  { name: "User Testing", level: 80 },
  { name: "Design Systems", level: 88 },
  { name: "AI-Driven Design", level: 92 },
  { name: "Frontend Development", level: 85 },
  { name: "AI-Assisted Development", level: 90 },
];

const toolCategories = [
  {
    label: "Design & Prototyping",
    items: ["Figma", "Adobe XD", "Sketch", "Indesign", "Visily", "Framer", "Zeplin", "Stitch"],
  },
  {
    label: "UX Research & Testing",
    items: ["Miro", "Mural", "Maze", "UX Pilot"],
  },
  {
    label: "AI & Development",
    items: ["Claude", "OpenCode", "Cursor", "VS Code", "GitHub Copilot", "Google AI Studio", "Next.js", "React", "TypeScript", "Tailwind CSS", "Lovable", "Synthesia"],
  },
  {
    label: "Project Management",
    items: ["Jira", "Confluence", "Kanban"],
  },
  {
    label: "No-Code & Web",
    items: ["Webflow"],
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#f8f9fc] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwZDczNzciIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-40" />

      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="mb-12">
          <div className="text-xs uppercase tracking-widest text-[#0d7377] font-medium mb-3">
            About Me
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 max-w-2xl">
            Crafting digital experiences at the intersection of{" "}
            <span className="text-[#0d7377]">design & technology</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-5 gap-10 md:gap-14">
          <div className="md:col-span-3">
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
              <div className="space-y-4 text-gray-500 leading-relaxed">
                <p>
                  I&apos;m a Mid-Level AI UX/UI Developer & Designer at Databiqs with hands-on
                  experience in usability testing, UX research, prototyping, and
                  AI-assisted frontend development within an enterprise environment.
                </p>
                <p>
                  My approach combines AI-driven design & development methodologies with traditional
                  UX principles to build solutions that are both innovative and
                  user-centered — from research to production-ready code.
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
          </div>

          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">
              Skills & Expertise
            </h3>

            <div className="space-y-5">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                    <span className="text-xs font-medium text-[#0d7377]">{skill.level}%</span>
                  </div>
                  <div className="h-2.5 rounded-full bg-gray-100 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[#0d7377] to-[#14a8ad] transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16">
          <div className="text-xs uppercase tracking-widest text-[#0d7377] font-medium mb-6">
            Tools & Technologies
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {toolCategories.map((cat) => (
              <div key={cat.label} className="rounded-lg border border-gray-200 bg-white p-3 shadow-sm">
                <h4 className="text-[10px] font-semibold text-[#0d7377] uppercase tracking-wider mb-2">
                  {cat.label}
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {cat.items.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-md border border-gray-100 bg-gray-50 px-2 py-0.5 text-[10px] font-medium text-gray-500"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

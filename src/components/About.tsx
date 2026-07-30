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
  { name: "Figma", category: "design" },
  { name: "Adobe XD", category: "design" },
  { name: "Photoshop", category: "graphics" },
  { name: "Illustrator", category: "graphics" },
  { name: "After Effects", category: "motion" },
  { name: "Framer", category: "prototyping" },
  { name: "Webflow", category: "development" },
  { name: "Miro", category: "collaboration" },
];

const toolCategories = [
  { label: "Design", value: "design", color: "bg-blue-100 text-blue-700 border-blue-200" },
  { label: "Graphics", value: "graphics", color: "bg-purple-100 text-purple-700 border-purple-200" },
  { label: "Motion", value: "motion", color: "bg-orange-100 text-orange-700 border-orange-200" },
  { label: "Prototyping", value: "prototyping", color: "bg-green-100 text-green-700 border-green-200" },
  { label: "Development", value: "development", color: "bg-rose-100 text-rose-700 border-rose-200" },
  { label: "Collaboration", value: "collaboration", color: "bg-cyan-100 text-cyan-700 border-cyan-200" },
];

function getToolCategory(value: string) {
  return toolCategories.find((c) => c.value === value)!;
}

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#f8f9fc] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwZDczNzciIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-40" />

      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="flex flex-col items-center text-center mb-12">
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
                  I&apos;m a Mid-Level AI UX/UI Designer at Databiqs with hands-on
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

            <div className="mt-6">
              <h4 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-4">
                Tools & Technologies
              </h4>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool) => {
                  const cat = getToolCategory(tool.category);
                  return (
                    <span
                      key={tool.name}
                      className={`rounded-full border px-3 py-1 text-xs font-medium ${cat.color}`}
                    >
                      {tool.name}
                    </span>
                  );
                })}
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
      </div>
    </section>
  );
}

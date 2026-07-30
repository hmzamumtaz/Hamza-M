import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projects, getProjectBySlug } from "@/data/projects";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: `${project.title} — Hamza M.`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const currentIndex = projects.findIndex((p) => p.slug === project.slug);
  const nextIndex = (currentIndex + 1) % projects.length;
  const nextProject = projects[nextIndex];

  return (
    <main className="min-h-screen bg-[#0a0a0e] text-[#f2f0ed] pt-[4.5rem]">
      <div className="max-w-6xl mx-auto px-6 pb-24">
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 text-[#5b5b66] hover:text-[#d4a853] transition-colors mb-12 group text-sm"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="group-hover:-translate-x-1 transition-transform">
            <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Back to Work
        </Link>

        <section className="mb-16">
          <div className="relative w-full max-h-[70vh] overflow-hidden rounded-xl border border-[#22222c] mb-8">
            <Image
              src={project.heroImage}
              alt={project.title}
              width={1400}
              height={800}
              className="w-full h-full object-cover"
              unoptimized
            />
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.services.map((service) => (
              <span
                key={service}
                className="rounded-lg border border-[#22222c] bg-[#121218] px-3 py-1 text-xs font-medium text-[#8b8b96]"
              >
                {service}
              </span>
            ))}
          </div>

          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-[#f2f0ed]">
            {project.title}
          </h1>

          <p className="text-lg text-[#8b8b96] max-w-3xl mb-10 leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-8 text-sm">
            <div>
              <span className="text-[#5b5b66] block mb-1 text-xs uppercase tracking-wider">Year</span>
              <span className="text-[#f2f0ed] font-medium">{project.year}</span>
            </div>
            {project.role && (
              <div>
                <span className="text-[#5b5b66] block mb-1 text-xs uppercase tracking-wider">Role</span>
                <span className="text-[#f2f0ed] font-medium">{project.role}</span>
              </div>
            )}
            {project.tools && project.tools.length > 0 && (
              <div>
                <span className="text-[#5b5b66] block mb-1 text-xs uppercase tracking-wider">Tools</span>
                <span className="text-[#f2f0ed] font-medium">
                  {project.tools.join(", ")}
                </span>
              </div>
            )}
          </div>
        </section>

        {project.behanceUrl && (
          <div className="mb-16">
            <a
              href={project.behanceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-[#d4a853] px-6 py-3 text-sm font-semibold text-[#0a0a0e] transition-all duration-300 hover:bg-[#e0b86a] hover:shadow-lg hover:shadow-[#d4a853]/20"
            >
              View Full Case Study on Behance
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3.333 8h9.334M8 3.333L12.667 8 8 12.667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        )}

        {project.images.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-serif font-bold text-[#f2f0ed] mb-8">
              Project Gallery
            </h2>
            <div
              className={
                project.images.length <= 5
                  ? "grid grid-cols-1 md:grid-cols-2 gap-5"
                  : "flex flex-col gap-10"
              }
            >
              {project.images.map((image, index) => (
                <div
                  key={index}
                  className="relative w-full rounded-xl overflow-hidden border border-[#22222c] hover:border-[#d4a853]/20 transition-colors"
                >
                  <Image
                    src={image}
                    alt={`${project.title} — Image ${index + 1}`}
                    width={1200}
                    height={800}
                    className="w-full h-auto object-cover"
                    unoptimized
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        {project.caseStudy && project.caseStudy.length > 0 && (
          <section className="mb-16">
            <div className="space-y-16">
              {project.caseStudy.map((section, index) => (
                <div key={index}>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-[#d4a853] text-sm font-mono">0{index + 1}</span>
                    <h3 className="text-3xl font-serif font-bold text-[#f2f0ed]">{section.title}</h3>
                  </div>
                  <div className="text-[#8b8b96] leading-relaxed space-y-4 max-w-3xl">
                    {section.content.split("\n\n").map((paragraph, pIndex) => (
                      <p key={pIndex}>{paragraph}</p>
                    ))}
                  </div>
                  {section.images && section.images.length > 0 && (
                    <div className="mt-8 space-y-5">
                      {section.images.map((image, imgIndex) => (
                        <div key={imgIndex} className="w-full rounded-xl overflow-hidden border border-[#22222c]">
                          <Image
                            src={image}
                            alt={`${section.title} — Image ${imgIndex + 1}`}
                            width={1200}
                            height={800}
                            className="w-full h-auto object-cover"
                            unoptimized
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        <Link
          href={`/work/${nextProject.slug}`}
          className="group block relative w-full h-72 rounded-xl overflow-hidden border border-[#22222c]"
        >
          <Image
            src={nextProject.thumbnail}
            alt={nextProject.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0e] via-[#0a0a0e]/40 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-end p-8">
            <span className="text-xs text-[#d4a853] uppercase tracking-wider mb-2 font-medium">
              Next Project
            </span>
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#f2f0ed]">
              {nextProject.title}
            </h3>
            <p className="text-[#8b8b96] text-sm mt-1 max-w-md">
              {nextProject.description}
            </p>
          </div>
        </Link>
      </div>
    </main>
  );
}

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
    <main className="min-h-screen bg-white text-gray-900 pt-16">
      <div className="max-w-5xl mx-auto px-6 pb-24">
        <Link
          href="/#work"
          className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-[#0d7377] transition-colors mb-10 group"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="group-hover:-translate-x-0.5 transition-transform">
            <path d="M8.75 10.5L5.25 7l3.5-3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Back to Work
        </Link>

        <section className="mb-14">
          <div className="relative w-full max-h-[60vh] overflow-hidden rounded-xl border border-gray-200 mb-6">
            <Image
              src={project.heroImage}
              alt={project.title}
              width={1400}
              height={800}
              className="w-full h-full object-cover"
              unoptimized
            />
          </div>

          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.services.map((service) => (
              <span
                key={service}
                className="rounded-md border border-gray-200 bg-gray-50 px-2.5 py-0.5 text-[11px] font-medium text-gray-500"
              >
                {service}
              </span>
            ))}
          </div>

          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">
            {project.title}
          </h1>

          <p className="text-base text-gray-500 max-w-3xl mb-8 leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-6 text-sm">
            <div>
              <span className="text-gray-400 block mb-0.5 text-xs">Year</span>
              <span className="text-gray-900 font-medium">{project.year}</span>
            </div>
            {project.role && (
              <div>
                <span className="text-gray-400 block mb-0.5 text-xs">Role</span>
                <span className="text-gray-900 font-medium">{project.role}</span>
              </div>
            )}
            {project.tools && project.tools.length > 0 && (
              <div>
                <span className="text-gray-400 block mb-0.5 text-xs">Tools</span>
                <span className="text-gray-900 font-medium">
                  {project.tools.join(", ")}
                </span>
              </div>
            )}
          </div>
        </section>

        {project.behanceUrl && (
          <div className="mb-14">
            <a
              href={project.behanceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-[#0d7377] px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#0b5e62]"
            >
              View Full Case Study on Behance
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        )}

        {project.images.length > 0 && (
          <section className="mb-14">
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              Project Gallery
            </h2>
            <div
              className={
                project.images.length <= 5
                  ? "grid grid-cols-1 md:grid-cols-2 gap-4"
                  : "flex flex-col gap-8"
              }
            >
              {project.images.map((image, index) => (
                <div
                  key={index}
                  className="relative w-full rounded-xl overflow-hidden border border-gray-200"
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
          <section className="mb-14">
            <div className="space-y-12">
              {project.caseStudy.map((section, index) => (
                <div key={index}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-[#0d7377] text-sm font-mono font-medium">
                      0{index + 1}
                    </span>
                    <h3 className="text-2xl font-bold text-gray-900">{section.title}</h3>
                  </div>
                  <div className="text-gray-500 leading-relaxed space-y-3 max-w-3xl">
                    {section.content.split("\n\n").map((paragraph, pIndex) => (
                      <p key={pIndex}>{paragraph}</p>
                    ))}
                  </div>
                  {section.images && section.images.length > 0 && (
                    <div className="mt-6 space-y-4">
                      {section.images.map((image, imgIndex) => (
                        <div key={imgIndex} className="w-full rounded-xl overflow-hidden border border-gray-200">
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
          className="group block relative w-full h-64 rounded-xl overflow-hidden border border-gray-200"
        >
          <Image
            src={nextProject.thumbnail}
            alt={nextProject.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-end p-6">
            <span className="text-xs text-[#14b8a6] uppercase tracking-wider mb-1 font-medium">
              Next Project
            </span>
            <h3 className="text-xl md:text-2xl font-bold text-white">
              {nextProject.title}
            </h3>
            <p className="text-gray-300 text-sm mt-0.5 max-w-md line-clamp-1">
              {nextProject.description}
            </p>
          </div>
        </Link>
      </div>
    </main>
  );
}

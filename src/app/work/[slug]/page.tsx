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
    title: `${project.title} | Portfolio`,
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
    <main className="min-h-screen bg-[#0a0a0a] text-white pt-24">
      <div className="max-w-6xl mx-auto px-6 pb-24">
        {/* Back Link */}
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-12 group"
        >
          <span className="group-hover:-translate-x-1 transition-transform">
            ←
          </span>
          Back to Work
        </Link>

        {/* Hero Section */}
        <section className="mb-16">
          <div className="relative w-full max-h-[70vh] overflow-hidden rounded-2xl mb-8">
            <Image
              src={project.heroImage}
              alt={project.title}
              width={1400}
              height={800}
              className="w-full h-full object-cover"
              unoptimized
            />
          </div>

          {/* Service Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.services.map((service) => (
              <span
                key={service}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300"
              >
                {service}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {project.title}
          </h1>

          {/* Description */}
          <p className="text-lg text-gray-400 max-w-3xl mb-8">
            {project.description}
          </p>

          {/* Meta Row */}
          <div className="flex flex-wrap gap-8 text-sm">
            <div>
              <span className="text-gray-500 block mb-1">Year</span>
              <span className="text-white font-medium">{project.year}</span>
            </div>
            {project.role && (
              <div>
                <span className="text-gray-500 block mb-1">Role</span>
                <span className="text-white font-medium">{project.role}</span>
              </div>
            )}
            {project.tools && project.tools.length > 0 && (
              <div>
                <span className="text-gray-500 block mb-1">Tools</span>
                <span className="text-white font-medium">
                  {project.tools.join(", ")}
                </span>
              </div>
            )}
          </div>
        </section>

        {/* Behance Link */}
        {project.behanceUrl && (
          <a
            href={project.behanceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity mb-16"
          >
            View on Behance →
          </a>
        )}

        {/* Image Gallery */}
        {project.images.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-8">Project Gallery</h2>
            <div
              className={
                project.images.length <= 5
                  ? "grid grid-cols-1 md:grid-cols-2 gap-6"
                  : "flex flex-col gap-12"
              }
            >
              {project.images.map((image, index) => (
                <div
                  key={index}
                  className="relative w-full rounded-xl overflow-hidden hover:opacity-90 transition-opacity"
                >
                  <Image
                    src={image}
                    alt={`${project.title} - Image ${index + 1}`}
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

        {/* Case Study Sections */}
        {project.caseStudy && project.caseStudy.length > 0 && (
          <section className="mb-16">
            <div className="space-y-16">
              {project.caseStudy.map((section, index) => (
                <div key={index} className="border-l-4 pl-6" style={{ borderColor: project.color }}>
                  <h3 className="text-3xl font-bold mb-4">{section.title}</h3>
                  <div className="text-gray-300 leading-relaxed space-y-4 max-w-3xl">
                    {section.content.split("\n\n").map((paragraph, pIndex) => (
                      <p key={pIndex}>{paragraph}</p>
                    ))}
                  </div>
                  {section.images && section.images.length > 0 && (
                    <div className="mt-8 space-y-4">
                      {section.images.map((image, imgIndex) => (
                        <div key={imgIndex} className="w-full rounded-xl overflow-hidden">
                          <Image
                            src={image}
                            alt={`${section.title} - Image ${imgIndex + 1}`}
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

        {/* Next Project Navigation */}
        <Link
          href={`/work/${nextProject.slug}`}
          className="block relative w-full h-80 rounded-2xl overflow-hidden group"
        >
          <Image
            src={nextProject.thumbnail}
            alt={nextProject.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            unoptimized
          />
          <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors" />
          <div className="absolute inset-0 flex flex-col justify-end p-8">
            <span className="text-sm text-gray-400 mb-2">Next Project</span>
            <h3 className="text-2xl md:text-3xl font-bold">
              {nextProject.title}
            </h3>
          </div>
        </Link>
      </div>
    </main>
  );
}

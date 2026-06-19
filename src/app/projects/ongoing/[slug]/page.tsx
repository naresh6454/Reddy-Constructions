import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin, Calendar, Layers, BedDouble, ArrowLeft, Clock } from "lucide-react";
import { PROJECTS } from "@/data/projects";
import { CTABanner } from "@/components/sections/CTABanner";

export const dynamic = "force-static";

export function generateStaticParams() {
  return PROJECTS.filter((p) => p.status === "ongoing").map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug && p.status === "ongoing");
  if (!project) return {};
  return { title: project.title, description: project.description };
}

export default async function OngoingProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug && p.status === "ongoing");
  if (!project) notFound();

  const primaryImage = project.images.find((img) => img.isPrimary) || project.images[0];

  return (
    <>
      {/* Top bar */}
      <div className="bg-brand-blue pt-24 pb-8">
        <div className="container-custom">
          <Link href="/projects/ongoing" className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-4 transition-colors">
            <ArrowLeft size={15} /> Back to Ongoing Projects
          </Link>
          <div className="flex items-center gap-3 mb-3">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              Ongoing
            </span>
            <span className="px-3 py-1.5 bg-white/10 text-white text-xs font-semibold rounded-full capitalize">
              {project.category}
            </span>
          </div>
          <h1 className="font-heading text-4xl lg:text-5xl font-black text-white">{project.title}</h1>
          <p className="text-white/70 mt-2 flex items-center gap-1.5">
            <MapPin size={14} /> {project.location}
          </p>
        </div>
      </div>

      {/* Main content */}
      <section className="section-padding bg-slate-50 dark:bg-slate-800">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-10 items-start">

            {/* Full image — natural size, no crop */}
            <div className="rounded-3xl overflow-hidden shadow-luxury bg-white dark:bg-slate-700">
              {primaryImage && (
                <Image
                  src={primaryImage.url}
                  alt={primaryImage.alt}
                  width={800}
                  height={1000}
                  className="w-full h-auto"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              )}
            </div>

            {/* Details */}
            <div className="space-y-6">
              {/* Progress */}
              {project.progress !== undefined && (
                <div className="p-6 bg-amber-50 dark:bg-amber-900/20 rounded-2xl border border-amber-200 dark:border-amber-800">
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-semibold text-amber-900 dark:text-amber-200 flex items-center gap-2">
                      <Clock size={16} /> Construction Progress
                    </span>
                    <span className="text-2xl font-black text-amber-600 dark:text-amber-300">{project.progress}%</span>
                  </div>
                  <div className="h-3 bg-amber-200 dark:bg-amber-900 rounded-full overflow-hidden">
                    <div className="h-full bg-brand-yellow rounded-full" style={{ width: `${project.progress}%` }} />
                  </div>
                </div>
              )}

              {/* Project specs */}
              <div className="card-luxury p-6">
                <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-white mb-5">Project Details</h3>
                <div className="grid grid-cols-2 gap-4">
                  {project.area && (
                    <div className="p-3 bg-slate-50 dark:bg-slate-700 rounded-xl">
                      <p className="text-xs text-slate-400 mb-1">Total Area</p>
                      <p className="font-semibold text-slate-800 dark:text-slate-200 text-sm">{project.area}</p>
                    </div>
                  )}
                  {project.floors && (
                    <div className="p-3 bg-slate-50 dark:bg-slate-700 rounded-xl">
                      <p className="text-xs text-slate-400 mb-1">Floors</p>
                      <p className="font-semibold text-slate-800 dark:text-slate-200 text-sm">G+{project.floors - 1}</p>
                    </div>
                  )}
                  {project.bedrooms && (
                    <div className="p-3 bg-slate-50 dark:bg-slate-700 rounded-xl">
                      <p className="text-xs text-slate-400 mb-1">Bedrooms</p>
                      <p className="font-semibold text-slate-800 dark:text-slate-200 text-sm">{project.bedrooms} BHK</p>
                    </div>
                  )}
                  {project.startDate && (
                    <div className="p-3 bg-slate-50 dark:bg-slate-700 rounded-xl">
                      <p className="text-xs text-slate-400 mb-1">Start Date</p>
                      <p className="font-semibold text-slate-800 dark:text-slate-200 text-sm">{project.startDate}</p>
                    </div>
                  )}
                  {project.completionDate && (
                    <div className="p-3 bg-amber-50 dark:bg-amber-900/20 rounded-xl">
                      <p className="text-xs text-slate-400 mb-1">Expected Completion</p>
                      <p className="font-semibold text-amber-700 dark:text-amber-400 text-sm">{project.completionDate}</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Description */}
              <div className="card-luxury p-6">
                <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-white mb-3">About This Project</h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm">{project.description}</p>
              </div>

              {/* Features */}
              <div className="card-luxury p-6">
                <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-white mb-4">Project Features</h3>
                <div className="space-y-2">
                  {project.features.map((f) => (
                    <div key={f} className="flex items-center gap-3 py-2 border-b border-slate-100 dark:border-slate-700 last:border-0">
                      <div className="w-2 h-2 rounded-full bg-brand-yellow flex-shrink-0" />
                      <span className="text-slate-700 dark:text-slate-300 text-sm">{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link href="/contact" className="btn-gold w-full justify-center py-4 text-base">
                Enquire About This Project
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTABanner title="Start Your Own Project" subtitle="Get a free consultation and detailed estimate for your dream construction project." primaryLabel="Get a Free Quote" primaryHref="/contact" />
    </>
  );
}

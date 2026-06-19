import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin, ArrowLeft, CheckCircle2, Star } from "lucide-react";
import { PROJECTS } from "@/data/projects";
import { CTABanner } from "@/components/sections/CTABanner";

export const dynamic = "force-static";

export function generateStaticParams() {
  return PROJECTS.filter((p) => p.status === "completed").map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug && p.status === "completed");
  if (!project) return {};
  return { title: project.title, description: project.description };
}

export default async function CompletedProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug && p.status === "completed");
  if (!project) notFound();

  const primaryImage = project.images.find((img) => img.isPrimary) || project.images[0];

  return (
    <>
      {/* Top bar */}
      <div className="bg-brand-blue pt-24 pb-8">
        <div className="container-custom">
          <Link href="/projects/completed" className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-4 transition-colors">
            <ArrowLeft size={15} /> Back to Completed Projects
          </Link>
          <div className="flex items-center gap-3 mb-3">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full bg-emerald-400/20 text-emerald-300 border border-emerald-400/30">
              <CheckCircle2 size={12} /> Completed
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
                    <div className="p-3 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl">
                      <p className="text-xs text-slate-400 mb-1">Completed On</p>
                      <p className="font-semibold text-emerald-700 dark:text-emerald-400 text-sm">{project.completionDate}</p>
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

              {/* Testimonial */}
              {project.testimonial && (
                <div className="p-6 bg-brand-blue/5 dark:bg-brand-blue/10 rounded-2xl border border-brand-blue/10 dark:border-brand-blue/20">
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-brand-yellow text-brand-yellow" />)}
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 italic leading-relaxed mb-4">"{project.testimonial}"</p>
                  {project.clientName && (
                    <p className="font-semibold text-slate-900 dark:text-white text-sm">— {project.clientName}</p>
                  )}
                </div>
              )}

              <Link href="/contact" className="btn-gold w-full justify-center py-4 text-base">
                Build Something Similar
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTABanner title="Love What You See?" subtitle="We can build something just as beautiful for you. Get a free consultation today." primaryLabel="Get a Free Quote" primaryHref="/contact" />
    </>
  );
}

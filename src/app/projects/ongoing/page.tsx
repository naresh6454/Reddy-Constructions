import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { RevealText } from "@/components/animations/RevealText";
import { CTABanner } from "@/components/sections/CTABanner";
import { PROJECTS } from "@/data/projects";
import { Clock } from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Ongoing Projects",
  description: "View Reddy Constructions' current ongoing projects — residential, commercial, and villa projects under active construction in Bangalore and Mysore.",
};

export default function OngoingProjectsPage() {
  const ongoing = PROJECTS.filter((p) => p.status === "ongoing");
  return (
    <>
      <PageHero
        label="Ongoing Projects"
        title="Projects Under Construction"
        subtitle="Take a live look at what we're currently building — each project tracked with real-time progress and transparent timelines."
        image="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1400&h=700&fit=crop"
        breadcrumbs={[{ label: "Projects", href: "/projects/ongoing" }]}
      />

      <section className="section-padding bg-white dark:bg-slate-900">
        <div className="container-custom">
          {/* Summary bar */}
          <RevealText className="flex flex-wrap gap-4 mb-12 p-6 bg-amber-50 dark:bg-amber-900/20 rounded-2xl border border-amber-200 dark:border-amber-800">
            <div className="flex items-center gap-2">
              <Clock size={18} className="text-amber-600 dark:text-amber-400" />
              <span className="font-semibold text-amber-900 dark:text-amber-200">{ongoing.length} Active Projects</span>
            </div>
            <span className="text-amber-700 dark:text-amber-300 text-sm">All projects are regularly inspected and quality-checked at every stage.</span>
          </RevealText>

          <SectionHeader label="Live Projects" title="Currently Under Construction" subtitle="Our ongoing projects are managed with strict timelines, quality checkpoints, and transparent client communication." className="mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ongoing.map((project, i) => (
              <RevealText key={project.id} delay={i * 0.1}>
                <ProjectCard project={project} />
              </RevealText>
            ))}
          </div>

          {ongoing.length === 0 && (
            <div className="text-center py-20 text-slate-500">
              <p className="text-lg dark:text-slate-400">No ongoing projects at the moment. Check back soon!</p>
            </div>
          )}
        </div>
      </section>

      <CTABanner title="Start Your Project with Us" subtitle="Join our growing list of satisfied clients — get your project started today." primaryLabel="Get a Free Quote" primaryHref="/contact" />
    </>
  );
}

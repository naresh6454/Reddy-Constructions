"use client";
export const dynamic = "force-static";
import { useState } from "react";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { CTABanner } from "@/components/sections/CTABanner";
import { PROJECTS } from "@/data/projects";

const CATEGORIES = ["all", "residential", "commercial", "villa"];

export default function CompletedProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const completed = PROJECTS.filter((p) => p.status === "completed");
  const filtered =
    activeFilter === "all"
      ? completed
      : completed.filter((p) => p.category === activeFilter);

  return (
    <>
      <PageHero
        label="Completed Projects"
        title="150+ Projects Delivered with Pride"
        subtitle="A portfolio built on trust, quality, and client satisfaction — every project here represents a dream realized on time and on budget."
        image="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1400&h=700&fit=crop"
        breadcrumbs={[{ label: "Projects", href: "/projects/completed" }]}
      />

      <section className="section-padding bg-white dark:bg-slate-900">
        <div className="container-custom">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
            <SectionHeader label="Portfolio" title="Our Completed Work" />
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold capitalize transition-all duration-200 ${
                    activeFilter === cat
                      ? "bg-brand-blue text-white"
                      : "bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600"
                  }`}
                >
                  {cat === "all" ? "All" : cat}
                </button>
              ))}
            </div>
          </div>

          {/* CSS fade instead of AnimatePresence */}
          <div
            key={activeFilter}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in"
          >
            {filtered.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-slate-500 dark:text-slate-400 py-20">No projects in this category yet.</p>
          )}
        </div>
      </section>

      <CTABanner
        title="Let's Build Your Success Story"
        subtitle="Join 150+ satisfied clients — start your project with Reddy Constructions today."
      />
    </>
  );
}

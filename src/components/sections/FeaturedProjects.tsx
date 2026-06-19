"use client";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { RevealText } from "@/components/animations/RevealText";
import { PROJECTS } from "@/data/projects";

const FILTERS = ["all", "residential", "commercial", "villa"];

export function FeaturedProjects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const featuredProjects = PROJECTS.filter((p) => p.isFeatured);
  const filtered =
    activeFilter === "all"
      ? featuredProjects
      : featuredProjects.filter((p) => p.category === activeFilter);

  return (
    <section className="section-padding bg-slate-50 dark:bg-slate-800">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <SectionHeader
            label="Featured Projects"
            title="Our Finest Work"
            subtitle="A curated selection of projects that showcase our commitment to quality and excellence."
          />
          <RevealText delay={0.2}>
            <Link href="/projects/completed" className="btn-primary whitespace-nowrap">
              All Projects <ArrowRight size={16} />
            </Link>
          </RevealText>
        </div>

        {/* Filters */}
        <RevealText className="flex flex-wrap gap-3 mb-10">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 capitalize ${
                activeFilter === filter
                  ? "bg-brand-blue text-white shadow-luxury-sm"
                  : "bg-white dark:bg-slate-700 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-600 hover:border-brand-blue hover:text-brand-blue dark:hover:text-white"
              }`}
            >
              {filter === "all" ? "All Projects" : filter}
            </button>
          ))}
        </RevealText>

        {/* Projects Grid — CSS fade on filter change */}
        <div
          key={activeFilter}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in"
        >
          {filtered.slice(0, 6).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-slate-500">
            <p className="text-lg">No featured projects in this category yet.</p>
          </div>
        )}
      </div>
    </section>
  );
}

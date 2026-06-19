import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { RevealText, StaggerChildren, StaggerItem } from "@/components/animations/RevealText";
import { CTABanner } from "@/components/sections/CTABanner";
import { PROJECTS } from "@/data/projects";
import { CONSTRUCTION_SPECS } from "@/data/services";
import { CheckCircle } from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Residential Construction",
  description: "Premium residential construction in Bangalore — individual homes, G+1 to G+3 buildings, built with TATA steel, Birla cement, and top-grade materials.",
  alternates: { canonical: "https://reddyconstructions.in/residential" },
  openGraph: {
    title: "Residential Construction Bangalore | Reddy Constructions",
    description: "Quality homes & G+1 to G+3 residences — TATA steel, Birla cement, transparent pricing, on-time delivery.",
    url: "https://reddyconstructions.in/residential",
  },
};

export default function ResidentialPage() {
  const residentialProjects = PROJECTS.filter((p) => p.category === "residential");
  const specs = CONSTRUCTION_SPECS.civilAndStructure;

  return (
    <>
      <PageHero
        label="Residential Construction"
        title="Your Dream Home, Built to Last"
        subtitle="From compact homes to multi-floor residences — Reddy Constructions delivers quality residential construction with transparent pricing and on-time delivery."
        image="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1400&h=700&fit=crop"
      />

      {/* Overview */}
      <section className="section-padding bg-white dark:bg-slate-900">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader
                label="Residential Construction"
                title="Homes Built with Pride & Precision"
                subtitle="We specialize in building residential homes that stand the test of time — using only certified premium materials, expert craftsmanship, and a process built around your timeline and budget."
              />
              <RevealText delay={0.3} className="mt-8 space-y-3">
                {["Individual houses & independent villas", "G+1, G+2, G+3 residential buildings", "Apartment complexes (multi-unit)", "Budget homes to luxury residences", "Complete turn-key delivery", "Post-construction support"].map((f) => (
                  <div key={f} className="flex items-center gap-3">
                    <CheckCircle size={16} className="text-brand-yellow flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300 text-sm">{f}</span>
                  </div>
                ))}
              </RevealText>
            </div>
            <RevealText direction="right">
              <div className="relative rounded-3xl shadow-luxury w-full h-[420px] overflow-hidden">
                <Image src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=700&h=500&fit=crop" alt="Residential Construction" fill className="object-cover" sizes="(max-width:1024px) 100vw, 50vw" />
              </div>
            </RevealText>
          </div>
        </div>
      </section>

      {/* Spec highlight */}
      <section className="section-padding bg-slate-50 dark:bg-slate-800">
        <div className="container-custom">
          <SectionHeader label="Our Standards" title="Civil & Structure Specifications" subtitle="Every residential project from Reddy Constructions is built to the highest structural standards." centered className="mb-14 max-w-2xl mx-auto text-center" />
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" staggerDelay={0.06}>
            {specs.specs.map((s) => (
              <StaggerItem key={s}>
                <div className="flex items-start gap-3 bg-white dark:bg-slate-700 p-5 rounded-xl border border-slate-100 dark:border-slate-600">
                  <CheckCircle size={16} className="text-brand-blue flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700 dark:text-slate-300">{s}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Projects */}
      <section className="section-padding bg-white dark:bg-slate-900">
        <div className="container-custom">
          <SectionHeader label="Our Work" title="Residential Projects" centered className="mb-12 max-w-xl mx-auto text-center" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {residentialProjects.map((p, i) => (
              <RevealText key={p.id} delay={i * 0.08}><ProjectCard project={p} /></RevealText>
            ))}
          </div>
        </div>
      </section>

      <CTABanner title="Ready to Build Your Home?" subtitle="Get a free site visit and detailed cost estimate for your residential project." primaryLabel="Get Free Estimate" primaryHref="/contact" />
    </>
  );
}

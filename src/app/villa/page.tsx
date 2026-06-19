import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { RevealText, StaggerChildren, StaggerItem } from "@/components/animations/RevealText";
import { CTABanner } from "@/components/sections/CTABanner";
import { PROJECTS } from "@/data/projects";
import { CONSTRUCTION_SPECS } from "@/data/services";
import { CheckCircle, Star } from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Villa Projects",
  description: "Luxury villa construction in Bangalore — custom architectural design, marble flooring, SS glass railings, WPC gates, and premium finishes throughout.",
  alternates: { canonical: "https://reddyconstructions.in/villa" },
  openGraph: {
    title: "Luxury Villa Construction Bangalore | Reddy Constructions",
    description: "Custom-designed villas — marble flooring, SS glass railings, Royale Luxury paint, smart home provisions in Bangalore.",
    url: "https://reddyconstructions.in/villa",
  },
};

export default function VillaPage() {
  const villaProjects = PROJECTS.filter((p) => p.category === "villa");
  return (
    <>
      <PageHero label="Villa Projects" title="Luxury Villas Crafted with Elegance" subtitle="Every Reddy Constructions villa is a masterpiece — custom designed, meticulously built, and delivered with the finest materials and finishes." image="https://images.unsplash.com/photo-1613977257365-aaae5a9817ff?w=1400&h=700&fit=crop" />
      <section className="section-padding bg-white dark:bg-slate-900">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <RevealText direction="left">
              <div className="relative rounded-3xl shadow-luxury w-full h-[440px] overflow-hidden">
                <Image src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=700&h=500&fit=crop" alt="Luxury Villa" fill className="object-cover" sizes="(max-width:1024px) 100vw, 50vw" />
              </div>
            </RevealText>
            <div>
              <SectionHeader label="Premium Villa Construction" title="Where Luxury Meets Craftsmanship" subtitle="Our villa projects combine architectural brilliance with the finest construction materials. From custom 3D elevation design to marble flooring and SS glass railings — every detail is curated for a truly premium experience." />
              <RevealText delay={0.3} className="mt-8 space-y-3">
                {["Custom 3D architectural design", "Marble / granite flooring in all areas", "SS railing with glass on staircases", "Designer main gate with WPC cladding — ₹600/sqft", "Royale Luxury paint throughout", "Teak wood main door — ₹80,000", "UPVC windows with MS grills", "Dr.Fixit / Fosroc waterproofing", "Landscaping & garden design", "Smart home provisions"].map((f) => (
                  <div key={f} className="flex items-center gap-3">
                    <Star size={13} className="text-brand-yellow fill-brand-yellow flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300 text-sm">{f}</span>
                  </div>
                ))}
              </RevealText>
            </div>
          </div>
        </div>
      </section>
      <section className="section-padding bg-slate-50 dark:bg-slate-800">
        <div className="container-custom">
          <SectionHeader label="Luxury Features" title="Premium Villa Specifications" centered className="mb-12 max-w-xl mx-auto text-center" />
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-6" staggerDelay={0.08}>
            {[CONSTRUCTION_SPECS.flooringAndTiling, CONSTRUCTION_SPECS.doorsAndWindows, CONSTRUCTION_SPECS.fabrication, CONSTRUCTION_SPECS.painting].map((spec) => (
              <StaggerItem key={spec.title}>
                <div className="bg-white dark:bg-slate-700 rounded-2xl p-7 border border-slate-100 dark:border-slate-600 hover:shadow-luxury-sm hover:border-brand-blue/20 transition-all h-full">
                  <div className="flex items-center gap-3 mb-5 pb-4 border-b border-slate-100 dark:border-slate-600">
                    <div className="w-1.5 h-7 bg-brand-yellow rounded-full" />
                    <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-white">{spec.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {spec.specs.map((s) => <li key={s} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300"><CheckCircle size={13} className="text-brand-blue flex-shrink-0 mt-0.5" />{s}</li>)}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>
      <section className="section-padding bg-white dark:bg-slate-900">
        <div className="container-custom">
          <SectionHeader label="Our Villas" title="Villa Projects" centered className="mb-12 max-w-xl mx-auto text-center" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {villaProjects.map((p, i) => <RevealText key={p.id} delay={i * 0.1}><ProjectCard project={p} /></RevealText>)}
          </div>
        </div>
      </section>
      <CTABanner title="Build Your Dream Luxury Villa" subtitle="Let's design and build a villa that reflects your lifestyle and stands the test of time." primaryLabel="Start Your Villa Project" primaryHref="/contact" />
    </>
  );
}

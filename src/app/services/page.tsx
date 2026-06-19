import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { RevealText, StaggerChildren, StaggerItem } from "@/components/animations/RevealText";
import { CTABanner } from "@/components/sections/CTABanner";
import { SERVICES, CONSTRUCTION_SPECS } from "@/data/services";
import { CheckCircle } from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Construction Services",
  description: "Reddy Constructions offers Residential, Commercial, Villa, Resort construction, 2D/3D Plans, Interior Design, Renovation, and Site Inspections in Bangalore.",
  alternates: { canonical: "https://reddyconstructions.in/services" },
  openGraph: {
    title: "Construction Services | Reddy Constructions Bangalore",
    description: "Full-spectrum construction services — residential, commercial, villa, interior design & renovation in Bangalore.",
    url: "https://reddyconstructions.in/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        label="Our Services"
        title="Complete Construction Solutions"
        subtitle="From foundation to finishing — Reddy Constructions provides every service you need to build your perfect space."
        image="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1400&h=700&fit=crop"
      />

      {/* All Services */}
      <section className="section-padding bg-white dark:bg-slate-900">
        <div className="container-custom">
          <SectionHeader
            label="What We Offer"
            title="Our Services"
            subtitle="Every service is delivered with the same RC commitment — premium quality, transparent pricing, and on-time delivery."
            centered
            className="mb-16 max-w-2xl mx-auto text-center"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service, i) => (
              <RevealText key={service.id} delay={i * 0.04}>
                <ServiceCard service={service} variant="compact" className="h-full" />
              </RevealText>
            ))}
          </div>
        </div>
      </section>

      {/* Construction Specs */}
      <section id="specs" className="section-padding bg-slate-50 dark:bg-slate-800">
        <div className="container-custom">
          <SectionHeader
            label="Premium Specifications"
            title="What We Include in Every Project"
            subtitle="Transparency is our promise — here is exactly what goes into every Reddy Constructions project."
            centered
            className="mb-16 max-w-2xl mx-auto text-center"
          />

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.08}>
            {Object.values(CONSTRUCTION_SPECS).map((spec) => (
              <StaggerItem key={spec.title}>
                <div className="bg-white dark:bg-slate-700 rounded-2xl p-7 border border-slate-100 dark:border-slate-600 hover:shadow-luxury-sm hover:border-brand-blue/20 transition-all duration-300 h-full">
                  <div className="flex items-center gap-3 mb-5 pb-4 border-b border-slate-100 dark:border-slate-600">
                    <div className="w-2 h-8 bg-brand-yellow rounded-full" />
                    <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-white">{spec.title}</h3>
                  </div>
                  <ul className="space-y-2.5">
                    {spec.specs.map((s) => (
                      <li key={s} className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-300">
                        <CheckCircle size={14} className="text-brand-blue flex-shrink-0 mt-0.5" />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      <CTABanner
        title="Let's Discuss Your Project"
        subtitle="Get a free consultation and detailed cost estimate for your construction project."
        primaryLabel="Request a Quote"
        primaryHref="/contact"
      />
    </>
  );
}

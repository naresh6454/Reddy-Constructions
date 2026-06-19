import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { RevealText } from "@/components/animations/RevealText";
import { CTABanner } from "@/components/sections/CTABanner";
import { PROJECTS } from "@/data/projects";
import { CheckCircle } from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Commercial Construction",
  description: "Professional commercial construction in Bangalore — office buildings, retail spaces, and commercial complexes built to IS Code standards.",
  alternates: { canonical: "https://reddyconstructions.in/commercial" },
  openGraph: {
    title: "Commercial Construction Bangalore | Reddy Constructions",
    description: "Office buildings, retail complexes & commercial spaces — IS Code compliant, on-schedule delivery in Bangalore.",
    url: "https://reddyconstructions.in/commercial",
  },
};

const COMMERCIAL_FEATURES = [
  "Office buildings & IT parks", "Retail & shopping complexes", "Warehouses & industrial sheds",
  "Hotels & hospitality buildings", "Educational institutions", "Healthcare facilities",
  "G+1 to G+5 commercial floors", "Fire & safety compliance", "Modern façade design", "Full MEP systems",
];

export default function CommercialPage() {
  const projects = PROJECTS.filter((p) => p.category === "commercial");
  return (
    <>
      <PageHero label="Commercial Construction" title="Building Spaces Where Business Thrives" subtitle="Scalable, code-compliant, and beautifully designed commercial buildings — delivered on schedule and within budget." image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1400&h=700&fit=crop" />
      <section className="section-padding bg-white dark:bg-slate-900">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader label="Commercial Construction" title="Precision-Built Commercial Spaces" subtitle="We bring the same commitment to quality and transparency that defines our residential work to every commercial project — from small office buildings to large commercial complexes." />
              <RevealText delay={0.3} className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {COMMERCIAL_FEATURES.map((f) => (
                  <div key={f} className="flex items-center gap-2.5">
                    <CheckCircle size={14} className="text-brand-yellow flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300 text-sm">{f}</span>
                  </div>
                ))}
              </RevealText>
            </div>
            <RevealText direction="right">
              <div className="relative rounded-3xl shadow-luxury w-full h-[420px] overflow-hidden">
                <Image src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=700&h=500&fit=crop" alt="Commercial Construction" fill className="object-cover" sizes="(max-width:1024px) 100vw, 50vw" />
              </div>
            </RevealText>
          </div>
        </div>
      </section>
      <section className="section-padding bg-slate-50 dark:bg-slate-800">
        <div className="container-custom">
          <SectionHeader label="Our Work" title="Commercial Projects" centered className="mb-12 max-w-xl mx-auto text-center" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p, i) => <RevealText key={p.id} delay={i * 0.1}><ProjectCard project={p} /></RevealText>)}
          </div>
        </div>
      </section>
      <CTABanner title="Plan Your Commercial Project" subtitle="Get expert advice and a detailed estimate for your commercial construction project." primaryLabel="Request a Quote" primaryHref="/contact" />
    </>
  );
}

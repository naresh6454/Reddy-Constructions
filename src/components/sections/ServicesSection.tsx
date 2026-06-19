"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { RevealText } from "@/components/animations/RevealText";
import { SERVICES } from "@/data/services";

export function ServicesSection() {
  return (
    <section id="services" className="section-padding bg-slate-50 dark:bg-slate-800">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <SectionHeader
            label="What We Do"
            title="Comprehensive Construction Services"
            subtitle="From design to delivery — we handle every phase of your construction project with expertise and precision."
          />
          <RevealText delay={0.2}>
            <Link href="/services" className="btn-primary whitespace-nowrap">
              All Services <ArrowRight size={16} />
            </Link>
          </RevealText>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.slice(0, 8).map((service, i) => (
            <RevealText key={service.id} delay={i * 0.05}>
              <ServiceCard service={service} variant="compact" className="h-full" />
            </RevealText>
          ))}
        </div>
      </div>
    </section>
  );
}

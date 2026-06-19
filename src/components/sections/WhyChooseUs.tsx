"use client";
import { DollarSign, Package, Clock, Users, Shield, CheckSquare } from "lucide-react";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { RevealText, StaggerChildren, StaggerItem } from "@/components/animations/RevealText";
import { WHY_CHOOSE_US } from "@/data/company";

const ICON_MAP: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  DollarSign, Package, Clock, Users, Shield, CheckSquare,
};

export function WhyChooseUs() {
  return (
    <section className="section-padding bg-white dark:bg-slate-900">
      <div className="container-custom">
        <SectionHeader
          label="Why Reddy Constructions"
          title="The Right Choice for Your Dream Home"
          subtitle="Six compelling reasons why 150+ clients across Bangalore, Mysore, and Penakonda trust us with their most important investment."
          centered
          className="mb-16 max-w-2xl mx-auto text-center"
        />

        <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.08}>
          {WHY_CHOOSE_US.map((item, index) => {
            const Icon = ICON_MAP[item.icon] || Shield;
            return (
              <StaggerItem key={item.title}>
                <div className="group relative p-8 rounded-2xl border border-slate-100 dark:border-slate-700 hover:border-brand-blue/20 hover:shadow-luxury-sm transition-all duration-300 bg-white dark:bg-slate-800 overflow-hidden">
                  {/* Accent corner */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-brand-yellow/10 rounded-bl-3xl" />

                  {/* Step number */}
                  <span className="absolute top-6 right-6 text-5xl font-black text-slate-100 dark:text-slate-700 font-heading leading-none">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="w-14 h-14 bg-hero-gradient rounded-2xl flex items-center justify-center mb-6 shadow-luxury-sm group-hover:scale-110 transition-transform duration-300">
                    <Icon size={24} className="text-white" />
                  </div>

                  <h3 className="font-heading text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-brand-blue dark:group-hover:text-brand-yellow transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{item.description}</p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerChildren>
      </div>
    </section>
  );
}

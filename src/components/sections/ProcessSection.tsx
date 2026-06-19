"use client";
import { MessageSquare, PenTool, Calculator, HardHat, CheckCircle, Key } from "lucide-react";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { RevealText } from "@/components/animations/RevealText";
import { PROCESS_STEPS } from "@/data/company";
import { cn } from "@/utils";

const ICON_MAP: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  MessageSquare, PenTool, Calculator, HardHat, CheckCircle, Key,
};

export function ProcessSection() {
  return (
    <section className="section-padding bg-white dark:bg-slate-900">
      <div className="container-custom">
        <SectionHeader
          label="How We Work"
          title="Our Proven 6-Step Process"
          subtitle="From first consultation to final handover — a streamlined process designed to deliver your dream home on time and on budget."
          centered
          className="mb-16 max-w-2xl mx-auto text-center"
        />

        <div className="relative">
          {/* Connector line */}
          <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-blue/20 to-transparent hidden lg:block" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
            {PROCESS_STEPS.map((step, index) => {
              const Icon = ICON_MAP[step.icon] || CheckCircle;

              return (
                <RevealText key={step.step} delay={index * 0.1} className="relative">
                  <div className={cn(
                    "relative flex flex-col items-center text-center p-6 rounded-2xl border-2 transition-all duration-300 hover:shadow-luxury-sm group",
                    "border-slate-100 dark:border-slate-700 hover:border-brand-blue/30 bg-white dark:bg-slate-800"
                  )}>
                    {/* Step number */}
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-brand-yellow rounded-full flex items-center justify-center text-brand-blue font-black text-xs shadow-gold">
                      {step.step}
                    </div>

                    <div className="w-14 h-14 bg-brand-blue/10 rounded-2xl flex items-center justify-center mb-4 mt-4 group-hover:bg-brand-blue transition-colors duration-300">
                      <Icon size={22} className="text-brand-blue group-hover:text-white transition-colors duration-300" />
                    </div>

                    <h3 className="font-heading font-bold text-sm text-slate-900 dark:text-white mb-2 group-hover:text-brand-blue dark:group-hover:text-brand-yellow transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{step.description}</p>
                  </div>
                </RevealText>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

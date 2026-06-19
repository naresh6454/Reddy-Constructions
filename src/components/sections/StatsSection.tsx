"use client";
import { Building2, Calendar, Star, MapPin } from "lucide-react";
import { AnimatedCounter } from "@/components/animations/AnimatedCounter";
import { RevealText } from "@/components/animations/RevealText";
import { STATS } from "@/data/company";

const ICON_MAP: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Building2, Calendar, Star, MapPin,
};

export function StatsSection() {
  return (
    <section className="py-20 bg-hero-gradient relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }} />
      </div>

      <div className="container-custom relative z-10">
        <RevealText className="text-center mb-14">
          <span className="text-brand-yellow text-xs font-bold tracking-luxury uppercase">Our Numbers Speak</span>
          <h2 className="font-heading text-display-sm font-bold text-white mt-3">
            Proven Track Record of Excellence
          </h2>
        </RevealText>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((stat, index) => {
            const Icon = ICON_MAP[stat.icon] || Building2;
            return (
              <RevealText key={stat.label} delay={index * 0.1}>
                <div className="stat-card bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="w-14 h-14 bg-brand-yellow/20 rounded-2xl flex items-center justify-center mx-auto mb-5">
                    <Icon size={26} className="text-brand-yellow" />
                  </div>
                  <p className="font-heading text-4xl lg:text-5xl font-black text-white mb-2">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} duration={2200} />
                  </p>
                  <p className="text-white/60 text-sm font-medium">{stat.label}</p>
                </div>
              </RevealText>
            );
          })}
        </div>
      </div>
    </section>
  );
}

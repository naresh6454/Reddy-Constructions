"use client";
import { RevealText } from "@/components/animations/RevealText";
import { cn } from "@/utils";

interface SectionHeaderProps {
  label?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

export function SectionHeader({ label, title, subtitle, centered = false, light = false, className }: SectionHeaderProps) {
  return (
    <div className={cn("max-w-3xl", centered && "mx-auto text-center", className)}>
      {label && (
        <RevealText delay={0}>
          <div className={cn("flex items-center gap-3 mb-4", centered && "justify-center")}>
            <div className="gold-line" />
            <span className="text-xs font-bold tracking-luxury uppercase text-brand-yellow">
              {label}
            </span>
            <div className="gold-line" />
          </div>
        </RevealText>
      )}
      <RevealText delay={0.1}>
        <h2 className={cn(
          "font-heading text-display-md font-bold leading-tight",
          light ? "text-white" : "text-slate-900 dark:text-white"
        )}>
          {title}
        </h2>
      </RevealText>
      {subtitle && (
        <RevealText delay={0.2}>
          <p className={cn(
            "mt-4 text-lg leading-relaxed",
            light ? "text-white/70" : "text-slate-600 dark:text-slate-300"
          )}>
            {subtitle}
          </p>
        </RevealText>
      )}
    </div>
  );
}

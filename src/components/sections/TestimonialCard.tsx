"use client";
import { Star, Quote } from "lucide-react";
import { cn } from "@/utils";
import type { Testimonial } from "@/types";

interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
}

export function TestimonialCard({ testimonial, className }: TestimonialCardProps) {
  return (
    <div className={cn("bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-luxury-sm border border-slate-100 dark:border-slate-700 h-full flex flex-col", className)}>
      {/* Quote icon */}
      <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center mb-6">
        <Quote size={20} className="text-brand-blue" />
      </div>

      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} size={16} className="text-brand-yellow fill-brand-yellow" />
        ))}
      </div>

      {/* Review */}
      <blockquote className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed flex-1 mb-6 italic">
        &ldquo;{testimonial.review}&rdquo;
      </blockquote>

      {/* Client Info */}
      <div className="flex items-center gap-3 pt-6 border-t border-slate-100 dark:border-slate-700">
        <div className="w-12 h-12 bg-brand-blue rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
          {testimonial.clientName.charAt(0)}
        </div>
        <div>
          <p className="font-semibold text-slate-900 dark:text-white text-sm">{testimonial.clientName}</p>
          <p className="text-xs text-slate-500 dark:text-slate-400">{testimonial.location}</p>
          <p className="text-xs text-brand-blue font-medium mt-0.5">{testimonial.projectType}</p>
        </div>
      </div>
    </div>
  );
}

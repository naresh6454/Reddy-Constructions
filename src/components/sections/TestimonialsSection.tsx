"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { TestimonialCard } from "@/components/sections/TestimonialCard";
import { TESTIMONIALS } from "@/data/company";

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const perPage = 3;
  const totalPages = Math.ceil(TESTIMONIALS.length / perPage);

  const prev = () => setCurrent((c) => Math.max(0, c - 1));
  const next = () => setCurrent((c) => Math.min(totalPages - 1, c + 1));
  const visible = TESTIMONIALS.slice(current * perPage, current * perPage + perPage);

  return (
    <section className="section-padding bg-white dark:bg-slate-900">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          <SectionHeader
            label="Client Stories"
            title="What Our Clients Say"
            subtitle="150+ satisfied homeowners and businesses across Bangalore, Mysore, and Penakonda trust Reddy Constructions."
          />
          <div className="flex gap-3">
            <button
              onClick={prev}
              disabled={current === 0}
              className="w-12 h-12 rounded-full border-2 border-slate-200 dark:border-slate-600 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:border-brand-blue hover:text-brand-blue disabled:opacity-40 disabled:cursor-not-allowed transition-all"
              aria-label="Previous testimonials"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              disabled={current === totalPages - 1}
              className="w-12 h-12 rounded-full border-2 border-slate-200 dark:border-slate-600 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:border-brand-blue hover:text-brand-blue disabled:opacity-40 disabled:cursor-not-allowed transition-all"
              aria-label="Next testimonials"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Testimonials grid — CSS fade on page change */}
        <div
          key={current}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in"
        >
          {visible.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>

        {/* Page dots */}
        <div className="flex justify-center gap-2 mt-10">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to page ${i + 1}`}
              className={`rounded-full transition-all duration-200 ${
                i === current
                  ? "w-6 h-2.5 bg-brand-blue"
                  : "w-2.5 h-2.5 bg-slate-300 dark:bg-slate-600 hover:bg-slate-400 dark:hover:bg-slate-500"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

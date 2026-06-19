"use client";
import { useState } from "react";
import { PageHero } from "@/components/sections/PageHero";
import { RevealText } from "@/components/animations/RevealText";
import { CTABanner } from "@/components/sections/CTABanner";
import { GALLERY_IMAGES } from "@/data/projects";
import { X, ZoomIn } from "lucide-react";

const FILTERS = ["all", "exterior", "interior", "villa", "commercial", "residential"];

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered =
    activeFilter === "all"
      ? GALLERY_IMAGES
      : GALLERY_IMAGES.filter((img) => img.category === activeFilter);

  return (
    <>
      <PageHero
        label="Gallery"
        title="Our Work in Pictures"
        subtitle="Browse through our portfolio of completed projects — exteriors, interiors, villas, and commercial spaces built by Reddy Constructions."
        image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&h=700&fit=crop"
      />

      <section className="section-padding bg-white dark:bg-slate-900">
        <div className="container-custom">
          {/* Filters */}
          <RevealText className="flex flex-wrap gap-3 mb-10 justify-center">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold capitalize transition-all duration-200 ${
                  activeFilter === f
                    ? "bg-brand-blue text-white shadow-luxury-sm"
                    : "bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600"
                }`}
              >
                {f === "all" ? "All Photos" : f}
              </button>
            ))}
          </RevealText>

          {/* Masonry Grid — CSS fade instead of framer-motion */}
          <div
            key={activeFilter}
            className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 animate-fade-in"
          >
            {filtered.map((img) => (
              <div
                key={img.id}
                className="relative group overflow-hidden rounded-2xl break-inside-avoid cursor-pointer hover:scale-[1.01] transition-transform duration-300"
                onClick={() => setLightbox(img.url)}
              >
                <img
                  src={img.url}
                  alt={img.alt}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-brand-blue/0 group-hover:bg-brand-blue/40 transition-all duration-300 flex items-center justify-center">
                  <ZoomIn size={28} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black/70 to-transparent">
                  <p className="text-white text-sm font-medium">{img.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox — CSS transition */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-white hover:text-brand-yellow transition-colors"
            onClick={() => setLightbox(null)}
          >
            <X size={32} />
          </button>
          <img
            src={lightbox}
            alt="Gallery"
            className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <CTABanner
        title="Like What You See?"
        subtitle="Let's build something even more beautiful for you. Get in touch for a free consultation."
        primaryLabel="Get a Free Quote"
        primaryHref="/contact"
      />
    </>
  );
}

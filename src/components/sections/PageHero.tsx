import Image from "next/image";
import { Home, ChevronRight } from "lucide-react";
import Link from "next/link";

interface PageHeroProps {
  label: string;
  title: string;
  subtitle?: string;
  image?: string;
  breadcrumbs?: { label: string; href: string }[];
}

export function PageHero({ label, title, subtitle, image, breadcrumbs }: PageHeroProps) {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-hero-gradient">
      {image && (
        <div className="absolute inset-0">
          <Image
            src={image}
            alt={title}
            fill
            priority
            className="object-cover opacity-15"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-hero-gradient opacity-90" />
        </div>
      )}

      <div className="container-custom relative z-10">
        <div
          className="flex items-center gap-2 text-white/50 text-sm mb-8 animate-fade-in"
          style={{ animationDuration: "0.5s", animationFillMode: "both" }}
        >
          <Link href="/" className="hover:text-white transition-colors flex items-center gap-1">
            <Home size={13} /> Home
          </Link>
          {breadcrumbs?.map((crumb) => (
            <span key={crumb.href} className="flex items-center gap-2">
              <ChevronRight size={13} />
              <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link>
            </span>
          ))}
          <span className="flex items-center gap-2">
            <ChevronRight size={13} />
            <span className="text-white/80">{label}</span>
          </span>
        </div>

        <div
          className="max-w-3xl animate-slide-up"
          style={{ animationDuration: "0.6s", animationDelay: "0.1s", animationFillMode: "both" }}
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="gold-line" />
            <span className="text-brand-yellow text-xs font-bold tracking-luxury uppercase">{label}</span>
          </div>
          <h1 className="font-heading text-display-lg font-black text-white mb-4">{title}</h1>
          {subtitle && (
            <p className="text-white/70 text-lg leading-relaxed max-w-2xl">{subtitle}</p>
          )}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 60L1440 60L1440 30C1200 60 720 0 0 30L0 60Z" className="fill-white dark:fill-slate-900" />
        </svg>
      </div>
    </section>
  );
}

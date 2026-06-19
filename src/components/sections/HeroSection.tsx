"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star, CheckCircle } from "lucide-react";
import { cn } from "@/utils";

const HERO_FEATURES = [
  "150+ Projects Completed",
  "100% Client Satisfaction",
  "On-Time Delivery",
];

export function HeroSection() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // rAF ensures first paint has happened before animations start
    const id = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const up = (delay: number, extra = "") =>
    ({
      className: cn(
        "transition-all ease-out duration-700",
        ready ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
        extra
      ),
      style: { transitionDelay: ready ? `${delay}ms` : "0ms" },
    }) as React.HTMLAttributes<HTMLElement>;

  const right = (delay: number, extra = "") =>
    ({
      className: cn(
        "transition-all ease-out duration-700",
        ready ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10",
        extra
      ),
      style: { transitionDelay: ready ? `${delay}ms` : "0ms" },
    }) as React.HTMLAttributes<HTMLElement>;

  return (
    <section className="relative flex items-center overflow-hidden bg-hero-gradient lg:min-h-screen">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-blue via-brand-blue-dark to-[#051f4d] opacity-100" />

      <div className="container-custom relative z-10 pt-28 pb-20 lg:pt-24 lg:pb-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: Text Content */}
          <div>
            {/* Badge */}
            <div
              {...up(0, "inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8")}
            >
              <Star size={14} className="text-brand-yellow fill-brand-yellow" />
              <span className="text-white/90 text-xs font-semibold tracking-luxury uppercase">
                Bangalore&apos;s Trusted Construction Partner
              </span>
            </div>

            {/* Heading */}
            <h1
              {...up(120, "font-heading text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-tight mb-6")}
            >
              Building Your{" "}
              <span className="gradient-text-gold">Dream</span>{" "}
              Home with Excellence
            </h1>

            {/* Tagline */}
            <p
              {...up(280, "text-white/75 text-lg leading-relaxed mb-8 max-w-xl")}
            >
              <span className="font-bold text-brand-yellow">Reddy Constructions</span>, established in 2021, is a trusted name in the construction industry, combining technical expertise, superior craftsmanship, and client-focused service to deliver outstanding residential, commercial, and renovation projects across Bangalore, Mysore, and Penakonda. Under the experienced leadership of <span className="font-bold text-brand-yellow">Mr. Devraj Reddy</span>, we are committed to quality, integrity, and excellence in every project we undertake.
            </p>

            {/* Features */}
            <div {...up(400, "flex flex-wrap gap-4 mb-10")}>
              {HERO_FEATURES.map((feature) => (
                <div key={feature} className="flex items-center gap-2">
                  <CheckCircle size={15} className="text-brand-yellow" />
                  <span className="text-white/80 text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div {...up(500, "flex flex-wrap gap-4")}>
              <Link href="/contact" className="btn-gold">
                Get Free Quote <ArrowRight size={16} />
              </Link>
              <Link href="/projects/completed" className="btn-outline-white">
                Our Projects <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* Right: Cards */}
          <div className="relative hidden lg:block">
            {/* Main image */}
            <div {...right(300, "relative rounded-3xl overflow-hidden shadow-2xl h-[460px]")}>
              <Image
                src="https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?w=900&h=700&fit=crop"
                alt="Premium Construction by Reddy Constructions"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 0px, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/60 to-transparent" />
            </div>

            {/* Stat card 1 */}
            <div {...up(600, "absolute -left-12 top-8 bg-white rounded-2xl p-5 shadow-luxury")}>
              <p className="text-3xl font-black text-brand-blue font-heading">150+</p>
              <p className="text-xs text-slate-500 font-medium mt-0.5">Projects Delivered</p>
            </div>

            {/* Stat card 2 */}
            <div {...up(750, "absolute -right-8 bottom-16 bg-brand-yellow rounded-2xl p-5 shadow-gold")}>
              <p className="text-3xl font-black text-brand-blue font-heading">100%</p>
              <p className="text-xs text-brand-blue/70 font-medium mt-0.5">Client Satisfaction</p>
            </div>

            {/* Floating badge */}
            <div {...up(900, "absolute left-4 bottom-4 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-luxury")}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
                  <CheckCircle size={18} className="text-emerald-600" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">Est. 2021</p>
                  <p className="text-xs text-slate-500">Bangalore Based</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 80L1440 80L1440 40C1200 80 720 0 0 40L0 80Z" className="fill-white dark:fill-slate-900" />
        </svg>
      </div>
    </section>
  );
}

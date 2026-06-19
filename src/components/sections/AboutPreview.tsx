"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, Users, Clock } from "lucide-react";
import { RevealText, StaggerChildren, StaggerItem } from "@/components/animations/RevealText";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { COMPANY_INFO } from "@/data/company";

const HIGHLIGHTS = [
  { icon: Award, label: "Premium Quality", desc: "Only top-grade materials" },
  { icon: Users, label: "Expert Team", desc: "Passionate engineers & contractors" },
  { icon: Clock, label: "On-Time", desc: "Proven track record" },
];

export function AboutPreview() {
  return (
    <section className="section-padding bg-white dark:bg-slate-900">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image composition */}
          <div className="relative pb-10 lg:pb-12 pr-0 lg:pr-10">
            <RevealText direction="left">
              <div className="relative rounded-3xl overflow-hidden shadow-luxury h-[400px] sm:h-[480px]">
                <Image
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=700&h=600&fit=crop"
                  alt="Reddy Constructions team at work"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/20 to-transparent" />
              </div>
            </RevealText>

            {/* Floating card — inside bounds on mobile, outside on desktop */}
            <div className="absolute bottom-0 right-0 lg:-bottom-8 lg:-right-8 bg-brand-blue text-white rounded-2xl p-4 lg:p-6 shadow-luxury max-w-[200px] lg:max-w-xs">
              <p className="font-heading text-3xl lg:text-4xl font-black mb-1">150+</p>
              <p className="text-white/70 text-xs lg:text-sm">Successfully Completed Projects Across Bangalore, Mysore &amp; Penakonda</p>
            </div>

            {/* Year badge — inside bounds on mobile */}
            <div className="absolute top-0 left-0 lg:-top-4 lg:-left-4 bg-brand-yellow rounded-2xl p-3 lg:p-4 shadow-gold">
              <p className="font-heading text-xl lg:text-2xl font-black text-brand-blue">2021</p>
              <p className="text-brand-blue/70 text-xs font-medium">Established</p>
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <SectionHeader
              label="About Reddy Constructions"
              title="Building Trust, One Project at a Time"
              subtitle={COMPANY_INFO.longDescription}
            />

            <StaggerChildren className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10 mb-10" staggerDelay={0.12}>
              {HIGHLIGHTS.map((item) => (
                <StaggerItem key={item.label}>
                  <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-5 border border-slate-100 dark:border-slate-700 hover:border-brand-blue/20 hover:shadow-luxury-sm transition-all duration-300">
                    <div className="w-10 h-10 bg-brand-blue/10 rounded-xl flex items-center justify-center mb-3">
                      <item.icon size={18} className="text-brand-blue" />
                    </div>
                    <p className="font-semibold text-slate-900 dark:text-white text-sm">{item.label}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{item.desc}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>

            <RevealText delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/about" className="btn-primary">
                  Learn More About Us <ArrowRight size={16} />
                </Link>
                <Link href="/contact" className="btn-outline">
                  Contact Us
                </Link>
              </div>
            </RevealText>
          </div>
        </div>
      </div>
    </section>
  );
}

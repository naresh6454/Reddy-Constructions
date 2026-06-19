import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { StaggerChildren, StaggerItem, RevealText } from "@/components/animations/RevealText";
import { StatsSection } from "@/components/sections/StatsSection";
import { CTABanner } from "@/components/sections/CTABanner";
import { COMPANY_INFO, TEAM_MEMBERS, WHY_CHOOSE_US } from "@/data/company";
import { DollarSign, Package, Clock, Users, Shield, CheckSquare } from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Reddy Constructions — established in 2021, delivering 150+ projects across Bangalore, Mysore, and Penakonda with 100% client satisfaction.",
  alternates: { canonical: "https://reddyconstructions.in/about" },
  openGraph: {
    title: "About Reddy Constructions | Our Story & Team",
    description: "Established 2021 — 150+ projects, expert team of engineers & architects serving Bangalore, Mysore & Penakonda.",
    url: "https://reddyconstructions.in/about",
  },
};

const ICON_MAP: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  DollarSign, Package, Clock, Users, Shield, CheckSquare,
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="About Us"
        title="Our Story, Our Mission"
        subtitle="Since 2021, Reddy Constructions has been building more than structures — we build trust, deliver dreams, and create lasting legacies across Bangalore, Mysore, and Penakonda."
        image="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1400&h=700&fit=crop"
      />

      {/* Story Section */}
      <section className="section-padding bg-white dark:bg-slate-900">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader
                label="Our Overview"
                title="Who We Are"
              />
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base mt-4 text-justify">
                <span className="font-bold text-brand-blue">Reddy Constructions</span>, established in 2021, is a trusted name in the construction industry, combining technical expertise, superior craftsmanship, and client-focused service to deliver outstanding residential, commercial, and renovation projects across Bangalore, Mysore, and Penakonda. Under the experienced leadership of <span className="font-bold text-brand-blue">Mr. Devraj Reddy</span>, we are committed to quality, integrity, and excellence in every project we undertake.
              </p>
              <RevealText delay={0.3} className="mt-6">
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{COMPANY_INFO.longDescription}</p>
              </RevealText>
              <RevealText delay={0.4} className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { label: "Established", value: "2021" },
                  { label: "Projects Completed", value: "150+" },
                  { label: "Cities Served", value: "3+" },
                  { label: "Client Satisfaction", value: "100%" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-slate-50 dark:bg-slate-700 rounded-xl p-5 border border-slate-100 dark:border-slate-600">
                    <p className="font-heading text-3xl font-black text-brand-blue">{stat.value}</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{stat.label}</p>
                  </div>
                ))}
              </RevealText>
            </div>
            <RevealText direction="right">
              <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-luxury">
                <Image
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=700&h=600&fit=crop"
                  alt="Reddy Constructions Team"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </RevealText>
          </div>
        </div>
      </section>

      <StatsSection />

      {/* Why Choose Us */}
      <section id="why-us" className="section-padding bg-slate-50 dark:bg-slate-800">
        <div className="container-custom">
          <SectionHeader
            label="Why Choose Us"
            title="What Sets Us Apart"
            subtitle="Our commitment to quality, transparency, and client satisfaction makes Reddy Constructions the right choice for your dream home."
            centered
            className="mb-16 max-w-2xl mx-auto text-center"
          />
          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.08}>
            {WHY_CHOOSE_US.map((item) => {
              const Icon = ICON_MAP[item.icon] || Shield;
              return (
                <StaggerItem key={item.title}>
                  <div className="bg-white dark:bg-slate-700 rounded-2xl p-7 border border-slate-100 dark:border-slate-600 hover:shadow-luxury-sm hover:border-brand-blue/20 transition-all duration-300">
                    <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center mb-5">
                      <Icon size={20} className="text-brand-blue" />
                    </div>
                    <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-white mb-2">{item.title}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{item.description}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerChildren>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="section-padding bg-white dark:bg-slate-900">
        <div className="container-custom">
          <SectionHeader
            label="Our Team"
            title="Meet the Experts Behind Your Dream Home"
            subtitle="Our passionate team of engineers, architects, and designers work together to bring your vision to life."
            centered
            className="mb-16 max-w-2xl mx-auto text-center"
          />
          <StaggerChildren className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6" staggerDelay={0.1}>
            {TEAM_MEMBERS.map((member) => (
              <StaggerItem key={member.id}>
                <div className="group text-center">
                  <div className="relative w-full aspect-[4/5] mb-4 rounded-2xl overflow-hidden shadow-luxury-sm group-hover:shadow-luxury transition-shadow duration-300">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                    />
                    <div className="absolute inset-0 bg-brand-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <h3 className="font-heading text-sm font-bold text-slate-900 dark:text-white group-hover:text-brand-blue dark:group-hover:text-brand-yellow transition-colors">{member.name}</h3>
                  <p className="text-brand-yellow font-semibold text-xs mb-2">{member.role}</p>
                  <div className="flex flex-wrap gap-1 justify-center">
                    {member.specialization.map((s) => (
                      <span key={s} className="px-2 py-0.5 bg-brand-blue/10 dark:bg-brand-blue/20 text-brand-blue dark:text-blue-300 text-xs rounded-full">{s}</span>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      <CTABanner />
    </>
  );
}

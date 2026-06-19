"use client";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import { RevealText, StaggerChildren, StaggerItem } from "@/components/animations/RevealText";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { COMPANY_INFO } from "@/data/company";

const CONTACT_ITEMS = [
  { icon: Phone, label: "Phone", value: COMPANY_INFO.phone, href: `tel:${COMPANY_INFO.phone}` },
  { icon: Mail, label: "Email", value: COMPANY_INFO.email, href: `mailto:${COMPANY_INFO.email}` },
  { icon: MapPin, label: "Address", value: COMPANY_INFO.address, href: "#" },
  { icon: Clock, label: "Working Hours", value: "Mon–Sat: 9AM – 7PM", href: "#" },
];

export function ContactPreview() {
  return (
    <section className="section-padding bg-white dark:bg-slate-900">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeader
              label="Get In Touch"
              title="Let's Build Something Great Together"
              subtitle="Have a project in mind? Reach out to our team for a free consultation, site visit, and detailed estimate."
            />

            <StaggerChildren className="mt-10 space-y-5" staggerDelay={0.1}>
              {CONTACT_ITEMS.map((item) => (
                <StaggerItem key={item.label}>
                  <a
                    href={item.href}
                    className="flex items-start gap-4 p-5 rounded-2xl border border-slate-100 dark:border-slate-700 hover:border-brand-blue/20 hover:shadow-luxury-sm transition-all duration-300 group dark:bg-slate-800"
                  >
                    <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-brand-blue transition-colors duration-300">
                      <item.icon size={18} className="text-brand-blue group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 dark:text-slate-500 font-medium uppercase tracking-wider mb-1">{item.label}</p>
                      <p className="text-slate-800 dark:text-slate-200 font-medium text-sm leading-relaxed">{item.value}</p>
                    </div>
                  </a>
                </StaggerItem>
              ))}
            </StaggerChildren>

            <RevealText delay={0.4} className="mt-8">
              <Link href="/contact" className="btn-primary">
                Send an Inquiry <ArrowRight size={16} />
              </Link>
            </RevealText>
          </div>

          {/* Office image — optimized with next/image */}
          <RevealText direction="right">
            <div className="relative rounded-3xl overflow-hidden shadow-luxury">
              <Image
                src="/images/office-rc.jpeg"
                alt="Reddy Constructions Office"
                width={1200}
                height={800}
                className="w-full h-auto block"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-white font-heading text-xl font-bold mb-2">Visit Our Office</p>
                <p className="text-white/70 text-sm">{COMPANY_INFO.address}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {COMPANY_INFO.serviceAreas.map((area) => (
                    <span key={area} className="px-3 py-1 bg-brand-yellow/20 backdrop-blur-sm border border-brand-yellow/30 text-brand-yellow text-xs font-semibold rounded-full">
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </RevealText>
        </div>
      </div>
    </section>
  );
}

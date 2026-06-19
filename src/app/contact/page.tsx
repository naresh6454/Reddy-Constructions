import type { Metadata } from "next";
import dynamicImport from "next/dynamic";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { StaggerChildren, StaggerItem, RevealText } from "@/components/animations/RevealText";
import { COMPANY_INFO } from "@/data/company";
import { getWhatsAppLink } from "@/utils";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact Reddy Constructions for a free consultation, site visit, or project estimate. Call +91 7892899480 or email reddyconstructions@gmail.com.",
  alternates: { canonical: "https://reddyconstructions.in/contact" },
  openGraph: {
    title: "Contact Reddy Constructions | Free Consultation",
    description: "Get a free site visit and project estimate. Serving Bangalore, Mysore & Penakonda.",
    url: "https://reddyconstructions.in/contact",
  },
};

// Lazy-load the heavy form (react-hook-form + zod) — only downloaded when page opens
const ContactForm = dynamicImport(
  () => import("@/components/sections/ContactForm").then((m) => m.ContactForm),
  {
    loading: () => (
      <div className="space-y-5 animate-pulse">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="h-12 bg-slate-100 rounded-xl" />
        ))}
        <div className="h-24 bg-slate-100 rounded-xl" />
        <div className="h-12 bg-brand-blue/20 rounded-full" />
      </div>
    ),
  }
);

const CONTACT_DETAILS = [
  { icon: Phone, label: "Phone", value: COMPANY_INFO.phone, href: `tel:${COMPANY_INFO.phone}`, action: "Call Now" },
  { icon: Mail, label: "Email", value: COMPANY_INFO.email, href: `mailto:${COMPANY_INFO.email}`, action: "Send Email" },
  { icon: MapPin, label: "Office", value: COMPANY_INFO.address, href: "#map", action: "Get Directions" },
  { icon: Clock, label: "Working Hours", value: "Monday – Saturday: 9:00 AM – 7:00 PM", href: "#", action: "" },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="Contact Us"
        title="Let's Start Building Together"
        subtitle="Reach out for a free consultation, site visit, or project estimate. Our team responds within 24 hours."
        image="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&h=700&fit=crop"
      />

      <section className="section-padding bg-white dark:bg-slate-900">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info — server rendered */}
            <div className="lg:col-span-2">
              <SectionHeader
                label="Get in Touch"
                title="We're Here to Help"
                subtitle="Talk to our construction experts — we'll guide you through every step of your project."
                className="mb-8"
              />

              <StaggerChildren className="space-y-4 mb-8" staggerDelay={0.08}>
                {CONTACT_DETAILS.map((item) => (
                  <StaggerItem key={item.label}>
                    <a
                      href={item.href}
                      className="flex items-start gap-4 p-5 rounded-2xl border border-slate-100 dark:border-slate-700 dark:bg-slate-800 hover:border-brand-blue/20 hover:shadow-luxury-sm transition-all group"
                    >
                      <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-brand-blue transition-colors">
                        <item.icon size={18} className="text-brand-blue group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1">{item.label}</p>
                        <p className="text-sm text-slate-800 dark:text-slate-200 font-medium leading-relaxed">{item.value}</p>
                        {item.action && (
                          <p className="text-xs text-brand-blue font-semibold mt-1">{item.action} →</p>
                        )}
                      </div>
                    </a>
                  </StaggerItem>
                ))}
              </StaggerChildren>

              {/* WhatsApp CTA */}
              <RevealText delay={0.3}>
                <a
                  href={getWhatsAppLink(
                    COMPANY_INFO.whatsapp,
                    "Hello! I'd like to enquire about your construction services."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-5 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-2xl hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors"
                >
                  <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                    <MessageCircle size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-green-900 dark:text-green-300">Chat on WhatsApp</p>
                    <p className="text-xs text-green-700 dark:text-green-400">Get instant replies from our team</p>
                  </div>
                </a>
              </RevealText>

              {/* Service Areas */}
              <RevealText delay={0.4} className="mt-8 p-5 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700">
                <p className="text-xs text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-3">Service Areas</p>
                <div className="flex flex-wrap gap-2">
                  {COMPANY_INFO.serviceAreas.map((area) => (
                    <span key={area} className="px-3 py-1.5 bg-brand-blue/10 dark:bg-brand-blue/20 text-brand-blue dark:text-blue-300 text-sm font-semibold rounded-full">
                      {area}
                    </span>
                  ))}
                </div>
              </RevealText>
            </div>

            {/* Contact Form — lazy loaded separately */}
            <div className="lg:col-span-3">
              <RevealText direction="right">
                <div className="bg-white dark:bg-slate-800 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-luxury-sm p-8 lg:p-10">
                  <ContactForm />
                </div>
              </RevealText>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

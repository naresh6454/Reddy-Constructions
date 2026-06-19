"use client";
import Link from "next/link";
import { Phone, ArrowRight, MessageCircle } from "lucide-react";
import { RevealText } from "@/components/animations/RevealText";
import { COMPANY_INFO } from "@/data/company";
import { getWhatsAppLink } from "@/utils";

interface CTABannerProps {
  title?: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryHref?: string;
}

export function CTABanner({
  title = "Ready to Build Your Dream Home?",
  subtitle = "Get a free consultation and detailed project estimate. Our team is ready to bring your vision to life.",
  primaryLabel = "Get Free Quote",
  primaryHref = "/contact",
}: CTABannerProps) {
  return (
    <section className="py-24 bg-hero-gradient relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-brand-yellow/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-white/5 rounded-full blur-2xl" />

      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <RevealText>
            <span className="inline-block px-4 py-2 bg-brand-yellow/20 text-brand-yellow text-xs font-bold tracking-luxury uppercase rounded-full mb-6">
              Start Your Project Today
            </span>
          </RevealText>

          <RevealText delay={0.1}>
            <h2 className="font-heading text-display-md font-black text-white mb-6">{title}</h2>
          </RevealText>

          <RevealText delay={0.2}>
            <p className="text-white/70 text-lg leading-relaxed mb-10">{subtitle}</p>
          </RevealText>

          <RevealText delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={primaryHref} className="btn-gold">
                {primaryLabel} <ArrowRight size={16} />
              </Link>
              <a href={`tel:${COMPANY_INFO.phone}`} className="btn-outline-white">
                <Phone size={16} /> Call {COMPANY_INFO.phone}
              </a>
              <a
                href={getWhatsAppLink(COMPANY_INFO.whatsapp)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold text-sm tracking-wide uppercase transition-all duration-300 hover:-translate-y-0.5"
              >
                <MessageCircle size={16} /> WhatsApp Us
              </a>
            </div>
          </RevealText>
        </div>
      </div>
    </section>
  );
}

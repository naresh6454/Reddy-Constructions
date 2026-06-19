import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Youtube, Instagram, ArrowRight } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-white">
      {/* Top CTA Strip */}
      <div className="bg-brand-blue">
        <div className="container-custom py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-heading text-2xl md:text-3xl font-bold">Ready to Build Your Dream Home?</h3>
              <p className="text-white/70 mt-1 text-sm">Get a free consultation and project estimate today.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href={`tel:${COMPANY_INFO.phone}`} className="btn-outline-white text-sm px-6 py-3">
                <Phone size={16} /> Call Now
              </a>
              <Link href="/contact" className="btn-gold text-sm px-6 py-3">
                Get Free Quote <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 flex-shrink-0 rounded-2xl overflow-hidden">
                <Image
                  src="/logo.png"
                  alt="Reddy Constructions Logo"
                  width={48}
                  height={48}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <div className="font-heading font-bold text-lg leading-none text-white">Reddy Constructions</div>
                <div className="text-xs text-white/50 mt-0.5">Right Choice For Reality Construction</div>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Building dreams since 2021. Premium construction services across Bangalore, Mysore, and Penakonda with 150+ successful projects.
            </p>
            <div className="flex gap-3">
              <a
                href={COMPANY_INFO.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-brand-yellow rounded-xl flex items-center justify-center transition-colors duration-200 group"
              >
                <Youtube size={18} className="text-white group-hover:text-brand-blue" />
              </a>
              <a
                href={COMPANY_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-brand-yellow rounded-xl flex items-center justify-center transition-colors duration-200 group"
              >
                <Instagram size={18} className="text-white group-hover:text-brand-blue" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: "About Us", href: "/about" },
                { label: "Our Services", href: "/services" },
                { label: "Ongoing Projects", href: "/projects/ongoing" },
                { label: "Completed Projects", href: "/projects/completed" },
                { label: "Achievements", href: "/blog" },
                { label: "Contact Us", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-brand-yellow transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-200" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6 text-white">Our Services</h4>
            <ul className="space-y-3">
              {[
                { label: "Residential Construction", href: "/residential" },
                { label: "Commercial Construction", href: "/commercial" },
                { label: "Villa Projects", href: "/villa" },
                { label: "Resort Construction", href: "/services" },
                { label: "2D & 3D Plans", href: "/services" },
                { label: "Interior Designs", href: "/services" },
                { label: "Renovation", href: "/services" },
                { label: "Site Inspections", href: "/services" },
              ].map((service) => (
                <li key={service.label}>
                  <Link
                    href={service.href}
                    className="text-sm text-white/60 hover:text-brand-yellow transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-200" />
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6 text-white">Contact Us</h4>
            <div className="space-y-5">
              <div className="flex gap-3">
                <div className="w-9 h-9 bg-brand-blue/30 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin size={15} className="text-brand-yellow" />
                </div>
                <div>
                  <p className="text-xs text-white/40 mb-1 uppercase tracking-wider">Address</p>
                  <p className="text-sm text-white/70 leading-relaxed">{COMPANY_INFO.address}</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-9 h-9 bg-brand-blue/30 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone size={15} className="text-brand-yellow" />
                </div>
                <div>
                  <p className="text-xs text-white/40 mb-1 uppercase tracking-wider">Phone</p>
                  <a href={`tel:${COMPANY_INFO.phone}`} className="text-sm text-white/70 hover:text-brand-yellow transition-colors">
                    {COMPANY_INFO.phone}
                  </a>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-9 h-9 bg-brand-blue/30 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail size={15} className="text-brand-yellow" />
                </div>
                <div>
                  <p className="text-xs text-white/40 mb-1 uppercase tracking-wider">Email</p>
                  <a href={`mailto:${COMPANY_INFO.email}`} className="text-sm text-white/70 hover:text-brand-yellow transition-colors">
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>
              <div className="pt-2">
                <p className="text-xs text-white/40 mb-2 uppercase tracking-wider">Service Areas</p>
                <div className="flex flex-wrap gap-2">
                  {COMPANY_INFO.serviceAreas.map((area) => (
                    <span key={area} className="px-3 py-1 bg-white/10 rounded-full text-xs text-white/70">
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            © {currentYear} Reddy Constructions. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-xs text-white/40 hover:text-white/70 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-xs text-white/40 hover:text-white/70 transition-colors">Terms of Service</Link>
            <Link href="/sitemap" className="text-xs text-white/40 hover:text-white/70 transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

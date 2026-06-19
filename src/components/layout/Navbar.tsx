"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { cn } from "@/utils";
import { COMPANY_INFO } from "@/data/company";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Our Story", href: "/about" },
      { label: "Our Team", href: "/about#team" },
      { label: "Why Choose Us", href: "/about#why-us" },
    ],
  },
  { label: "Services", href: "/#services" },
  {
    label: "Projects",
    href: "/projects/ongoing",
    children: [
      { label: "Ongoing Projects", href: "/projects/ongoing" },
      { label: "Completed Projects", href: "/projects/completed" },
    ],
  },
  { label: "Achievements", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
    setOpenSection(null);
  }, [pathname]);

  const solid = isScrolled || pathname !== "/";

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        solid
          ? "bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-sm border-b border-slate-100 dark:border-slate-700"
          : "bg-transparent"
      )}
    >
      <nav className="container-custom">
        <div className="flex items-center h-[72px] gap-4">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 flex-shrink-0">
            <div className="w-11 h-11 rounded-xl overflow-hidden flex-shrink-0">
              <Image
                src="/logo.png"
                alt="Reddy Constructions"
                width={44}
                height={44}
                className="w-full h-full object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span
                className={cn(
                  "font-heading font-bold text-lg leading-none transition-colors duration-300",
                  solid ? "text-brand-blue dark:text-white" : "text-white"
                )}
              >
                Reddy Constructions
              </span>
              <span
                className={cn(
                  "text-xs font-medium leading-none mt-1 transition-colors duration-300",
                  solid ? "text-slate-500 dark:text-slate-400" : "text-white/60"
                )}
              >
                Right Choice For Reality Construction
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center justify-center gap-0.5 flex-1">
            {NAV_ITEMS.map((item) =>
              item.children ? (
                <div key={item.href} className="relative group">
                  <button
                    className={cn(
                      "flex items-center gap-1 px-4 py-2 rounded-full text-[15px] font-medium transition-colors duration-200",
                      pathname === item.href || pathname.startsWith(item.href.split("#")[0] + "/")
                        ? "text-brand-yellow"
                        : solid
                          ? "text-slate-700 dark:text-slate-300 hover:text-brand-blue dark:hover:text-white hover:bg-brand-blue/5 dark:hover:bg-slate-700"
                          : "text-white/90 hover:text-white hover:bg-white/10"
                    )}
                  >
                    {item.label}
                    <ChevronDown size={13} className="opacity-60 group-hover:rotate-180 transition-transform duration-200" />
                  </button>
                  <div className="absolute top-full left-0 mt-1 w-52 bg-white dark:bg-slate-800 rounded-2xl shadow-luxury border border-slate-100 dark:border-slate-700 overflow-hidden opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 pointer-events-none group-hover:pointer-events-auto">
                    <div className="p-1.5">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-3.5 py-2.5 text-[14px] text-slate-700 dark:text-slate-300 hover:text-brand-blue dark:hover:text-white hover:bg-brand-blue/5 dark:hover:bg-slate-700 rounded-xl transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "px-4 py-2 rounded-full text-[15px] font-medium transition-colors duration-200",
                    pathname === item.href
                      ? "text-brand-yellow"
                      : solid
                        ? "text-slate-700 dark:text-slate-300 hover:text-brand-blue dark:hover:text-white hover:bg-brand-blue/5 dark:hover:bg-slate-700"
                        : "text-white/90 hover:text-white hover:bg-white/10"
                  )}
                >
                  {item.label}
                </Link>
              )
            )}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className={cn(
                "flex items-center gap-1.5 text-[15px] font-semibold transition-colors whitespace-nowrap",
                solid
                  ? "text-slate-700 dark:text-slate-300 hover:text-brand-blue dark:hover:text-white"
                  : "text-white hover:text-brand-yellow"
              )}
            >
              <Phone size={16} />
              {COMPANY_INFO.phone}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-brand-yellow text-brand-blue font-bold text-[15px] tracking-wide uppercase rounded-full whitespace-nowrap transition-all duration-300 hover:bg-brand-yellow-dark hover:shadow-gold hover:-translate-y-0.5 px-6 py-3"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile menu button — always visible with drop shadow so it shows on any background */}
          <button
            className={cn(
              "lg:hidden ml-auto p-2 rounded-xl transition-colors",
              solid
                ? "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700"
                : "text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)] hover:bg-white/10"
            )}
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Toggle menu"
          >
            {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-700",
          isMobileOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="container-custom py-4 space-y-1">
          {NAV_ITEMS.map((item) => (
            <div key={item.href}>
              {item.children ? (
                // Parent item with toggle — tap to expand/collapse sub-items
                <button
                  onClick={() => setOpenSection(openSection === item.href ? null : item.href)}
                  className={cn(
                    "w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-colors",
                    pathname === item.href || pathname.startsWith(item.href.split("#")[0] + "/")
                      ? "text-brand-blue bg-brand-blue/10 dark:bg-brand-blue/20"
                      : "text-slate-700 dark:text-slate-300 hover:text-brand-blue dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800"
                  )}
                >
                  {item.label}
                  <ChevronDown
                    size={16}
                    className={cn(
                      "opacity-60 transition-transform duration-200",
                      openSection === item.href ? "rotate-180" : ""
                    )}
                  />
                </button>
              ) : (
                <Link
                  href={item.href}
                  className={cn(
                    "block px-4 py-3 rounded-xl text-sm font-medium transition-colors",
                    pathname === item.href
                      ? "text-brand-blue bg-brand-blue/10 dark:bg-brand-blue/20"
                      : "text-slate-700 dark:text-slate-300 hover:text-brand-blue dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800"
                  )}
                >
                  {item.label}
                </Link>
              )}

              {/* Sub-items — only shown when this section is open */}
              {item.children && (
                <div
                  className={cn(
                    "overflow-hidden transition-all duration-200 ease-in-out",
                    openSection === item.href ? "max-h-60 opacity-100 mt-0.5" : "max-h-0 opacity-0"
                  )}
                >
                  <div className="ml-4 space-y-0.5 pb-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2 text-xs text-slate-500 dark:text-slate-400 hover:text-brand-blue dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
          <div className="pt-3 border-t border-slate-100 dark:border-slate-700 flex flex-col gap-2">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="flex items-center gap-2 px-4 py-3 text-sm font-semibold text-brand-blue dark:text-brand-yellow"
            >
              <Phone size={15} />
              {COMPANY_INFO.phone}
            </a>
            <Link href="/contact" className="btn-gold mx-4 justify-center">
              Get a Free Quote
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

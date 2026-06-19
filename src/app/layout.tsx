import type { Metadata, Viewport } from "next";
import { Inter, Montserrat } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "@/styles/globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Toaster } from "sonner";
import { FloatingDarkMode } from "@/components/ui/FloatingDarkMode";
import { LenisProvider } from "@/components/layout/LenisProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["600", "700", "800", "900"],
});

// ─── Viewport (separate from metadata to fix Next.js warnings) ───────────────
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0A3D91",
};

// ─── Global SEO Metadata ──────────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL("https://reddyconstructions.in"),
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  title: {
    default: "Reddy Constructions | Right Choice For Reality Construction Constructions",
    template: "%s | Reddy Constructions",
  },
  description:
    "Reddy Constructions — Premium construction company in Bangalore offering Residential, Commercial, Villa, and Resort construction services. 150+ projects delivered with 100% client satisfaction. Serving Bangalore, Mysore & Penakonda.",
  keywords: [
    "construction company bangalore",
    "residential construction bangalore",
    "villa construction bangalore",
    "commercial construction bangalore",
    "home construction bangalore",
    "reddy constructions",
    "construction contractor bangalore",
    "3D home design bangalore",
    "best construction company bangalore",
    "house construction cost bangalore",
  ],
  authors: [{ name: "Reddy Constructions" }],
  creator: "Reddy Constructions",
  publisher: "Reddy Constructions",
  alternates: {
    canonical: "https://reddyconstructions.in",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://reddyconstructions.in",
    siteName: "Reddy Constructions",
    title: "Reddy Constructions | Right Choice For Reality Construction Constructions",
    description:
      "Premium construction company in Bangalore — 150+ projects, 100% client satisfaction.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Reddy Constructions — Premium Construction in Bangalore",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Reddy Constructions | Right Choice For Reality Construction Constructions",
    description:
      "Premium construction company in Bangalore — 150+ projects, 100% satisfaction.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// ─── JSON-LD Local Business Structured Data ───────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  "@id": "https://reddyconstructions.in",
  name: "Reddy Constructions",
  alternateName: "RC Constructions",
  description:
    "Premium construction company in Bangalore offering Residential, Commercial, Villa construction services.",
  url: "https://reddyconstructions.in",
  telephone: "+917892899480",
  email: "reddyconstructions@gmail.com",
  foundingDate: "2021",
  address: {
    "@type": "PostalAddress",
    streetAddress: "#163, Lakshmipura Cross, Vidyaranya Pura post",
    addressLocality: "Bangalore",
    addressRegion: "Karnataka",
    postalCode: "560097",
    addressCountry: "IN",
  },
  areaServed: [
    { "@type": "City", name: "Bangalore" },
    { "@type": "City", name: "Mysore" },
    { "@type": "City", name: "Penakonda" },
  ],
  sameAs: [
    "https://youtube.com/@reddyconstructions",
    "https://instagram.com/reddyconstructions",
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "09:00",
    closes: "18:00",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "150",
    bestRating: "5",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased overflow-x-hidden">
        <ThemeProvider attribute="class" defaultTheme="light" disableTransitionOnChange>
          <LenisProvider>
            <Navbar />
            <main>{children}</main>
            <Footer />
            <FloatingDarkMode />
            <Toaster position="bottom-right" richColors />
          </LenisProvider>
        </ThemeProvider>
        {/* JSON-LD in body avoids Chrome extension head conflicts */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}

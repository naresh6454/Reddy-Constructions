import dynamicImport from "next/dynamic";
import { HeroSection } from "@/components/sections/HeroSection";

// Static generation — no dynamic data needed on homepage
export const dynamic = "force-static";

// Above-fold: loaded immediately
// Below-fold: code-split into separate JS chunks, lazy loaded on scroll
const AboutPreview = dynamicImport(() =>
  import("@/components/sections/AboutPreview").then((m) => m.AboutPreview)
);
const ServicesSection = dynamicImport(() =>
  import("@/components/sections/ServicesSection").then((m) => m.ServicesSection)
);
const StatsSection = dynamicImport(() =>
  import("@/components/sections/StatsSection").then((m) => m.StatsSection)
);
const WhyChooseUs = dynamicImport(() =>
  import("@/components/sections/WhyChooseUs").then((m) => m.WhyChooseUs)
);
const FeaturedProjects = dynamicImport(() =>
  import("@/components/sections/FeaturedProjects").then((m) => m.FeaturedProjects)
);
const ProcessSection = dynamicImport(() =>
  import("@/components/sections/ProcessSection").then((m) => m.ProcessSection)
);
const TestimonialsSection = dynamicImport(() =>
  import("@/components/sections/TestimonialsSection").then((m) => m.TestimonialsSection)
);
const TeamSection = dynamicImport(() =>
  import("@/components/sections/TeamSection").then((m) => m.TeamSection)
);
const CTABanner = dynamicImport(() =>
  import("@/components/sections/CTABanner").then((m) => m.CTABanner)
);
const ContactPreview = dynamicImport(() =>
  import("@/components/sections/ContactPreview").then((m) => m.ContactPreview)
);

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutPreview />
      <ServicesSection />
      <StatsSection />
      <WhyChooseUs />
      <FeaturedProjects />
      <ProcessSection />
      <TeamSection />
      <TestimonialsSection />
      <CTABanner />
      <ContactPreview />
    </>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { RevealText } from "@/components/animations/RevealText";
import { CTABanner } from "@/components/sections/CTABanner";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Achievements & Awards",
  description: "Celebrating the milestones and recognition earned by Reddy Constructions — a testament to our commitment to quality and excellence.",
};

const achievements = [
  {
    image: "/images/achievement-founder.png",
    alt: "Founder receiving Karnataka Business Award 2023",
    caption:
      "Our founder proudly receiving the Karnataka Business Award 2023, a proud moment that reflects years of dedication, hard work, and the trust placed in us by hundreds of families across Bangalore.",
  },
  {
    image: "/images/achievement-ktcc-trophy.png",
    alt: "KTCC Karnataka Business Awards 2023 Trophy",
    caption:
      "The KTCC Karnataka Business Awards 2023 trophy awarded to Reddy Construction for being the Emerging Construction Company of the Year in Bangalore — a symbol of our relentless pursuit of excellence.",
  },
  {
    image: "/images/achievement-ktcc-certificate.png",
    alt: "Karnataka Business Awards 2023 Certificate",
    caption:
      "Official winner certificate from the Karnataka Traders Chamber of Commerce recognising Reddy Construction for excellence in Real Estate & Construction under the category of Emerging Constructions Company of the Year in Bangalore.",
  },
  {
    image: "/images/achievement-baif-certificate.png",
    alt: "Business Achievers India Foundation Appreciation Certificate",
    caption:
      "An Appreciation Certificate from the Business Achievers India Foundation, presented to Reddy Construction for outstanding achievement in business, as nominated in a competition organised by the Asian Arab Trade Chamber of Commerce.",
  },
];

export default function AchievementsPage() {
  return (
    <>
      <PageHero
        label="Awards & Recognition"
        title="Our Achievements"
        subtitle="Every award we receive is a reflection of the trust our clients place in us and the passion our team brings to every project."
        image="https://images.unsplash.com/photo-1567427018141-0584cfcbf1b8?w=1400&h=700&fit=crop"
      />

      <section className="section-padding bg-white dark:bg-slate-900">
        <div className="container-custom">
          <SectionHeader
            label="Milestones"
            title="Recognised for Excellence"
            subtitle="Reddy Constructions has been honoured by leading industry bodies for consistently delivering quality construction and transparent client relationships."
            className="mb-14"
          />

          <div className="flex flex-col gap-16">
            {achievements.map((item, i) => {
              const isEven = i % 2 === 0;
              return (
                <RevealText key={i} direction={isEven ? "left" : "right"}>
                  <div className={`flex flex-col md:flex-row items-center gap-10 ${!isEven ? "md:flex-row-reverse" : ""}`}>
                    {/* Image */}
                    <div className="w-full md:w-1/2 relative h-[380px] rounded-3xl overflow-hidden shadow-luxury bg-slate-50 dark:bg-slate-700 flex-shrink-0">
                      <Image
                        src={item.image}
                        alt={item.alt}
                        fill
                        className={i === 0 ? "object-cover" : "object-contain"}
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                    {/* Content */}
                    <div className="w-full md:w-1/2">
                      <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-yellow/10 rounded-full mb-4">
                        <span className="text-brand-blue text-xs font-bold uppercase tracking-wider">Achievement {i + 1}</span>
                      </div>
                      <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed">{item.caption}</p>
                    </div>
                  </div>
                </RevealText>
              );
            })}
          </div>
        </div>
      </section>

      <CTABanner
        title="Build With an Award-Winning Team"
        subtitle="Experience the quality that earned us Karnataka's top construction award. Get your free consultation today."
        primaryLabel="Get Free Consultation"
        primaryHref="/contact"
      />
    </>
  );
}

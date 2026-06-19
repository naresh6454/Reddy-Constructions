import Image from "next/image";
import { TEAM_MEMBERS } from "@/data/company";
import { SectionHeader } from "@/components/sections/SectionHeader";

export function TeamSection() {
  return (
    <section className="section-padding bg-slate-50 dark:bg-slate-800">
      <div className="container-custom">
        <SectionHeader
          label="Our Team"
          title="Meet the Experts Behind Every Project"
          subtitle="A passionate team of professionals committed to delivering excellence in every build."
          centered
          className="mb-12 max-w-2xl mx-auto text-center"
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {TEAM_MEMBERS.map((member) => (
            <div key={member.id} className="group text-center">
              <div className="relative w-full aspect-[4/5] mb-4 rounded-2xl overflow-hidden shadow-luxury-sm group-hover:shadow-luxury transition-all duration-300">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                />
                <div className="absolute inset-0 bg-brand-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="font-heading text-sm font-bold text-slate-900 dark:text-white group-hover:text-brand-blue dark:group-hover:text-brand-yellow transition-colors">
                {member.name}
              </h3>
              <p className="text-brand-yellow font-semibold text-xs mt-1 mb-2">{member.role}</p>
              <div className="flex flex-wrap gap-1 justify-center">
                {member.specialization.map((s) => (
                  <span key={s} className="px-2 py-0.5 bg-brand-blue/10 dark:bg-brand-blue/20 text-brand-blue dark:text-blue-300 text-xs rounded-full">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

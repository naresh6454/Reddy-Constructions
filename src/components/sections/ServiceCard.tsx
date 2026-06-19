import { Home, Building2, Castle, Trees, Hammer, PenTool, Sofa, Search } from "lucide-react";
import { cn } from "@/utils";
import type { Service } from "@/types";

const ICON_MAP: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Home, Building2, Castle, Trees, Hammer, PenTool, Sofa, Search,
};

interface ServiceCardProps {
  service: Service;
  variant?: "default" | "featured" | "compact";
  className?: string;
}

export function ServiceCard({ service, variant = "default", className }: ServiceCardProps) {
  const Icon = ICON_MAP[service.icon] || Home;

  if (variant === "compact") {
    return (
      <div
        className={cn("group bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-100 dark:border-slate-700 hover:border-brand-blue/20 hover:shadow-luxury-sm hover:-translate-y-1 transition-all duration-300", className)}
      >
        <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand-blue transition-colors duration-300">
          <Icon size={22} className="text-brand-blue group-hover:text-white transition-colors duration-300" />
        </div>
        <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-brand-blue dark:group-hover:text-brand-yellow transition-colors">
          {service.title}
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{service.shortDescription}</p>
      </div>
    );
  }

  return (
    <div
      className={cn("card-luxury group overflow-hidden hover:-translate-y-1.5 transition-all duration-300", className)}
    >
      {/* Top accent bar */}
      <div className="h-1.5 bg-gradient-to-r from-brand-blue to-brand-yellow" />

      <div className="p-8">
        {/* Icon */}
        <div className="w-16 h-16 bg-hero-gradient rounded-2xl flex items-center justify-center mb-6 shadow-luxury-sm group-hover:scale-110 transition-transform duration-300">
          <Icon size={28} className="text-white" />
        </div>

        <h3 className="font-heading text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-brand-blue dark:group-hover:text-brand-yellow transition-colors">
          {service.title}
        </h3>
        <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">{service.shortDescription}</p>

        {/* Features */}
        <ul className="space-y-2">
          {service.features.slice(0, 4).map((feature) => (
            <li key={feature} className="flex items-center gap-2.5 text-sm text-slate-700 dark:text-slate-300">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-yellow flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

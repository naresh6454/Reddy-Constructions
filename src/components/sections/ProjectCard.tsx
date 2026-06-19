"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { MapPin, ArrowRight, Clock, CheckCircle2 } from "lucide-react";
import { cn, getStatusColor } from "@/utils";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  className?: string;
}

export function ProjectCard({ project, className }: ProjectCardProps) {
  const router = useRouter();
  const statusColors = getStatusColor(project.status);
  const primaryImage = project.images.find((img) => img.isPrimary) || project.images[0];
  const href = `/projects/${project.status === "completed" ? "completed" : "ongoing"}/${project.slug}`;

  return (
    <div
      className={cn("card-luxury group cursor-pointer hover:-translate-y-1.5 transition-all duration-300", className)}
      onMouseEnter={() => router.prefetch(href)}
    >
      <Link href={href}>
        {/* Image */}
        <div className="relative h-56 overflow-hidden">
          {primaryImage && (
            <Image
              src={primaryImage.url}
              alt={primaryImage.alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          )}
          <div className="absolute inset-0 image-overlay-bottom opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

          {/* Status Badge */}
          <div className="absolute top-4 left-4">
            <span className={cn("inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full", statusColors.bg, statusColors.text)}>
              <span className={cn("w-1.5 h-1.5 rounded-full animate-pulse", statusColors.dot)} />
              {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
            </span>
          </div>

          {/* Category */}
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1.5 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold rounded-full capitalize">
              {project.category}
            </span>
          </div>

          {/* Progress for ongoing */}
          {project.status === "ongoing" && project.progress !== undefined && (
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <div className="flex justify-between items-center mb-1.5">
                <span className="text-white/80 text-xs">Progress</span>
                <span className="text-white font-bold text-xs">{project.progress}%</span>
              </div>
              <div className="h-1.5 bg-white/20 rounded-full overflow-hidden">
                <div
                  className="h-full bg-brand-yellow rounded-full transition-all duration-1000"
                  style={{ width: `${project.progress}%` }}
                />
              </div>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="font-heading text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-brand-blue dark:group-hover:text-brand-yellow transition-colors duration-200">
            {project.title}
          </h3>

          <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 text-sm mb-4">
            <MapPin size={13} />
            <span>{project.location}</span>
          </div>

          <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-5 line-clamp-2">
            {project.description}
          </p>

          <div className="grid grid-cols-2 gap-3 mb-5">
            <div className="bg-slate-50 dark:bg-slate-700 rounded-xl p-3">
              <p className="text-xs text-slate-400 dark:text-slate-400 mb-0.5">Area</p>
              <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">{project.area}</p>
            </div>
            {project.floors && (
              <div className="bg-slate-50 dark:bg-slate-700 rounded-xl p-3">
                <p className="text-xs text-slate-400 dark:text-slate-400 mb-0.5">Floors</p>
                <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">G+{project.floors - 1}</p>
              </div>
            )}
          </div>

          {project.completionDate && (
            <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-5">
              {project.status === "completed" ? (
                <CheckCircle2 size={13} className="text-emerald-500" />
              ) : (
                <Clock size={13} className="text-amber-500" />
              )}
              <span>
                {project.status === "completed" ? "Completed" : "Expected"}: {project.completionDate}
              </span>
            </div>
          )}

          <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-700">
            <span className="text-brand-blue dark:text-brand-yellow font-semibold text-sm group-hover:underline">View Details</span>
            <ArrowRight size={16} className="text-brand-blue -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
          </div>
        </div>
      </Link>
    </div>
  );
}

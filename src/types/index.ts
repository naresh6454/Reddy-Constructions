// ─── Project Types ────────────────────────────────────────────────────────────
export type ProjectStatus = "ongoing" | "completed" | "upcoming";
export type ProjectCategory = "residential" | "commercial" | "villa" | "resort" | "renovation";

export interface ProjectImage {
  id: string;
  url: string;
  alt: string;
  isPrimary?: boolean;
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  category: ProjectCategory;
  status: ProjectStatus;
  location: string;
  area: string;
  floors?: number;
  bedrooms?: number;
  budget?: string;
  startDate?: string;
  completionDate?: string;
  progress?: number; // 0-100
  description: string;
  features: string[];
  images: ProjectImage[];
  clientName?: string;
  testimonial?: string;
  isFeatured?: boolean;
  createdAt?: string;
}

// ─── Service Types ────────────────────────────────────────────────────────────
export interface Service {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  description: string;
  icon: string;
  features: string[];
  image: string;
  category: "construction" | "design" | "finishing";
}

// ─── Testimonial Types ────────────────────────────────────────────────────────
export interface Testimonial {
  id: string;
  clientName: string;
  location: string;
  rating: number;
  review: string;
  projectType: string;
  image?: string;
  videoUrl?: string;
}

// ─── Team Types ───────────────────────────────────────────────────────────────
export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  experience: string;
  specialization: string[];
  linkedin?: string;
}

// ─── Form Types ───────────────────────────────────────────────────────────────
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  location: string;
  message: string;
  budget?: string;
}

export interface InquiryFormData {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  plotSize: string;
  floors: string;
  budget: string;
  location: string;
  message: string;
  preferredContact: "phone" | "email" | "whatsapp";
}

export interface CareerFormData {
  name: string;
  email: string;
  phone: string;
  position: string;
  experience: string;
  skills: string;
  message: string;
  resumeUrl?: string;
}

// ─── Navigation Types ─────────────────────────────────────────────────────────
export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

// ─── Stats Types ──────────────────────────────────────────────────────────────
export interface Stat {
  value: number;
  suffix: string;
  label: string;
  icon: string;
}

// ─── Process Step Types ───────────────────────────────────────────────────────
export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon: string;
}

// ─── Gallery Types ────────────────────────────────────────────────────────────
export interface GalleryImage {
  id: string;
  url: string;
  alt: string;
  category: ProjectCategory | "interior" | "exterior" | "all";
  projectId?: string;
  projectName?: string;
}

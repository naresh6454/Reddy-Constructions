import type { Stat, ProcessStep, TeamMember, Testimonial } from "@/types";

export const COMPANY_INFO = {
  name: "Reddy Constructions",
  tagline: "Right Choice For Reality Construction",
  description:
    "Reddy Constructions, established in 2021, is a trusted name in the construction industry, combining technical expertise, superior craftsmanship, and client-focused service to deliver outstanding residential, commercial, and renovation projects across Bangalore, Mysore, and Penakonda. Under the experienced leadership of Mr. Devraj Reddy, we are committed to quality, integrity, and excellence in every project we undertake.",
  longDescription:
    "At RC, we hold one goal above all others: 100% client satisfaction. Our in-house team of designers, architects, Civil Engineers, and Management uphold the highest standards for project planning and execution, and we're dedicated to building the perfect home of your dreams on-time and on-budget.",
  established: 2021,
  phone: "7892899480",
  whatsapp: "917892899480",
  email: "reddyconstructions@gmail.com",
  address: "#163, Lakshmipura Cross, Vidyaranya Pura post, Bangalore 560097",
  serviceAreas: ["Bangalore", "Mysore", "Penakonda"],
  social: {
    youtube: "https://youtube.com/@reddyconstructions",
    instagram: "https://www.instagram.com/reddy_constructions/",
  },
};

export const STATS: Stat[] = [
  { value: 150, suffix: "+", label: "Projects Completed", icon: "Building2" },
  { value: 4, suffix: "+", label: "Years of Excellence", icon: "Calendar" },
  { value: 100, suffix: "%", label: "Client Satisfaction", icon: "Star" },
  { value: 3, suffix: "+", label: "Cities Served", icon: "MapPin" },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    title: "Initial Consultation",
    description:
      "We begin with a detailed consultation to understand your vision, requirements, budget, and timeline for your dream project.",
    icon: "MessageSquare",
  },
  {
    step: 2,
    title: "Design & Planning",
    description:
      "Our architects create 2D floor plans, 3D elevations, architectural drawings, structural designs, and a 3D video walkthrough.",
    icon: "PenTool",
  },
  {
    step: 3,
    title: "Cost Estimation",
    description:
      "We provide a transparent, detailed cost breakdown covering civil work, materials, finishes, and all construction phases.",
    icon: "Calculator",
  },
  {
    step: 4,
    title: "Construction Begins",
    description:
      "Experienced contractors and engineers execute the plan using TATA/SAIL steel, Birla/Ultratech cement, and premium materials.",
    icon: "HardHat",
  },
  {
    step: 5,
    title: "Quality Checks",
    description:
      "Regular site inspections and quality checks ensure every element meets our high standards throughout the construction process.",
    icon: "CheckCircle",
  },
  {
    step: 6,
    title: "Handover & Support",
    description:
      "We hand over your completed dream home on time and on budget, with after-sales support and post-construction guidance.",
    icon: "Key",
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "1",
    name: "Devraj Reddy",
    role: "Founder & Managing Director",
    bio: "With over 10 years in the construction industry, Devraj Reddy founded Reddy Constructions with a vision to deliver quality homes at affordable prices across Bangalore, Mysore, and Penakonda.",
    image: "/images/staff/staff-1.png",
    experience: "10+ Years",
    specialization: ["Project Management", "Civil Engineering", "Business Strategy"],
  },
  {
    id: "2",
    name: "Giri Babu",
    role: "Junior Designer",
    bio: "Arjun contributes fresh creative ideas to every design project, supporting the senior team in delivering visually compelling and functional spaces.",
    image: "/images/staff/staff-2.png",
    experience: "2+ Years",
    specialization: ["2D Floor Plans", "3D Visualization", "Design Support"],
  },
  {
    id: "3",
    name: "Darshan",
    role: "Architect",
    bio: "Kiran brings precision and creativity to every build, translating client visions into structurally sound and aesthetically outstanding designs.",
    image: "/images/staff/staff-3.png",
    experience: "5+ Years",
    specialization: ["Architecture", "Structural Planning", "3D Elevation"],
  },
  {
    id: "4",
    name: "Pooja",
    role: "Marketing Executive",
    bio: "Sneha drives brand awareness and client outreach for Reddy Constructions, ensuring our projects reach the right audience across digital and offline channels.",
    image: "/images/staff/staff-4.png",
    experience: "3+ Years",
    specialization: ["Digital Marketing", "Brand Strategy", "Client Outreach"],
  },
  {
    id: "5",
    name: "Naresh",
    role: "Technology & Digital Operations Manager",
    bio: "Rohan oversees all digital infrastructure and technology operations at Reddy Constructions, ensuring seamless workflows and a strong online presence.",
    image: "/images/staff/staff-5.png",
    experience: "4+ Years",
    specialization: ["Digital Operations", "Tech Infrastructure", "Process Automation"],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    clientName: "Navyasri Ravula",
    location: "Google Review · 2 weeks ago",
    rating: 5,
    review:
      "The construction work was completed on time with good quality and professional service. The team was responsive, maintained clear communication throughout the project, and paid attention to every detail. Overall, a smooth and satisfying experience.",
    projectType: "Construction Project",
  },
  {
    id: "2",
    clientName: "Rohith Reddy",
    location: "Google Review · 3 weeks ago",
    rating: 5,
    review:
      "Outstanding construction and excellent finishing work. The building has a beautiful design, good ventilation, and quality materials. Very professional work with proper planning and maintenance. Fully satisfied with the overall construction quality.",
    projectType: "Construction Project",
  },
  {
    id: "3",
    clientName: "Hemanth Reddy",
    location: "Google Review · 3 weeks ago",
    rating: 5,
    review:
      "Excellent construction quality with modern design and strong structure. The building is well planned, clean, and built with good materials. Great attention to detail and overall impressive work. Highly recommended!",
    projectType: "Construction Project",
  },
  {
    id: "4",
    clientName: "Salman D",
    location: "Google Review · 3 weeks ago",
    rating: 5,
    review:
      "The company provided excellent service from planning to execution. Their attention to detail, modern construction ideas, and commitment to quality impressed us a lot.",
    projectType: "Construction Project",
  },
  {
    id: "5",
    clientName: "Malleswari Nalla",
    location: "Google Review · 3 weeks ago",
    rating: 5,
    review:
      "I had a great experience with Reddy Construction Company. Their work was high-quality, and they communicated clearly throughout the entire project. The team was professional, reliable, and completed everything on time. I'm very satisfied with the results and would highly recommend them to anyone looking for dependable construction services.",
    projectType: "Construction Project",
  },
  {
    id: "6",
    clientName: "Amarendra Amar",
    location: "Google Review · 3 weeks ago",
    rating: 5,
    review:
      "A strong and stylish construction that reflects high standards of engineering and architecture. The project showcases modern infrastructure, quality materials, and skilled workmanship. Truly a great example of how dedication and planning can create something exceptional.",
    projectType: "Construction Project",
  },
];

export const WHY_CHOOSE_US = [
  {
    icon: "DollarSign",
    title: "Affordable Quality",
    description: "Build your dream home at a competitive price without compromising on quality materials or craftsmanship.",
  },
  {
    icon: "Package",
    title: "Premium Materials",
    description: "We use only top-grade materials — TATA/SAIL steel, Birla/Ultratech cement, and ISI mark fittings throughout.",
  },
  {
    icon: "Clock",
    title: "On-Time Delivery",
    description: "We have a proven track record of delivering projects within the agreed timeline — every single time.",
  },
  {
    icon: "Users",
    title: "Expert Team",
    description: "Our in-house team of passionate engineers and experienced contractors ensures the best service for your project.",
  },
  {
    icon: "Shield",
    title: "Money Safety",
    description: "Transparent billing with stage-wise payments ensures your investment is fully protected at every step.",
  },
  {
    icon: "CheckSquare",
    title: "Quality Assurance",
    description: "Rigorous multi-stage quality checks and site inspections ensure every element meets the highest standards.",
  },
];

export interface Project {
  id: string;
  number: string;
  name: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  accent: string;
  year: string;
  image: string;
  /** Public demo link. Omit for private projects — no link is rendered. */
  url?: string;
}

export interface ExperienceItem {
  year: string;
  role: string;
  description: string;
  tools: string[];
}

export const contact = {
  email: "atibagos.camille10@gmail.com",
  emailHref: "mailto:atibagos.camille10@gmail.com",
  facebook: "https://www.facebook.com/caracho.violet0000",
  facebookLabel: "Facebook",
  indeed: "https://profile.indeed.com/?hl=en_PH&co=PH&from=gnav-homepage",
  indeedLabel: "Indeed",
} as const;

export const projects: Project[] = [
  {
    id: "sram",
    number: "01",
    name: "SRAM",
    title: "School Report Assignment, Submission & Monitoring",
    category: "School Reports PWA",
    description:
      "School heads assign and review. Teachers upload files, submit, and revise when unlocked — on Android, iOS, tablet, and laptop.",
    tags: ["Supabase", "PWA", "Reports"],
    accent: "#8866DE",
    year: "2026",
    image: "/images/projects/sram.png",
  },
  {
    id: "itag-prop",
    number: "02",
    name: "iTAG-PROP",
    title: "Inventory Tracking & Property Management",
    category: "Inventory Tracking",
    description:
      "Encode school properties, generate QR labels and Excel files, then assign and transfer while keeping every custodian on record.",
    tags: ["QR", "Inventory", "PWA"],
    accent: "#DD68E3",
    year: "2026",
    image: "/images/projects/itag.png",
  },
  {
    id: "dsr-hub",
    number: "03",
    name: "DSR HUB",
    title: "Supporting Student Mental Health",
    category: "Stress Relief & Wellness Hub",
    description:
      "A safe space for students to find resources, support, and tools to manage stress and improve mental well-being.",
    tags: ["Wellness", "Students", "Web App"],
    accent: "#7aa8ff",
    year: "2025",
    image: "/images/projects/dorsurhub.png",
    url: "https://dorsusrhub.unaux.com/index",
  },
  {
    id: "rental",
    number: "04",
    name: "Rental",
    title: "Rental Management Prototype",
    category: "Rental Business Prototype",
    description:
      "A prototype for rental business owners to manage units, tenants, and payments — built to streamline daily rental operations.",
    tags: ["Rental", "Prototype", "Management"],
    accent: "#58B09C",
    year: "2026",
    image: "/images/projects/rental.jpg",
  },
];

export const experience: ExperienceItem[] = [
  {
    year: "2026",
    role: "FULL-STACK WEB DEVELOPMENT",
    description:
      "Developed web-based systems for school, academic, research, and client projects.",
    tools: ["Next.js", "React", "Tailwind CSS"],
  },
  {
    year: "2025",
    role: "ACADEMIC / RESEARCH PROJECTS",
    description:
      "Built management and analytics systems for academic and research use.",
    tools: ["PHP", "MySQL", "HTML", "CSS"],
  },
  {
    year: "2025",
    role: "DSR HUB",
    description:
      "Built the DOrSU Stress Relief Hub — a safe space for student wellness.",
    tools: ["Next.js", "Tailwind CSS", "API"],
  },
];

export const skills = [
  "Next.js",
  "Tailwind CSS",
  "Supabase",
  "GitHub",
  "MySQL",
];

export const lifeImages = Array.from({ length: 10 }, (_, i) => ({
  src: `/images/life/life-${String(i + 1).padStart(2, "0")}.jpg`,
  alt: `Life outside code — photo ${i + 1} of 10`,
}));

// Portfolio data - easy to update with real content later

type Project = {
  id: number;
  category: "business" | "data" | "technical";
  tech: string[];
  github: string | null;
  live: string | null;
  images: string[];
  isPlaceholder: boolean;
  featured?: boolean;
  caseStudy?: string;
};

export const personalInfo = {
  name: "Muhammad Bevan Alqarana",
  age: 19,
  location: "Depok, Indonesia",
  university: "Cakrawala University",
  github: "https://github.com/bevankeren",
  discord: "Beverly Hub",
  email: "muhammadbevanalqarana@gmail.com",
  linkedin: "https://linkedin.com/in/bevanalqarana", // Update with actual LinkedIn URL
  whatsapp: "https://wa.me/6287717896916",
};

export const projects: Project[] = [
  {
    id: 3,
    category: "data",
    tech: [
      "GeoPandas",
      "OpenStreetMap",
      "SciPy cKDTree",
      "DBSCAN",
      "Plotly",
    ],
    github: "https://github.com/bevankeren/jakarta-retail-war-zones",
    live: "/maps/final_dark_competition_map.html",
    images: [
      "/assets/retail-war-zones/hero_map.png",
      "/assets/retail-war-zones/distance_distribution.png",
    ],
    isPlaceholder: false,
    featured: true,
    caseStudy: "jakarta-retail-war-zones",
  },
  {
    id: 1,
    category: "business",
    tech: ["Next.js", "Tailwind CSS", "Supabase", "n8n", "Recharts"],
    github: "https://github.com/bevankeren/eskrimkuy-admin-panel",
    live: "https://eskrimkuy-admin-panel.vercel.app",
    images: [
      "/images/projects/eskrimkuy-1.png",
      "/images/projects/eskrimkuy-2.png",
    ],
    isPlaceholder: false,
  },
  {
    id: 2,
    category: "data",
    tech: ["Python", "Pandas", "Matplotlib"],
    github: "https://github.com/bevankeren/medical-appointment-analysis",
    live: null,
    images: [
      "/images/projects/medical-appointment-1.png",
      "/images/projects/medical-appointment-2.png",
    ],
    isPlaceholder: false,
  },
];

export const skills = {
  business: [
    "Basic Requirement Gathering",
    "Process Mapping",
    "Flowchart",
    "Documentation",
    "Problem Solving",
  ],
  data: [
    "Microsoft Excel",
    "Google Sheets",
    "SQL",
    "Data Visualization",
    "Python (Basic)",
  ],
  technical: [
    "Networking",
    "Troubleshooting",
    "Hardware",
    "Windows",
    "Cisco Packet Tracer",
    "Supabase",
  ],
  tools: ["GitHub", "VS Code", "n8n", "Figma", "Draw.io", "Notion", "Canva"],
};

export const certificates = [
  { id: 1, isPlaceholder: false },
  { id: 2, isPlaceholder: false },
];

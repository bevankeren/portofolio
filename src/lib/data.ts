// Portfolio data - easy to update with real content later

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

export const projects = [
  {
    id: 1,
    category: "technical",
    tech: ["JavaScript", "Discord.js", "Node.js"],
    github: "https://github.com/bevankeren/sambung-kata",
    live: null,
    image: "/images/projects/discord-bot.png",
    isPlaceholder: false,
  },
  {
    id: 2,
    category: "business",
    tech: ["Next.js", "Tailwind CSS", "Supabase", "n8n", "Recharts"],
    github: "https://github.com/bevankeren/eskrimkuy-admin-panel",
    live: "https://eskrimkuy-admin-panel.vercel.app",
    image: "/images/projects/eskrimkuy.png",
    isPlaceholder: false,
  },
  {
    id: 3,
    category: "data",
    tech: ["Excel", "Pivot Table", "Chart", "Power BI"],
    github: null,
    live: null,
    image: "/images/projects/dashboard.png",
    isPlaceholder: true,
  },
  {
    id: 4,
    category: "technical",
    tech: ["Cisco Packet Tracer", "VLAN", "Routing"],
    github: null,
    live: null,
    image: "/images/projects/network.png",
    isPlaceholder: true,
  },
  {
    id: 5,
    category: "business",
    tech: ["Draw.io", "Google Docs", "BPMN"],
    github: null,
    live: null,
    image: "/images/projects/bpmn.png",
    isPlaceholder: true,
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
  { id: 2, isPlaceholder: true },
  { id: 3, isPlaceholder: true },
  { id: 4, isPlaceholder: true },
];

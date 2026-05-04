import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    // Dynamic accent color classes used in components
    "bg-accent-blue",
    "bg-accent-yellow",
    "bg-accent-pink",
    "bg-accent-green",
    "bg-accent-purple",
    "bg-accent-blue/10",
    "bg-accent-yellow/10",
    "bg-accent-pink/10",
    "bg-accent-green/10",
    "bg-accent-purple/10",
    "border-t-accent-blue",
    "border-t-accent-yellow",
    "border-t-accent-pink",
    "border-t-accent-green",
    "border-t-accent-purple",
    "text-accent-blue",
    "text-accent-yellow",
    "text-accent-pink",
    "text-accent-green",
    "text-accent-purple",
    "shadow-neo-sm",
    "w-3",
    "h-3",
    "rounded-full",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FFFDF7",
        surface: "#FFFFFF",
        "text-primary": "#1A1A1A",
        "text-secondary": "#4A4A4A",
        border: "#000000",
        "accent-blue": "#3B82F6",
        "accent-yellow": "#FACC15",
        "accent-pink": "#EC4899",
        "accent-green": "#22C55E",
        "accent-purple": "#8B5CF6",
      },
      fontFamily: {
        heading: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      boxShadow: {
        "neo": "6px 6px 0px #000",
        "neo-hover": "8px 8px 0px #000",
        "neo-active": "2px 2px 0px #000",
        "neo-sm": "4px 4px 0px #000",
      },
      borderWidth: {
        "3": "3px",
      },
      borderRadius: {
        neo: "8px",
      },
    },
  },
  plugins: [],
};
export default config;

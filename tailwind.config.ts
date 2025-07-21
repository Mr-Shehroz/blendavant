import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': { 'min': '640px', 'max': '767px' },  // Small (Large Mobile)
        'md': { 'min': '768px', 'max': '1023px' }, // Medium (Tablet)
        'lg': { 'min': '1024px', 'max': '1279px' }, // Large (Small Laptop)
        'xl': { 'min': '1280px', 'max': '1365px' }, // Extra Large (Desktop)
        'ex': { 'min': '1366px', 'max': '1439px' }, // Extra Large (Desktop)
        'exx': { 'min': '1440px', 'max': '1535px' }, // Extra Large (Desktop)
        '2xl': { 'min': '1536px' }, // 2XL (No upper limit)
      },
      fontFamily: {
        firaCode: ["Fira Code", "monospace"],
      },
      colors: {
        primary: "#A2A5FF",
        body: "#282C33",
        hash: "#A2A5FF",
        nav: "#ABB2BF",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
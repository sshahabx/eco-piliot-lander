import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ['var(--font-ibm-plex-serif)', 'serif'],
        serif: ['var(--font-ibm-plex-serif)', 'serif'],
      },
      animation: {
        scroll: 'scroll 30s linear infinite',
        'radar-pulse': 'radar-pulse 2s ease-in-out infinite',
        'radar-ring': 'radar-ring 2s ease-out infinite',
      },
    },
  },
  plugins: [],
};
export default config;


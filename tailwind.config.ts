import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
        heading: ["var(--font-heading)"],
        serif: ["var(--font-serif)"],
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0rem)" },
          "50%": { transform: "translateY(-0.4rem)" },
        },
        orbit: {
          "0%": { transform: "rotate(0deg) translateX(1rem) rotate(0deg)" },
          "100%": { transform: "rotate(360deg) translateX(1rem) rotate(-360deg)" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.8)", boxShadow: "0 0 0 0 rgba(255, 255, 255, 0.4)" },
          "70%": { transform: "scale(1)", boxShadow: "0 0 0 1.25rem rgba(255, 255, 255, 0)" },
          "100%": { transform: "scale(0.8)", boxShadow: "0 0 0 0 rgba(255, 255, 255, 0)" },
        },
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        "subtle-bounce": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-0.25rem)" },
        },
        fadeInDown: {
          from: { opacity: "0", transform: "translateY(-1.5rem)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        float: "float 12s ease-in-out infinite",
        orbit: "orbit 15s linear infinite",
        "pulse-ring": "pulse-ring 3s cubic-bezier(0.215, 0.61, 0.355, 1) infinite",
        "spin-slow": "spin-slow 4s linear infinite",
        "fade-in-down": "fadeInDown 1s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
    },
  },
  plugins: [],
};
export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#FFFDF9",
          100: "#FFF8F0",
          200: "#FFF1E0",
          300: "#FFE8CC",
          400: "#FFDDB3",
          500: "#FFD199",
        },
        chocolate: {
          50: "#F5EDE8",
          100: "#E8D5C8",
          200: "#D4B59E",
          300: "#B8876A",
          400: "#8B5E3C",
          500: "#6B4226",
          600: "#5A3720",
          700: "#4A2D1A",
          800: "#3C2415",
          900: "#2A1810",
        },
        gold: {
          50: "#FDF6EE",
          100: "#FAE8D2",
          200: "#F5D0A5",
          300: "#E8B88A",
          400: "#D4A574",
          500: "#C8956C",
          600: "#B07A4F",
          700: "#8E6240",
          800: "#6B4A30",
          900: "#4A3320",
        },
        rose: {
          50: "#FFF5F6",
          100: "#FFE8EB",
          200: "#F5CED3",
          300: "#E8B4B8",
          400: "#D4959A",
          500: "#C07A80",
          600: "#A65F65",
          700: "#8B4A50",
          800: "#6B3A3E",
          900: "#4A2A2D",
        },
      },
      fontFamily: {
        serif: ["Playfair Display", "Georgia", "serif"],
        sans: ["DM Sans", "Heebo", "sans-serif"],
        script: ["Dancing Script", "cursive"],
      },
      borderRadius: {
        xl: "16px",
        "2xl": "20px",
        "3xl": "24px",
      },
      boxShadow: {
        soft: "0 2px 15px rgba(60, 36, 21, 0.08)",
        medium: "0 4px 25px rgba(60, 36, 21, 0.12)",
        warm: "0 8px 40px rgba(200, 149, 108, 0.15)",
        glow: "0 0 20px rgba(200, 149, 108, 0.3)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out",
        "slide-up": "slideUp 0.5s ease-out",
        "slide-in-right": "slideInRight 0.3s ease-out",
        float: "float 3s ease-in-out infinite",
        shimmer: "shimmer 2s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(100%)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

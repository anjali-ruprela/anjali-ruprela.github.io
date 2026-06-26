import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#7C3AED",
          50: "#F5F3FF",
          100: "#EDE9FE",
          200: "#DDD6FE",
          300: "#C4B5FD",
          600: "#7C3AED",
          700: "#6D28D9",
          800: "#5B21B6",
        },
        teal: {
          DEFAULT: "#14B8A6",
          50: "#EFFCF9",
          100: "#CCF6EE",
        },
        gold: {
          DEFAULT: "#F59E0B",
          50: "#FFF8EB",
        },
        ink: {
          900: "#16121F",
          700: "#2B2733",
          600: "#403B4D",
          500: "#5B5670",
          400: "#827D96",
          300: "#A8A3BC",
        },
        canvas: "#FBFAFE",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-inter)", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      borderRadius: {
        xl: "16px",
        "2xl": "20px",
        "3xl": "28px",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(91,33,182,0.05), 0 10px 30px -12px rgba(91,33,182,0.16)",
        card: "0 1px 3px rgba(91,33,182,0.06), 0 16px 40px -16px rgba(91,33,182,0.22)",
        lift: "0 4px 10px rgba(91,33,182,0.08), 0 26px 56px -18px rgba(124,58,237,0.30)",
      },
      backgroundImage: {
        "grid-faint":
          "linear-gradient(to right, rgba(91,33,182,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(91,33,182,0.05) 1px, transparent 1px)",
        "radial-brand":
          "radial-gradient(60% 60% at 50% 0%, rgba(124,58,237,0.12) 0%, rgba(124,58,237,0) 70%)",
      },
      keyframes: {
        "blob": {
          "0%, 100%": { borderRadius: "42% 58% 63% 37% / 41% 44% 56% 59%" },
          "50%": { borderRadius: "58% 42% 38% 62% / 57% 53% 47% 43%" },
        },
        "blink": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        "bounce-slow": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(6px)" },
        },
      },
      animation: {
        "blob": "blob 8s ease-in-out infinite",
        "blink": "blink 1.1s step-end infinite",
        "bounce-slow": "bounce-slow 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        dark: {
          900: "#050510",
          800: "#0a0a1a",
          700: "#0d1117",
          600: "#111827",
          500: "#1a1a2e",
        },
        accent: {
          blue: "#3b82f6",
          green: "#10b981",
          orange: "#f97316",
          teal: "#06b6d4",
          pink: "#ec4899",
          purple: "#8b5cf6",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};

export default config;

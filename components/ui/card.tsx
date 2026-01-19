import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#111827",      // dark (almost black)
        primaryHover: "#1F2937",
        secondary: "#6366F1",    // indigo / purple accent
        secondaryHover: "#4F46E5",
        border: "#E5E7EB",
        muted: "#6B7280",
        background: "#FFFFFF",
        surface: "#F9FAFB",
        danger: "#EF4444",
      },
    },
  },
  plugins: [],
};

export default config;
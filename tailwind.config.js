/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0B1220",
        backgroundSecondary: "#0E1628",
        navbar: "#0A1020",
        primary: "#2563EB",
        textPrimary: "#E5E7EB",
        textSecondary: "#9CA3AF",
        border: "#1F2937",
      },
    },
  },
  plugins: [],
};

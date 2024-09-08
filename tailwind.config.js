/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    colors: {
      background: "#7c7280",
      transparent: "transparent",
      white: "#ECEFF1",
      grey: "#d1d1d1",
      blue: "#05d9e8",
      links: "#0f65ba",
      red: "#FF2a6d",
      black: "#383838",
      green: "#65DC98",
      light: "#EFE9F4",
      dark: "#484D6D",
      yellow: "#defe47",
      gray: "#b5b5b5",
      salmon: "#FCB5AC",
      teal: "#3D5B59",
      fresia: "#EFE7BC",
      gold: "#E1A140",
      "dark-status": "#29262c",
      "blue-gray": "#005678",
      charcoal: "#2B2B2B",
    },
    fontFamily: {
      "pixel:": ["Pixelify Sans", "sans-serif"],
      vt: ["VT323", "sans-serif"],
      normal: ["Chicago", "sans-serif"],
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

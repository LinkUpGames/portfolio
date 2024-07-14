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
      background: "#737794",
      transparent: "transparent",
      white: "#ffffff",
      grey: "#d1d1d1",
      blue: "#80d2ff",
      red: "#eb5959",
      black: "#383838",
      green: "#57A773",
      light: "#EFE9F4",
      dark: "#484D6D",
      yellow: "#FADF63",
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

/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        "light-sky": "#00d4ff",
        "light-pink": {
          100: "#FC00FF",
          200: "#85FFBD",
        },
        blue: {
          deep: "#090979",
          dark: "#97ABFF",
          light: "#6B73FF",
          950: "#17275c",
        },
        www: colors.indigo,
        primary: `rgba(var(--color-accent) / 30%)`,
        "gray-20": "#F8F4EB",
        "gray-50": "#EFE6E6",
        "gray-100": "#DFCCCC",
        "gray-500": "#5E0000",
        "primary-100": "#FFE1E0",
        "primary-300": "#FFA6A3",
        "primary-500": "#FF6B66",
        "secondary-400": "#FFCD5B",
        "secondary-500": "#FFC132",
        "hover-red": "rgb(185  28  28 / 40%)",
      },
      backgroundImage: {
        hero: "url(./images/Image_-_Hero_Xtreme_160R_1593522699860_1593597979081.webp)",
        "gradient-yellowred":
          "linear-gradient(90deg, #FF616A 0%, #FFC837 100%)",
      },
      dropShadow: {
        "3xl": "0 0px 1px rgba(0, 0, 0, 0.15)",
        "4xl": "-3px 0px 1px rgba(0, 0, 0, 0.15)",
      },
      content: {
        evolvetext: "url('./assets/EvolveText.png')",
        abstractwaves: "url('./assets/AbstractWaves.png')",
        sparkles: "url('./assets/Sparkles.png')",
        circles: "url('./assets/Circles.png')",
      },
    },
  },
  plugins: [],
};

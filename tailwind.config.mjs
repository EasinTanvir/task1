/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cardHeaderBg: "#ffffff",
        inputBg: "#ffffff29",
        inputBgHover: "#ffffff47",
        buttonBg: "#008AC5",
        whiteTransparent: "rgba(255, 255, 255, 0.16)",
        primaryBg: "#ccecf9",
        primaryTextColor: "#20A9E4",
        baseTextColor: "rgb(51 65 85)",
        bodyColor: "#fbfbfb",
        iconColor: "#f5f6f5",
      },
      backgroundImage: {
        gradientOverlay:
          "linear-gradient(180deg, rgba(0,0,0,0.61) 0%, rgba(0,0,0,0.41) 100%)",
        "map-gradient":
          "linear-gradient(to bottom, #f3f4f6, rgba(255, 255, 255, 0.6), transparent)",
      },
    },
  },
  plugins: [],
};

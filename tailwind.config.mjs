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
        headerBg: "#252525",
        customBackground: "#ffffff29",
        buttonBg: "#008AC5",
        whiteTransparent: "rgba(255, 255, 255, 0.16)",
        textColor: "#009de0",
        skyBlue: "#ccecf9",
        blue: "#20A9E4",
      },
      backgroundImage: {
        bannerImage: "url('/banner.avif')",
        gradientOverlay:
          "linear-gradient(180deg, rgba(0,0,0,0.61) 0%, rgba(0,0,0,0.41) 100%)",
      },
    },
  },
  plugins: [],
};

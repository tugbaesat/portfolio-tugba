/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        blob: "blob 7s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(1)",
          },
        },
      },
    },
    colors: {
      transparent: "transparent",
      softOne: "#FAF3F0",
      softTwo: "#F7EFE5",
      pinkOne: "#FFCACC",
      purpleOne: "#DBC4F0",
      greenOne: "#D4E2D4",
      blueOne: "#AEDEFC",
      darkBlueOne: "#265073",
      darkBlueTwo: "#164863",
      greyOne: "#B4B4B3",
      darkPurple: "#4B527E",
      purpleTwo: "#7C81AD",
    },
  },
  plugins: [],
};

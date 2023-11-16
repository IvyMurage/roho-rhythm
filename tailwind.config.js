/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "bg-color": "rgb(2,0,36)",
        "bg-gradient":
          "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(40,12,83,0.7959558823529411) 42%, rgba(25,127,148,1) 100%)",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },

      color: {
        maroon: "#CA1126",
        lightBlue: "#82ACD7",
        lightWhite: "#ddffd9",
      },
    },
  },
  plugins: [],
};

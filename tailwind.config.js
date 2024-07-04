/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        ibm: ['"IBM Plex Sans"', "sans-serif"],
      },
      width: {
        container: "1140px",
      },
      maxWidth: {
        container: "1140px",
      },
      backgroundColor: {},
      colors: {
        main: "#5D50C6",
        secondary: "rgba(25, 24, 37, 0.5)",
        "gray-light": "#EEEEEE",
        "pink-light": "#F85E9F",
        "orange-custom": "#FF5722",
      },
      boxShadow: {
        primary: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
      },
      fontSize: {
        "heading-2": "44px",
      },
      backgroundImage: {
        travel: "url('/bg.png')",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // ibm: ['"IBM Plex Sans"', "sans-serif"],
        cstd: ['"Circular Std"', "sans-serif"],
      },
      width: {
        container: "1140px",
        128: "128px",
        350: "350px",
      },
      height: {
        128: "128px",
        350: "350px",
      },
      maxWidth: {
        container: "1140px",
        350: "350px",
      },
      letterSpacing: {
        6: "0.375rem",
      },
      borderRadius: {
        32: "2rem",
      },
      backgroundColor: {},
      colors: {
        main: "#5D50C6",
        secondary: "rgba(25, 24, 37, 0.5)",
        "dark-gray": "rgba(25, 24, 37, 0.75)",
        "gray-light": "#EEEEEE",
        "pink-light": "#F85E9F",
        "orange-custom": "#FF5722",
        "yellow-custom": "#FACD49",
        "yellow-light": "#FFFBF0",
      },
      boxShadow: {
        primary: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
      },
      fontSize: {
        "heading-2": "44px",
        14: "0.875rem",
        16: "1rem",
        18: "1.125rem",
        23: "1.4375rem",
      },
      backgroundImage: {
        travel: "url('/bg.png')",
        // testimonials: "url('/bg-testimonials.svg')",
      },
      margin: {
        128: "128px",
      },
      padding: {
        128: "128px",
      },
    },
  },
  plugins: [],
};

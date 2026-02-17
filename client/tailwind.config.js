const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        // Primary (lighter blue)
        bizBlue: "#1D5CCD",   // clean business blue
        bizBlueSoft: "#E8EEFF",
      
        // Dominant highlight
        bizYellow: "#F9C900",
      
        // Accent
        bizRed: "#E11D48",
      
        // Neutrals
        bizDark: "#0B1220",
        bizGray: "#848484",
      },
      

      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        display: ["Montserrat", "sans-serif"],
        barlow: ["Barlow", "sans-serif"],
        openSans: ["Open Sans", "sans-serif"],
      },

      container: {
        screens: {
          "3xl": "1536px",
        },
        padding: {
          DEFAULT: "0.2rem",
          sm: "0.2rem",
          md: "0.3rem",
          lg: "0.4rem",
          xl: "0.5rem",
          "2xl": "0.6rem",
          "3xl": "0.7rem",
        },
      },

      backgroundImage: {
        "testimonial-bg": "url('')",
        "clinical-services-bg": "url('https://i.ibb.co/zQNV0DJ/funfact-1.jpg')",
        "header-bg": "url('https://i.ibb.co/b1L2S0v/page-title.jpg')",
      },
    },
  },

  plugins: [require("daisyui")],
});

/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#289357",
          secondary: "#D926A9",
          accent: "#1FB2A6",
          neutral: "#101010",
          "base-100": "#F9F9F9",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
        },
      },
    ],
  },
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontSize: {
      xs: "0.8rem",
      sm: "0.8rem",
      med: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "2.5xl": "1.75rem",
      "3xl": "1.625rem",
      "3.5xl": "1.75rem",
      "4xl": "2.125rem",
      "4.5xl": "2.75rem",
      "5xl": "3.052rem",
      "5.5xl": "3.5rem",
      "6xl": "4rem",
      huge: "102.42px",
    },
    letterSpacing: {
      logo: "-.7rem",
      tightest: "-0.3rem",
      tighter: "-0.07rem",
      tight: "-0.02rem",
      normal: "1rem",
      wide: ".025%",
      wider: ".05%",
      widest: ".1%",
    },
    extend: {
      colors: {
        black: "#101010",
        white: "#f9f9f9",
        gray: "#7c7c7c",
        green: "#289357",
      },
    },
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      mdlg: { max: "870px" },
      // => @media (max-width: 767px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
  },
  plugins: [require("daisyui")],
};

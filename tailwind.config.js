/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",

      screens: {
        sm: "100%",
        md: "100%",
        lg: "1200px",
      },
    },
    extend: {
      colors: {
        primary: "#B150E6",
        secondary: "#266DC8",
        dark: "#00367C",
      },
      fontFamily: {
        primary: ["Lato", "Arial", "sans-serif"],
      },
      fontSize: {
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.625rem",
        "5xl": "3rem",
        "6xl": "3.875rem",
      },
      transitionProperty: {
        anchor: "opacity, transform, background-color, color",
      },
      transitionDuration: {
        DEFAULT: "250ms",
      },
    },
  },
  plugins: [],
};

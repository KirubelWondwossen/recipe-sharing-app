/* eslint-env node */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#F3F3F3",
        secondary: "#312F2F",
        logo: "#046E1B",
        accent: "#F79F1A",
      },
    },
  },
  plugins: [],
};

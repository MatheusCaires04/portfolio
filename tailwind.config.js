/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        fontLogo: ["Permanent Marker", "sans-serif"],
      },
      colors: {
        violetLight: "#1c4b82",
        violetDark: "#082032",
        orangeLight: "#dd6b4b",
      },
    },
  },
  plugins: [],
};

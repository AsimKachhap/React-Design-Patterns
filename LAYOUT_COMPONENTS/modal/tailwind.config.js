/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        rgba: "rgba(var(--bg-color), var(--bg-opacity))",
      },
    },
  },
  plugins: [],
};

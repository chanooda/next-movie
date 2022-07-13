/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {},
    theme: {
      extend: {
        boxShadow: {
          "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
        },
      },
    },
  },
  plugins: [],
};

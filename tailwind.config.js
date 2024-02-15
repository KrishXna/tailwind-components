/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        sm: "0 -5px 20px 10px rgb(18 38 94/0.7)",
      },
    },
  },
  plugins: [],
};

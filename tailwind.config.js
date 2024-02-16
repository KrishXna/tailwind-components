/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        blue: {
          100: "#070D27", // body gradient
          200: "#12265E", // body gradient
          300: "#30437E", // border
          400: "#1F306E", // btn bg
          500: "#1A2555", // card bg
          600: "#09112C", // grid box bg
          700: "#3961D9", // pricingcard
          800: "#111B40", //pricingcard
        },
      },
      boxShadow: {
        sm: "0 -5px 20px 10px rgb(18 38 94/0.7)",
      },
    },
  },
  plugins: [],
};

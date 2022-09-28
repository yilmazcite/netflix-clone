/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js, jsx}", "./public/public.html"],

  theme: {
    extend: {},
  },
  plugins: [require("tailwind-scrollbar-hide")],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/sections/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "d-gray": "#5a5856",
        "d-orange": "#f5683c",
        "d-blue": "#19183a",
      },
    },
  },
  plugins: [],
};

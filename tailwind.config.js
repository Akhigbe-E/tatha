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
        "d-gray": "#6c6a68",
        "d-orange": "#f5683c",
        "d-blue": "#19183a",
        "d-faint-blue": "#1a193a",
        "d-faint-purple": "#f1e3ef",
      },
    },
  },
  plugins: [],
};

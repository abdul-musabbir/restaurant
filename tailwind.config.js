/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        reds: "#CC3333",
        h: "#2a435d",
        pink: "#FFDFDF",
        grays: "#fff8ee",
      },
      boxShadow: {
        box: "0px 0px 10px #8f8181",
      },
      gridColumn: {
        "span-4-to-end": "4 / -1",
      },
    },
  },
  plugins: [],
};

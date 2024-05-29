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
      },
      gridColumn: {
        "span-4-to-end": "4 / -1",
      },
    },
  },
  plugins: [],
};

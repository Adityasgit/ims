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
        primary: "#1a1a1a",   // very dark charcoal (almost black)
        secondary: "#555555", // medium gray for subtle contrast
        white: "#FFFFFF",     // pure white
        bg: "#f9f8f6",        // very light cream/off-white background
        text: "#2e2e2e",      // dark gray text for softer reading
      }

    },
  },
  plugins: [],
};

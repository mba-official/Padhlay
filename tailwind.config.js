/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        caesar: ['"Caesar Dressing"', 'cursive'], // Custom font for titles or headings
        noto: ['"Noto Sans"', 'sans-serif'],    // Custom font for body text
      },
    },
  plugins: [],
}
}


/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "san-serif" ],
        grotesk: ["Space Grotesk"]
      },
    },
  },
  plugins: [],
}


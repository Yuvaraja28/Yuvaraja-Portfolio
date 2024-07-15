/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "font-color": "#fff",
        "background-color": "#000",
        "menu-color": "hsla(0,0%,100%,.1)",
        "menu-hover": "hsla(0,0%,100%,.08)",
        "line-color": "hsla(0,0%,100%,.16)",
        "social-hover": "hsla(0,0%,100%,.16)"
      },
      screens: {
        'wide': { 'raw': '(max-height: 700px)' },
      },
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#aa033e",

          "secondary": "#7fc93a",

          "accent": "#6bea96",

          "neutral": "#18151E",

          "base-100": "#FFFFFF",

          "info": "#16A2F3",

          "success": "#2DBE7F",

          "warning": "#F4B848",

          "error": "#F55671",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}


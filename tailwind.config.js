import colors from "tailwindcss/colors"

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          ...colors.gray,  // mantém todos os tons padrão
          100: "#1f2523",
          200: "#4d5c57",
          300: "#cdd5d2",
          400: "#e4ece9",
          500: "#f9fbfa",
        },
        green: {
          ...colors.green, // mantém todos os tons padrão
          100: "#1f8459",
          200: "#2cb178",
        },
      },
      fontFamily: {
        sans: ["Open Sans", "serif"], 
      },
    },
  },
  plugins: [],
}

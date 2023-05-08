/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {},
    colors: {

      brown: {
        "50": "#505050",
        "100": "#2f2828",
      },
      white: {
        "50": "#FEF5E7",
        "100": "#fff",
      },
      red: {
        "50": "#DB6262",
        "100": "#B9B9BF",
      },
    },
    fontFamily: {
      'inter': ["'Inter', sans-serif"],
      'junkdog': ["'junkdog'"]
    }
  },
  plugins: [],
}

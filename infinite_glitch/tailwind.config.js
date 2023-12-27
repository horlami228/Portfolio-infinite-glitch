/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        infiniteWhite: "#fffdfc",
        infiniteBlack: "#292a2c",
        infiniteBlue: "#2677ba",
        infiniteGray: "#a8bfc8",
        infiniteDarkGray: "#6c7b83"
      },
      
      fontFamily: {
        signature: ["Great Vibes"]
      }
    },
 
  },
  plugins: [],
}


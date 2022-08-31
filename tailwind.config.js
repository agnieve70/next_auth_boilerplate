/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slowbounce: {
          "0%, 100%": {
            transform: "translateY(-1%)",
            "animation-timing-function": "cubic-bezier(0.8, 0, 1, 1)"
          },
          "50%" :{
            transform: "translateY(0)",
            "animation-timing-function": "cubic-bezier(0, 0, 0.2, 1)"
          }
        },
      },
      animation: {
        'slow-bounce': "slowbounce 4s ease-in-out infinite",
        
      },
    },
  },
  plugins: [],
};

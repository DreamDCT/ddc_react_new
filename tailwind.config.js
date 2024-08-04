/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './src/**/*.html'
  ],
  theme: {
    extend: {
      fontFamily: {
        Cyberpunk:["Cyberpunk"],
        ObitaemOstrov:["ObitaemOstrov"],
        QUINQUEFIVE:["QUINQUEFIVE"],
        ZtChablisRegular:["ZtChablisRegular"]
      }
    },
  },
  plugins: [],
}


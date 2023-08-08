/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        primary: '#0D6AE3'
      },
      fontFamily:{
        dmsans: ["dmsans"],
        "dmsans-medium": ["dmsans-medium"],
        "dmsans-semibold": ["DMSans_600SemiBold"],
        "dmsans-bold": ["DMSans_700Bold"],
        "dmsans-extrabold":["DMSans_800ExtraBold"],
        "dmsans-black":["DMSans_900Black"]
      },
    },
  },
  plugins: [],
}


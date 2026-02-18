/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Sans-Regular", "sans-serif"],
        "sans-medium": ["Sans-Medium", "sans-serif"],
        "sans-semibold": ["Sans-SemiBold", "sans-serif"],
        "sans-bold": ["Sans-Bold", "sans-serif"],
        "sans-extrabold": ["Sans-ExtraBold", "sans-serif"],
        "sans-light": ["Sans-Light", "sans-serif"],
      },
    },
  },
  plugins: [],
};

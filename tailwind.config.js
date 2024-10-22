/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Lexend: ["Lexend", "sans-serif"],
        FiraSans: ["Fira Sans", "sans-serif"],
      },
      Colors: {
        btnBg: ["#0BE58A"],
        darkShade: ["#150B2B"],
        lightDarkShade: ["#150B2BB3"],
        dark2: ["#282828"],
        dark6: ["#878787"],
        lightDark: ["#282828CC"],
        blue: ["#1799F8"],
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
};
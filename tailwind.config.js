/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        btnBg: "#0BE58A",
        darkShade: "#150B2B",
        lightDarkShade: "#150B2BB3",
        dark2: "#282828",
        dark6: "#878787",
        lightDark: "#282828CC",
        blueColor: "#1799F8",
      },

      fontFamily: {
        Lexend: ["Lexend", "sans-serif"],
        FiraSans: ["Fira Sans", "sans-serif"],
      },
      width: {
        sidebar: ["685px"],
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
};

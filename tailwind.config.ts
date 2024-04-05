import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Ploni ML v2 AAA", "sans-serif"],
      },
      colors: {
        black: "#000000",
        black1: "#262729",
        black2: "#101828",
        primary: "#FFE300",
        white: "#FFFFFF",
        white1: "#FFF",
        red: "#ff0000",
        orange: "#FFFAEB",
        pink: "#FEF0C7",
        yellow: "#FEDF89",
        lightBlue: "#FEC84B",
        blue: "#FDB022",
        lime: "#F79009",
        green: "#DC6803",
        darkGreen: "#B54708",
        "level-dark-green": "#0F4C10",
        indigo: "#93370D",
        purple: "#7A2E0E",
        gray1: "#F2F4F7",
        gray2: "#344054",
        gray3: "#98A2B3",
        gray4: "#667085",
        gray5: "#475467",
        gray6: "#F9FAFB",
        gray7: "#D0D5DD",
      },
      borderRadius: {
        custom: "4px",
      },
      boxShadow: {
        custom: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        custom2:
          "0px 8px 8px -4px rgba(16, 24, 40, 0.03), 0px 0px 24px 0px rgba(16, 24, 40, 0.08)",
      },
      container: {
        screens: {
          "2xl": "1310px",
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
export default config;

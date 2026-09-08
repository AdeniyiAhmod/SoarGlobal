import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#06172c",
          900: "#08203c",
          800: "#0b2d52",
          700: "#103f70",
        },
        gold: {
          500: "#d7a32c",
          600: "#b98112",
        },
      },
      boxShadow: {
        soft: "0 18px 45px rgba(6, 23, 44, 0.12)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;

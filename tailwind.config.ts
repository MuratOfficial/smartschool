import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "360px",
      lg: "1200px",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        "3xl": "0 5px 30px 0 rgba(0, 0, 0, 0.3)",
        "4xl": "0 0 10px 0 rgba(0, 0, 0, 0.3)",
      },
      fontFamily: {
        sans: ["var(--font-montserrat)", "Roboto"],
      },
    },
  },
  plugins: [],
};
export default config;

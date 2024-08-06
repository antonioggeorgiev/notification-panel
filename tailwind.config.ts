import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontSize: {
        xxs: "0.66rem",
        xs: "0.81rem",
      },
      fontWeight: {
        "semi-bold": "600",
      },
      zIndex: {
        "60": "60",
        "70": "70",
        "80": "80",
        "90": "90",
        "100": "100",
        auto: "auto",
      },
      minWidth: {
        "3/4": "75%",
      },
      colors: {
        danger: "#e3342f",
        sidebar: "#202123",
        dashboard: "#343541",
        "bg-dirty-white": "f8f8ff"
      },
    },
  },
  plugins: [],
};
export default config;

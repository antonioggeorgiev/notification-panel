import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  purge: {
    safelist: [
      "text-primary",
      "text-warning",
      "text-danger",
      "text-success",
      "bg-primary",
      "bg-warning",
      "bg-danger",
      "bg-success",
      "bg-primary-light",
      "border-primary-dark",
      "bg-warning-light",
      "border-warning-dark",
      "bg-danger-light",
      "border-danger-dark",
      "bg-success-light",
      "border-success-dark",
    ],
  },
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
        sidebar: "#202123",
        dashboard: "#343541",
        "gray-500": "#2c2d36",
        "gray-300": "#4a4b5b",
        "dirty-white": "#f8f8ff",
        "green-400": "#01b694",
        primary: {
          light: "#6C63FF",
          DEFAULT: "#4C51BF",
          dark: "#3C366B",
        },
        warning: {
          light: "#FBD38D",
          DEFAULT: "#F6AD55",
          dark: "#DD6B20",
        },
        danger: {
          light: "#FEB2B2",
          DEFAULT: "#F56565",
          dark: "#C53030",
        },
        success: {
          light: "#9AE6B4",
          DEFAULT: "#48BB78",
          dark: "#2F855A",
        },
      },
    },
  },
  plugins: [],
};
export default config;

/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        neutral: {
          50: "#F9FAFB",
          100: "#F3F4F6",
          200: "#E5E7EB",
          300: "#D1D5DB",
          400: "#9CA3AF",
          500: "#6B7280",
          600: "#4B5563",
          700: "#374151",
          800: "#1F2937",
          900: "#0B121F",
        },
        brand: {
          50: "#e6f4e7",
          100: "#daefdb",
          200: "#b2ddb6",
          300: "#059212",
          400: "#058310",
          500: "#04750e",
          600: "#046e0e",
          700: "#03580b",
          800: "#024208",
          900: "#023306",
        },
        secondary: {
          50: "#e6f4e7",
          100: "#daefdb",
          200: "#b2ddb6",
          300: "#059212",
          400: "#058310",
          500: "#04750e",
          600: "#046e0e",
          700: "#03580b",
          800: "#024208",
          900: "#023306",
        },
      },
      fontSize: {
        "72px": ["72px", "90px"],
        "60px": ["60px", "72px"],
        "48px": ["48px", "60px"],
        "36px": ["36px", "44px"],
        "30px": ["30px", "38px"],
        "24px": ["24px", "32px"],
        "20px": ["20px", "28px"],
        "18px": ["18px", "24px"],
        "16px": ["16px", "22px"],
        "14px": ["14px", "20px"],
        "12px": ["12px", "18px"],
      },
      spacing: {
        content: "120px",
      },
      boxShadow: {
        item: "0px 8px 16px -8px #0F0F0F1F",
        dropdow: "0 8px 24px #959da533",
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant, matchVariant, addUtilities }) {
      matchVariant("has", (value) => {
        return `&${value}`;
      });
      matchVariant("parent", (value) => {
        return `${value} &`;
      });
      matchVariant("pseudo", (value) => {
        return `&::${value}`;
      });
      addVariant("not-lastchild", `&>*:not(:last-child)`);
      addVariant("not-firstchild", `&>*:not(:first-child)`);
      addUtilities({
        ".absolute-center": {
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        },
      });
      addUtilities({
        ".flex-center": {
          "align-items": "center",
          "justify-content": "center",
        },
      });
    }),
  ],
};

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0A0A0D",
        card: "#1A1A1F",
        primary: "#E0C36C",
        muted: "#9CA3AF",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(224, 195, 108, 0.28), 0 10px 30px rgba(224, 195, 108, 0.12)",
      },
      maxWidth: {
        content: "1120px",
      },
    },
  },
  plugins: [],
};

export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary:{
          DEFAULT:"181A2A",
          0:"#F4F4F5",
          1:"#97989F",
          2:"#3B3C4A",
          3:"#181A2A",
        }
      },
    },
  },
  plugins: [],
};
export default config;

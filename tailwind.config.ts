import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#F9F9FB',
        'text-primary': '#1A1A1A',
        'text-secondary': '#444444',
        'accent': '#186C70',
        'button-secondary': '#F1F1F1',
        'icon-analytics': '#FF7A00',
        'icon-sales': '#A632A8',
        'icon-inventory': '#00B7A8',
      },
    },
  },
  plugins: [],
};
export default config;

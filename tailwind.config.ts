import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontSize: {
        '64': ['64px', '72px'],
        'lg': ['18px', '26px'],
        'sectionTitle': ['40px', '48px'],
      },
      colors: {
        'white': '#FFFFFF',
        'black': {
          '400': 'rgba(0, 0, 0, 0.4)',
          '600': 'rgba(0, 0, 0, 0.6)',
          '800': 'rgba(0, 0, 0, 0.8)',
          '900': 'rgba(0, 0, 0, 0.9)',
          '950': '#000000',
        },
        'blushPink': '#FFF5F5',
        'btnPrimary': '#E12429'
      }
    },
  },
  plugins: [],
};
export default config;

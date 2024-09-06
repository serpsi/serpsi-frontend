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
        login: "url('/src/app/login/login-bg.png')",
        "gradiente-vidro":
          "linear-gradient(90.14deg, rgba(0, 153, 216, 0.22) 32.76%, rgba(224, 243, 254, 0.2) 61.12%)",
      },
      // backgroundColor: {
      //   "primary-600": "#0099D8"
      // },
      colors: {
        vidro: "#E0F3FE",
        "primary-950": "#07324A",
        "primary-900": "#0B4F6F",
        "primary-800": "#065F86",
        "primary-700": "#0171A3",
        "primary-600": "#0099D8",
        "primary-500": "#0CB1EB",
        "primary-50": "#F0FAFF",
      },
      borderColor: {
        "primary-500": "#0CB1EB",
      },
    },
  },
  plugins: [],
};
export default config;

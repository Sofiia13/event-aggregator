import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        theater: "#FEE2E2", // для театру
        exhibition: "#FEF3C7", // для виставок
        music: "#EDE9FE", // для музики
        sport: "#DCFCE7", // для спорту
        festival: "#FEF9C3", // для фестивалів
        tech: "#DBEAFE", // для технологій
      },
      fontFamily: {
        jp: ['"LINE Seed JP"', "sans-serif"],
      },
      borderRadius: {
        ticket: "1rem 0.5rem 1rem 0.5rem", // для картки квитка театру
        roundedCard: "1rem", // стандартні картки
      },
      boxShadow: {
        card: "0 4px 6px rgba(0,0,0,0.1)", // тінь карток
      },
    },
  },
  plugins: [],
};

export default config;

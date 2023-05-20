/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#FAFAF8",
        "card-background": "#F5F5F5",
        text: "#252525",
      },
      fontSize: {
        "heading-second": ["2rem", "2.813rem"],
      },
      maxWidth: {
        content: "37.5rem",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

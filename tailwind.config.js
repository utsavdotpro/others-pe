/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx,ts}"],
  theme: {
    extend: {
      colors: {
        primary: {
          500: "#C7E941",
        },
        success: {
          500: "#C7E941",
        },
        error: {
          500: "#E94141",
        },
        disabled: {
          500: "#848484",
        },
        gray: {
          500: "#959FA0",
        },
      },
      fontSize: {
        xxs: ["8px", "12px"],
      },
    },
  },
  plugins: [require("tailwindcss-safe-area")],
};

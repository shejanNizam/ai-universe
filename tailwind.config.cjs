/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#2eba82",

          secondary: "#51ffc2",

          accent: "#ede489",

          neutral: "#1E1B22",

          "base-100": "#30475F",

          info: "#4468CA",

          success: "#23B391",

          warning: "#9F8409",

          error: "#F45D79",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};

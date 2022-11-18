/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,png}",
  ],
  daisyui: {
    themes: [
      {
        doctorsPortalTheme: {
          primary: '#0FCFEC',
          secondary : '#19D3AE',
          neutral : "#3A4256",
          accent : "#1FB2A6",
          "base-100" : "#FFFFFF",

        }
      }
    ]
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}

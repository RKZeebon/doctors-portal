module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        doctorTheme: {
          primary: '#0FCFEC',
          secondary: '#19D3AE',
          accent: '#3A4256'
        },
      },

    ],
  },
  plugins: [require("daisyui")],
}

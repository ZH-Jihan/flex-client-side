module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
"primary": "#570DF8",
"secondary": "#F000B8",
"accent": "#37CDBE",
"neutral": "#3A4256",
"custom": "",
"base-100": "#FFFFFF",
"info": "#3ABFF8",
"success": "#36D399",
"warning": "#FBBD23",   
"error": "#cc0000",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

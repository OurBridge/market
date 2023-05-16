/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          "100": "#D2E6FF", "200": "#9DC9FF",
          "300": "#70B1FF", "400": "#308CFB", "500": "#0074FF", "600": "#00469B",
          "700": "#003676", "800": "#002756", "900": "#001834"
        },
        prigray: {
          "100": "#F8F9FD", "200": "#EEEEEE",
          "300": "#E0E0E0", "400": "#BDBDBD", "500": "#9E9E9E", "600": "#4E4E4E"
        },
        tblack: "#212121"
      }
    },
    fontFamily: {
      'body': [
        'Inter',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'Noto Sans',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji'
      ],
      'sans': [
        'Inter',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'Noto Sans',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji'
      ]
    }
  },
  plugins: [],
}
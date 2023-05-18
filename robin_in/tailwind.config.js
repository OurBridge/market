/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}", "./public/*.{html}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#D2E6FF",
          200: "#9DC9FF",
          300: "#70B1FF",
          400: "#308CFB",
          500: "#0074FF",
          600: "#00469B",
          700: "#003676",
          800: "#002756",
          900: "#001834",
        },
        prigray: {
          100: "#F8F9FD",
          200: "#EEEEEE",
          300: "#E0E0E0",
          400: "#BDBDBD",
          500: "#9E9E9E",
          600: "#4E4E4E",
        },
        tblack: "#212121",
      },
      height: {
        "1/12": "8.333333%",
        "2/12": "16.666667%",
        "3/12": "25%",
        "4/12": "33.333333%",
        "5/12": "41.666667%",
        "6/12": "50%",
        "7/12": "58.333333%",
        "8/12": "66.666667%",
        "9/12": "75%",
        "10/12": "83.333333%",
        "11/12": "91.666667%",
        "1/15": "6.666667%",
        "2/15": "13.333333%",
        "3/15": "20%",
        "4/15": "26.666667%",
        "5/15": "33.333333%",
        "6/15": "40%",
        "7/15": "46.666667%",
        "8/15": "53.333333%",
        "9/15": "60%",
        "10/15": "66.666667%",
        "11/15": "73.333333%",
        "12/15": "80%",
        "13/15": "86.666667%",
        "14/15": "93.333333%",
        "1/20": "5%",
        "2/20": "10%",
        "3/20": "15%",
        "4/20": "20%",
        "5/20": "25%",
        "6/20": "30%",
        "7/20": "35%",
        "8/20": "40%",
        "9/20": "45%",
        "10/20": "50%",
        "11/20": "55%",
        "12/20": "60%",
        "13/20": "65%",
        "14/20": "70%",
        "15/20": "75%",
        "16/20": "80%",
        "17/20": "85%",
        "18/20": "90%",
        "19/20": "95%",
        '6/100': '5.5%',
        '7/100': '7.5%',
        '87/100': '87%',
      },
    },
    fontFamily: {
      body: [
        "Inter",
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
      sans: [
        "Inter",
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
    },
  },
  plugins: [],
};

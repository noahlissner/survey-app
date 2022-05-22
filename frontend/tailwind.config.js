module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        black: "#000",
        gray: {
          400: "#656565",
          500: "#999999",
        },
        white: "#fff",
        blue: {
          100: "#D9CCFC",
          200: "#6549B4",
          300: "#C5B4F4",
          400: "#1E8ADB",
          450: "#1a80cd",
          500: "#9B7EE7",
          600: "#513A8D",
          700: "#291E48",
          800: "#1F1635",
          900: "#0A0712",
        },
      },
      backgroundImage: {
        earth:
          "https://imagedelivery.net/3ecvmLCFkS-FijMWb0qFvQ/5b077803-c9c3-4d2c-bb82-6340ca534500/public",
        spaceman1:
          "https://imagedelivery.net/3ecvmLCFkS-FijMWb0qFvQ/519304df-20e8-4d86-5bd7-373ac154b200/public",
        satellite:
          "https://imagedelivery.net/3ecvmLCFkS-FijMWb0qFvQ/4bf62a87-6156-422a-94a1-d53d874ce000/public",
        spaceman2:
          "https://imagedelivery.net/3ecvmLCFkS-FijMWb0qFvQ/9e84d9f6-690f-4e10-c09d-be3578372a00/public",
      },
      fontFamily: {
        sans: "Poppins",
      },
    },
  },
  plugins: [],
};

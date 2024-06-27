/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        tablet: "768px",
      },
      colors: {
        darkCyan: "#19A1AE",
        lightCyan: "#41CBD3",
        darkBlue: "#2E3349",
        midGrey: "#6B7082",
        veryLightGrey: "#E8E9EC",
      },
      fontFamily: {
        body: "KumbhSans",
      },
      fontSize: {
        xxs: "0.625rem",
      },
      lineHeight: {
        fs10: "0.75rem",
        fs14: "1.0625rem",
        fs18: "1.375rem",
      },
      letterSpacing: {
        statsCategory: "1.5px",
      },
      margin: {
        profilePicMargin: "3.3125rem",
        profilePicBorder: "0.3125rem",
      },
      padding: {
        cardBottom: "1.6875rem",
      },
      height: {
        cardTopPattern: "140px",
      },
      maxWidth: {
        card: "21.875rem",
      },
      borderRadius: {
        card: "0.9375rem",
      },
      borderWidth: {
        profilePic: "0.3125rem",
      },
      boxShadow: {
        cardShadow: "0 50px 100px -20px hsla(197, 85%, 20%, 50.48%)",
      },
      gap: {
        nameAgeGap: "0.53125rem",
        statsGap: "0.5625rem",
      },
    },
  },
  plugins: [],
};

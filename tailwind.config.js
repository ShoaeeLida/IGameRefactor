/** @type {import('tailwindcss').Config} */
const theme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["iranYekanX", ...theme.fontFamily.sans],
      },
      colors: {
        redColor: "#FF3333",
        textColor: "#334155"
      },
      container: {
        padding: {
          DEFAULT: '0.5rem',
        }
      },
      screens: {
        'xs': '490px',
      },
    },
  },
  plugins: [
   
    plugin(function ({ addComponents
      
    }) {
      addComponents({
        ".btn": {
          padding: ".6rem 1rem",
          borderRadius: ".5rem",
          verticalAlign: "middle",
        },
        ".btn-outline": {
          backgroundColor: colors.white,
          border: "1px solid",
          borderColor: colors.slate[400],
          color: colors.slate[600],
        },
        ".btn-blue": {
          backgroundColor: colors.indigo[600],
          color: colors.white,

        },
        ".product-card": {
          display: "block",

          maxWidth: "9rem",
          img: {
            objectFit: "cover",
            objectPosition: "center",
            aspectRatio: "4/3",
            borderRadius: "0.5rem",
            width: "100%",
            height: "10.5rem"
          },
        },
        ".internal-pay-card": {
          display: "block",

          maxWidth: "8.5rem",
          ".img": {
            position: "relative",
            borderRadius: "0.5rem",
            width: "100%",
            height: "8.5rem",
            overflow: "hidden",
            img: {
              width: "100%",
              height: "100%",
              objectFit: "cover",
              zIndex: "1",
              position: "relative"
            }
          },
        },
        
      });

     
    }),
  ],
}


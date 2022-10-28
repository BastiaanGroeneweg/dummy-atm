const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "atm-green-1": "#347257",
        "atm-green-2": "#cae2d9",
        "atm-green-3": "#94beaf",
      },
      boxShadow: {
        darkGreen: "0 0 3px 3px #17553a",
      },
    },
  },
  variants: {
    extend: {
      margin: ["first"],
      active: ["first"],
    },
  },
  plugins: [
    require("tw-elements/dist/plugin"),
    require("tailwindcss-themer")({
      defaultTheme: {
        // put the default values of any config you want themed
        // just as if you were to extend tailwind's theme like normal https://tailwindcss.com/docs/theme#extending-the-default-theme
        extend: {
          // colors is used here for demonstration purposes
          colors: {},
        },
      },
      themes: [
        {
          // name your theme anything that could be a valid css selector
          // remember what you named your theme because you will use it as a class to enable the theme
          name: "atm",
          // put any overrides your theme has here
          // just as if you were to extend tailwind's theme like normal https://tailwindcss.com/docs/theme#extending-the-default-theme
          extend: {
            colors: {
              primary: "#347257",
              secondary: "#cae2d9",
            },
          },
        },
        {
          name: "ctm",
          extend: {
            colors: {
              primary: "#0f4c75",
              secondary: "##C0D8F3",
            },
          },
        },
      ],
    }),
  ],
};

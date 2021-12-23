const { guessProductionMode } = require("@ngneat/tailwind");

module.exports = {
  purge: {
    enabled: guessProductionMode(),
    content: ["./apps/**/*.{html,ts}", "./libs/**/*.{html,ts}"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".break-keep": {
          "word-break": "keep-all",
        },
      });
    }),
  ],
};

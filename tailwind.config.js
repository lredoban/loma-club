const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    // classes that are generated dynamically, e.g. `rounded-${size}` and must
    // be kept
    safeList: [],
    content: [
      './index.html',
      './src/**/*.{vue,js,ts}',
      // etc.
    ],
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
  theme: {
    extend: {
      content: {
        quote: "'\"'"
      },
      colors: {
        creme: "#F4DFCE",
        beige: "#EFC19D",
        ocre: "#D4805C",
        gray: {
          "50": "#FDFCFC",
          "100": "#FAF7F5",
          "200": "#F0EAE5",
          "300": "#E7DED5",
          "400": "#DED1C4",
          "500": "#D5C4B4",
          "600": "#B6987C",
          "700": "#906F51",
          "800": "#584431",
          "900": "#211912"
        },
        black: '#04030F'
      },
      fontFamily: {
       sans: ['Helvetica Neue', ...defaultTheme.fontFamily.sans],
       'virtual': ['Virtual', ...defaultTheme.fontFamily.serif]
      },
    },
  },
}

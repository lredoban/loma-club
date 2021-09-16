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
      colors: {
        primary: {
          "50": "#fcfaf8",
          "100": "#faf7f5",
          "200": "#f7f2ee",
          "300": "#f2eae3",
          "400": "#efe4dc",
          "500": "#EBDED4",
          "600": "#cba990",
          "700": "#ab774f",
          "800": "#65462f",
          "900": "#231810"
        },
        purple: {
          "50": "#107108106",
          "100": "#f7f6f8",
          "200": "#d6d1db",
          "300": "#b8afc0",
          "400": "#978aa3",
          "500": "#786986",
          "600": "#5f536a",
          "700": "#483f50",
          "800": "#312b36",
          "900": "#1a161d"
        },
        orange: {
          "50": "#100106108",
          "100": "#fdf4f1",
          "200": "#f7cfc4",
          "300": "#f1a792",
          "400": "#eb8265",
          "500": "#e55a34",
          "600": "#c73f19",
          "700": "#952f13",
          "800": "#5f1e0c",
          "900": "#2d0e06"
        },
        black: '#04030F',
        green: {
          "50": "#108106106",
          "100": "#f6f8f8",
          "200": "#d3deda",
          "300": "#b0c4bc",
          "400": "#8daa9e",
          "500": "#6b8f80",
          "600": "#557266",
          "700": "#3f554c",
          "800": "#2c3a34",
          "900": "#161d1a"
        }
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
       'virtual': ['Virtual', ...defaultTheme.fontFamily.serif],
       'cooper-hewitt': ['CooperHewitt', ...defaultTheme.fontFamily.sans]
      },
    },
  },
}

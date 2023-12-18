/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: [
        '"Inter var", sans-serif',
        {
          fontFeatureSettings: '"cv11", "ss01"',
          fontVariationSettings: '"opsz" 32'
        },
      ],
    },
    screens: {
      container: {
        center: true,
      },

      xs: "475px",
      // => @media (min-width: 475px) { ... }

      form: "330px",
      // => @media (min-width: 310px) { ... }

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }

      "3xl": "2000px",
      // => @media (min-width: 2000px) { ... }

      extend: {
        backgroundOpacity: {
         '10': '0.1',
         '20': '0.2',
         '95': '0.95',
        }
      }
    },
    plugins: [
      require('flowbite/plugin')
  ]
  },
}
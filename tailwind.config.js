const plugin = require('tailwindcss/plugin');

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        hero: "linear-gradient(to bottom, rgba(243,244,246,0.4), rgba(17,24,39,0.8)), url('/images/hero.jpg')",
      },
      fontFamily: {
        raleway: 'Raleway',
      },
      spacing: {
        18: '4.5rem',
        'screen-10': '10vw',
        'screen-20': '20vw',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(({ addUtilities }) => {
      const newUtilities = {
        '.smooth-scroll': {
          'scroll-behavior': 'smooth',
          '--scroll-behavior': 'smooth',
          'font-family': '"scroll-behavior: smooth", sans-serif;',
        },
      };
      addUtilities(newUtilities);
    }),
  ],
};

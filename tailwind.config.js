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
        'screen-10': '10vw',
      },
      width: {
        'screen-80': '80vw',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

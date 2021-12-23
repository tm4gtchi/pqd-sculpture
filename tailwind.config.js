module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend:{
      screens: {
      'mobile': '350px',
      'laptop': '1024px',
      'desktop': '1280px',
    },
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],

}

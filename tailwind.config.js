module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    minHeight: {
      '0': '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      'full': '100%',
      'hero': '450px'
    },
   
    extend: {
       backgroundImage: {

         'blue-hero': "url('/src/images/MY22_ADH01_Blue.jpg')",

        },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

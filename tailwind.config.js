// See https://tailwindcss.com/docs/configuration for details
module.exports = {
  purge: [
    './src/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        'main': '#2C2E83',
        'accent': '#EB6C6B',
        'accent2': '#FEF0E4',
        'accent3': '#FEF0E3',
      }
    }
  },
  variants: {},
  // https://github.com/tailwindcss/custom-forms
  plugins: [require('@tailwindcss/custom-forms')],
};

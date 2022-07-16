/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {},
    fontFamily: {
      display: ['Inter', 'system-ui', 'sans-serif'],
      body: ['Inter', 'system-ui', 'sans-serif'],
    },
    screens: {
      sm: { min: '550px', max: '550px' },
      md: { min: '550px', max: '550px' },
      lg: { min: '550px', max: '550px' },
      xl: { min: '550px' },
    },
    container: {
      center: true,
      maxWidth: {
        sm: '660px',
        md: '768px',
        lg: '768px',
        xl: '768px',
        '2xl': '768px',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

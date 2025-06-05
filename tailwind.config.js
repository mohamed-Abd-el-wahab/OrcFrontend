/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand': {
          blue: '#0D0DFF',
          black: '#000000',
          'neutral-20': '#333333',
          'neutral-5': '#F2F2F2',
        }
      },
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui'],
      },
      maxWidth: {
        'container': '1280px',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      screens: {
        'xs': '480px',
        'sm': '640px',
        'md': '960px',
        'lg': '1280px',
      },
    },
  },
  plugins: [],
};
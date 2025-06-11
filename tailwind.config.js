/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Primary Background Colors - Much darker like Gemini
        'dark-navy': '#0A0A0F',
        'deep-charcoal': '#111115',
        // Accent and Interaction Colors - Pure blue like Gemini
        'bright-cyan': '#4F7DF3',
        'electric-blue': '#5B8DEF',
        'crisp-white': '#FFFFFF',
        // Text Colors
        'primary-text': '#FFFFFF',
        'secondary-text': '#A0A0A8',
      },
      fontFamily: {
        'sans': ['Roboto', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'float-gentle': 'floatGentle 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        floatGentle: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%': { boxShadow: '0 0 5px rgba(79, 125, 243, 0.4)' },
          '100%': { boxShadow: '0 0 20px rgba(79, 125, 243, 0.8)' },
        },
      },
      backdropFilter: {
        'none': 'none',
        'blur': 'blur(20px)',
      },
    },
  },
  plugins: [],
};

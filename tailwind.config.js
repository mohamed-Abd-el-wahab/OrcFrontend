/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // ORC Brand Colors - Exact from brand guidelines
        'orc-blue': '#0000F2',       // Primary brand blue
        'orc-black': '#000000',      // Brand black
        'orc-white': '#FFFFFF',      // Brand white
        
        // Legacy colors for gradual migration
        'dark-navy': '#0A0A0F',
        'deep-charcoal': '#111115',
        'bright-cyan': '#0000F2',    // Map to brand blue
        'electric-blue': '#0000F2',  // Map to brand blue
        'crisp-white': '#FFFFFF',
        
        // Text colors using brand palette
        'primary-text': '#FFFFFF',
        'secondary-text': '#A0A0A8',
        'accent-text': '#0000F2',
      },
      fontFamily: {
        // ORC Brand Typography - Primary: Aileron, Secondary: Montserrat
        'aileron': ['Aileron', 'system-ui', 'sans-serif'],
        'montserrat': ['Montserrat', 'system-ui', 'sans-serif'],
        'sans': ['Aileron', 'system-ui', 'sans-serif'], // Default to primary font
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'float-gentle': 'floatGentle 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite alternate',
        'brand-pulse': 'brandPulse 2s ease-in-out infinite alternate',
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
          '0%': { boxShadow: '0 0 5px rgba(0, 0, 242, 0.4)' },
          '100%': { boxShadow: '0 0 20px rgba(0, 0, 242, 0.8)' },
        },
        brandPulse: {
          '0%': { boxShadow: '0 0 5px rgba(0, 0, 242, 0.4)', transform: 'scale(1)' },
          '100%': { boxShadow: '0 0 20px rgba(0, 0, 242, 0.8)', transform: 'scale(1.02)' },
        },
      },
      spacing: {
        // Brand-specific spacing based on logo guidelines
        'brand-xs': '0.5rem',   // 8px
        'brand-sm': '1rem',     // 16px  
        'brand-md': '1.5rem',   // 24px
        'brand-lg': '2rem',     // 32px
        'brand-xl': '3rem',     // 48px
        'brand-2xl': '4rem',    // 64px
      },
      backdropFilter: {
        'none': 'none',
        'blur': 'blur(20px)',
      },
    },
  },
  plugins: [],
};

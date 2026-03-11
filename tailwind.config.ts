import type { Config } from 'tailwindcss';

export default {
  darkMode: ['selector', '.dark'],
  theme: {
    extend: {
      colors: {
        primary: '#fe5933',
        cta: '#2c2c2c',
        'cta-gold': '#fccc41',
      },
      borderRadius: {
        '4xl': '0.625rem',
      },
      fontFamily: {
        bricolage: '"Bricolage Grotesque", sans-serif',
      },
    },
  },
  plugins: [],
} satisfies Config;

import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#F9EAE4',
          100: '#FFD2BB',
          200: '#EADEFC',
          300: '#D3B9F9',
          400: '#9F7BFF',
          500: '#7848FE',
          600: '#280470',
          700: '#1405D6',
          800: '#280470',
          900: '#1405D6',
        },
        accent: {
          50: '#EADEFC',
          100: '#D3B9F9',
          400: '#9F7BFF',
          500: '#7848FE',
          600: '#280470',
          700: '#1405D6',
          800: '#280470',
          900: '#1405D6',
        },
        neutral: {
          0: '#FFFFFF',
          50: '#F4F4F4',
          100: '#DCDBDD',
          200: '#DCDBDD',
          300: '#C4C4C4',
          400: '#C4C4C4',
          500: '#959593',
          600: '#817E77',
          700: '#3F3B3A',
          800: '#3F3B3A',
          900: '#000000',
          950: '#000000',
        },
        success: '#10b981',
        warning: '#f59e0b',
        error: '#ef4444',
        info: '#7848FE',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      fontSize: {
        'hero': ['56px', { lineHeight: '64px', letterSpacing: '-0.02em', fontWeight: '600' }],
        'section': ['40px', { lineHeight: '48px', letterSpacing: '-0.01em', fontWeight: '600' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
      },
      maxWidth: {
        'content': '1280px',
        'narrow': '768px',
        'text': '640px',
      },
      boxShadow: {
        'lift': '0 12px 24px rgba(120, 72, 254, 0.15)',
        'lift-lg': '0 20px 40px rgba(120, 72, 254, 0.2)',
        'purple': '0 10px 40px rgba(159, 123, 255, 0.3)',
        'glow': '0 0 20px rgba(120, 72, 254, 0.4)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-purple': 'linear-gradient(135deg, #9F7BFF 0%, #7848FE 100%)',
        'gradient-lavender': 'linear-gradient(135deg, #EADEFC 0%, #D3B9F9 50%, #9F7BFF 100%)',
        'gradient-deep': 'linear-gradient(135deg, #7848FE 0%, #280470 100%)',
        'gradient-soft': 'linear-gradient(135deg, #F9EAE4 0%, #EADEFC 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'shimmer': 'shimmer 2s infinite linear',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
    },
  },
  plugins: [],
}

export default config

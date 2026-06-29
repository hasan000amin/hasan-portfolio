/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./views/**/*.ejs",
    "./public/js/**/*.js",
  ],
  darkMode: 'class', // Use class-based dark mode
  theme: {
    extend: {
      // Jujutsu Kaisen inspired color palette
      colors: {
        jjk: {
          dark: '#0a0a0f',
          darker: '#050508',
          purple: {
            DEFAULT: '#7c3aed',
            light: '#a78bfa',
            dark: '#5b21b6',
            glow: '#8b5cf6',
          },
          blue: {
            dark: '#1e1b4b',
            deeper: '#0f0a2e',
            glow: '#3b82f6',
            neon: '#06b6d4',
          },
          accent: {
            cyan: '#22d3ee',
            purple: '#c084fc',
            pink: '#ec4899',
          },
          glass: {
            light: 'rgba(255, 255, 255, 0.05)',
            medium: 'rgba(255, 255, 255, 0.08)',
            heavy: 'rgba(255, 255, 255, 0.12)',
          },
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        display: ['Space Grotesk', 'Inter', 'sans-serif'],
      },
      animation: {
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'slide-up': 'slide-up 0.6s ease-out',
        'slide-down': 'slide-down 0.6s ease-out',
        'fade-in': 'fade-in 0.8s ease-out',
        'typing': 'typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite',
        'gradient': 'gradient 8s ease infinite',
        'neon-pulse': 'neon-pulse 1.5s ease-in-out infinite alternate',
        'rotate-slow': 'rotate-slow 20s linear infinite',
      },
      keyframes: {
        'glow-pulse': {
          '0%': { 'box-shadow': '0 0 20px rgba(124, 58, 237, 0.3), 0 0 40px rgba(124, 58, 237, 0.1)' },
          '100%': { 'box-shadow': '0 0 30px rgba(124, 58, 237, 0.6), 0 0 60px rgba(124, 58, 237, 0.2)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'slide-down': {
          '0%': { transform: 'translateY(-30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'gradient': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        'neon-pulse': {
          '0%': { 'text-shadow': '0 0 7px rgba(139, 92, 246, 0.6), 0 0 10px rgba(139, 92, 246, 0.3)' },
          '100%': { 'text-shadow': '0 0 20px rgba(139, 92, 246, 0.9), 0 0 40px rgba(139, 92, 246, 0.5), 0 0 80px rgba(139, 92, 246, 0.3)' },
        },
        'rotate-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      backgroundSize: {
        '300%': '300% 300%',
      },
      boxShadow: {
        'neon': '0 0 15px rgba(124, 58, 237, 0.4), 0 0 30px rgba(124, 58, 237, 0.1)',
        'neon-cyan': '0 0 15px rgba(34, 211, 238, 0.4), 0 0 30px rgba(34, 211, 238, 0.1)',
        'neon-strong': '0 0 25px rgba(124, 58, 237, 0.6), 0 0 50px rgba(124, 58, 237, 0.2)',
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [],
}

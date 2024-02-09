/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        "nunito": "var(--nunito-font)",
      },
      colors: {
        primary: '#482C29',
        secondary: '#FFE569'
      },
      animation: {
        "ping-fast": 'beat 0.5s cubic-bezier(0, 0, 0.2, 1) infinite;'
      },
      keyframes: {
        beat: {
          '75%, 100%': {
            transform: 'scale(1.25)',
            opacity: 0,
          },
        },
      }
    },
  },
  plugins: [],
}

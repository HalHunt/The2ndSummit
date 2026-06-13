/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        night: { DEFAULT: '#101c19', 2: '#16241f' },
        line: '#2c3f37',
        snow: '#e9ede9',
        mist: '#9fb0a7',
        signal: '#ff6a3d',
        gold: '#e8c45a',
      },
      fontFamily: {
        cond: ['"Barlow Condensed"', 'sans-serif'],
        sans: ['Barlow', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
};

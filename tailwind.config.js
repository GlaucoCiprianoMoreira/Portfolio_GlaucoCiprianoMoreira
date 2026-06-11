/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        folder: {
          bg:        '#1E1E1E',
          black:     '#121212',
          yellow:    '#F4C542',
          yellowDark:'#D9AA1E',
          border:    '#B8901A',
          content:   '#F5F5F5',
        },
      },
      fontFamily: {
        sans: ['Segoe UI', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        folder: '0 8px 32px rgba(0,0,0,0.55), 0 2px 8px rgba(0,0,0,0.3)',
      },
    },
  },
  plugins: [],
}

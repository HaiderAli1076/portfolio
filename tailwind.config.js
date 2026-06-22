/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-base': '#0A0F0D',
        'bg-elevated': '#101713',
        'accent-primary': '#34D399',
        'accent-secondary': '#F5A524',
        'accent-muted': '#6EE7B7',
        'text-primary': '#F9FAFB',
        'text-secondary': '#D1D5DB',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      keyframes: {
        shimmer: {
          '0%': { transform: 'translateX(-100%)', opacity: 0.4 },
          '50%': { opacity: 0.7 },
          '100%': { transform: 'translateX(100%)', opacity: 0.4 },
        },
      },
      animation: {
        shimmer: 'shimmer 1.5s infinite',
      },
      
    },
  },
  plugins: [],
}
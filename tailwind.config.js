/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nokora', 'Inter', 'sans-serif'],
        nokora: ['Nokora', 'sans-serif'],
      },
      colors: {
        dark: {
          900: '#0c0e14',
          800: '#141722',
          700: '#1e2235',
          600: '#2a2f47',
          500: '#3d4466'
        },
        accent: {
          purple: '#8b5cf6',
          cyan: '#06b6d4',
          emerald: '#10b981'
        }
      }
    },
  },
  plugins: [],
}

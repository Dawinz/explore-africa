/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F28C38',      // Heritage Exchange Orange
        secondary: '#6B7F5E',    // Heritage Exchange Green
        accent: '#E67E22',       // Accent Orange
        dark: '#1a1a1a',
        heritage: {
          orange: '#F28C38',
          green: '#6B7F5E',
          'green-light': '#8B9B7E',
          'green-dark': '#4A5D3F',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

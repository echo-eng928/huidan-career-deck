/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/components/admin/**/*.{js,ts,jsx,tsx}",
    "./src/components/admin/editors/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#FBFBFA',
          text: '#111111',
          muted: '#666666',
          border: '#E5E5E0',
          accent: '#1E40AF'
        }
      }
    },
  },
  plugins: [],
}
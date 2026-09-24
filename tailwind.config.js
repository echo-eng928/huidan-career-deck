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
      // 动画配置
      animation: {
        'spin-slow': 'spin 4s linear infinite', 
        'shimmer': 'shimmer 2s infinite', 
      },
      keyframes: { 
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        }
      }, // <--- 就是这里！补上这个极其关键的逗号
      
      // 颜色配置
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
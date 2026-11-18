/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0B1F4B',
        royal: '#1D4ED8',
        'light-blue': '#DBEAFE',
        'lighter-blue': '#EFF6FF',
        'body-grey': '#64748B',
        border: '#E2E8F0',
        crimson: '#E5003D',
      },
      fontFamily: {
        inter: ['Inter', 'Aptos', 'Poppins', 'sans-serif'],
      },
      borderRadius: {
        '20': '20px',
        '16': '16px',
      },
      boxShadow: {
        card: '0 8px 24px rgba(11,31,75,0.06)',
        frame: '0 12px 32px rgba(11,31,75,0.10)',
      },
    },
  },
  plugins: [],
}

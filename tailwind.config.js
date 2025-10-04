/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'cp-purple': '#C26FD5',
        'cp-green': '#DEF3A7',
        'cp-orange': '#FF5C00',
        'cp-purple-text': '#A640BA',
        'cp-bg': '#F2E9F0',
        'cp-blue': '#05AAEA',
        'cp-purple-gradient': '#AB6FC2',
        'cp-lime': '#DAFA80',
      },
      fontFamily: {
        'rifton': ['Rifton', 'sans-serif'],
        'manrope': ['Manrope', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-cp': 'linear-gradient(180deg, rgba(5, 170, 234, 0.55) 0%, rgba(171, 111, 194, 0.55) 50%, rgba(218, 250, 128, 0.55) 100%)',
      },
    },
  },
  plugins: [],
}


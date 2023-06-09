/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        black: '#111010',
        'active-dark': '#262626',
        'active-light': '#EEEEEE',
        border: '#404040',
        'text-light': '#E5E5E5',
      },
      fontFamily: {
        poppins: "'Poppins', san-serif",
        sans: "'NotoSans', serif",
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

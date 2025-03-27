/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // App Router files
    './pages/**/*.{js,ts,jsx,tsx,mdx}', // Pages Router files
    './components/**/*.{js,ts,jsx,tsx,mdx}', // Component files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
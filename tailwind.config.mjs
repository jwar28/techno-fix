/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        mat: { DEFAULT: '#24575A', deep: '#1B4547', line: '#3B6E70' },
        mint: '#9FE3D6',
        fog: '#DDEDEB',
        paper: { DEFAULT: '#F7F7F2', rule: '#CBCEC5', dim: '#5A605C' },
        carbon: '#1F3FD1',
        stamp: '#D7261E',
        ink: '#121615',
      },
      fontFamily: {
        sans: ['"Archivo Variable"', 'Archivo', 'system-ui', 'sans-serif'],
        type: ['"Courier Prime"', 'ui-monospace', 'monospace'],
      },
      maxWidth: { page: '1240px' },
    },
  },
};

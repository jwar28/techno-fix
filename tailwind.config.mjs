module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './node_modules/flowbite/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        secondary: '#a3a3a3',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};

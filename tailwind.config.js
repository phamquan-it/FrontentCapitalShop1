import("tailwindcss").Config;
export default {
  darkMode: true,
  variants: {
    extend: {},
  },
  content: [
    "./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
};

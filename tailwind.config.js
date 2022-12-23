/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    fontFamily: {
      code: ["Cascadia Code", 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', "Segoe UI", 'Roboto',
        "Helvetica Neue", 'Arial', "Noto Sans", 'sans-serif', "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
        "Noto Color Emoji"],
    },
    extend: {
      colors: {
        "bkg-blue": "#171F33",
        "secondary-gray": "#393F4D",
        "secondary-gray-light": "#606980",
        "accent-blue": "#5C7CCC",
        "text-white": "#E7F6F2",
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

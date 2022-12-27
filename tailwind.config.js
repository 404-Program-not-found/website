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
                "secondary-blue": "#202B46",
                "accent-blue": "#5C7CCC",
                "text-white": "#E7F6F2",
            },
            borderWidth: {
                "3": "3px",
                "6": "6px",
            },
            maxWidth: {
                "xxs": "16rem",
            },
            space: {
                "5.5": "1.375rem",
            },
            fontSize: {
                "4.5xl": "2.5rem",
            },
            gap: {
                "4.5": "1.125rem",
            },
            animation: {
                "idle-bounce": "idle-bounce 4s ease-in-out infinite",
            },
            keyframes: {
                "idle-bounce": {
                    "50%": {
                        transform: "translateY(-4px)",
                    },
                    "0%, 100%": {
                        transform: "translateY(4px)",
                    }
                }
            },
            gridTemplateColumns: {
                "fluid-buttons": "repeat(auto-fit, minmax(200px, 1fr))",
            }
        },
    },
    plugins: [
        require('flowbite/plugin')
    ],
}
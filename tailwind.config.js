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
                "bkg-blue": "rgb(var(--bkg-blue))",
                "secondary-gray": "rgb(var(--secondary-gray))",
                "secondary-gray-light": "rgb(var(--secondary-gray-light))",
                "secondary-blue": {
                    "transparent": "rgba(var(--secondary-blue), 0.8)",
                    "DEFAULT": "rgb(var(--secondary-blue))",
                },
                "accent-blue": "rgb(var(--accent-blue))",
                "text-white": "rgb(var(--text-white))",
                "text-black": "rgb(var(--text-black))",
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
                'unset': 'unset',
                "inherit": "inherit",
            },
            gap: {
                "4.5": "1.125rem",
            },
            animation: {
                "idle-bounce": "idle-bounce 4s ease-in-out infinite",
                "rotation-pulse": "rotate-pulse ease-in-out 10s infinite",
                "blur-pulse": "blur-pulse ease-in-out 10s infinite",
            },
            keyframes: {
                "idle-bounce": {
                    "0%, 100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-4px)" },
                },
                "rotate-pulse": {
                    "0%": { transform: "rotate(0deg)", filter:"blur(40px)" },
                    "50%": { transform: "rotate(180deg)", filter:"blur(50px)" },
                    "100%": { transform: "rotate(360deg)", filter:"blur(40px)" },
                },
                "blur-pulse": {
                    "0%": { filter:"blur(60px)" },
                    "50%": { filter:"blur(70px)" },
                    "100%": { filter:"blur(60px)" },
                }
            },
            gridTemplateColumns: {
                "fluid-buttons": "repeat(auto-fit, minmax(200px, 1fr))",
            },
            boxShadow: {
                "inset-fill-100": "inset 100px 0 0 0 rgb(0 0 0 / 0.05)"
            },
            inset: {
                unset: "unset",
            },
            spacing: {
                unset: 'unset',
                "4.5": "1.125rem",
            },
            transitionProperty: {
                'focus': 'ring background-color border-color border-radius',
            },
            aspectRatio: {
                'card': '2 / 3',
            }
        },
    },
    plugins: [
        require('flowbite/plugin')
    ],
}
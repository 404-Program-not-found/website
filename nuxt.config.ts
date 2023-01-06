// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
            "tailwindcss/nesting": {},
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    runtimeConfig: {
        githubSecret: process.env.GITHUB_SECRET,
    },
    vite: {
        resolve: {
            alias: {
                // 'node-fetch': 'isomorphic-fetch',
            }
        }
    }
})

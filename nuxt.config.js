require('dotenv').config();
const {BASE_URL, FOOTER_COPYRIGHT} = process.env;

export default {
    mode: 'universal',
    /*
     ** Headers of the page
     */
    env: {
        baseUrl: process.env.BASE_URL || 'http://localhost:3000',
        FOOTER_COPYRIGHT: FOOTER_COPYRIGHT
    },
    head: {
        title: process.env.npm_package_name || '',
        titleTemplate: 'ZODIAC BLOG',
        htmlAttrs: {
            prefix: 'og: http://ogp.me/ns#',
            lang: 'ja'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            // { name: 'google-site-verification', content: 'XXXXXXXXXXXXXXXXXXXXXXX' },
            { name: 'theme-color', content: '#CD5C5C' },
            { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
            { hid: 'og:site_name', property: 'og:site_name', content: 'ZODIAC BLOG' },
            { hid: 'og:type', property: 'og:type', content: 'website' },
            { hid: 'og:url', property: 'og:url', content: 'https://zodiac-g12.github.io/blog' },
            { hid: 'og:title', property: 'og:title', content: 'ZODIAC BLOG' },
            { hid: 'og:description', property: 'og:description', content: process.env.npm_package_description || '' },
            { hid: 'og:image', property: 'og:image', content: 'https://avatars1.githubusercontent.com/u/12181838?s=460&av=4' },
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: './favicon.ico?' }
        ]
    },
    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#fff' },
    /*
     ** Global CSS
     */
    css: [
        {src: '~/node_modules/highlight.js/styles/ir-black.css', lang: 'css'},
    ],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
    ],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [
    ],
    /*
     ** Nuxt.js modules
     */
    modules: [
        '@nuxtjs/pwa',
    ],
    /*
     ** Build configuration
     */
    manifest: {
        name: "ZODIAC BLOG",
        lang: 'ja',
    },
    build: {
        hardSource: true,
        /*
         ** You can extend webpack config here
         */
        extend (config, ctx) {
        }
    }
}

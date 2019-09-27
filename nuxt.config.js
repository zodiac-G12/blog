export default {
    router: {
        base: '/blog/'
    },
    modules: [['nuxt-webfontloader']],
    webfontloader: {
        google: {
            families: [
                'PT+Serif',
                'Open+Sans',
                'Bevan',
                'Spectral+SC',
                'Ubuntu+Mono',
                'Black+Ops+One',
                'Bungee+Inline',
                'Bungee+Shade'
            ]
        }
    },
    head: {
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/blog/favicon.ico' }
        ],
        htmlAttrs: {
            prefix: 'og: http://ogp.me/ns#'
        },
        titleTemplate: '%s - ZODIAC BLOG',
        meta: [
            { hid: 'description', name: 'description', content: '技術ブログ' },
            { hid: 'og:site_name', property: 'og:site_name', content: 'ZODIAC BLOG' },
            { hid: 'og:type', property: 'og:type', content: 'website' },
            { hid: 'og:url', property: 'og:url', content: 'https://zodiac-G12.github.io/blog' },
            { hid: 'og:title', property: 'og:title', content: 'ZODIAC BLOG' },
            { hid: 'og:description', property: 'og:description', content: '技術ブログ' },
            { hid: 'og:image', property: 'og:image', content: 'https://avatars1.githubusercontent.com/u/12181838?s=460&av=4' },
            // { property: 'article:publisher', content: 'FacebookURL' },
            // { property: 'fb:app_id', content: 'FacebookAppID' },
            // { name: 'twitter:card', content: 'summary' },
            // { name: 'twitter:site', content: '@Twitter' },
        ],
    },
}

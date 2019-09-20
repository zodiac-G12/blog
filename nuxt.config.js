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
}

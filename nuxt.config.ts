// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [{ src: '~/assets/styles/globals.scss', lang: 'sass' }, { src: '~/assets/styles/fonts.scss', lang: 'scss' }],
  target: 'static',
  site: {
    url: 'https://agenciamaniac.digital',
    name: 'Maniac'
  },
  app: {
    head: {
      title: "Maniac - Criação de Sites, E-commerce e Branding",
      meta: [
        { hid: 'description', name: 'description', content: 'A maniac é uma agência digital especializada em desenvolvimento de sites, e-commerces e branding. Criamos experiências digitais criativas e fora da curva para impulsionar seu negócio.' },
        { hid: 'keywords', name: 'keywords', content: 'maniac, agência maniac, agencia maniac, web design, desenvolvimento de sites, e-commerce, branding, criação de site, agência digital, Brasil, design de marca, criação de logo, soluções digitais' },
        { hid: 'author', name: 'author', content: 'maniac - Agência Digital' },
  
        { hid: 'og:title', property: 'og:title', content: 'Maniac - Agência de Web Design, E-commerce e Branding' },
        { hid: 'og:description', property: 'og:description', content: 'Somos uma agência digital brasileira que oferece serviços de desenvolvimento de sites, e-commerce e branding para negócios que buscam presença online de destaque.' },
        { hid: 'og:image', property: 'og:image', content: '/favicon-32x32.png' },
        { hid: 'og:url', property: 'og:url', content: 'https://www.agenciamaniac.digital' },
        { hid: 'og:type', property: 'og:type', content: 'website' },
  
        { hid: 'viewport', name: 'viewport', content: 'width=device-width, initial-scale=1' },
  
        { hid: 'robots', name: 'robots', content: 'index, follow' },
        { hid: 'canonical', rel: 'canonical', href: 'https://www.maniacagency.digital' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon-32x32.png', sizes: '32x32' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'shortcut icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
      ]
    }
  },
  modules: ['nuxt-icon', '@nuxt/image', "@nuxt/fonts", '@nuxtjs/sitemap'],
  fonts: {
    families: [
      {
        name: 'Satoshi',
        local: 'Satoshi',
        variants: [
          {
            src: '/fonts/Satoshi-Light.otf',
            weight: 300,
            style: 'normal'
          },
          {
            src: '/fonts/Satoshi-Regular.otf',
            weight: 400,
            style: 'normal'
          },
          {
            src: '/fonts/Satoshi-Medium.otf',
            weight: 500,
            style: 'normal'
          },
          {
            src: '/fonts/Satoshi-Bold.otf',
            weight: 700,
            style: 'normal'
          },
          {
            src: '/fonts/Satoshi-Black.otf',
            weight: 800,
            style: 'normal'
          }
        ],
        display: 'swap',
      }
    ]
  },
  build: {
    transpile: ['gsap']
  },
  plugins: [
    '@/plugins/lenis.client.ts',
    '@/plugins/gsap.client.ts',
    '@/plugins/swiper.js'
  ]
})
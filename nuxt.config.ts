// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [{ src: '~/assets/styles/globals.scss', lang: 'sass' }],
  app: {
    head: {
      title: "maniac - Agência de Web Design, E-commerce e Branding",
      meta: [
        { hid: 'description', name: 'description', content: 'A maniac é uma agência digital especializada em desenvolvimento de sites, e-commerces e branding. Criamos experiências digitais criativas e fora da curva para impulsionar seu negócio.' },
        { hid: 'keywords', name: 'keywords', content: 'web design, desenvolvimento de sites, e-commerce, branding, agência digital, Brasil, design de marca, criação de logo, soluções digitais' },
        { hid: 'author', name: 'author', content: 'maniac - Agência Digital' },
  
        { hid: 'og:title', property: 'og:title', content: 'maniac - Agência de Web Design, E-commerce e Branding' },
        { hid: 'og:description', property: 'og:description', content: 'Somos uma agência digital brasileira que oferece serviços de desenvolvimento de sites, e-commerce e branding para negócios que buscam presença online de destaque.' },
        { hid: 'og:image', property: 'og:image', content: '/favicon-48x48.png' },
        { hid: 'og:url', property: 'og:url', content: 'https://www.maniac.com.br' },
        { hid: 'og:type', property: 'og:type', content: 'website' },
  
        { hid: 'viewport', name: 'viewport', content: 'width=device-width, initial-scale=1' },
  
        { hid: 'robots', name: 'robots', content: 'index, follow' },
        { hid: 'canonical', rel: 'canonical', href: 'https://www.maniac.com.br' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon-48x48.png', sizes: '48x48' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'shortcut icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
      ]
    }
  },
  modules: [
    'nuxt-icon',
    '@nuxt/image',
  ],
  plugins: [
    '@/plugins/lenis.client.ts',
    '@/plugins/swiper.js'
  ]
})
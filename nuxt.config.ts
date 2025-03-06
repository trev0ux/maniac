// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    css: [{ src: '~/assets/styles/globals.scss', lang: 'sass' }],
    target: 'static',
    site: {
      url: 'https://agenciamaniac.digital',
      name: 'Maniac'
    },
    app: {
      head: {
        title: "Maniac: Agência Digital | Criação de Sites",
        meta: [
          { hid: 'description', name: 'description', content: 'A Maniac é uma agência digital especializada em criação de sites, e-commerces e sistemas de gestão (ERP e CRM). Criamos experiências digitais criativas e fora da curva para impulsionar seu negócio.' },
          { hid: 'keywords', name: 'keywords', content: 'maniac, agencia maniac, criar site, criação de sites profissionais, criação de sites em salvador, criação de sites baratos, e-commerce, branding, criação de site, agência digital, Brasil, design de marca, criação de logo, soluções digitais' },
          { hid: 'author', name: 'author', content: 'Maniac: Agência Digital | Criação de Sites' },
    
          { hid: 'og:title', property: 'og:title', content: 'Maniac: Agência Digital | Criação de Sites' },
          { hid: 'og:description', property: 'og:description', content: 'A Maniac é uma agência digital especializada em criação de sites, e-commerces e sistemas de gestão (ERP e CRM). Criamos experiências digitais criativas e fora da curva para impulsionar seu negócio.' },
          { hid: 'og:image', property: 'og:image', content: '/favicon-32x32.png' },
          { hid: 'og:url', property: 'og:url', content: 'https://www.agenciamaniac.digital' },
          { hid: 'og:type', property: 'og:type', content: 'website' },
    
          { hid: 'viewport', name: 'viewport', content: 'width=device-width, initial-scale=1' },
    
          { hid: 'robots', name: 'robots', content: 'index, follow' },
          { hid: 'canonical', rel: 'canonical', href: 'https://www.agenciamaniac.digital' },
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
    buildModules: [
      ['@nuxtjs/imagemin', { 
        enableInDev: true
      }]
    ],
    modules: ['nuxt-icon', '@nuxt/image', "@nuxt/fonts", '@nuxtjs/sitemap', '@nuxtjs/robots'],
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
    plugins: [
      '@/plugins/lenis.client.ts',
      '@/plugins/swiper.js'
    ]
  })
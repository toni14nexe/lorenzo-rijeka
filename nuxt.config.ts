// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  srcDir: 'src/',
  modules: [
    '@prisma/nuxt',
    '@element-plus/nuxt',
    '@pinia/nuxt',
    'nuxt-viewport',
    '@vueuse/motion/nuxt',
    '@nuxtjs/sitemap'
  ],
  runtimeConfig: {
    siteUrl: process.env.APP_BASE_URL,
    public: {
      appBaseUrl: process.env.APP_BASE_URL,
      axiosApiBaseUrl: process.env.AXIOS_API_BASE_URL,
      stripePublishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
      stripeSecretKey: process.env.STRIPE_SECRET_KEY,
      stripeButtonId: process.env.STRIPE_BUTTON_ID
    }
  },
  css: ['~/assets/styles/main.css'],
  vite: {
    resolve: {
      alias: {
        '.prisma/client/index-browser':
          './node_modules/.prisma/client/index-browser.js'
      }
    }
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Agro App',
      script: [
        {
          src: 'https://js.stripe.com/v3/buy-button.js',
          async: true
        }
      ],
      link: [
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: 'https://i.ibb.co/GZLqPjQ/apple-touch-icon.png'
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: 'https://i.ibb.co/SwqynV0N/favicon-32x32.png'
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: 'https://i.ibb.co/PvdrtGVv/favicon-16x16.png'
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '96x96',
          href: 'https://i.ibb.co/h1Ks5157/favicon-96x96.png'
        },
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: 'https://i.ibb.co/GZLqPjQ/apple-touch-icon.png'
        }
        /* {
          rel: 'manifest',
          href: webManifest
        } */
      ],
      meta: [
        {
          name: 'Agro App',
          content:
            'Najbolja platforma za poljoprivrednike u Hrvatskoj. Upravljanje i vođenje papira i knjiga za servise: stočarstvo, povrtlarstvo, voćarstvo, pčelarstvo, konzultantske usluge, edukacijske usluge, sjemenska proizvodnja, rasadničarstvo, ratarstvo.'
        },
        {
          name: 'keywords',
          content:
            'agro, poljoprivreda, inspekcija, papiri, PDF, izvoz podataka, izvoz, export, sjetva, gnojivo, zaštita, leguminoza, eco, eko, proizvodnja, stočarstvo, povrtlarstvo, voćarstvo, pčelarstvo, konzultantske usluge, edukacijske usluge, sjemenska proizvodnja, rasadničarstvo, ratarstvo'
        },
        { name: 'author', content: 'InnovaTech obrt za informatičke usluge' },
        { property: 'og:title', content: 'Agro App' },
        {
          property: 'og:description',
          content:
            'Najbolja platforma za poljoprivrednike u Hrvatskoj. Upravljanje i vođenje papira i knjiga za servise: stočarstvo, povrtlarstvo, voćarstvo, pčelarstvo, konzultantske usluge, edukacijske usluge, sjemenska proizvodnja, rasadničarstvo, ratarstvo.'
        },
        {
          property: 'og:image',
          content: 'https://i.ibb.co/GZLqPjQ/apple-touch-icon.png'
        },
        { property: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:title', content: 'Agro App' },
        {
          property: 'twitter:description',
          content:
            'Najbolja platforma za poljoprivrednike u Hrvatskoj. Upravljanje i vođenje papira i knjiga za servise: stočarstvo, povrtlarstvo, voćarstvo, pčelarstvo, konzultantske usluge, edukacijske usluge, sjemenska proizvodnja, rasadničarstvo, ratarstvo.'
        },
        {
          property: 'twitter:image',
          content: 'https://i.ibb.co/GZLqPjQ/apple-touch-icon.png'
        }
      ]
    }
  }
})

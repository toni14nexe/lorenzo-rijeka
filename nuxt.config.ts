// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primeuix/themes/aura'

export default defineNuxtConfig({
  ssr: true,
  nitro: {
    preset: 'netlify'
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  srcDir: 'src/',
  modules: [
    '@prisma/nuxt',
    '@element-plus/nuxt',
    '@pinia/nuxt',
    'nuxt-viewport',
    '@vueuse/motion/nuxt',
    '@nuxtjs/sitemap',
    '@primevue/nuxt-module'
  ],
  runtimeConfig: {
    siteUrl: process.env.APP_BASE_URL,
    public: {
      appBaseUrl: process.env.APP_BASE_URL,
      axiosApiBaseUrl: process.env.AXIOS_API_BASE_URL,
      cloudinaryPreset: process.env.CLOUDINARY_PRESET,
      cloudinaryCloudName: process.env.CLOUDINARY_CLOUD_NAME
      /* stripePublishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
      stripeSecretKey: process.env.STRIPE_SECRET_KEY,
      stripeButtonId: process.env.STRIPE_BUTTON_ID, */
    }
  },
  primevue: {
    options: {
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: false
        }
      }
    },
    components: {
      include: ['Editor']
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
          href: 'https://res.cloudinary.com/dhaa1aobr/image/upload/v1747342580/favicon-180x180_we2zi4.png'
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: 'https://res.cloudinary.com/dhaa1aobr/image/upload/v1747342582/favicon-32x32_avu6vh.png'
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: 'https://res.cloudinary.com/dhaa1aobr/image/upload/v1747342581/favicon-16x16_ghbvtz.png'
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '96x96',
          href: 'https://res.cloudinary.com/dhaa1aobr/image/upload/v1747342417/favicon-96x96_xfuydm.png'
        },
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: 'https://res.cloudinary.com/dhaa1aobr/image/upload/v1747342580/favicon-180x180_we2zi4.png'
        }
        /* {
          rel: 'manifest',
          href: webManifest
        } */
      ],
      meta: [
        {
          name: 'Gastarbajter.de',
          content:
            'Najbolja platforma za gastrabajtere. Ovdje ćete pronaći upute za rad i život u inozemstvu zajedno s našim webshopom i oglasnikom za poslove.'
        },
        {
          name: 'keywords',
          content:
            'platforma, gastrabajtere, gastabajter, gastabajteri, gastrabajter, gastrajabjteri, gastabajtere, poslovi, oglasnik, posao, webshop, trgovina, proizvodi, domaće, domaći'
        },
        { name: 'author', content: 'InnovaTech obrt za informatičke usluge' },
        { property: 'og:title', content: 'Gastarbajter.de' },
        {
          property: 'og:description',
          content:
            'Najbolja platforma za gastrabajtere. Ovdje ćete pronaći upute za rad i život u inozemstvu zajedno s našim webshopom i oglasnikom za poslove.'
        },
        {
          property: 'og:image',
          content:
            'https://res.cloudinary.com/dhaa1aobr/image/upload/v1747342580/apple-touch-icon_di9mgd.png'
        },
        { property: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:title', content: 'Gastarbajter.de' },
        {
          property: 'twitter:description',
          content:
            'Najbolja platforma za gastrabajtere. Ovdje ćete pronaći upute za rad i život u inozemstvu zajedno s našim webshopom i oglasnikom za poslove.'
        },
        {
          property: 'twitter:image',
          content:
            'https://res.cloudinary.com/dhaa1aobr/image/upload/v1747342580/apple-touch-icon_di9mgd.png'
        }
      ]
    }
  }
})

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
      enviroment: process.env.ENVIROMENT,
      appBaseUrl: process.env.APP_BASE_URL,
      axiosApiBaseUrl: process.env.AXIOS_API_BASE_URL,
      cloudinaryPreset: process.env.CLOUDINARY_PRESET,
      cloudinaryCloudName: process.env.CLOUDINARY_CLOUD_NAME
      /* stripePublishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
      stripeSecretKey: process.env.STRIPE_SECRET_KEY,
      stripeButtonId: process.env.STRIPE_BUTTON_ID, */
    }
  },
  site: {
    url: '', // TODO
    name: 's.art'
  },
  sitemap: {
    sources: ['/api/__sitemap__/urls']
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
          href: 'https://res.cloudinary.com/dnu0ujasf/image/upload/v1757004814/favicon-180x180_shzfaw.png'
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: 'https://res.cloudinary.com/dnu0ujasf/image/upload/v1757004814/favicon-32x32_lxa5lm.png'
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: 'https://res.cloudinary.com/dnu0ujasf/image/upload/v1757004813/favicon-16x16_fhikyg.png'
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '96x96',
          href: 'https://res.cloudinary.com/dnu0ujasf/image/upload/v1757004814/favicon-96x96_rytdpo.png'
        },
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: 'https://res.cloudinary.com/dnu0ujasf/image/upload/v1757004814/favicon-180x180_shzfaw.png'
        }
        /* {
          rel: 'manifest',
          href: webManifest
        } */
      ],
      meta: [
        {
          name: 's.art',
          content: '' // TODO
        },
        {
          name: 'keywords',
          content: '' // TODO
        },
        { name: 'author', content: 'InnovaTech obrt za informatičke usluge' },
        { property: 'og:title', content: 's.art' },
        {
          property: 'og:description',
          content: '' // TODO
        },
        {
          property: 'og:image',
          content:
            'https://res.cloudinary.com/dnu0ujasf/image/upload/v1757004814/favicon-180x180_shzfaw.png'
        }
      ]
    }
  }
})

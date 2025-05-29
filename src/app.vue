<script setup lang="ts">
import 'element-plus/theme-chalk/display.css'
import hr from 'element-plus/es/locale/lang/hr'

useHead({
  titleTemplate: title =>
    title ? `Gastarbajter.de - ${title}` : 'Gastarbajter.de',
  meta: [
    {
      name: 'keywords',
      content:
        'platforma, gastrabajtere, gastabajter, gastabajteri, gastrabajter, gastrajabjteri, gastabajtere, poslovi, oglasnik, posao, webshop, trgovina, proizvodi, domaće, domaći'
    },
    { name: 'author', content: 'InnovaTech obrt za informatičke usluge' },
    { property: 'og:type', content: 'website' },

    // Image
    {
      property: 'og:image',
      content:
        'https://res.cloudinary.com/dhaa1aobr/image/upload/v1748519861/180_lm9wut.png'
    },
    { property: 'og:image:width', content: '50' },
    { property: 'og:image:height', content: '50' },
    { property: 'og:url', content: process.env.APP_BASE_URL },
    { name: 'twitter:card', content: 'summary_large_image' },
    {
      name: 'twitter:image',
      content:
        'https://res.cloudinary.com/dhaa1aobr/image/upload/v1748519861/180_lm9wut.png'
    },
    {
      name: 'google-site-verification',
      content: 'XcMEZOdux3Ig-o3E4zproRBhHJiC-7GhdOnmmAogY7Q'
    }
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: 'https://res.cloudinary.com/dhaa1aobr/image/upload/v1748519809/96_oreti5.png'
    },
    {
      rel: 'apple-touch-icon',
      href: 'https://res.cloudinary.com/dhaa1aobr/image/upload/v1748519861/180_lm9wut.png'
    }
  ]
})
</script>

<template>
  <ClientOnly>
    <head>
      <link
        rel="apple-touch-icon"
        type="image/png"
        sizes="180x180"
        href="https://res.cloudinary.com/dhaa1aobr/image/upload/v1748519861/180_lm9wut.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="https://res.cloudinary.com/dhaa1aobr/image/upload/v1748519905/32_y5b1p2.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="https://res.cloudinary.com/dhaa1aobr/image/upload/v1748519887/16_ckfbsd.png"
      />
      <link
        rel="icon"
        type="image/png"
        href="https://res.cloudinary.com/dhaa1aobr/image/upload/v1748519809/96_oreti5.png"
        sizes="96x96"
      />
      <link
        rel="apple-touch-icon"
        type="image/png"
        sizes="180x180"
        href="https://res.cloudinary.com/dhaa1aobr/image/upload/v1748519861/180_lm9wut.png"
      />
      <meta name="apple-mobile-web-app-title" content="Gastarbajter.de" />
    </head>
  </ClientOnly>

  <ElConfigProvider :locale="hr">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </ElConfigProvider>
</template>

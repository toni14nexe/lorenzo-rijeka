<script setup lang="ts">
import 'element-plus/theme-chalk/display.css'
import hr from 'element-plus/es/locale/lang/hr'

useHead({
  titleTemplate: title =>
    title ? `${title} - Gastarbajter.de` : 'Gastarbajter.de',
  meta: [
    {
      name: 'description',
      content:
        'Najbolja platforma za gastrabajtere. Ovdje ćete pronaći upute za rad i život u inozemstvu zajedno s našim webshopom i oglasnikom za poslove.'
    },
    {
      name: 'keywords',
      content:
        'platforma, gastrabajtere, gastabajter, gastabajteri, gastrabajter, gastrajabjteri, gastabajtere, poslovi, oglasnik, posao, webshop, trgovina, proizvodi, domaće, domaći'
    },
    { name: 'author', content: 'InnovaTech obrt za informatičke usluge' },
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: 'Gastarbajter.de' },
    {
      property: 'og:description',
      content:
        'Najbolja platforma za gastrabajtere. Ovdje ćete pronaći upute za rad i život u inozemstvu zajedno s našim webshopom i oglasnikom za poslove.'
    },

    // Image
    {
      property: 'og:image',
      content:
        'https://res.cloudinary.com/dhaa1aobr/image/upload/v1747342580/apple-touch-icon_di9mgd.png'
    },
    { property: 'og:image:width', content: '50' },
    { property: 'og:image:height', content: '50' },
    { property: 'og:url', content: 'https://gastabajter.de' },
    { name: 'twitter:card', content: 'summary_large_image' },
    {
      name: 'twitter:image',
      content:
        'https://res.cloudinary.com/dhaa1aobr/image/upload/v1747342580/apple-touch-icon_di9mgd.png'
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
      href: 'https://res.cloudinary.com/dhaa1aobr/image/upload/v1747342417/favicon-96x96_xfuydm.png'
    },
    {
      rel: 'apple-touch-icon',
      href: 'https://res.cloudinary.com/dhaa1aobr/image/upload/v1747342580/apple-touch-icon_di9mgd.png'
    }
  ]
})

useSeoMeta({
  description:
    'Najbolja platforma za gastrabajtere. Ovdje ćete pronaći upute za rad i život u inozemstvu zajedno s našim webshopom i oglasnikom za poslove.',
  ogTitle: 'Dobrodošli na Gastarbajter.de',
  ogDescription:
    'Najbolja platforma za gastrabajtere. Ovdje ćete pronaći upute za rad i život u inozemstvu zajedno s našim webshopom i oglasnikom za poslove.',
  ogImage:
    'https://res.cloudinary.com/dhaa1aobr/image/upload/v1747342580/apple-touch-icon_di9mgd.png',
  twitterCard: 'summary_large_image',
  twitterImage:
    'https://res.cloudinary.com/dhaa1aobr/image/upload/v1747342580/apple-touch-icon_di9mgd.png'
})
</script>

<template>
  <ClientOnly>
    <head>
      <link
        rel="apple-touch-icon"
        type="image/png"
        sizes="180x180"
        href="https://res.cloudinary.com/dhaa1aobr/image/upload/v1747342580/apple-touch-icon_di9mgd.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="https://res.cloudinary.com/dhaa1aobr/image/upload/v1747342582/favicon-32x32_avu6vh.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="https://res.cloudinary.com/dhaa1aobr/image/upload/v1747342581/favicon-16x16_ghbvtz.png"
      />
      <link
        rel="icon"
        type="image/png"
        href="https://res.cloudinary.com/dhaa1aobr/image/upload/v1747342417/favicon-96x96_xfuydm.png"
        sizes="96x96"
      />
      <link
        rel="apple-touch-icon"
        type="image/png"
        sizes="180x180"
        href="https://res.cloudinary.com/dhaa1aobr/image/upload/v1747342580/apple-touch-icon_di9mgd.png"
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

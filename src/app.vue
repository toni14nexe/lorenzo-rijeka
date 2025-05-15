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
        'Najbolja platforma za poljoprivrednike u Hrvatskoj. Upravljanje i vođenje papira i knjiga za servise: stočarstvo, povrtlarstvo, voćarstvo, pčelarstvo, konzultantske usluge, edukacijske usluge, sjemenska proizvodnja, rasadničarstvo, ratarstvo.'
    },
    {
      name: 'keywords',
      content:
        'agro, poljoprivreda, inspekcija, papiri, PDF, izvoz podataka, izvoz, export, sjetva, gnojivo, zaštita, leguminoza, eco, eko, proizvodnja, stočarstvo, povrtlarstvo, voćarstvo, pčelarstvo, konzultantske usluge, edukacijske usluge, sjemenska proizvodnja, rasadničarstvo, ratarstvo'
    },
    { name: 'author', content: 'InnovaTech obrt za informatičke usluge' },
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: 'Gastarbajter.de' },
    {
      property: 'og:description',
      content:
        'Najbolja platforma za poljoprivrednike i upravljanje papirima za servise: stočarstvo, povrtlarstvo, voćarstvo, pčelarstvo, konzultantske usluge, edukacijske usluge, sjemenska proizvodnja, rasadničarstvo, ratarstvostočarstvo, povrtlarstvo, voćarstvo, pčelarstvo, konzultantske usluge, edukacijske usluge, sjemenska proizvodnja, rasadničarstvo, ratarstvo.'
    },

    // Image
    {
      property: 'og:image',
      content:
        'https://res.cloudinary.com/dhaa1aobr/image/upload/v1747342580/apple-touch-icon_di9mgd.png'
    },
    { property: 'og:image:width', content: '50' },
    { property: 'og:image:height', content: '50' },
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
  ]
})

useSeoMeta({
  description:
    'Najbolja platforma za poljoprivrednike u Hrvatskoj. Upravljanje i vođenje papira i knjiga za servise: stočarstvo, povrtlarstvo, voćarstvo, pčelarstvo, konzultantske usluge, edukacijske usluge, sjemenska proizvodnja, rasadničarstvo, ratarstvo.',
  ogTitle: 'Dobrodošli u Gastarbajter.de',
  ogDescription:
    'Najbolja platforma za poljoprivrednike u Hrvatskoj. Upravljanje i vođenje papira i knjiga za servise: stočarstvo, povrtlarstvo, voćarstvo, pčelarstvo, konzultantske usluge, edukacijske usluge, sjemenska proizvodnja, rasadničarstvo, ratarstvo.',
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

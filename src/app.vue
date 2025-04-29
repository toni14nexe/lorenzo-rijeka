<script setup lang="ts">
import 'element-plus/theme-chalk/display.css'
import hr from 'element-plus/es/locale/lang/hr'

useHead({
  titleTemplate: title =>
    title ? `${title} - Gastrabajter.de` : 'Gastrabajter.de',
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
    { property: 'og:title', content: 'Gastrabajter.de' },
    {
      property: 'og:description',
      content:
        'Najbolja platforma za poljoprivrednike i upravljanje papirima za servise: stočarstvo, povrtlarstvo, voćarstvo, pčelarstvo, konzultantske usluge, edukacijske usluge, sjemenska proizvodnja, rasadničarstvo, ratarstvostočarstvo, povrtlarstvo, voćarstvo, pčelarstvo, konzultantske usluge, edukacijske usluge, sjemenska proizvodnja, rasadničarstvo, ratarstvo.'
    },

    // Image
    {
      property: 'og:image',
      content: 'https://i.ibb.co/GZLqPjQ/apple-touch-icon.png'
    },
    { property: 'og:image:width', content: '50' },
    { property: 'og:image:height', content: '50' },
    { name: 'twitter:card', content: 'summary_large_image' },
    {
      name: 'twitter:image',
      content: 'https://i.ibb.co/GZLqPjQ/apple-touch-icon.png'
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
  ogTitle: 'Dobrodošli u Gastrabajter.de',
  ogDescription:
    'Najbolja platforma za poljoprivrednike u Hrvatskoj. Upravljanje i vođenje papira i knjiga za servise: stočarstvo, povrtlarstvo, voćarstvo, pčelarstvo, konzultantske usluge, edukacijske usluge, sjemenska proizvodnja, rasadničarstvo, ratarstvo.',
  ogImage: 'https://i.ibb.co/GZLqPjQ/apple-touch-icon.png',
  twitterCard: 'summary_large_image',
  twitterImage: 'https://i.ibb.co/GZLqPjQ/apple-touch-icon.png'
})
</script>

<template>
  <ClientOnly>
    <head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="https://i.ibb.co/GZLqPjQ/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="https://i.ibb.co/SwqynV0N/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="https://i.ibb.co/PvdrtGVv/favicon-16x16.png"
      />
      <link
        rel="icon"
        type="image/png"
        href="https://i.ibb.co/h1Ks5157/favicon-96x96.png"
        sizes="96x96"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="https://i.ibb.co/GZLqPjQ/apple-touch-icon.png"
      />
      <meta name="apple-mobile-web-app-title" content="Gastrabajter.de" />
    </head>
  </ClientOnly>

  <ElConfigProvider :locale="hr">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </ElConfigProvider>
</template>

<script lang="ts" setup>
import WebshopPage from '~/components/webshop/WebshopPage.vue'

useHead({
  title: 'Webshop',
  meta: [
    {
      name: 'description',
      content:
        'Ovdje se nalazi naš webshop s ponudom naših dostupnih i najnovijih proizvoda.'
    },
    { property: 'og:title', content: 'Gastabajter.de - Webshop proizvod' },
    {
      property: 'og:description',
      content:
        'Ovdje se nalazi naš webshop s ponudom naših dostupnih i najnovijih proizvoda.'
    }
  ]
})

useSeoMeta({
  description:
    'Ovdje se nalazi naš webshop s ponudom naših dostupnih i najnovijih proizvoda.',
  ogTitle: `Webshop`,
  ogDescription:
    'Ovdje se nalazi naš webshop s ponudom naših dostupnih i najnovijih proizvoda.',
  ogImage:
    'https://res.cloudinary.com/dhaa1aobr/image/upload/v1747342580/apple-touch-icon_di9mgd.png',
  twitterCard: 'summary_large_image',
  twitterImage:
    'https://res.cloudinary.com/dhaa1aobr/image/upload/v1747342580/apple-touch-icon_di9mgd.png'
})
</script>

<template><WebshopPage /></template>

<style lang="css" scoped></style>

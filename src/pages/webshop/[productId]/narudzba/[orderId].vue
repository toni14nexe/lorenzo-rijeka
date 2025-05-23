<script lang="ts" setup>
import OrderStatePage from '~/components/webshop/OrderStatePage.vue'

useHead({
  title: 'Narudžba',
  meta: [
    {
      name: 'description',
      content: `Stanje vaše narudžbe možete provjeriti ovdje.`
    },
    { property: 'og:title', content: 'Portal' },
    {
      property: 'og:description',
      content: `Stanje vaše narudžbe možete provjeriti ovdje.`
    }
  ]
})

useSeoMeta({
  description: 'Stanje vaše narudžbe možete provjeriti ovdje.',
  ogTitle: `Narudžba`,
  ogDescription: 'Stanje vaše narudžbe možete provjeriti ovdje.',
  ogImage:
    'https://res.cloudinary.com/dhaa1aobr/image/upload/v1747342580/apple-touch-icon_di9mgd.png',
  twitterCard: 'summary_large_image',
  twitterImage:
    'https://res.cloudinary.com/dhaa1aobr/image/upload/v1747342580/apple-touch-icon_di9mgd.png'
})
</script>

<template><OrderStatePage /></template>

<style lang="css" scoped></style>

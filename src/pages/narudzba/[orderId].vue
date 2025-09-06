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
    'https://res.cloudinary.com/dhaa1aobr/image/upload/v1748519861/180_lm9wut.png',
  twitterCard: 'summary_large_image',
  twitterImage:
    'https://res.cloudinary.com/dhaa1aobr/image/upload/v1748519861/180_lm9wut.png'
})
</script>

<template><OrderStatePage /></template>

<style lang="css" scoped></style>

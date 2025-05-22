<script lang="ts" setup>
import WebshopPage from '~/components/webshop/WebshopPage.vue'

useHead({
  title: 'Gastabajter.de - Webshop proizvod',
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
</script>

<template><WebshopPage /></template>

<style lang="css" scoped></style>

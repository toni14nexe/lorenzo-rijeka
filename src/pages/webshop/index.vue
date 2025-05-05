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
    { property: 'og:title', content: 'Webshop' },
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

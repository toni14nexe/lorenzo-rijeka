<script lang="ts" setup>
import ProductPage from '~/components/webshop/ProductPage.vue'

const title = ref('Proizvod')

useHead({
  title: title.value,
  meta: [
    {
      name: 'description',
      content: `Ovdje možete pronaći sve o našem proizvodu. ${title.value}`
    },
    { property: 'og:title', content: 'Portal' },
    {
      property: 'og:description',
      content: `Ovdje možete pronaći sve o našem proizvodu. ${title.value}`
    }
  ]
})
</script>

<template><ProductPage /></template>

<style lang="css" scoped></style>

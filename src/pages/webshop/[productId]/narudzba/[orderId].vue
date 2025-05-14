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
</script>

<template><OrderStatePage /></template>

<style lang="css" scoped></style>

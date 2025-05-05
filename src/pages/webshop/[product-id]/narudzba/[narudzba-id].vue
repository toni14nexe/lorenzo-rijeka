<script lang="ts" setup>
import OrderPage from '~/components/webshop/OrderPage.vue'

useHead({
  title: 'Narudžba',
  meta: [
    {
      name: 'description',
      content: `Stanje vaše narudžbe nalazi se ovdje.`
    },
    { property: 'og:title', content: 'Portal' },
    {
      property: 'og:description',
      content: `Stanje vaše narudžbe nalazi se ovdje.`
    }
  ]
})
</script>

<template>Stanje narudžbe</template>

<style lang="css" scoped></style>

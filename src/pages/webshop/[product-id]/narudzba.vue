<script lang="ts" setup>
import ProductPage from '~/components/webshop/ProductPage.vue'

const title = ref('Dovršite narudžbu')

useHead({
  title: title.value,
  meta: [
    {
      name: 'description',
      content: `Ovdje možete dovršiti svoju narudžbu odabranog proizvoda. ${title.value}`
    },
    { property: 'og:title', content: 'Portal' },
    {
      property: 'og:description',
      content: `Ovdje možete dovršiti svoju narudžbu odabranog proizvoda. ${title.value}`
    }
  ]
})
</script>

<template>Narudzba</template>

<style lang="css" scoped></style>

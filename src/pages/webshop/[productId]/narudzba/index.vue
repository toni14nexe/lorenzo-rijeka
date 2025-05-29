<script lang="ts" setup>
import OrderPage from '~/components/webshop/OrderPage.vue'

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

useSeoMeta({
  description: `Ovdje možete dovršiti svoju narudžbu odabranog proizvoda. ${title.value}`,
  ogTitle: `Webshop`,
  ogDescription: `Ovdje možete dovršiti svoju narudžbu odabranog proizvoda. ${title.value}`,
  ogImage:
    'https://res.cloudinary.com/dhaa1aobr/image/upload/v1748519861/180_lm9wut.png',
  twitterCard: 'summary_large_image',
  twitterImage:
    'https://res.cloudinary.com/dhaa1aobr/image/upload/v1748519861/180_lm9wut.png'
})
</script>

<template><OrderPage /></template>

<style lang="css" scoped></style>

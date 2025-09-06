<script setup lang="ts">
useHead({
  title: 'Trgovina',
  meta: [
    {
      name: 'description',
      content: 'Trgovina - Webshop'
    },
    { property: 'og:title', content: 'Backoffice' },
    {
      property: 'og:description',
      content: 's.art trgovina s našim astortimanom proizvoda.'
    }
  ]
})

useSeoMeta({
  description: 'Trgovina - Webshop',
  ogTitle: `Trgovina - Webshop`,
  ogDescription: 's.art trgovina s našim astortimanom proizvoda.',
  ogImage:
    'https://res.cloudinary.com/dhaa1aobr/image/upload/v1748519861/180_lm9wut.png',
  twitterCard: 'summary_large_image',
  twitterImage:
    'https://res.cloudinary.com/dhaa1aobr/image/upload/v1748519861/180_lm9wut.png'
})
</script>

<template>
  <div class="page-container">
    <WebshopPage />
  </div>
</template>

<style lang="css" scoped></style>

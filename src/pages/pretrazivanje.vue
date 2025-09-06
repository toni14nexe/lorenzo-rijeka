<script lang="ts" setup>
import SearchPage from '~/components/search/SearchPage.vue'

const route = useRoute()

useHead({
  title: `Pretraživanje: ${route.query.value}`,
  meta: [
    {
      name: 'description',
      content: 'Rezultati pretraživanja.'
    },
    { property: 'og:title', content: `Pretraživanje ${route.query.value}` },
    {
      property: 'og:description',
      content: 'Rezultati pretraživanja.'
    }
  ]
})

// TODO
useSeoMeta({
  description: 'Rezultati pretraživanja.',
  ogTitle: `Pretraživanje: ${route.query.value}`,
  ogDescription: 'Rezultati pretraživanja.',
  ogImage:
    'https://res.cloudinary.com/dhaa1aobr/image/upload/v1748519861/180_lm9wut.png',
  twitterCard: 'summary_large_image',
  twitterImage:
    'https://res.cloudinary.com/dhaa1aobr/image/upload/v1748519861/180_lm9wut.png'
})
</script>

<template><SearchPage /></template>

<style lang="css" scoped></style>

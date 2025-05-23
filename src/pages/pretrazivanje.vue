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

useSeoMeta({
  description: 'Rezultati pretraživanja.',
  ogTitle: `Pretraživanje: ${route.query.value}`,
  ogDescription: 'Rezultati pretraživanja.',
  ogImage:
    'https://res.cloudinary.com/dhaa1aobr/image/upload/v1747342580/apple-touch-icon_di9mgd.png',
  twitterCard: 'summary_large_image',
  twitterImage:
    'https://res.cloudinary.com/dhaa1aobr/image/upload/v1747342580/apple-touch-icon_di9mgd.png'
})
</script>

<template><SearchPage /></template>

<style lang="css" scoped></style>

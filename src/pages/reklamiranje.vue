<script lang="ts" setup>
import ComsPage from '~/components/ads/ComsPage.vue'

useHead({
  title: 'Reklamiranje',
  meta: [
    {
      name: 'description',
      content: 'Postavite svoju reklamu na našu stranicu.'
    },
    { property: 'og:title', content: 'Reklamiranje' },
    {
      property: 'og:description',
      content: 'Postavite svoju reklamu na našu stranicu.'
    }
  ]
})

useSeoMeta({
  description: 'Postavite svoju reklamu na našu stranicu.',
  ogTitle: 'Reklamiranje',
  ogDescription: 'Postavite svoju reklamu na našu stranicu.',
  ogImage:
    'https://res.cloudinary.com/dhaa1aobr/image/upload/v1748519861/180_lm9wut.png',
  twitterCard: 'summary_large_image',
  twitterImage:
    'https://res.cloudinary.com/dhaa1aobr/image/upload/v1748519861/180_lm9wut.png'
})
</script>

<template><ComsPage /></template>

<style lang="css" scoped></style>

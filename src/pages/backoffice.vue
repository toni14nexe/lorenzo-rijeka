<script lang="ts" setup>
import BackofficePage from '~/components/backoffice/BackofficePage.vue'

definePageMeta({
  layout: 'backoffice'
})

useHead({
  title: 'Backoffice',
  meta: [
    {
      name: 'description',
      content: 'Administratorske stranice'
    },
    { property: 'og:title', content: 'Backoffice' },
    {
      property: 'og:description',
      content: 'Administratorske stranice'
    }
  ]
})

useSeoMeta({
  description: 'Administratorske stranice',
  ogTitle: `Backoffice`,
  ogDescription: 'Administratorske stranice',
  ogImage:
    'https://res.cloudinary.com/dhaa1aobr/image/upload/v1748519861/180_lm9wut.png',
  twitterCard: 'summary_large_image',
  twitterImage:
    'https://res.cloudinary.com/dhaa1aobr/image/upload/v1748519861/180_lm9wut.png'
})
</script>

<template><BackofficePage /></template>

<style lang="css" scoped></style>

<script lang="ts" setup>
import WebshopCategoryPage from '~/components/webshop/WebshopCategoryPage.vue'

const route = useRoute()
const title = `${route.params.categoryName[0].toUpperCase()}${route.params.categoryName.slice(1, route.params.categoryName.length)}`

// TODO useHead & SEO on every page
useHead({
  title: `Trgovina - ${title}`,
  meta: [
    {
      name: 'description',
      content: `Ovdje možete pronaći sve naše proizvode vezane uz ${title}.`
    },
    { property: 'og:title', content: 'Kategorija' },
    {
      property: 'og:description',
      content: `Ovdje možete pronaći sve naše proizvode vezane uz ${title}.`
    }
  ]
})

useSeoMeta({
  description: `Ovdje možete pronaći sve naše proizvode vezane uz ${title}.`,
  ogTitle: `Trgovina - ${title}`,
  ogDescription: `Ovdje možete pronaći sve naše proizvode vezane uz ${title}.`,
  ogImage:
    'https://res.cloudinary.com/dhaa1aobr/image/upload/v1748519861/180_lm9wut.png',
  twitterCard: 'summary_large_image',
  twitterImage:
    'https://res.cloudinary.com/dhaa1aobr/image/upload/v1748519861/180_lm9wut.png'
})
</script>

<template><WebshopCategoryPage :title="title" /></template>

<style lang="css" scoped></style>

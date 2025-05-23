<script lang="ts" setup>
import PortalCategoryPage from '~/components/portal/PortalCategoryPage.vue'

const route = useRoute()
const title = `${route.params.categoryName[0].toUpperCase()}${route.params.categoryName.slice(1, route.params.categoryName.length)}`

useHead({
  title: `Portal - ${title}`,
  meta: [
    {
      name: 'description',
      content: `Kategorija vijesti na Portalu sa najnovijim vijestima. ${title}`
    },
    { property: 'og:title', content: 'Kategorija' },
    {
      property: 'og:description',
      content: `Kategorija vijesti na Portalu sa najnovijim vijestima. ${title}`
    }
  ]
})

useSeoMeta({
  description: `Kategorija vijesti na Portalu sa najnovijim vijestima. ${title}`,
  ogTitle: `Portal - ${title}`,
  ogDescription: `Kategorija vijesti na Portalu sa najnovijim vijestima. ${title}`,
  ogImage:
    'https://res.cloudinary.com/dhaa1aobr/image/upload/v1747342580/apple-touch-icon_di9mgd.png',
  twitterCard: 'summary_large_image',
  twitterImage:
    'https://res.cloudinary.com/dhaa1aobr/image/upload/v1747342580/apple-touch-icon_di9mgd.png'
})
</script>

<template><PortalCategoryPage :title="title" /></template>

<style lang="css" scoped></style>

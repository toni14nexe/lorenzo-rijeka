<script lang="ts" setup>
import PortalMainPage from '~/components/portal/PortalMainPage.vue'

useHead({
  title: 'Portal',
  meta: [
    {
      name: 'description',
      content:
        'Portal sa svim vijestima, najnovijim vijestima i kategorijama vijesti.'
    },
    { property: 'og:title', content: 'Portal' },
    {
      property: 'og:description',
      content:
        'Portal sa svim vijestima, najnovijim vijestima i kategorijama vijesti.'
    }
  ]
})

useSeoMeta({
  description:
    'Portal sa svim vijestima, najnovijim vijestima i kategorijama vijesti.',
  ogTitle: 'Portal',
  ogDescription:
    'Portal sa svim vijestima, najnovijim vijestima i kategorijama vijesti.',
  ogImage:
    'https://res.cloudinary.com/dhaa1aobr/image/upload/v1747342580/apple-touch-icon_di9mgd.png',
  twitterCard: 'summary_large_image',
  twitterImage:
    'https://res.cloudinary.com/dhaa1aobr/image/upload/v1747342580/apple-touch-icon_di9mgd.png'
})
</script>

<template><PortalMainPage /></template>

<style lang="css" scoped></style>

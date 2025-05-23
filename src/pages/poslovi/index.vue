<script lang="ts" setup>
useHead({
  title: 'Poslovi',
  meta: [
    {
      name: 'description',
      content:
        'Ovdje možete pronaći ponudu svih naših dostupnih objava za posao i detalje o poslu.'
    },
    { property: 'og:title', content: 'Poslovi' },
    {
      property: 'og:description',
      content:
        'Ovdje možete pronaći ponudu svih naših dostupnih objava za posao i detalje o poslu.'
    }
  ]
})

useSeoMeta({
  description:
    'Ovdje možete pronaći ponudu svih naših dostupnih objava za posao i detalje o poslu.',
  ogTitle: 'Poslovi',
  ogDescription:
    'Ovdje možete pronaći ponudu svih naših dostupnih objava za posao i detalje o poslu.',
  ogImage:
    'https://res.cloudinary.com/dhaa1aobr/image/upload/v1747342580/apple-touch-icon_di9mgd.png',
  twitterCard: 'summary_large_image',
  twitterImage:
    'https://res.cloudinary.com/dhaa1aobr/image/upload/v1747342580/apple-touch-icon_di9mgd.png'
})
</script>

<template><JobsPage /></template>

<style lang="css" scoped></style>

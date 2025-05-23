<script lang="ts" setup>
useHead({
  title: 'Naslovnica',
  meta: [
    {
      name: 'description',
      content:
        'Početna stranica Gastarbajter.de portala. Ovdje možete pronaći sve o životu izvan Hrvatske, upute za život izvan Hrvatske, poslove izvan Hrvatske i našu web trgovinu koja omogućava internacionalne narudžbe.'
    },
    { property: 'og:title', content: 'Naslovnica' },
    {
      property: 'og:description',
      content:
        'Početna stranica Gastarbajter.de portala. Ovdje možete pronaći sve o životu izvan Hrvatske, upute za život izvan Hrvatske, poslove izvan Hrvatske i našu web trgovinu koja omogućava internacionalne narudžbe.'
    }
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: 'https://res.cloudinary.com/dhaa1aobr/image/upload/v1747342582/favicon-32x32_avu6vh.png'
    },
    {
      rel: 'apple-touch-icon',
      href: 'https://res.cloudinary.com/dhaa1aobr/image/upload/v1747342580/apple-touch-icon_di9mgd.png'
    }
  ]
})

useSeoMeta({
  description:
    'Početna stranica Gastarbajter.de portala. Ovdje možete pronaći sve o životu izvan Hrvatske, upute za život izvan Hrvatske, poslove izvan Hrvatske i našu web trgovinu koja omogućava internacionalne narudžbe.',
  ogTitle: `Naslovnica`,
  ogDescription:
    'Početna stranica Gastarbajter.de portala. Ovdje možete pronaći sve o životu izvan Hrvatske, upute za život izvan Hrvatske, poslove izvan Hrvatske i našu web trgovinu koja omogućava internacionalne narudžbe.',
  ogImage:
    'https://res.cloudinary.com/dhaa1aobr/image/upload/v1747342580/apple-touch-icon_di9mgd.png',
  twitterCard: 'summary_large_image',
  twitterImage:
    'https://res.cloudinary.com/dhaa1aobr/image/upload/v1747342580/apple-touch-icon_di9mgd.png'
})
</script>

<template><DashboardPage /></template>

<style lang="css" scoped></style>

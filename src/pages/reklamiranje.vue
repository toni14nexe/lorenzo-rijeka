<script lang="ts" setup>
import AdsPage from '~/components/ads/AdsPage.vue'

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
</script>

<template><AdsPage /></template>

<style lang="css" scoped></style>

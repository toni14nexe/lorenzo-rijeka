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
</script>

<template><ComsPage /></template>

<style lang="css" scoped></style>

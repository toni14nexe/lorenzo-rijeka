<script lang="ts" setup>
import PortalNewsPage from '~/components/portal/PortalNewsPage.vue'

useHead({
  title: 'Gastabajter.de - Vijesti',
  meta: [
    {
      name: 'description',
      content: `Ovdje možete pročitati našu vijest.`
    },
    { property: 'og:title', content: 'Gastabajter.de - Vijesti' },
    {
      property: 'og:description',
      content: `Ovdje možete pročitati našu vijest.`
    }
  ]
})
</script>

<template><PortalNewsPage /></template>

<style lang="css" scoped></style>

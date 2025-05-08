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
</script>

<template><BackofficePage /></template>

<style lang="css" scoped></style>

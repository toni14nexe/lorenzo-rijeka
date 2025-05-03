<script lang="ts" setup>
import PortalMainPage from '~/components/portal/PortalMainPage.vue'

useHead({
  title: 'Portal',
  meta: [
    {
      name: 'Portal sa najnovijim vijestima i kategorijama vijesti.',
      content: ''
    },
    { property: 'og:title', content: 'Portal' },
    {
      property: 'og:description',
      content: 'Portal sa najnovijim vijestima i kategorijama vijesti.'
    }
  ]
})
</script>

<template><PortalMainPage /></template>

<style lang="css" scoped></style>

<script lang="ts" setup>
import PortalMainPage from '~/components/portal/PortalMainPage.vue'

useHead({
  title: 'Portal',
  meta: [
    {
      name: 'description',
      content: ''
    },
    { property: 'og:title', content: 'Portal' },
    {
      property: 'og:description',
      content: ''
    }
  ]
})
</script>

<template><PortalMainPage /></template>

<style lang="css" scoped></style>

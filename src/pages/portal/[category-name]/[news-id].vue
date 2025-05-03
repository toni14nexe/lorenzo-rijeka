<script lang="ts" setup>
import PortalNewsPage from '~/components/portal/PortalNewsPage.vue'

const title = ref('Portal')

useHead({
  title: title.value,
  meta: [
    {
      name: 'description',
      content: 'Ovjde možete pročitati naše vijesti.'
    },
    { property: 'og:title', content: 'Portal' },
    {
      property: 'og:description',
      content: 'Ovjde možete pročitati naše vijesti.'
    }
  ]
})
</script>

<template><PortalNewsPage /></template>

<style lang="css" scoped></style>

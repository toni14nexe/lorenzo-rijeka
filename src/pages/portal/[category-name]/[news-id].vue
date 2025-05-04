<script lang="ts" setup>
import PortalNewsPage from '~/components/portal/PortalNewsPage.vue'

const title = ref('Portal')

useHead({
  title: title.value,
  meta: [
    {
      name: 'description',
      content: `Ovdje možete pročitati našu vijest. ${title.value}`
    },
    { property: 'og:title', content: 'Portal' },
    {
      property: 'og:description',
      content: `Ovdje možete pročitati našu vijest. ${title.value}`
    }
  ]
})
</script>

<template><PortalNewsPage /></template>

<style lang="css" scoped></style>

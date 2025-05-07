<script lang="ts" setup>
import SearchPage from '~/components/search/SearchPage.vue'

const route = useRoute()

useHead({
  title: `Pretraživanje ${route.query.value}`,
  meta: [
    {
      name: 'description',
      content: ''
    },
    { property: 'og:title', content: `Pretraživanje ${route.query.value}` },
    {
      property: 'og:description',
      content: ''
    }
  ]
})
</script>

<template><SearchPage /></template>

<style lang="css" scoped></style>

<script lang="ts" setup>
const route = useRoute()
const title = `${route.params.categoryname[0].toUpperCase()}${route.params.categoryname.slice(1, route.params.categoryname.length)}`
useHead({
  title: title,
  meta: [
    {
      name: 'description',
      content: `Kategorija vijesti na Portalu sa najnovijim vijestima. ${title}`
    },
    { property: 'og:title', content: 'Kategorija' },
    {
      property: 'og:description',
      content: `Kategorija vijesti na Portalu sa najnovijim vijestima. ${title}`
    }
  ]
})
</script>

<template><PortalCategoryPage :title="title" /></template>

<style lang="css" scoped></style>

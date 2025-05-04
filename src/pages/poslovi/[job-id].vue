<script lang="ts" setup>
const title = ref('Job ID')

useHead({
  title: title.value,
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

<template>Job ID page</template>

<style lang="css" scoped></style>

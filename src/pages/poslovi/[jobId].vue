<script lang="ts" setup>
import JobPage from '~/components/jobs/JobPage.vue'

useHead({
  title: 'Gastabajter.de - Oglas za posao',
  meta: [
    {
      name: 'description',
      content: `Ovdje možete pronaći oglas za posao.}`
    },
    { property: 'og:title', content: 'Gastabajter.de - Oglas za posao' },
    {
      property: 'og:description',
      content: `Ovdje možete pronaći oglas za posao.`
    }
  ]
})
</script>

<template><JobPage /></template>

<style lang="css" scoped></style>

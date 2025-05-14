<script lang="ts" setup>
import JobPage from '~/components/jobs/JobPage.vue'

const title = ref('Oglas za posao')

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

<template><JobPage /></template>

<style lang="css" scoped></style>

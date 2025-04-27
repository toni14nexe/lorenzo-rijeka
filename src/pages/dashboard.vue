<script setup lang="ts">
useHead({
  title: 'Početna',
  meta: [
    {
      name: 'description',
      content:
        'Početna stranica prijavljenoga korisnika. Osnovni podaci o aplikaciji, servisima i uslugama koje pružamo i uvijeti korištenja.'
    },
    { property: 'og:title', content: 'Početna' },
    {
      property: 'og:description',
      content:
        'Početna stranica prijavljenoga korisnika. Osnovni podaci o aplikaciji, servisima i uslugama koje pružamo i uvijeti korištenja.'
    }
  ]
})
</script>

<template>
  <DashboardPage />
</template>

<script lang="ts" setup>
useHead({
  title: 'Prijava i registracija',
  meta: [
    {
      name: 'description',
      content:
        'Prijava i registracija korisnika sa opcijom resetiranja zaboravljene lozinke.'
    },
    { property: 'og:title', content: 'Prijava i registracija' },
    {
      property: 'og:description',
      content:
        'Prijava i registracija korisnika sa opcijom resetiranja zaboravljene lozinke.'
    }
  ]
})

definePageMeta({
  layout: 'login'
})
</script>

<template>
  <LoginPage v-motion-fade :duration="2000" />
</template>

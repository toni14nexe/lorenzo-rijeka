<script setup lang="ts">
useHead({
  title: 'Kontakt',
  meta: [
    {
      name: 'description',
      content:
        'Za bilo kakva pitanja, kontakt, prijedloge ili prijavu pogrešaka u aplikaciji.'
    },
    { property: 'og:title', content: 'Kontakt' },
    {
      property: 'og:description',
      content:
        'Za bilo kakva pitanja, kontakt, prijedloge ili prijavu pogrešaka u aplikaciji.'
    }
  ]
})

useSeoMeta({
  description:
    'Za bilo kakva pitanja, kontakt, prijedloge ili prijavu pogrešaka u aplikaciji.',
  ogTitle: `Kontakt`,
  ogDescription:
    'Za bilo kakva pitanja, kontakt, prijedloge ili prijavu pogrešaka u aplikaciji.',
  ogImage:
    'https://res.cloudinary.com/dhaa1aobr/image/upload/v1748519861/180_lm9wut.png',
  twitterCard: 'summary_large_image',
  twitterImage:
    'https://res.cloudinary.com/dhaa1aobr/image/upload/v1748519861/180_lm9wut.png'
})
</script>

<template>
  <ContactPage />
</template>

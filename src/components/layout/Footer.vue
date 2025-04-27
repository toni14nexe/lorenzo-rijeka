<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <NuxtLink
    to="https://innova-tech.live/"
    target="_blank"
    class="footer-text hidden-xs-only"
    v-motion-slide-bottom
    :duration="300"
    :delay="1000"
  >
    {{
      `© 2024-${year} InnovaTech obrt za informatičke usluge, sva prava pridržana`
    }}
  </NuxtLink>
  <NuxtLink
    to="https://innova-tech.live/"
    target="_blank"
    class="footer-text hidden-sm-and-up"
    v-motion-slide-bottom
    :duration="300"
    :delay="1000"
  >
    {{ `© 2024-${year} InnovaTech, sva prava pridržana` }}
  </NuxtLink>
</template>

<style scoped>
.footer-text {
  color: white;
  text-decoration: none;
}
.footer-text:hover {
  text-decoration: underline;
}
@media (max-width: 767px) {
  .footer-text {
    font-size: 13px;
  }
}
</style>

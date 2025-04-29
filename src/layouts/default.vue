<script setup lang="ts">
import Header from '~/components/layout/Header.vue'
import Footer from '~/components/layout/Footer.vue'
</script>

<template>
  <Header />
  <ElMain class="main">
    <slot />
  </ElMain>
  <footer>
    <Footer />
  </footer>
</template>

<style scoped>
.main {
  overflow-x: hidden;
}
</style>

<script setup lang="ts">
import Header from '~/components/layout/Header.vue'
import Footer from '~/components/layout/Footer.vue'
</script>

<template>
  <ElHeader class="header">
    <Header />
  </ElHeader>
  <ElMain class="main">
    <slot />
  </ElMain>
  <footer>
    <Footer />
  </footer>
</template>

<style scoped>
.header {
  --el-header-padding: 0;
}
.main {
  overflow-x: hidden;
}
</style>

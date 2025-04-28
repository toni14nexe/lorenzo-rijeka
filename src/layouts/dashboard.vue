<script setup lang="ts">
import Header from '~/components/layout/Header.vue'
import Footer from '~/components/layout/Footer.vue'
</script>

<template>
  <ElContainer class="container">
    <ElHeader>
      <Header />
    </ElHeader>
    <ElMain class="main">
      <slot />
    </ElMain>
    <footer>
      <Footer />
    </footer>
  </ElContainer>
</template>

<style scoped>
.container {
  max-width: 1600px;
  overflow-x: hidden;
}
.main {
  overflow-x: hidden;
}
</style>

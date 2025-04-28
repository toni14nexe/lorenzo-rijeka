<script setup lang="ts">
import Header from '~/components/layout/Header.vue'
</script>

<template>
  <ElContainer class="container">
    <ElHeader>
      <Header />
    </ElHeader>
    <ElMain class="main">
      <slot />
    </ElMain>
  </ElContainer>
</template>

<style scoped>
.container {
  max-width: 1600px;
  margin: auto;
  overflow-x: hidden;
}
.main {
  overflow-x: hidden;
}
</style>

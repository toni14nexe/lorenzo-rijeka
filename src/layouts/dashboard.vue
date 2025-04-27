<script setup lang="ts">
import Header from '~/components/layout/Header.vue'

const { $viewport } = useNuxtApp()
</script>

<template>
  <ElContainer class="container">
    <ElHeader>
      <Header />
    </ElHeader>
    <div>
      <ElMain>
        <slot />
      </ElMain>
    </div>
  </ElContainer>
</template>

<style scoped>
.container {
  max-width: 1600px;
  margin: auto;
}
</style>

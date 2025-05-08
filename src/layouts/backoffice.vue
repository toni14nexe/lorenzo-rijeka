<script setup lang="ts"></script>

<template>
  <ElMain class="main">
    <slot />
  </ElMain>
</template>

<style scoped>
.main {
  overflow-x: hidden;
  width: 100%;
  min-height: calc(100dvh - 50px);
  padding: 0;
  margin-bottom: 50px;
}
</style>

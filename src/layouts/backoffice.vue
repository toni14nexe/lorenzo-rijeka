<script setup lang="ts"></script>

<template>
  <ElMain class="main" v-motion-slide-top :duration="1000" :delay="400">
    <slot />
  </ElMain>
</template>

<style scoped>
.main {
  overflow-x: hidden;
  width: 100%;
  min-height: calc(100dvh);
  padding: 0;
  padding-bottom: 50px;
}
</style>

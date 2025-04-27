<script setup lang="ts">
import HeaderUnauthorized from '~/components/layout/HeaderUnauthorized.vue'
import Footer from '~/components/layout/Footer.vue'
</script>

<template>
  <ElContainer class="container">
    <div class="background" />
    <HeaderUnauthorized />
    <ElMain class="main">
      <slot />
    </ElMain>
    <ElFooter class="footer" v-motion-slide-bottom :duration="1000">
      <Footer />
    </ElFooter>
  </ElContainer>
</template>

<style scoped>
.container {
  min-height: 100vh;
  width: 100vw;
  background-color: white;
  max-width: 2560px;
  margin: auto;
}

.main {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 90px);
  overflow-x: hidden;
}

.main.show-scrollbar {
  overflow-y: auto;
  opacity: 1;
}

.main::-webkit-scrollbar {
  width: 10px;
}

.main::-webkit-scrollbar-thumb {
  background-color: var(--el-color-primary);
  border-radius: 4px;
}

.main::-webkit-scrollbar-thumb:hover {
  background-color: var(--el-color-primary-light-3);
}

.background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: url('~/assets/images/background-image.jpg') no-repeat center
    center;
  background-size: cover;
  opacity: 0.08;
}

.footer {
  background-color: var(--el-color-primary);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10% 0 10%;
  border-top: 2px solid var(--el-color-primary-light-5);
  color: white;
  position: inherit;
  bottom: 0;
  width: 100%;
  height: 30px;
}
</style>

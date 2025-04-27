<script setup lang="ts">
import Footer from '~/components/layout/Footer.vue'
import HeaderUnauthorized from '~/components/layout/HeaderUnauthorized.vue'
</script>

<template>
  <ElContainer class="container">
    <div class="background" />
    <HeaderUnauthorized />
    <div class="center-container">
      <ElMain class="main" v-motion-slide-right :duration="100">
        <slot />
      </ElMain>
    </div>
    <ElFooter class="footer" v-motion-slide-top :duration="1000">
      <Footer />
    </ElFooter>
  </ElContainer>
</template>

<style scoped>
.container {
  min-height: 100vh;
  width: 100vw;
  max-width: 2560px;
  margin: auto;
}

.center-container {
  display: flex;
}

.main {
  display: flex;
  flex-direction: column;
  height: calc(100vh - 90px);
  overflow-x: hidden;
  opacity: 1;
  transition: opacity 1.5s ease-in-out;
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
  text-align: center;
  padding: 0 10% 0 10%;
  border-top: 2px solid var(--el-color-primary-light-5);
  color: white;
  position: inherit;
  bottom: 0;
  width: 100%;
  height: 30px;
}
</style>

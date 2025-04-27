<script setup lang="ts">
import Footer from '~/components/layout/Footer.vue'
import HeaderAuthorized from '~/components/layout/HeaderAuthorized.vue'
import AsideAuthorized from '~/components/layout/AsideAuthorized.vue'

const { $viewport } = useNuxtApp()
const showScrollbar = ref(false)
const route = useRoute()

watch(
  () => route.name,
  () => {
    const container = document.querySelector('.el-main')
    if (container) container.scrollTo({ top: 0, behavior: 'smooth' })
  }
)

onMounted(() => {
  setTimeout(() => {
    showScrollbar.value = true
  }, 1000)
})
</script>

<template>
  <ElContainer class="container">
    <div class="background" />
    <ElHeader class="header" v-motion-slide-top :duration="1000">
      <HeaderAuthorized />
    </ElHeader>
    <div class="center-container">
      <ElAside width="100px" v-if="$viewport.isGreaterOrEquals('tablet')">
        <AsideAuthorized />
      </ElAside>
      <ElMain :class="['main', { 'show-scrollbar': showScrollbar }]">
        <slot />
      </ElMain>
    </div>
    <ElFooter class="footer" v-motion-slide-bottom :duration="1000">
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

.header {
  background-color: var(--el-color-primary);
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid var(--el-color-primary-light-5);
  color: white;
}

.center-container {
  display: flex;
}

.main {
  display: flex;
  justify-content: center;
  align-items: first baseline;
  height: calc(100vh - 90px);
  overflow-x: hidden;
  opacity: 0;
  transition: opacity 1.5s ease-in-out;
}

.main.show-scrollbar {
  overflow-y: auto;
  opacity: 1;
  z-index: 1;
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

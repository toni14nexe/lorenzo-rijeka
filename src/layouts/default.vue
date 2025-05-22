<script setup lang="ts">
import Header from '~/components/layout/Header.vue'
import Footer from '~/components/layout/Footer.vue'
import ComsFooter from '~/components/shared/ComsFooter.vue'
</script>

<template>
  <Header />
  <ElMain class="main" v-motion-slide-top :duration="1000" :delay="400">
    <slot />
    <ComsFooter />
  </ElMain>
  <footer v-motion-slide-top :duration="1000" :delay="400">
    <Footer />
  </footer>
</template>

<style scoped>
.main {
  overflow-x: hidden;
}
</style>

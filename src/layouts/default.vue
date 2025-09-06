<script setup lang="ts">
import Header from '~/components/layout/Header.vue'
import Footer from '~/components/layout/Footer.vue'
import CookieMessage from '~/components/layout/CookieMessage.vue'

const cookieAgreement = useCookie('cookie_agreement')
const showCookieMessage = computed(() => cookieAgreement.value !== '1')
</script>

<template>
  <Header />
  <ElMain class="main" v-motion-slide-top :duration="1000" :delay="400">
    <slot />
  </ElMain>
  <footer v-motion-slide-top :duration="1000" :delay="400">
    <Footer />
  </footer>
  <CookieMessage v-if="showCookieMessage" />
</template>

<style scoped>
.main {
  overflow-x: hidden;
}
</style>

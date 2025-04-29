<script setup lang="ts">
import { useRoute } from 'vue-router'
import Header from '~/components/layout/Header.vue'
import Footer from '~/components/layout/Footer.vue'

const route = useRoute()
const errorCode = route.params?.code || 404
const show = ref(false)

onMounted(() => setTimeout(() => (show.value = true), 1000))
</script>

<template>
  <Header />
  <ElRow justify="center" align="middle">
    <ElCol align="center">
      <h1>Ups! Stranica nije dostupna ili nešto nije u redu s njom.</h1>
    </ElCol>
    <ElEmpty>
      <template #description>
        <p class="error-code">Ups! Error {{ errorCode }}...</p>
      </template>
    </ElEmpty>
    <ElCol align="center">
      <NuxtLink to="/">
        <ElButton type="primary" size="large" plain>
          Natrag na naslovnicu
        </ElButton>
      </NuxtLink>
    </ElCol>
  </ElRow>
  <Footer :divider-margin-top="24" />
</template>

<style scoped>
h1 {
  font-size: 2.25rem;
  color: var(--el-color-danger);
  padding: 0 20px;
}
.error-code {
  font-size: 1.5rem;
  color: var(--el-color-danger);
  font-weight: 500;
}
</style>

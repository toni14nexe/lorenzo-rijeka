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
  <div class="main">
    <ElRow justify="center" align="middle" class="mb-16">
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
  </div>
  <Footer :divider-margin-top="24" />
</template>

<style scoped>
.main {
  max-width: calc(1600px - 40px);
  margin-left: auto;
  margin-right: auto;
  padding: 0 20px;
}
h1 {
  font-size: 2.25rem;
  color: var(--el-color-danger);
}
.error-code {
  font-size: 1.5rem;
  color: var(--el-color-danger);
  font-weight: 500;
}
</style>

<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
const errorCode = route.params?.code || 404
const show = ref(false)

onMounted(() => setTimeout(() => (show.value = true), 1000))
</script>

<template>
  <ClientOnly v-if="show">
    <ElRow justify="center">
      <ElCol align="center">
        <h1>Error {{ errorCode }}</h1>
      </ElCol>
      <ElCol align="center">
        <p>Ups! Nešto nije u redu.</p>
      </ElCol>
      <ElCol align="center">
        <NuxtLink to="/">
          <ElButton type="primary" size="large">
            Natrag na početnu stranicu
          </ElButton>
        </NuxtLink>
      </ElCol>
    </ElRow>
  </ClientOnly>
</template>

<style scoped>
h1 {
  font-size: 3rem;
  color: var(--el-color-danger);
}
</style>

<script setup lang="ts">
import FacebookIcon from '~/assets/icons/facebook.vue'

const route = useRoute()
const config = useRuntimeConfig()
const appBaseUrl = config.public.appBaseUrl
const url = `${appBaseUrl}/${route.fullPath}`
</script>

<template>
  <NuxtLink
    :to="`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`"
    target="_blank"
  >
    <ElButton type="primary" plain>
      <ElIcon :size="24" class="mr-8">
        <FacebookIcon />
      </ElIcon>
      Podijeli
    </ElButton>
  </NuxtLink>
</template>

<style lang="css" scoped></style>

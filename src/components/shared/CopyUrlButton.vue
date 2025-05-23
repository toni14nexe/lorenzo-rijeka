<script setup lang="ts">
import { CopyDocument } from '@element-plus/icons-vue'

function copyUrl() {
  copyToClipboard(window.location.href, true)
}
</script>

<template>
  <ElButton type="primary" plain @click="copyUrl">
    <ElIcon :size="24" class="mr-8">
      <CopyDocument />
    </ElIcon>
    Kopiraj link
  </ElButton>
</template>

<style lang="css" scoped></style>

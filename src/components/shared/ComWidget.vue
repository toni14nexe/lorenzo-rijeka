<script setup lang="ts">
defineProps(['com'])

function openUrl(url: string, inNewTab?: boolean) {
  if (inNewTab)
    navigateTo(url, inNewTab ? { open: { target: '_blank' } } : undefined)
  else window.location.href = url
}
</script>

<template>
  <div v-if="com && com.imageUrl" class="active-component-wrapper">
    <div
      class="component component-hover-opacity"
      :class="{ 'cursor-pointer': com.url }"
      :style="`background-image: url(${com.imageUrl})`"
      @click="com.url ? openUrl(com.url, true) : undefined"
    />
  </div>
  <ElEmpty
    v-else
    class="empty-component"
    description="Ovdje može biti vaša reklama!"
    @click="navigateTo('/reklamiranje')"
  />
</template>

<style lang="css" scoped>
.active-component-wrapper {
  border-radius: 6px;
  background-color: black;
  display: block;
}
.component {
  height: 100%;
  border: 1px solid var(--el-border-color);
  border-radius: 4px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  box-shadow: var(--el-box-shadow-light);
  display: block;
}
.component-hover-opacity {
  transition: 0.3s ease-in-out;
}
.component-hover-opacity:hover {
  opacity: 0.75;
}
.empty-component {
  border: 1px solid var(--el-border-color);
  border-radius: 4px;
  box-shadow: var(--el-box-shadow-light);
  cursor: pointer;
  transition: 0.3s ease-in-out;
}
.empty-component:hover {
  background-color: rgba(0, 0, 0, 0.1);
}
.no-decoration {
  text-decoration: none;
}
</style>

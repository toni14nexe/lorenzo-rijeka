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
      :style="`--component-bg: url(${com.imageUrl})`"
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
  position: relative;
  height: 100%;
  border: 1px solid var(--el-border-color);
  border-radius: 4px;
  box-shadow: var(--el-box-shadow-light);
  overflow: hidden;
}
.component::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: var(--component-bg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition: transform 0.4s ease;
  will-change: transform;
  z-index: 0;
}
.component-hover-opacity:hover::before {
  transform: scale(1.05);
}
.component-hover-opacity {
  transition: 0.3s ease-in-out;
  position: relative;
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

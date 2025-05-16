<script setup lang="ts">
defineProps(['ad'])

function openUrl(url: string, inNewTab?: boolean) {
  if (inNewTab)
    navigateTo(url, inNewTab ? { open: { target: '_blank' } } : undefined)
  else window.location.href = url
}
</script>

<template>
  <div v-if="ad && ad.imageUrl" class="active-ad-wrapper">
    <div
      class="ad ad-hover-opacity"
      :class="{ 'cursor-pointer': ad.url }"
      :style="`background-image: url(${ad.imageUrl})`"
      @click="ad.url ? openUrl(ad.url, true) : undefined"
    />
  </div>
  <ElEmpty
    v-else
    class="empty-ad"
    description="Ovdje može biti vaša reklama!"
    @click="navigateTo('/reklamiranje')"
  />
</template>

<style lang="css" scoped>
.active-ad-wrapper {
  border-radius: 6px;
  background-color: black;
  display: block;
}
.ad {
  height: 100%;
  border: 1px solid var(--el-border-color);
  border-radius: 4px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  box-shadow: var(--el-box-shadow-light);
  display: block;
}
.ad-hover-opacity {
  transition: 0.3s ease-in-out;
}
.ad-hover-opacity:hover {
  opacity: 0.75;
}
.empty-ad {
  border: 1px solid var(--el-border-color);
  border-radius: 4px;
  box-shadow: var(--el-box-shadow-light);
  cursor: pointer;
  transition: 0.3s ease-in-out;
}
.empty-ad:hover {
  background-color: rgba(0, 0, 0, 0.1);
}
.no-decoration {
  text-decoration: none;
}
</style>

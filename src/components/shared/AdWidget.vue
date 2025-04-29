<script setup lang="ts">
const props = defineProps(['ad'])

function openAd() {
  if (props.ad.link) window.open(props.ad.link, '_blank')
}
</script>

<template>
  <div v-if="ad && ad.imageUrl" class="active-ad-wrapper">
    <div
      class="ad ad-hover-opacity"
      :class="{ 'cursor-pointer': ad.link }"
      :style="`background-image: url(${ad.imageUrl})`"
      @click="openAd"
    />
  </div>
  <ElEmpty
    v-else
    class="ad empty-ad cursor-pointer"
    description="Ovdje može biti vaša reklama!"
    @click="navigateTo('/reklame')"
  />
</template>

<style lang="css" scoped>
.active-ad-wrapper {
  border-radius: 6px;
  background-color: black;
}
.ad {
  height: 100%;
  border: 1px solid var(--el-border-color);
  border-radius: 4px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  box-shadow: var(--el-box-shadow-light);
}
.ad-hover-opacity {
  transition: 0.3s ease-in-out;
}
.ad-hover-opacity:hover {
  opacity: 0.75;
}
.empty-ad {
  transition: 0.3s ease-in-out;
}
.empty-ad:hover {
  background-color: rgba(0, 0, 0, 0.1);
}
</style>

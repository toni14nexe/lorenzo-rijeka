<script setup lang="ts">
const props = defineProps(['ad'])

function openAd() {
  if (props.ad.link) window.open(props.ad.link, '_blank')
}
</script>

<template>
  <div
    v-if="ad"
    class="ad"
    :class="{ 'cursor-pointer': ad.link }"
    :style="`background-image: url(${ad.imageUrl})`"
    @click="openAd"
  />
  <ElEmpty
    v-else
    class="ad cursor-pointer"
    description="Ovdje može biti vaša reklama!"
    @click="navigateTo('/reklame')"
  />
</template>

<style lang="css" scoped>
.ad {
  border: 1px solid var(--el-border-color);
  border-radius: 4px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
}
</style>

<script setup lang="ts">
defineProps(['ad'])
</script>

<template>
  <div v-if="ad && ad.imageUrl" class="active-ad-wrapper">
    <NuxtLink :to="ad.link" target="_blank">
      <div
        class="ad ad-hover-opacity"
        :class="{ 'cursor-pointer': ad.link }"
        :style="`background-image: url(${ad.imageUrl})`"
      />
    </NuxtLink>
  </div>
  <NuxtLink v-else to="/reklamiranje" class="no-decoration">
    <ElEmpty
      class="ad empty-ad cursor-pointer"
      description="Ovdje može biti vaša reklama!"
    />
  </NuxtLink>
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
.no-decoration {
  text-decoration: none;
}
</style>

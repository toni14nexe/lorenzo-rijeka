<script setup lang="ts">
defineProps(['category'])
</script>

<template>
  <div
    v-if="category"
    class="category cursor-pointer"
    :style="`--category-bg: url(${category.image.length ? category.image : ''})`"
  >
    <NuxtLink :to="`/webshop/${category.name}`">
      <div class="category-opacity-container" />
      <div class="category-text-container">
        <h3>{{ truncateText(category.name, 105) }}</h3>
      </div>
    </NuxtLink>
  </div>
  <ElEmpty v-else class="category" description="Trenutno nedostupno!" />
</template>

<style lang="css" scoped>
.category {
  position: relative;
  border: 1px solid var(--el-border-color);
  height: 30dvh;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: var(--el-box-shadow-light);
}
.category::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: var(--category-bg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition: transform 0.4s ease;
  z-index: 0;
  will-change: transform;
}
.category:hover::before {
  transform: scale(1.1);
}
.category-opacity-container {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: black;
  opacity: 0.3333;
  transition: opacity 0.3s ease-in-out;
  z-index: 1;
}
.category:hover .category-opacity-container {
  opacity: 0.75;
}
.category-text-container {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: white;
  text-align: center;
  padding: 16px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
}
@media screen and (max-width: 1025px) {
  h3 {
    font-size: 20px;
  }
}
</style>

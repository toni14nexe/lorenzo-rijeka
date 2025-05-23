<script setup lang="ts">
import { Clock } from '@element-plus/icons-vue'

defineProps(['news'])
</script>

<template>
  <div
    v-if="news"
    class="news cursor-pointer"
    :style="`--news-bg: url(${news.images.length ? news.images[0] : ''})`"
  >
    <NuxtLink :to="`/portal/${news.category.name}/${news.id}`">
      <div class="news-opacity-container" />
      <div class="news-text-container">
        <h3>{{ truncateText(news.title, 105) }}</h3>
        <ElRow class="datetime mb-16" align="middle">
          <ElIcon :size="18" class="mr-8">
            <Clock />
          </ElIcon>
          {{ formatISOToDatetime(news.createdAt) }}
        </ElRow>
      </div>
    </NuxtLink>
  </div>
  <ElEmpty v-else class="news" description="Trenutno nedostupno!" />
</template>

<style lang="css" scoped>
.news {
  position: relative;
  border: 1px solid var(--el-border-color);
  height: 100%;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: var(--el-box-shadow-light);
}
.news::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: var(--news-bg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition: transform 0.4s ease;
  z-index: 0;
  will-change: transform;
}
.news:hover::before {
  transform: scale(1.1);
}
.news-opacity-container {
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
.news:hover .news-opacity-container {
  opacity: 0.75;
}
.news-text-container {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  color: white;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
}
.datetime {
  font-weight: 400;
}
@media screen and (max-width: 1025px) {
  h3 {
    font-size: medium;
  }
  .datetime {
    font-size: small;
  }
}
</style>

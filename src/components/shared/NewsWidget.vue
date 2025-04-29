<script setup lang="ts">
import { Clock } from '@element-plus/icons-vue'

defineProps(['news'])
</script>

<template>
  <div
    v-if="news"
    class="news cursor-pointer"
    :style="`background-image: url(${news.imageUrl})`"
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
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  height: 100%;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: var(--el-box-shadow-light);
}
.news-opacity-container {
  opacity: 0.3333;
  background-color: black;
  height: 100%;
  transition: 0.3s ease-in-out;
}
.news:hover .news-opacity-container {
  opacity: 0.75;
}
.news-text-container {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
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

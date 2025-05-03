<script setup lang="ts">
import type { News } from '~/types/portal'

const { $viewport, $axios } = useNuxtApp()
const route = useRoute()
const isLoading = ref(true)
const news = ref<News>()

onMounted(() => getNews())

async function getNews() {
  isLoading.value = true
  try {
    const response = await $axios.get(`/portal-news/${route.params.newsid}`)
    news.value = response.data
  } catch (error) {
    console.error('API Error:', error)
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <div class="page-container">
    <template v-if="isLoading">
      <ElSkeleton animated>
        <template #template>
          <ElRow justify="center">
            <h3 style="width: 50%">
              <ElSkeletonItem variant="h3" />
            </h3>
          </ElRow>
        </template>
      </ElSkeleton>
    </template>
    <ElEmpty
      v-else-if="!news"
      description="Ups! Ovdje nema dostupnih vijesti..."
    />
    <template v-else>
      <ElRow justify="center" align="middle">
        <h3 class="color-primary">{{ news?.title }}</h3>
      </ElRow>
      <ElRow justify="space-between" align="middle" class="color-zinc mb-12">
        <ElCol :span="$viewport.isLessOrEquals('mobileWide') ? 24 : 12">
          {{ formatISOToDatetime(news.createdAt) }}
        </ElCol>
        <ElCol
          :span="$viewport.isLessOrEquals('mobileWide') ? 24 : 12"
          :align="$viewport.isLessOrEquals('mobileWide') ? 'start' : 'end'"
        >
          Autor: {{ news.author }} - Kategorija:
          {{ news.category.name }}
        </ElCol>
      </ElRow>
      <div v-html="news.text" class="news-content" />
    </template>
  </div>
</template>

<style lang="css" scoped>
.news-content {
  line-height: 1.6;
  text-wrap: no-wrap;
  text-align: justify;
}
</style>

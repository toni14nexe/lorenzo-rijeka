<script setup lang="ts">
import type { News } from '~/types/portal'
import Gallery from '~/components/shared/Gallery.vue'

const { $viewport, $axios } = useNuxtApp()
const route = useRoute()
const isLoading = ref(true)
const news = ref<News>()

onMounted(() => getNews())

async function getNews() {
  isLoading.value = true
  try {
    const response = await $axios.get(`/portal-news/${route.params.newsId}`)
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
          <ElRow justify="center">
            <ElSkeletonItem
              variant="image"
              style="
                height: calc(60dvh + 2rem);
                width: 100%;
                border-radius: 8px;
              "
            />
          </ElRow>
          <ElRow justify="space-between" align="middle" class="mb-24">
            <ElCol :span="$viewport.isLessOrEquals('mobileWide') ? 24 : 12">
              <ElSkeletonItem variant="text" style="width: 50%" />
            </ElCol>
            <ElCol
              :span="$viewport.isLessOrEquals('mobileWide') ? 24 : 12"
              :align="$viewport.isLessOrEquals('mobileWide') ? 'start' : 'end'"
            >
              <ElSkeletonItem variant="text" style="width: 100%" />
            </ElCol>
          </ElRow>
          <ElRow v-for="_ in 2" class="mb-24">
            <ElSkeletonItem
              v-for="_ in 10"
              variant="text"
              style="width: 100%; margin-bottom: 12px"
            />
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
      <Gallery
        v-if="news.images?.length || news.videos?.length"
        :links="[...(news.images ?? []), ...(news.videos ?? [])] as string[]"
      />
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
  white-space: normal;
  word-wrap: break-word;
}
</style>

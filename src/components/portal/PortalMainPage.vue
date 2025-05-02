<script setup lang="ts">
import NewsWidget from '~/components/shared/NewsWidget.vue'
import Pagination from '~/components/shared/Pagination.vue'
import type { News } from '~/types/portal'

const { $viewport, $axios } = useNuxtApp()
const firstTimeFetchingData = ref(true)
const isLoading = ref(true)
const pagination = ref({
  page: 1,
  perPage: 10,
  total: 0
})
const newestLargeNews = ref<News[]>()
const newestSmallNews = ref<News[]>()
const news = ref<News[]>([])

onMounted(() => getNews())

async function getNews() {
  isLoading.value = true
  try {
    const response = await $axios.get(
      `/portal-news?page=${pagination.value.page}&perPage=${pagination.value.perPage}`
    )
    news.value = response.data.news
    pagination.value.total = response.data.total
    if (firstTimeFetchingData.value) {
      newestLargeNews.value = news.value.slice(0, 3)
      newestSmallNews.value = news.value.slice(3, 7)
    }
  } catch (error) {
    console.error('API Error:', error)
  } finally {
    firstTimeFetchingData.value = false
    isLoading.value = false
  }
}

function aaa() {
  console.log('aaa')
}
</script>

<template>
  <div class="page-container">
    <template v-if="isLoading">
      <ElSkeleton animated>
        <template #template>
          <ElRow :gutter="12" class="mb-24">
            <ElCol
              v-for="_ in 3"
              :xs="24"
              :sm="8"
              :class="{ 'mt-12': $viewport.isLessOrEquals('tablet') }"
            >
              <ElSkeletonItem variant="image" class="skeleton-image" />
            </ElCol>
            <ElCol v-for="_ in 4" :xs="24" :sm="6" class="mt-12">
              <ElSkeletonItem variant="image" class="skeleton-image" />
            </ElCol>
          </ElRow>
          <ElDivider />
          <div
            v-loading="true"
            element-loading-text="Učitavanje..."
            class="mt-24 mb-24"
            style="height: 300px"
          />
        </template>
      </ElSkeleton>
    </template>
    <template v-else>
      <ElRow
        v-if="$viewport.isGreaterOrEquals('tablet')"
        :gutter="12"
        class="mb-24"
      >
        <ElCol
          v-for="news in newestLargeNews"
          :key="String(news.id)"
          :xs="24"
          :sm="8"
          class="news-container"
          :class="{ 'mt-12': $viewport.isLessOrEquals('tablet') }"
        >
          <NewsWidget :news="news" />
        </ElCol>
        <ElCol
          v-for="news in newestSmallNews"
          :key="String(news.id)"
          :xs="24"
          :sm="6"
          class="news-container mt-12"
        >
          <NewsWidget :news="news" />
        </ElCol>
      </ElRow>

      <ElDivider
        id="scroll-element"
        v-if="$viewport.isGreaterOrEquals('tablet')"
      />

      <ElRow
        :gutter="12"
        class="mb-24"
        :class="{ 'mt-24': $viewport.isGreaterOrEquals('tablet') }"
      >
        <ElCol
          v-for="article in news"
          :key="String(article.id)"
          :xs="24"
          :sm="12"
          class="mb-12"
        >
          <NewsWidget :news="article" class="news" @page-change="aaa" />
        </ElCol>
      </ElRow>
    </template>
    <Pagination
      v-model="pagination"
      :loading="isLoading"
      scroll-element-id="scroll-element"
      @page-change="getNews"
      class="mb-24"
    />
  </div>
</template>

<style lang="css" scoped>
.news-container {
  height: 30dvh;
}
.skeleton-image {
  height: 30dvh;
  border-radius: 4px;
}
.news {
  width: 100%;
  height: 30dvh;
}
</style>

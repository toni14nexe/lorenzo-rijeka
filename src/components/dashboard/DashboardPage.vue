<script setup lang="ts">
import NewsWidget from '~/components/shared/NewsWidget.vue'

const { $viewport } = useNuxtApp()
const adStore = useAdStore()
const { adSettings } = storeToRefs(adStore)

const newestLargeNews = ref([
  {
    id: 1,
    title:
      'Šahovski klub „Radnik” Velimirovac briljirao na županijskom finalu Plazma SIM-a u Osijeku',
    createdAt: '2025-04-27 16:16:24.880',
    category: { name: 'Kategorija 1' },
    images: [
      'https://miro.medium.com/v2/resize:fit:1000/1*KVYKz-XyhECWOcd68ZVkHQ.jpeg'
    ]
  },

  {
    id: 2,
    title: 'SPD predao kandidacijsku listu za Grad Našice',
    createdAt: '2025-04-27 16:16:24.880',
    category: { name: 'Kategorija 1' },
    images: [
      'https://vueschool.io/storage/media/677bbaa8ba92bed432f2bc7b6490c03a/Nuxt-3-Fundamentals_transparent.png'
    ]
  },
  {
    id: 3,
    title: 'RK Đurđenovac pobjednik',
    createdAt: '2025-04-27 16:16:24.880',
    category: { name: 'Kategorija 1' },
    images: [
      'https://a.storyblok.com/f/172506/1292x552/b28e696cd5/nuxt-vs-next-cover-image.webp'
    ]
  }
])

const newestSmallNews = ref([
  {
    id: 1,
    title:
      'Šahovski klub „Radnik” Velimirovac briljirao na županijskom finalu Plazma SIM-a u Osijeku',
    createdAt: '2025-04-27 16:16:24.880',
    category: { name: 'Kategorija 1' },
    images: [
      'https://miro.medium.com/v2/resize:fit:1000/1*KVYKz-XyhECWOcd68ZVkHQ.jpeg'
    ]
  },
  {
    id: 2,
    title: 'SPD predao kandidacijsku listu za Grad Našice',
    createdAt: '2025-04-27 16:16:24.880',
    category: { name: 'Kategorija 1' },
    images: [
      'https://vueschool.io/storage/media/677bbaa8ba92bed432f2bc7b6490c03a/Nuxt-3-Fundamentals_transparent.png'
    ]
  },
  {
    id: 3,
    title: 'RK Đurđenovac pobjednik',
    createdAt: '2025-04-27 16:16:24.880',
    category: { name: 'Kategorija 1' },
    images: [
      'https://a.storyblok.com/f/172506/1292x552/b28e696cd5/nuxt-vs-next-cover-image.webp'
    ]
  },
  {
    id: 4,
    title:
      'RK Đurđenovac pobjednik na memorijalnom turniru doktor Miodrag Požega u Hrtkovcima u općini Ruma u Srbiji nedaleko Novog Sada',
    createdAt: '2025-04-27 16:16:24.880',
    category: { name: 'Kategorija 1' },
    images: [
      'https://vueschool.io/storage/media/677bbaa8ba92bed432f2bc7b6490c03a/Nuxt-3-Fundamentals_transparent.png'
    ]
  }
])
</script>

<template>
  <div class="page-container">
    <ElRow :gutter="12" class="mb-24">
      <ElCol
        v-for="news in newestLargeNews"
        :key="news.id"
        :xs="24"
        :sm="8"
        class="news-container"
        :class="{ 'mt-12': $viewport.isLessOrEquals('tablet') }"
      >
        <NewsWidget :news="news" />
      </ElCol>
      <ElCol
        v-for="news in newestSmallNews"
        :key="news.id"
        :xs="24"
        :sm="6"
        class="news-container mt-12"
      >
        <NewsWidget :news="news" />
      </ElCol>
    </ElRow>

    <ElDivider />
    <DashboardCategorizedNews v-if="adSettings" />
  </div>
</template>

<style lang="css" scoped>
.news-container {
  height: 30dvh;
}
</style>

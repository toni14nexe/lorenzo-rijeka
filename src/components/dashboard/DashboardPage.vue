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
      'https://nasice.com/wp-content/uploads/2025/05/1000021783-960x540.jpg'
    ]
  },

  {
    id: 2,
    title: 'SPD predao kandidacijsku listu za Grad Našice',
    createdAt: '2025-04-27 16:16:24.880',
    category: { name: 'Kategorija 1' },
    images: [
      'https://nasice.com/wp-content/uploads/2025/05/DSC_8876-960x641.jpg'
    ]
  },
  {
    id: 3,
    title: 'RK Đurđenovac pobjednik',
    createdAt: '2025-04-27 16:16:24.880',
    category: { name: 'Kategorija 1' },
    images: [
      'https://nasice.com/wp-content/uploads/2025/05/viber_slika_2025-05-05_10-29-01-216-960x637.jpg'
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
      'https://nasice.com/wp-content/uploads/2025/05/494832286_2465390423814844_6433675970146429476_n-960x720.jpg'
    ]
  },
  {
    id: 2,
    title: 'SPD predao kandidacijsku listu za Grad Našice',
    createdAt: '2025-04-27 16:16:24.880',
    category: { name: 'Kategorija 1' },
    images: ['https://nasice.com/wp-content/uploads/2025/05/podgorac_07_05.jpg']
  },
  {
    id: 3,
    title: 'RK Đurđenovac pobjednik',
    createdAt: '2025-04-27 16:16:24.880',
    category: { name: 'Kategorija 1' },
    images: [
      'https://nasice.com/wp-content/uploads/2025/05/viber_slika_2025-05-12_19-18-17-344-960x540.jpg'
    ]
  },
  {
    id: 4,
    title:
      'RK Đurđenovac pobjednik na memorijalnom turniru doktor Miodrag Požega u Hrtkovcima u općini Ruma u Srbiji nedaleko Novog Sada',
    createdAt: '2025-04-27 16:16:24.880',
    category: { name: 'Kategorija 1' },
    images: [
      'https://nasice.com/wp-content/uploads/2025/05/1000035868-960x588.jpg'
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

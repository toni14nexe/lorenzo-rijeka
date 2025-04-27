<script setup lang="ts">
import MessageIcon from '~/assets/icons/message.vue'
import NewsWidget from '~/components/shared/NewsWidget.vue'

const newestLargeNews = ref([
  {
    id: 1,
    title:
      'Šahovski klub „Radnik” Velimirovac briljirao na županijskom finalu Plazma SIM-a u Osijeku',
    imageUrl:
      'https://miro.medium.com/v2/resize:fit:1000/1*KVYKz-XyhECWOcd68ZVkHQ.jpeg',
    createdAt: '2025-04-27 16:16:24.880'
  },
  {
    id: 2,
    title: 'SPD predao kandidacijsku listu za Grad Našice',
    imageUrl:
      'https://vueschool.io/storage/media/677bbaa8ba92bed432f2bc7b6490c03a/Nuxt-3-Fundamentals_transparent.png',
    createdAt: '2025-04-27 16:16:24.880'
  },
  {
    id: 3,
    title: 'RK Đurđenovac pobjednik',
    imageUrl:
      'https://a.storyblok.com/f/172506/1292x552/b28e696cd5/nuxt-vs-next-cover-image.webp',
    createdAt: '2025-04-27 16:16:24.880'
  }
])

const newestSmallNews = ref([
  {
    id: 1,
    title:
      'Šahovski klub „Radnik” Velimirovac briljirao na županijskom finalu Plazma SIM-a u Osijeku',
    imageUrl:
      'https://miro.medium.com/v2/resize:fit:1000/1*KVYKz-XyhECWOcd68ZVkHQ.jpeg',
    createdAt: '2025-04-27 16:16:24.880'
  },
  {
    id: 2,
    title: 'SPD predao kandidacijsku listu za Grad Našice',
    imageUrl:
      'https://vueschool.io/storage/media/677bbaa8ba92bed432f2bc7b6490c03a/Nuxt-3-Fundamentals_transparent.png',
    createdAt: '2025-04-27 16:16:24.880'
  },
  {
    id: 3,
    title: 'RK Đurđenovac pobjednik',
    imageUrl:
      'https://a.storyblok.com/f/172506/1292x552/b28e696cd5/nuxt-vs-next-cover-image.webp',
    createdAt: '2025-04-27 16:16:24.880'
  },
  {
    id: 4,
    title:
      'RK Đurđenovac pobjednik na memorijalnom turniru doktor Miodrag Požega u Hrtkovcima u općini Ruma u Srbiji nedaleko Novog Sada',
    imageUrl:
      'https://vueschool.io/storage/media/677bbaa8ba92bed432f2bc7b6490c03a/Nuxt-3-Fundamentals_transparent.png',
    createdAt: '2025-04-27 16:16:24.880'
  }
])
</script>

<template>
  <div class="page-container">
    <ElRow :gutter="12">
      <ElCol
        v-for="news in newestLargeNews"
        :key="news.id"
        :xs="24"
        :sm="8"
        class="news-container"
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
  </div>
</template>

<style lang="css" scoped>
.news-container {
  height: 30dvh;
}
.news {
  position: relative;
  border: 1px solid var(--el-border-color);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  height: 100%;
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;
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
  justify-content: center;
  align-items: end;
  color: white;
  text-align: center;
}
</style>

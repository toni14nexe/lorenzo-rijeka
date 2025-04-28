<script setup lang="ts">
import AdWidget from '~/components/shared/AdWidget.vue'

const smallAds = ref([
  {
    position: 1,
    imageUrl:
      'https://a.storyblok.com/f/172506/1292x552/b28e696cd5/nuxt-vs-next-cover-image.webp',
    link: 'https://a.storyblok.com/f/172506/1292x552/b28e696cd5/nuxt-vs-next-cover-image.webp'
  },
  {
    position: 2,
    imageUrl: '',
    link: ''
  },
  {
    position: 3,
    imageUrl:
      'https://vueschool.io/storage/media/677bbaa8ba92bed432f2bc7b6490c03a/Nuxt-3-Fundamentals_transparent.png',
    link: 'https://vueschool.io/storage/media/677bbaa8ba92bed432f2bc7b6490c03a/Nuxt-3-Fundamentals_transparent.png'
  },
  {
    position: 4,
    imageUrl:
      'https://miro.medium.com/v2/resize:fit:1000/1*KVYKz-XyhECWOcd68ZVkHQ.jpeg',
    link: 'https://miro.medium.com/v2/resize:fit:1000/1*KVYKz-XyhECWOcd68ZVkHQ.jpeg'
  }
])
const largeAd = ref({
  position: 5,
  imageUrl: '',
  link: ''
})
</script>

<template>
  <div class="scrollbar mt-24 mb-24">
    <AdWidget
      v-for="ad in smallAds"
      :key="ad.position"
      class="side-ad"
      :ad="ad"
    />
  </div>
  <ElRow class="mt-24 mb-24">
    <AdWidget class="large-ad" :ad="largeAd" />
  </ElRow>
</template>

<style lang="css" scoped>
.scrollbar {
  width: 100%;
  display: flex;
  gap: 12px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
}
.scrollbar::-webkit-scrollbar {
  height: 10px;
}
.side-ad {
  min-width: 250px;
  width: calc(25vw - 24px);
  height: 250px;
  scroll-snap-align: start;
}
.large-ad {
  width: 100%;
  height: 30dvh;
}
@media screen and (max-width: 767px) {
  .scrollbar::-webkit-scrollbar {
    height: 5px;
  }
  .large-ad {
    height: 20dvh;
  }
}
</style>

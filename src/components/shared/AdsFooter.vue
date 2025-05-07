<script setup lang="ts">
import AdWidget from '~/components/shared/AdWidget.vue'

const adStore = useAdStore()
const { adsLoading, adSettings, footerSlider, footerLarge } =
  storeToRefs(adStore)
</script>

<template>
  <div v-if="!adsLoading && adSettings[1].show" class="scrollbar mt-24">
    <AdWidget
      v-for="ad in footerSlider"
      :key="String(ad.id)"
      class="side-ad"
      :ad="ad"
    />
  </div>
  <ElRow v-if="!adsLoading && adSettings[2].show" class="mt-24">
    <AdWidget class="large-ad" :ad="footerLarge" />
  </ElRow>
</template>

<style lang="css" scoped>
.scrollbar {
  width: 100%;
  height: 262px;
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
  width: calc(25vw);
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

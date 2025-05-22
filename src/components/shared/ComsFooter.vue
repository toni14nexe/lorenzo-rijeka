<script setup lang="ts">
import ComWidget from '~/components/shared/ComWidget.vue'

const comStore = useComStore()
const { comsLoading, comSettings, footerSlider, footerLarge } =
  storeToRefs(comStore)
</script>

<template>
  <ClientOnly v-if="comSettings && (comSettings[1]?.show || comSettings[2]?.show)">
    <ElDivider />

    <div v-if="!comsLoading && comSettings[1]?.show" class="scrollbar mt-24">
      <ComWidget
        v-for="com in footerSlider"
        :key="String(com.id)"
        class="side-com"
        :com="com"
      />
    </div>

    <ElRow v-if="!comsLoading && comSettings[2]?.show" class="mt-24">
      <ComWidget class="large-com" :com="footerLarge" />
    </ElRow>
  </ClientOnly>
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
.side-com {
  min-width: 250px;
  width: calc(25vw);
  height: 250px;
  scroll-snap-align: start;
}
.large-com {
  width: 100%;
  height: 30dvh;
}
@media screen and (max-width: 767px) {
  .scrollbar::-webkit-scrollbar {
    height: 5px;
  }
  .large-com {
    height: 20dvh;
  }
}
</style>

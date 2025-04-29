<script setup lang="ts">
import NewsWidget from '~/components/shared/NewsWidget.vue'
import AdWidget from '~/components/shared/AdWidget.vue'
import MegafoneIcon from '~/assets/icons/megafone.vue'
import { Shop, OfficeBuilding } from '@element-plus/icons-vue'

const { $viewport } = useNuxtApp()
const news = ref([
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

const sideAds = ref([
  {
    imageUrl:
      'https://a.storyblok.com/f/172506/1292x552/b28e696cd5/nuxt-vs-next-cover-image.webp',
    link: 'https://a.storyblok.com/f/172506/1292x552/b28e696cd5/nuxt-vs-next-cover-image.webp'
  }
])
</script>

<template>
  <ElRow justify="center">
    <h3 class="color-primary">Najnovije</h3>
  </ElRow>

  <ElRow
    :gutter="24"
    class="mb-24"
    :style="`${$viewport.match('tablet') ? 'margin-left: -9px; margin-right: -9px' : $viewport.isLessThan('tablet') ? 'margin-left: -6px; margin-right: -18px' : undefined}`"
  >
    <ElCol v-if="$viewport.isGreaterThan('tablet')" :span="5">
      <AdWidget class="side-ad" :ad="sideAds[0]" />
    </ElCol>
    <ElCol :span="$viewport.isLessOrEquals('tablet') ? 24 : 14">
      <ElRow :gutter="12">
        <ElRow :gutter="12" justify="center" class="w-100">
          <ElTabs>
            <ElTabPane>
              <template #label>
                <ElIcon :size="18" class="mr-4">
                  <MegafoneIcon />
                </ElIcon>
                Portal
              </template>
            </ElTabPane>
            <ElTabPane>
              <template #label>
                <ElIcon :size="22" class="mr-4">
                  <OfficeBuilding />
                </ElIcon>
                Poslovi
              </template>
            </ElTabPane>
            <ElTabPane>
              <template #label>
                <ElIcon :size="22" class="mr-4">
                  <Shop />
                </ElIcon>
                Webshop
              </template>
            </ElTabPane>
          </ElTabs>
        </ElRow>
        <ElRow
          class="w-100"
          :style="`${$viewport.isGreaterOrEquals('tablet') ? 'margin-left: -3px' : undefined}`"
          :gutter="12"
        >
          <ElCol
            :span="$viewport.isLessThan('tablet') ? 24 : 14"
            :class="{ 'large-news': $viewport.isLessThan('tablet') }"
          >
            <NewsWidget :news="news[0]" />
          </ElCol>
          <ElCol :span="$viewport.isLessThan('tablet') ? 24 : 10">
            <ElRow class="categorized-news" :gutter="12">
              <NewsWidget
                class="small-news"
                :news="news[1]"
                :class="{ 'mx-6 mt-8': $viewport.isLessThan('tablet') }"
              />
            </ElRow>
            <ElRow class="categorized-news mt-6" :gutter="12">
              <NewsWidget
                class="small-news"
                :news="news[2]"
                :class="{ 'mx-6': $viewport.isLessThan('tablet') }"
              />
            </ElRow>
          </ElCol>
        </ElRow>
      </ElRow>
    </ElCol>
    <ElCol v-if="$viewport.isGreaterThan('tablet')" :span="5">
      <AdWidget class="side-ad" :ad="sideAds[1]" />
    </ElCol>
  </ElRow>

  <div v-if="$viewport.isLessOrEquals('tablet')" :span="5" class="mb-24">
    <ElDivider />
    <ElRow class="mt-24" :gutter="12">
      <ElCol :span="$viewport.isLessThan('mobileWide') ? 24 : 12">
        <AdWidget class="side-ad" :ad="sideAds[0]" />
      </ElCol>
      <ElCol
        :span="$viewport.isLessThan('mobileWide') ? 24 : 12"
        :class="{ 'mt-8': $viewport.isLessThan('mobileWide') }"
      >
        <AdWidget class="side-ad" :ad="sideAds[1]" />
      </ElCol>
    </ElRow>
  </div>
</template>

<style lang="css" scoped>
.side-ad {
  width: 100%;
  height: calc(40dvh + 54px);
}
.large-news {
  width: 100%;
  height: 30dvh;
}
.small-news {
  width: 100%;
  height: calc(20dvh - 4px);
  font-size: x-small;
}
@media screen and (max-width: 767px) {
  .small-news {
    height: 30dvh;
    font-size: medium;
  }
}
</style>

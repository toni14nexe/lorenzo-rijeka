<script setup lang="ts">
import DashboardInfoCardContainer from '~/components/dashboard/DashboardInfoCardContainer.vue'
import NewsWidget from '~/components/shared/NewsWidget.vue'
import type { News } from '~/types/portal'

const { $viewport, $axios } = useNuxtApp()
const comStore = useComStore()
const { comSettings } = storeToRefs(comStore)
const isLoading = ref(true)
const newestLargeNews = ref<News[]>()
const newestSmallNews = ref<News[]>()
const categorizedNews = ref<News[]>()

onMounted(() => getDashboardNews())

async function getDashboardNews() {
  isLoading.value = true
  try {
    const response = await $axios.get('/dashboard')
    newestLargeNews.value = [
      response.data[0],
      response.data[1],
      response.data[2]
    ]
    newestSmallNews.value = [
      response.data[3],
      response.data[4],
      response.data[5],
      response.data[6]
    ]
    categorizedNews.value = [
      response.data[0],
      response.data[1],
      response.data[2]
    ]
  } catch (error) {
    console.error('API Error:', error)
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <div class="page-container">
    <ElSkeleton v-if="isLoading" animated>
      <template #template>
        <ElRow :gutter="12" class="mb-24">
          <ElCol
            v-for="_ in 3"
            :xs="24"
            :sm="8"
            class="news-container"
            :class="{ 'mt-12': $viewport.isLessOrEquals('tablet') }"
          >
            <ElSkeletonItem
              variant="image"
              style="height: 100%; border-radius: 4px"
            />
          </ElCol>
          <ElCol v-for="_ in 4" :xs="24" :sm="6" class="news-container mt-12">
            <ElSkeletonItem
              variant="image"
              style="height: 100%; border-radius: 4px"
            />
          </ElCol>
        </ElRow>

        <DashboardInfoCardContainer />

        <ElDivider />

        <ElRow justify="center">
          <h3 class="color-primary">Najnovije</h3>
        </ElRow>

        <ElRow
          :gutter="24"
          class="mb-24"
          :style="`${$viewport.match('tablet') ? 'margin-left: -9px; margin-right: -9px' : $viewport.isLessThan('tablet') ? 'margin-left: -6px; margin-right: -18px' : undefined}`"
        >
          <ElCol :span="5" v-if="$viewport.isGreaterThan('tablet')">
            <ElSkeletonItem
              variant="image"
              style="height: 100%; border-radius: 4px"
            />
          </ElCol>
          <ElCol :span="$viewport.isLessOrEquals('tablet') ? 24 : 14">
            <ElRow :gutter="12">
              <ElRow :gutter="12" justify="center" class="w-100">
                <ElSkeletonItem
                  variant="text"
                  style="
                    height: 40px;
                    width: 296px;
                    border-radius: 4px;
                    margin-bottom: 14px;
                  "
                />
              </ElRow>
              <ElRow
                class="w-100"
                :style="`${$viewport.isGreaterOrEquals('tablet') ? 'margin-left: -3px' : undefined}`"
                :gutter="12"
              >
                <ElCol
                  :span="$viewport.isLessThan('tablet') ? 24 : 14"
                  :class="{
                    'large-news-mobile': $viewport.isLessThan('tablet'),
                    'large-news-desktop': $viewport.isGreaterOrEquals('tablet')
                  }"
                >
                  <ElSkeletonItem
                    variant="image"
                    :style="`border-radius: 4px; ${$viewport.isLessThan('tablet') ? 'height: 30dvh' : 'height: 40dvh'}`"
                  />
                  <ElSkeletonItem
                    v-if="$viewport.isLessThan('tablet')"
                    variant="image"
                    style="border-radius: 4px; height: 30dvh; margin-top: 12px"
                  />
                  <ElSkeletonItem
                    v-if="$viewport.isLessThan('tablet')"
                    variant="image"
                    style="border-radius: 4px; height: 30dvh; margin-top: 12px"
                  />
                </ElCol>
                <ElCol
                  v-if="!$viewport.isLessThan('tablet')"
                  :span="$viewport.isLessThan('tablet') ? 24 : 10"
                >
                  <ElRow class="categorized-news" :gutter="12">
                    <ElSkeletonItem
                      variant="image"
                      style="
                        border-radius: 4px;
                        width: 100%;
                        height: calc(20dvh - 3px);
                      "
                    />
                  </ElRow>
                  <ElRow class="categorized-news mt-6" :gutter="12">
                    <ElSkeletonItem
                      variant="image"
                      style="
                        height: 100%;
                        border-radius: 4px;
                        height: calc(20dvh - 3px);
                        width: 100%;
                      "
                    />
                  </ElRow>
                </ElCol>
              </ElRow>
            </ElRow>
          </ElCol>
          <ElCol :span="5" v-if="$viewport.isGreaterThan('tablet')">
            <ElSkeletonItem
              variant="image"
              style="height: 100%; border-radius: 4px"
            />
          </ElCol>
        </ElRow>

        <div v-if="$viewport.isLessOrEquals('tablet')" :span="5" class="mb-24">
          <ElDivider />
          <ElRow class="mt-24" :gutter="12">
            <ElCol :span="$viewport.isLessThan('mobileWide') ? 24 : 12">
              <ElSkeletonItem
                variant="image"
                style="height: 40dvh; border-radius: 4px"
              />
            </ElCol>
            <ElCol
              :span="$viewport.isLessThan('mobileWide') ? 24 : 12"
              :class="{ 'mt-8': $viewport.isLessThan('mobileWide') }"
            >
              <ElSkeletonItem
                variant="image"
                style="height: 40dvh; border-radius: 4px"
              />
            </ElCol>
          </ElRow>
        </div>
      </template>
    </ElSkeleton>

    <template v-else>
      <ElRow :gutter="12" class="mb-24">
        <ElCol
          v-for="news in newestLargeNews"
          :xs="24"
          :sm="8"
          class="news-container"
          :class="{ 'mt-12': $viewport.isLessOrEquals('tablet') }"
        >
          <NewsWidget :news="news" />
        </ElCol>
        <ElCol
          v-for="news in newestSmallNews"
          :xs="24"
          :sm="6"
          class="news-container mt-12"
        >
          <NewsWidget :news="news" />
        </ElCol>
      </ElRow>

      <DashboardInfoCardContainer />

      <ElDivider />

      <DashboardCategorizedNews
        v-if="comSettings"
        :prop-news="categorizedNews"
      />
    </template>
  </div>
</template>

<style lang="css" scoped>
.news-container {
  height: 30dvh;
}
</style>

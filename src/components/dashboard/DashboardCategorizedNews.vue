<script setup lang="ts">
import NewsWidget from '~/components/shared/NewsWidget.vue'
import JobWidget from '~/components/shared/JobWidget.vue'
import ProductWidget from '~/components/shared/ProductWidget.vue'
import ComWidget from '~/components/shared/ComWidget.vue'
import MegafoneIcon from '~/assets/icons/megafone.vue'
import { Shop, OfficeBuilding } from '@element-plus/icons-vue'

const props = defineProps(['propNews', 'propIsLoading'])

const { $viewport, $axios } = useNuxtApp()
const comStore = useComStore()
const { comsLoading, comSettings, dashboardSide } = storeToRefs(comStore)
const data = ref()
const isLoading = ref(false)
const tab = ref('portal')

onMounted(() => (data.value = props.propNews))

async function getCategorizedData(value: string) {
  isLoading.value = true
  try {
    const response = await $axios.get(`/dashboard-categorized?type=${value}`)
    data.value = response.data
  } catch (error) {
    console.error('API Error:', error)
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <ElRow justify="center">
    <h3 class="color-primary">Najnovije</h3>
  </ElRow>

  <ElSkeleton v-if="isLoading" animated>
    <template #template>
      <ElRow
        :gutter="24"
        class="mb-24"
        :style="`${$viewport.match('tablet') ? 'margin-left: -9px; margin-right: -9px' : $viewport.isLessThan('tablet') ? 'margin-left: -6px; margin-right: -18px' : undefined}`"
      >
        <ElCol :span="5" v-if="$viewport.isGreaterThan('tablet')">
          <ComWidget class="side-com" :com="dashboardSide?.left" />
        </ElCol>
        <ElCol :span="$viewport.isLessOrEquals('tablet') ? 24 : 14">
          <ElRow :gutter="12">
            <ElRow :gutter="12" justify="center" class="w-100">
              <ElTabs
                @tab-change="value => getCategorizedData(value as string)"
                v-model="tab"
              >
                <ElTabPane name="portal">
                  <template #label>
                    <ElIcon :size="18" class="mr-4">
                      <MegafoneIcon />
                    </ElIcon>
                    Portal
                  </template>
                </ElTabPane>
                <ElTabPane name="jobs">
                  <template #label>
                    <ElIcon :size="22" class="mr-4">
                      <OfficeBuilding />
                    </ElIcon>
                    Poslovi
                  </template>
                </ElTabPane>
                <ElTabPane name="webshop">
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
              style="height: calc(90dvh + 24px)"
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
          <ComWidget class="side-com" :com="dashboardSide?.right" />
        </ElCol>
      </ElRow>
    </template>
  </ElSkeleton>

  <ElRow
    v-else-if="!isLoading && data"
    :gutter="24"
    class="mb-24"
    :style="`${$viewport.match('tablet') ? 'margin-left: -9px; margin-right: -9px' : $viewport.isLessThan('tablet') ? 'margin-left: -6px; margin-right: -18px' : undefined}`"
  >
    <!-- @vue-expect-error -->
    <ElCol
      v-if="
        !comsLoading && comSettings[0]?.show && $viewport.isGreaterThan('tablet')
      "
      :span="5"
    >
      <ComWidget class="side-com" :com="dashboardSide?.left" />
    </ElCol>
    <!-- @vue-expect-error -->
    <ElCol
      :span="
        !comSettings[0]?.show || $viewport.isLessOrEquals('tablet') ? 24 : 14
      "
    >
      <ElRow :gutter="12">
        <ElRow :gutter="12" justify="center" class="w-100">
          <ElTabs
            @tab-change="value => getCategorizedData(value as string)"
            v-model="tab"
          >
            <ElTabPane name="portal">
              <template #label>
                <ElIcon :size="18" class="mr-4">
                  <MegafoneIcon />
                </ElIcon>
                Portal
              </template>
            </ElTabPane>
            <ElTabPane name="jobs">
              <template #label>
                <ElIcon :size="22" class="mr-4">
                  <OfficeBuilding />
                </ElIcon>
                Poslovi
              </template>
            </ElTabPane>
            <ElTabPane name="webshop">
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
            :class="{
              'large-news-mobile': $viewport.isLessThan('tablet'),
              'large-news-desktop': $viewport.isGreaterOrEquals('tablet')
            }"
          >
            <NewsWidget v-if="tab === 'portal'" :news="data[0]" />
            <JobWidget v-else-if="tab === 'jobs'" :job="data[0]" />
            <ProductWidget v-else-if="tab === 'webshop'" :product="data[0]" />
          </ElCol>
          <ElCol
            :span="$viewport.isLessThan('tablet') ? 24 : 10"
            class="small-news-container"
          >
            <ElRow class="small-news-row" :gutter="12">
              <NewsWidget
                v-if="tab === 'portal'"
                :news="data[1]"
                class="small-news"
                :class="{ 'mx-6 mt-8': $viewport.isLessThan('tablet') }"
              />
              <JobWidget
                v-else-if="tab === 'jobs'"
                :job="data[1]"
                class="small-news"
                :class="{ 'mx-6 mt-8': $viewport.isLessThan('tablet') }"
              />
              <ProductWidget
                v-else-if="tab === 'webshop'"
                :product="data[1]"
                class="small-news"
                :class="{ 'mx-6 mt-8': $viewport.isLessThan('tablet') }"
              />
            </ElRow>
            <ElRow class="small-news-row mt-6" :gutter="12">
              <NewsWidget
                v-if="tab === 'portal'"
                :news="data[2]"
                class="small-news"
                :class="{ 'mx-6': $viewport.isLessThan('tablet') }"
              />
              <JobWidget
                v-else-if="tab === 'jobs'"
                :job="data[2]"
                class="small-news"
                :class="{ 'mx-6': $viewport.isLessThan('tablet') }"
              />
              <ProductWidget
                v-else-if="tab === 'webshop'"
                :product="data[2]"
                class="small-news"
                :class="{ 'mx-6': $viewport.isLessThan('tablet') }"
              />
            </ElRow>
          </ElCol>
        </ElRow>
      </ElRow>
    </ElCol>
    <!-- @vue-expect-error -->
    <ElCol
      v-if="
        !comsLoading && comSettings[0]?.show && $viewport.isGreaterThan('tablet')
      "
      :span="5"
    >
      <ComWidget class="side-com" :com="dashboardSide?.right" />
    </ElCol>
  </ElRow>

  <!-- @vue-expect-error -->
  <div
    v-if="
      !comsLoading && comSettings[0]?.show && $viewport.isLessOrEquals('tablet')
    "
    :span="5"
    class="mb-24"
  >
    <ElDivider />
    <ElRow class="mt-24" :gutter="12">
      <ElCol :span="$viewport.isLessThan('mobileWide') ? 24 : 12">
        <ComWidget class="side-com" :com="dashboardSide?.left" />
      </ElCol>
      <ElCol
        :span="$viewport.isLessThan('mobileWide') ? 24 : 12"
        :class="{ 'mt-8': $viewport.isLessThan('mobileWide') }"
      >
        <ComWidget class="side-com" :com="dashboardSide?.right" />
      </ElCol>
    </ElRow>
  </div>
</template>

<style lang="css" scoped>
.side-com {
  width: 100%;
  height: calc(40dvh + 54px);
}
.large-news-desktop {
  height: 40dvh;
}
.large-news-mobile {
  width: 100%;
  height: 30dvh;
}
.small-news-container {
  height: calc(20dvh - 3px);
}
.small-news-row {
  height: calc(20dvh - 3px);
}
.small-news {
  width: 100%;
  height: calc(20dvh - 3px);
  font-size: x-small;
}
@media screen and (max-width: 767px) {
  .small-news {
    height: 30dvh;
    font-size: medium;
  }
  .small-news-container {
    height: fit-content;
  }
  .small-news-row:first-child {
    margin-bottom: 16px;
  }
  .small-news-row {
    height: calc(30dvh + 0px);
  }
}

.com {
  height: calc(40dvh + 54px);
  border: 1px solid var(--el-border-color);
  border-radius: 4px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  box-shadow: var(--el-box-shadow-light);
  display: block;
}
.com-hover-opacity {
  transition: 0.3s ease-in-out;
}
</style>

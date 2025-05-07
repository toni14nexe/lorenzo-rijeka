<script setup lang="ts">
import NewsWidget from '~/components/shared/NewsWidget.vue'
import JobWidget from '~/components/shared/JobWidget.vue'
import ProductWidget from '~/components/shared/ProductWidget.vue'
import type { Job } from '~/types/jobs'
import type { News } from '~/types/portal'
import type { Product } from '~/types/webshop'
import MegafoneIcon from '~/assets/icons/megafone.vue'
import { Shop, OfficeBuilding } from '@element-plus/icons-vue'

type SearchResponse = {
  news: News[]
  totalNews: number
  jobs: Job[]
  totalJobs: number
  products: Product[]
  totalProducts: number
}

const { $axios } = useNuxtApp()
const route = useRoute()
const searchValue = ref(route.query.value)
const isLoading = ref(true)
const selectedTab = ref()
const emptySearch = ref(false)
const data = ref<SearchResponse>()

watch(
  () => route.query.value,
  newSearchValue => {
    searchValue.value = newSearchValue
    getSearchData()
  }
)

onMounted(() => getSearchData())

async function getSearchData() {
  isLoading.value = true
  emptySearch.value = false
  try {
    const response = await $axios.get(`/search?value=${searchValue.value}`)
    data.value = response.data
    if (data.value?.totalNews) selectedTab.value = '0'
    else if (data.value?.totalJobs) selectedTab.value = '1'
    else if (data.value?.totalProducts) selectedTab.value = '2'
    else emptySearch.value = true
  } catch (error) {
    console.error('API Error:', error)
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <div class="page-container mb-12">
    <ElRow justify="center">
      <h3 class="color-primary">Pretraživanje: {{ searchValue }}</h3>
    </ElRow>
    <template v-if="isLoading">
      <ElSkeleton animated>
        <template #template>
          <ElRow justify="center">
            <ElSkeletonItem
              variant="text"
              style="height: 40px; margin-bottom: 14px"
              :style="`width: ${$viewport.isLessThan('mobileMedium') ? 228 : $viewport.isLessThan('mobileWide') ? 300 : 374}px`"
            />
          </ElRow>
          <ElRow align="middle" :gutter="12">
            <ElCol
              v-for="_ in 10"
              :xs="24"
              :sm="12"
              style="height: 30dvh"
              class="mb-12"
            >
              <ElSkeletonItem
                variant="image"
                style="height: 30dvh; border-radius: 4px"
              />
            </ElCol>
          </ElRow>
        </template>
      </ElSkeleton>
    </template>
    <ElEmpty
      v-else-if="!data || emptySearch"
      description="Ups! Ne možemo ništa pronaći..."
    />
    <template v-else>
      <ElRow justify="center" class="w-100" align="middle">
        <ElTabs v-model="selectedTab">
          <ElTabPane>
            <template #label>
              <ElIcon
                v-if="$viewport.isGreaterOrEquals('mobileWide')"
                :size="18"
                class="mr-4"
              >
                <MegafoneIcon />
              </ElIcon>
              Portal
              <ElAvatar
                v-if="$viewport.isGreaterOrEquals('mobileMedium')"
                :size="20"
                class="ml-4"
                :class="{
                  'font-9': data.totalNews >= 100,
                  'bc-primary': selectedTab == 0
                }"
              >
                {{ data.totalNews < 100 ? data.totalNews : '99+' }}
              </ElAvatar>
            </template>
          </ElTabPane>

          <ElTabPane>
            <template #label>
              <ElIcon
                v-if="$viewport.isGreaterOrEquals('mobileWide')"
                :size="22"
                class="mr-4"
              >
                <OfficeBuilding />
              </ElIcon>
              Poslovi
              <ElAvatar
                v-if="$viewport.isGreaterOrEquals('mobileMedium')"
                :size="20"
                class="ml-4"
                :class="{
                  'font-9': data.totalJobs >= 100,
                  'bc-primary': selectedTab == 1
                }"
              >
                {{ data.totalJobs < 100 ? data.totalJobs : '99+' }}
              </ElAvatar>
            </template>
          </ElTabPane>

          <ElTabPane>
            <template #label>
              <ElIcon
                v-if="$viewport.isGreaterOrEquals('mobileWide')"
                :size="22"
                class="mr-4"
              >
                <Shop />
              </ElIcon>
              Webshop
              <ElAvatar
                v-if="$viewport.isGreaterOrEquals('mobileMedium')"
                :size="20"
                class="ml-4"
                :class="{
                  'font-9': data.totalProducts >= 100,
                  'bc-primary': selectedTab == 2
                }"
              >
                {{ data.totalProducts < 100 ? data.totalProducts : '99+' }}
              </ElAvatar>
            </template>
          </ElTabPane>
        </ElTabs>
      </ElRow>
      <div class="w-100">
        <template v-if="selectedTab == 0">
          <ElRow v-if="data.news.length" align="middle" :gutter="12">
            <ElCol
              v-for="news in data.news"
              :key="String(news.id)"
              :xs="24"
              :sm="12"
              class="mb-12"
            >
              <NewsWidget :news="news" class="news-widget" />
            </ElCol>
          </ElRow>
          <ElEmpty v-else description="Ups! Nema dostupnih vijesti..." />
        </template>

        <template v-else-if="selectedTab == 1">
          <ElRow v-if="data.jobs.length" align="middle" :gutter="12">
            <ElCol
              v-for="job in data.jobs"
              :key="String(job.id)"
              :xs="24"
              :sm="12"
              class="mb-12"
            >
              <JobWidget :job="job" class="job-widget" />
            </ElCol>
          </ElRow>
          <ElEmpty v-else description="Ups! Nema dostupnih poslova..." />
        </template>

        <template v-else>
          <ElRow v-if="data.products.length" align="middle" :gutter="12">
            <ElCol
              v-for="product in data.products"
              :key="String(product.id)"
              :xs="24"
              :sm="12"
              class="mb-12"
            >
              <ProductWidget :product="product" class="product-widget" />
            </ElCol>
          </ElRow>
          <ElEmpty v-else description="Ups! Nema dostupnih proizvoda..." />
        </template>
      </div>
    </template>
  </div>
</template>

<style lang="css" scoped>
.el-avatar {
  --el-avatar-text-size: 12px;
}
.font-9 {
  font-size: 9px;
}
.bc-primary {
  background-color: var(--el-color-primary);
}
.news-widget {
  height: 30dvh;
}
.job-widget {
  height: 20dvh;
}
.product-widget {
  height: 30dvh;
}
</style>

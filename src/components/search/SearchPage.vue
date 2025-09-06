<script setup lang="ts">
import ProductWidget from '~/components/shared/ProductWidget.vue'
import type { Product } from '~/types/webshop'

type SearchResponse = {
  products: Product[]
  totalProducts: number
}

const { $axios } = useNuxtApp()
const route = useRoute()
const searchValue = ref(route.query.value)
const isLoading = ref(true)
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
    if (!data.value?.totalProducts) emptySearch.value = true
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
      description="Ups! Nema dostupnih proizvoda..."
    />
    <template v-else>
      <ElRow align="middle" :gutter="12">
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

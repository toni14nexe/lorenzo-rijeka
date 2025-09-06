<script setup lang="ts">
import type { Product } from '~/types/webshop'
import Pagination from '~/components/shared/Pagination.vue'
import ProductWidget from '~/components/shared/ProductWidget.vue'

const props = defineProps(['title'])

const { $viewport, $axios } = useNuxtApp()
const isLoading = ref(true)
const pagination = ref({
  page: 1,
  perPage: 12,
  total: 0
})
const products = ref<Product[]>([])

onMounted(() => getProduct())

async function getProduct() {
  isLoading.value = true
  try {
    const response = await $axios.get(
      `/product?page=${pagination.value.page}&perPage=${pagination.value.perPage}&categoryName=${props.title}`
    )
    products.value = response.data.products
    pagination.value.total = response.data.total
  } catch (error) {
    console.error('API Error:', error)
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <div class="page-container">
    <ElRow justify="center" align="middle" id="scroll-element">
      <h3 class="color-primary">Kategorija: {{ title }}</h3>
    </ElRow>
    <template v-if="isLoading">
      <ElSkeleton animated>
        <template #template>
          <ElRow :gutter="12" class="mb-24">
            <ElCol v-for="_ in 12" :xs="24" :sm="8" class="mt-12">
              <ElSkeletonItem variant="image" class="skeleton-image" />
            </ElCol>
          </ElRow>
        </template>
      </ElSkeleton>
    </template>
    <ElEmpty
      v-else-if="!products.length"
      description="Ups! Nema dostupnih proizvoda..."
    />
    <template v-else>
      <ElRow
        :gutter="12"
        class="mb-24"
        :class="{ 'mt-24': $viewport.isGreaterOrEquals('tablet') }"
      >
        <ElCol
          v-for="product in products"
          :key="String(product.id)"
          :xs="24"
          :sm="8"
          class="mb-12 news"
        >
          <ProductWidget :product="product" class="news" />
        </ElCol>
      </ElRow>
    </template>
    <Pagination
      v-if="pagination.total > 12"
      v-model="pagination"
      :loading="isLoading"
      scroll-element-id="scroll-element"
      @page-change="getProduct"
      class="mb-24"
    />
  </div>
</template>

<style lang="css" scoped>
.news-container {
  height: 30dvh;
}
.skeleton-image {
  height: 30dvh;
  border-radius: 4px;
}
.news {
  width: 100%;
  height: 30dvh;
}
</style>

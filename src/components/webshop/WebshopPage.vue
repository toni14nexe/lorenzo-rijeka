<script setup lang="ts">
import ProductWidget from '~/components/shared/ProductWidget.vue'
import Pagination from '~/components/shared/Pagination.vue'
import Categories from '~/components/shared/Categories.vue'
import type { Product } from '~/types/webshop'

const { $viewport, $axios } = useNuxtApp()
const categorySearch = ref<string[]>([])
const isLoading = ref(true)
const pagination = ref({
  page: 1,
  perPage: 12,
  total: 0
})
const products = ref<Product[]>([])

onMounted(() => getProducts())

async function getProducts() {
  isLoading.value = true
  try {
    const response = await $axios.get(
      `/product?page=${pagination.value.page}&perPage=${pagination.value.perPage}&categoryIds=${categorySearch.value}`
    )
    pagination.value.total = response.data.total
    products.value = response.data.products
  } catch (error) {
    console.error('API Error:', error)
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <div class="page-container">
    <template v-if="isLoading">
      <ElSkeleton animated>
        <template #template>
          <ElRow justify="center">
            <h1 class="color-primary">TRGOVINA</h1>
          </ElRow>
          <Categories />
          <ElDivider />
          <ElRow justify="center">
            <h3>PROIZVODI</h3>
          </ElRow>
          <ElRow :gutter="12" class="mb-24">
            <ElCol
              v-for="(_, index) in 12"
              :xs="24"
              :sm="8"
              :class="{
                'mt-12':
                  (index > 0 && $viewport.isLessThan('tablet')) ||
                  (index > 2 && $viewport.isGreaterOrEquals('tablet'))
              }"
            >
              <ElSkeletonItem variant="image" class="skeleton-image" />
            </ElCol>
          </ElRow>
        </template>
      </ElSkeleton>
    </template>
    <template v-else-if="!products.length">
      <ElRow justify="center">
        <h3 class="color-primary">TRGOVINA</h3>
      </ElRow>
      <ElEmpty description="Ups! Ovdje nema dostupnih proizvoda..." />
    </template>
    <template v-else>
      <ElRow justify="center">
        <h1 class="color-primary">TRGOVINA</h1>
      </ElRow>
      <Categories />

      <ElDivider id="scroll-element" />

      <ElRow justify="center">
        <h3>PROIZVODI</h3>
      </ElRow>

      <ElRow :gutter="12" class="mb-24">
        <ElCol
          v-for="product in products"
          :key="String(product.id)"
          :xs="24"
          :sm="8"
          class="mb-12 product"
        >
          <ProductWidget :product="product" class="product" />
        </ElCol>
      </ElRow>
    </template>
    <Pagination
      v-if="pagination.total > 12"
      v-model="pagination"
      :loading="isLoading"
      scroll-element-id="scroll-element"
      @page-change="getProducts"
      class="mb-24"
    />
  </div>
</template>

<style lang="css" scoped>
.product-container {
  height: 30dvh;
}
.skeleton-image {
  height: 30dvh;
  border-radius: 4px;
}
.product {
  width: 100%;
  height: 30dvh;
}
</style>

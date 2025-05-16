<script setup lang="ts">
import ProductWidget from '~/components/shared/ProductWidget.vue'
import Pagination from '~/components/shared/Pagination.vue'
import type { Product } from '~/types/webshop'
import { Search } from '@element-plus/icons-vue'

const { $viewport, $axios } = useNuxtApp()
const categoriesStore = useCategoriesStore()
const { categoriesLoading, webshopCategories } = storeToRefs(categoriesStore)
const firstTimeFetchingData = ref(true)
const categorySearch = ref<string[]>([])
const isLoading = ref(true)
const pagination = ref({
  page: 1,
  perPage: 10,
  total: 0
})
const newestProducts = ref<Product[]>()
const products = ref<Product[]>([])

onMounted(() => getProducts())

function handleCategorySearch() {
  pagination.value.page = 1
  getProducts()
}

async function getProducts() {
  isLoading.value = true
  try {
    const response = await $axios.get(
      `/product?page=${pagination.value.page}&perPage=${pagination.value.perPage}&categoryIds=${categorySearch.value}`
    )
    pagination.value.total = response.data.total
    products.value = response.data.products
    if (firstTimeFetchingData.value)
      newestProducts.value = products.value.slice(0, 3)
  } catch (error) {
    console.error('API Error:', error)
  } finally {
    firstTimeFetchingData.value = false
    isLoading.value = false
  }
}
</script>

<template>
  <div class="page-container">
    <template v-if="isLoading">
      <ElSkeleton animated>
        <template #template>
          <ElRow v-if="$viewport.isGreaterOrEquals('tablet')" justify="center">
            <h3 class="color-primary">Najnoviji proizvodi</h3>
          </ElRow>
          <ElRow
            v-if="$viewport.isGreaterOrEquals('tablet')"
            :gutter="12"
            class="mb-24"
          >
            <ElCol
              v-for="_ in 3"
              :xs="24"
              :sm="8"
              :class="{ 'mt-12': $viewport.isLessOrEquals('tablet') }"
            >
              <ElSkeletonItem variant="image" class="skeleton-image" />
            </ElCol>
          </ElRow>
          <ElDivider v-if="$viewport.isGreaterOrEquals('tablet')" />
          <ElRow justify="center">
            <h3 class="color-primary">Proizvodi</h3>
          </ElRow>
          <ElRow justify="center" align="middle" class="mb-24">
            <ElSkeletonItem
              variant="text"
              :style="`width: ${$viewport.isLessThan('mobileWide') ? '195' : '320'}px; height: 32px`"
            />
            <ElButton
              type="primary"
              plain
              class="ml-8"
              @click="getProducts"
              disabled
            >
              <ElIcon :size="20">
                <Search />
              </ElIcon>
            </ElButton>
          </ElRow>
          <ElRow :gutter="12" class="mb-24">
            <ElCol
              v-for="(_, index) in 10"
              :xs="24"
              :sm="12"
              :class="{
                'mt-12':
                  (index > 0 && $viewport.isLessThan('tablet')) ||
                  (index > 1 && $viewport.isGreaterOrEquals('tablet'))
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
        <h3 class="color-primary">Proizvodi</h3>
      </ElRow>
      <ElRow justify="center" align="middle">
        <ElSelect
          v-model="categorySearch"
          multiple
          filterable
          allow-create
          default-first-option
          :reserve-keyword="false"
          placeholder="Odaberite kategoriju"
          :loading="categoriesLoading"
          :style="`width: ${$viewport.isLessThan('mobileWide') ? '195' : '320'}px`"
        >
          <ElOption
            v-for="category in webshopCategories"
            :key="String(category.id)"
            :label="String(category.name)"
            :value="String(category.id)"
          />
        </ElSelect>
        <ElButton type="primary" plain class="ml-8" @click="getProducts">
          <ElIcon :size="20">
            <Search />
          </ElIcon>
        </ElButton>
      </ElRow>
      <ElEmpty description="Ups! Ovdje nema dostupnih proizvoda..." />
    </template>
    <template v-else>
      <ElRow v-if="$viewport.isGreaterOrEquals('tablet')" justify="center">
        <h3 class="color-primary">Najnoviji proizvodi</h3>
      </ElRow>
      <ElRow
        v-if="$viewport.isGreaterOrEquals('tablet')"
        :gutter="12"
        class="mb-24"
      >
        <ElCol
          v-for="product in newestProducts"
          :key="String(product.id)"
          :xs="24"
          :sm="8"
          class="product-container"
          :class="{ 'mt-12': $viewport.isLessOrEquals('tablet') }"
        >
          <ProductWidget :product="product" />
        </ElCol>
      </ElRow>

      <ElDivider
        id="scroll-element"
        :class="{ 'display-none': $viewport.isLessThan('tablet') }"
      />

      <ElRow justify="center">
        <h3 class="color-primary">Proizvodi</h3>
      </ElRow>

      <ElRow justify="center" align="middle" class="mb-24">
        <ElSelect
          v-model="categorySearch"
          multiple
          filterable
          allow-create
          default-first-option
          :reserve-keyword="false"
          placeholder="Odaberite kategoriju"
          :loading="categoriesLoading"
          :style="`width: ${$viewport.isLessThan('mobileWide') ? '195' : '320'}px`"
        >
          <ElOption
            v-for="category in webshopCategories"
            :key="String(category.id)"
            :label="String(category.name)"
            :value="String(category.id)"
          />
        </ElSelect>
        <ElButton
          type="primary"
          plain
          class="ml-8"
          @click="handleCategorySearch"
        >
          <ElIcon :size="20">
            <Search />
          </ElIcon>
        </ElButton>
      </ElRow>

      <ElRow :gutter="12" class="mb-24">
        <ElCol
          v-for="product in products"
          :key="String(product.id)"
          :xs="24"
          :sm="12"
          class="mb-12 product"
        >
          <ProductWidget :product="product" class="product" />
        </ElCol>
      </ElRow>
    </template>
    <Pagination
      v-if="pagination.total > 10"
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

<script setup lang="ts">
import Gallery from '~/components/shared/Gallery.vue'
import type { Product } from '~/types/webshop'
import { ShoppingCart } from '@element-plus/icons-vue'

const { $axios } = useNuxtApp()
const route = useRoute()
const isLoading = ref(true)
const product = ref<Product>()

onMounted(() => getProduct())

async function getProduct() {
  isLoading.value = true
  try {
    const response = await $axios.get(`/product/${route.params.productid}`)
    product.value = response.data
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
            <h3 style="width: 30%">
              <ElSkeletonItem variant="h3" />
            </h3>
          </ElRow>
          <ElRow justify="center">
            <ElSkeletonItem
              variant="image"
              style="
                height: calc(60dvh + 2rem);
                width: 100%;
                border-radius: 8px;
              "
            />
          </ElRow>
          <ElRow
            v-for="(_, index) in 5"
            justify="space-between"
            align="middle"
            :class="{ 'mb-12': index === 1, 'mb-24': index === 4 }"
            style="height: 21px"
          >
            <ElSkeletonItem variant="text" style="width: 30%" />
          </ElRow>
          <ElRow class="mb-24">
            <ElSkeletonItem
              v-for="_ in 5"
              variant="text"
              style="width: 100%; margin-bottom: 12px"
            />
          </ElRow>
          <ElRow class="mb-24">
            <ElSkeletonItem variant="text" style="width: 20%; height: 21.5px" />
          </ElRow>
          <ElRow justify="center" align="middle" class="mb-24">
            <ElButton type="primary" plain size="large" disabled>
              <ElIcon :size="20" class="mr-8">
                <ShoppingCart />
              </ElIcon>
              Kupi
            </ElButton>
          </ElRow>
        </template>
      </ElSkeleton>
    </template>
    <ElEmpty
      v-else-if="!product"
      description="Ups! Nema dostupnih proizvoda..."
    />
    <template v-else>
      <ElRow justify="center" align="middle">
        <h3 class="color-primary">{{ product?.name }}</h3>
      </ElRow>
      <Gallery
        v-if="product.images?.length || product.videos?.length"
        :links="
          [...(product.images ?? []), ...(product.videos ?? [])] as string[]
        "
      />
      <ElRow align="middle" class="color-zinc">
        Proizvod objavljen: {{ formatISOToDatetime(product.createdAt) }}
      </ElRow>
      <ElRow align="middle" class="color-zinc mb-12">
        Kategorija:
        {{ product.productCategory.name }}
      </ElRow>
      <ElRow align="middle" class="font-weight-500">
        Lokacija:
        {{ `${product.locationPlace}, ${product.locationCountry}` }}
      </ElRow>
      <ElRow v-if="product.contactEmail" align="middle" class="font-weight-500">
        Email:
        <a :href="`mailto:${product.contactEmail}`" class="ml-4">
          {{ product.contactEmail }}
        </a>
      </ElRow>
      <ElRow
        v-if="product.contactNumber"
        align="middle"
        class="font-weight-500 mb-24"
      >
        Broj:
        {{ product.contactNumber }}
      </ElRow>
      <div v-html="product.description" class="product-content mb-24" />
      <ElRow align="middle" class="mb-24 product-price">
        Cijena:
        <b class="ml-4">{{ Number(product.price).toFixed(2) }} €</b>
      </ElRow>
      <ElRow justify="center" align="middle" class="mb-24">
        <NuxtLink :to="`/webshop/${product.id}/narudzba`">
          <ElButton type="primary" plain size="large">
            <ElIcon :size="20" class="mr-8"><ShoppingCart /></ElIcon>
            Kupi
          </ElButton>
        </NuxtLink>
      </ElRow>
    </template>
  </div>
</template>

<style lang="css" scoped>
.product-content {
  line-height: 1.6;
  text-wrap: no-wrap;
  text-align: justify;
}
.font-weight-500 {
  font-weight: 500;
}
.product-price {
  font-weight: 500;
  font-size: large;
}
</style>

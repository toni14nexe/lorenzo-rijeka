<script setup lang="ts">
import type { Order } from '~/types/webshop'
import {
  ShoppingCart,
  SuccessFilled,
  CircleCloseFilled
} from '@element-plus/icons-vue'

type State = 'loading' | 'success' | 'error'

const { $axios } = useNuxtApp()
const route = useRoute()
const orderId = ref(route.params.orderId)
const state = ref<State>('loading')
const order = ref<Order>()

onMounted(() => getOrder())

async function getOrder() {
  try {
    const response = await $axios.get(`/order/${orderId.value}`)
    order.value = response.data
    state.value = 'success'
  } catch (error) {
    state.value = 'error'
    console.error('API Error:', error)
  }
}
</script>

<template>
  <div class="page-container mb-24">
    <ElRow justify="center" align="middle" class="color-primary">
      <ElIcon :size="24" class="mr-8">
        <ShoppingCart />
      </ElIcon>
      <h3>Narudžba</h3>
    </ElRow>
    <template v-if="state === 'loading'">
      <ElSkeleton animated>
        <template #template>
          <ElRow justify="center" align="middle">
            <ElCard class="order-state-skeleton-card">
              <ElRow justify="center" class="mb-20">
                <ElSkeletonItem variant="text" style="width: 200px" />
              </ElRow>
              <ElRow justify="center" class="mb-12">
                <ElSkeletonItem
                  variant="image"
                  style="width: 100px; height: 100px; border-radius: 100%"
                />
              </ElRow>
              <ElRow
                v-for="(_, index) in 14"
                justify="start"
                style="height: 19px"
                :class="{
                  'mb-12': index === 2 || index === 6 || index === 10,
                  'w-80px':
                    index === 0 || index === 3 || index === 7 || index === 11
                }"
              >
                <ElSkeletonItem variant="text" />
              </ElRow>
              <ElRow justify="center" class="mt-12">
                <ElButton type="primary" plain disabled>
                  Natrag na Webshop
                </ElButton>
              </ElRow>
            </ElCard>
          </ElRow>
        </template>
      </ElSkeleton>
    </template>
    <template v-else-if="state === 'error'">
      <ElRow justify="center" align="middle">
        <ElCard class="order-state-card">
          <ElRow justify="center" class="mb-12 color-danger">
            Narudžba nije uspješna
          </ElRow>
          <ElRow justify="center" class="mb-12 color-danger">
            <ElIcon :size="100">
              <CircleCloseFilled />
            </ElIcon>
          </ElRow>
          <ElRow class="text-underline"> Narudžba </ElRow>
          <ElRow> ID: {{ orderId }} </ElRow>
        </ElCard>
      </ElRow>
    </template>
    <template v-else>
      <ElRow justify="center" align="middle">
        <ElCard class="order-state-card">
          <ElRow justify="center" class="mb-12 color-success">
            Narudžba je uspješna
          </ElRow>
          <ElRow justify="center" class="mb-12 color-success">
            <ElIcon :size="100">
              <SuccessFilled />
            </ElIcon>
          </ElRow>
          <ElRow class="text-underline"> Narudžba </ElRow>
          <ElRow> ID: {{ orderId }} </ElRow>
          <ElRow class="mb-12">
            Vrijeme: {{ formatISOToDatetime(order?.createdAt) }}
          </ElRow>
          <ElRow class="text-underline"> Proizvod </ElRow>
          <ElRow>ID: {{ order?.product.id }}</ElRow>
          <ElRow>Naziv: {{ order?.product.name }}</ElRow>
          <ElRow class="mb-12">Price: {{ order?.product.price }} €</ElRow>
          <ElRow class="text-underline"> Kupac </ElRow>
          <ElRow>Ime i prezime: {{ order?.buyerFullname }}</ElRow>
          <ElRow>Mjesto: {{ order?.buyerPlace }}</ElRow>
          <ElRow class="mb-12">Država: {{ order?.buyerCountry }}</ElRow>
          <ElRow class="text-underline"> Prodavač </ElRow>
          <ElRow>Mjesto: {{ order?.product.locationPlace }}</ElRow>
          <ElRow class="mb-12">
            Država: {{ order?.product.locationCountry }}
          </ElRow>
          <ElRow justify="center">
            <NuxtLink to="/webshop" class="link-fix">
              <ElButton type="primary" plain>Natrag na Webshop</ElButton>
            </NuxtLink>
          </ElRow>
        </ElCard>
      </ElRow>
    </template>
  </div>
</template>

<style lang="css" scoped>
.order-state-skeleton-card {
  width: 294px;
}
.order-state-card {
  width: fit-content;
}
.text-underline {
  text-decoration: underline;
}
.w-80px {
  width: 80px;
}
</style>

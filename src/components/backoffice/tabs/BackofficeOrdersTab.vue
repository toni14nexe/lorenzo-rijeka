<script setup lang="ts">
import type { Order } from '~/types/webshop'
import { InfoFilled } from '@element-plus/icons-vue'
import Pagination from '~/components/shared/Pagination.vue'

const { $axios } = useNuxtApp()
const isLoading = ref(true)
const orders = ref<Order[]>()
const dialog = ref<{
  isOpened: boolean
  order: Order | undefined
}>({
  isOpened: false,
  order: undefined
})
const pagination = ref({
  page: 1,
  perPage: 10,
  total: 0
})

onMounted(() => getOrders())

async function getOrders() {
  isLoading.value = true
  try {
    const response = await $axios.get(
      `/order?page=${pagination.value.page}&perPage=${pagination.value.perPage}`
    )
    orders.value = response.data.orders
    pagination.value.total = response.data.total
  } catch (error) {
    console.error('API Error:', error)
  } finally {
    isLoading.value = false
  }
}

function handleOpenDialog(order: Order) {
  dialog.value = {
    isOpened: true,
    order
  }
}
</script>

<template>
  <div class="backoffice-page">
    <ElRow justify="center" align="middle" class="w-100">
      <h3 class="color-primary">Narudžbe</h3>
    </ElRow>

    <ElTable
      :data="orders"
      stripe
      empty-text="Nema dostupnih podataka"
      v-loading="isLoading"
    >
      <ElTableColumn label="ID" prop="id" />
      <ElTableColumn label="Kupac" prop="buyerFullname" />
      <ElTableColumn label="Proizvod" prop="buyerFullname" />
      <ElTableColumn label="Količina" prop="quantity" />
      <ElTableColumn label="Cijena" prop="totalPrice">
        <template #default="items">
          {{ Number(items.row.totalPrice).toFixed(2) }} €
        </template>
      </ElTableColumn>
      <ElTableColumn label="Više" align="center" width="80">
        <template #default="items">
          <ElButton type="primary" plain @click="handleOpenDialog(items.row)">
            <ElIcon size="24">
              <InfoFilled />
            </ElIcon>
          </ElButton>
        </template>
      </ElTableColumn>
    </ElTable>
    <Pagination
      v-if="pagination.total > 10"
      v-model="pagination"
      :loading="isLoading"
      scroll-element-id="scroll-element"
      @page-change="getOrders"
      class="mb-24"
    />
  </div>

  <ElDialog
    v-model="dialog.isOpened"
    :close-on-click-modal="false"
    destroy-on-close
    fullscreen
  >
    <template #header>
      <ElRow justify="center">
        <h3 class="color-primary">
          <span>Narudžba: {{ dialog.order?.id }}</span>
        </h3>
      </ElRow>
    </template>
    <ElRow justify="center">
      <ElDescriptions title="Kupac" border style="min-width: 450px" :column="1">
        <ElDescriptionsItem label="Ime i prezime">
          {{ dialog.order?.buyerFullname }}
        </ElDescriptionsItem>
        <ElDescriptionsItem label="Email">
          {{ dialog.order?.buyerEmail }}
        </ElDescriptionsItem>
        <ElDescriptionsItem label="Telefon">
          {{ dialog.order?.buyerNumber || '-' }}
        </ElDescriptionsItem>
        <ElDescriptionsItem label="Adresa">
          {{ dialog.order?.buyerAddress }}
        </ElDescriptionsItem>
        <ElDescriptionsItem label="Mjesto">
          {{ dialog.order?.buyerPlace }}
        </ElDescriptionsItem>
        <ElDescriptionsItem label="Poštansi broj">
          {{ dialog.order?.buyerZipCode }}
        </ElDescriptionsItem>
        <ElDescriptionsItem label="Država">
          {{ dialog.order?.buyerCountry }}
        </ElDescriptionsItem>
      </ElDescriptions>
    </ElRow>

    <ElRow justify="center">
      <ElDescriptions
        title="Prodavač"
        border
        style="min-width: 450px"
        :column="1"
        class="mt-24"
      >
        <ElDescriptionsItem label="Email">
          {{ dialog.order?.product.contactEmail }}
        </ElDescriptionsItem>
        <ElDescriptionsItem label="Telefon">
          {{ dialog.order?.product.contactNumber }}
        </ElDescriptionsItem>
        <ElDescriptionsItem label="Mjesto">
          {{ dialog.order?.product.locationPlace }}
        </ElDescriptionsItem>
        <ElDescriptionsItem label="Država">
          {{ dialog.order?.product.locationCountry }}
        </ElDescriptionsItem>
      </ElDescriptions>
    </ElRow>

    <ElRow justify="center" class="mt-24 mb-24">
      <ElDescriptions
        title="Narudžba"
        border
        style="min-width: 450px"
        :column="1"
      >
        <ElDescriptionsItem label="ID Narudžbe">
          {{ dialog.order?.id }}
        </ElDescriptionsItem>
        <ElDescriptionsItem label="Proizvod">
          {{ dialog.order?.product.name }}
        </ElDescriptionsItem>
        <ElDescriptionsItem label="Cijena po jedinici">
          {{ dialog.order?.product.price }} €
        </ElDescriptionsItem>
        <ElDescriptionsItem label="ID proizvoda">
          {{ dialog.order?.id }}
        </ElDescriptionsItem>
        <ElDescriptionsItem label="Način plaćanja">
          {{ dialog.order?.payment }}
        </ElDescriptionsItem>
        <ElDescriptionsItem label="Opis">
          {{ dialog.order?.description || '-' }}
        </ElDescriptionsItem>
        <ElDescriptionsItem label="Količina">
          {{ dialog.order?.quantity }}
        </ElDescriptionsItem>
        <ElDescriptionsItem label="Ukupna cijena">
          {{ dialog.order?.totalPrice }} €
        </ElDescriptionsItem>
        <ElDescriptionsItem label="Vrijeme narudžbe">
          {{ formatISOToDatetime(dialog.order?.createdAt) }}
        </ElDescriptionsItem>
      </ElDescriptions>
    </ElRow>
  </ElDialog>
</template>

<style lang="css" scoped></style>

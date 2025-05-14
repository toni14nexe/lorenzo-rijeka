<script setup lang="ts">
import type { Product } from '~/types/webshop'
import { ShoppingCart } from '@element-plus/icons-vue'
import type { FormInstance, FormRules } from 'element-plus'

interface RuleForm {
  productId: string
  quantity: number
  totalPrice: number
  buyerFullname: string
  buyerEmail: string
  buyerNumber: string
  buyerAddress: string
  buyerPlace: string
  buyerZipCode: string
  buyerCountry: string
  description: string
}

const { $axios } = useNuxtApp()
const route = useRoute()
const isLoading = ref(true)
const fullscreenLoading = ref(false)
const product = ref<Product>()
const ruleFormRef = ref<FormInstance>()
const form = reactive<RuleForm>({
  productId: '',
  quantity: 0,
  totalPrice: 0,
  buyerFullname: '',
  buyerEmail: '',
  buyerNumber: '',
  buyerAddress: '',
  buyerPlace: '',
  buyerZipCode: '',
  buyerCountry: '',
  description: ''
})
const rules = reactive<FormRules<RuleForm>>({
  quantity: [
    { required: true, message: 'Odaberite akciju', trigger: 'change' }
  ],
  buyerFullname: [
    { required: true, message: 'Unesite ime i prezime', trigger: 'change' },
    {
      validator: (_, value, callback) => {
        if (!validateFullname(value))
          callback(new Error('Ispravno unesite ime i prezime'))
        else callback()
      },
      trigger: 'change'
    }
  ],
  buyerEmail: [
    { required: true, message: 'Unesite email', trigger: 'change' },
    {
      validator: (_, value, callback) => {
        if (!validateEmail(value)) callback(new Error('Unesite ispravni email'))
        else callback()
      },
      trigger: 'change'
    }
  ],
  buyerAddress: [
    { required: true, message: 'Unesite adresu', trigger: 'change' },
    {
      validator: (_, value, callback) => {
        if (!validateAddress(value))
          callback(new Error('Unesite ispravnu adresu'))
        else callback()
      },
      trigger: 'change'
    }
  ],
  buyerPlace: [
    { required: true, message: 'Unesite mjesto', trigger: 'change' },
    { min: 3, message: 'Unesite ispravno mjesto', trigger: 'change' }
  ],
  buyerZipCode: [
    { required: true, message: 'Unesite poštanski broj', trigger: 'change' },
    {
      validator: (_, value, callback) => {
        if (!validateZipCode(value))
          callback(new Error('Unesite ispravni poštanski broj'))
        else callback()
      },
      trigger: 'change'
    }
  ],
  buyerCountry: [
    { required: true, message: 'Unesite naziv države', trigger: 'change' },
    {
      validator: (_, value, callback) => {
        if (!validateCountry(value))
          callback(new Error('Unesite ispravni naziv države'))
        else callback()
      },
      trigger: 'change'
    }
  ],
  description: [
    {
      max: 300,
      message: 'Maximalno 300 znakova',
      trigger: 'change'
    }
  ]
})

onMounted(() => getProduct())

async function getProduct() {
  isLoading.value = true
  try {
    const response = await $axios.get(`/product/${route.params.productId}`)
    product.value = response.data
    form.totalPrice = Number(product.value?.price)
    form.productId = String(product.value?.id)
  } catch (error) {
    console.error('API Error:', error)
  } finally {
    isLoading.value = false
  }
}

async function placeOrder(formEl: FormInstance | undefined) {
  if (!formEl) return
  await formEl.validate(async valid => {
    if (valid) {
      fullscreenLoading.value = true
      try {
        const response = await $axios.post('/order', form)
        navigateTo(`/webshop/${product.value?.id}/narudzba/${response.data.id}`)
      } catch (error) {
        console.error('API Error:', error)
        ElNotification({
          type: 'error',
          title: 'Greška prilikom kreiranja narudžbe',
          message:
            'Došlo je do greške prilikom kreiranja narudžbe. Molimo vas pokušajte kasnije.',
          duration: 5000
        })
      } finally {
        fullscreenLoading.value = false
      }
    }
  })
}
</script>

<template>
  <div class="page-container">
    <ElRow justify="center" align="middle">
      <h3 class="color-primary">Narudžba</h3>
    </ElRow>
    <template v-if="isLoading">
      <ElSkeleton animated>
        <template #template>
          <ElRow justify="center" align="middle" class="mb-24">
            <ElCard class="product-card">
              <ElRow
                align="middle"
                v-for="(_, index) in 5"
                style="width: 200px; height: 19px"
                :class="{ 'mb-12': index === 1 }"
              >
                <ElSkeletonItem variant="text" />
              </ElRow>
            </ElCard>
          </ElRow>
          <ElRow
            v-for="_ in 10"
            justify="center"
            align="middle"
            style="width: 100%; margin-bottom: 18px"
          >
            <ElSkeletonItem
              variant="text"
              style="width: 145px; height: 32px; margin-right: 7px"
            />
            <ElSkeletonItem variant="text" style="width: 204px; height: 32px" />
          </ElRow>
          <ElRow justify="center" align="middle" class="mb-24">
            <ElButton type="primary" plain size="large" disabled>
              <ElIcon :size="20" class="mr-8"><ShoppingCart /></ElIcon>
              Naruči
            </ElButton>
          </ElRow>
        </template>
      </ElSkeleton>
    </template>
    <ElEmpty
      v-else-if="!product"
      description="Ups! Ovdje nema dostupnog proizvoda..."
    />
    <template v-else>
      <ElRow justify="center" align="middle" class="mb-24">
        <ElCard class="product-card">
          <ElRow align="middle"> Proizvod: {{ product.name }} </ElRow>
          <ElRow align="middle" class="mb-12">
            Cijena: {{ Number(product.price).toFixed(2) }} €
          </ElRow>
          <ElRow align="middle">
            Lokacija:
            {{ `${product.locationPlace}, ${product.locationCountry}` }}
          </ElRow>
          <ElRow v-if="product.contactEmail" align="middle">
            Email:
            <a :href="`mailto:${product.contactEmail}`" class="ml-4">
              {{ product.contactEmail }}
            </a>
          </ElRow>
          <ElRow v-if="product.contactNumber" align="middle">
            Broj:
            {{ product.contactNumber }}
          </ElRow>
        </ElCard>
      </ElRow>
      <ElRow justify="center" align="middle">
        <ElForm
          :label-position="$viewport.isLessThan('tablet') ? 'top' : 'left'"
          require-asterisk-position="right"
          ref="ruleFormRef"
          :model="form"
          :rules="rules"
          label-width="auto"
          status-icon
        >
          <ElFormItem label="Odaberite količinu" prop="quantity">
            <ElInputNumber
              v-model="form.quantity"
              :min="1"
              :max="100"
              class="ml-4 w-200"
              @change="form.totalPrice = form.quantity * product.price"
            />
          </ElFormItem>
          <ElFormItem label="Ukupna cijena" prop="totalPrice">
            <b class="ml-4">{{ form.totalPrice.toFixed(2) }} €</b>
          </ElFormItem>
          <ElFormItem label="Ime i prezime" prop="buyerFullname">
            <ElInput
              v-model="form.buyerFullname"
              placeholder="Pero Perić"
              autocomplete="name"
            />
          </ElFormItem>
          <ElFormItem label="Email" prop="buyerEmail">
            <ElInput
              v-model="form.buyerEmail"
              placeholder="pero.peric@mail.com"
              autocomplete="email"
            />
          </ElFormItem>
          <ElFormItem label="Broj mobitela" prop="buyerNumber">
            <ElInput
              v-model="form.buyerNumber"
              placeholder="+385912345678"
              autocomplete="tel"
            />
          </ElFormItem>
          <ElFormItem label="Adresa" prop="buyerAddress">
            <ElInput
              v-model="form.buyerAddress"
              placeholder="Schulstraße 123A"
              autocomplete="street-address"
            />
          </ElFormItem>
          <ElFormItem label="Mjesto" prop="buyerPlace">
            <ElInput
              v-model="form.buyerPlace"
              placeholder="Stuttgart"
              autocomplete="address-level2"
            />
          </ElFormItem>
          <ElFormItem label="Poštanski broj" prop="buyerZipCode">
            <ElInput
              v-model="form.buyerZipCode"
              placeholder="70178"
              autocomplete="postal-code"
            />
          </ElFormItem>
          <ElFormItem label="Država" prop="buyerCountry">
            <ElInput
              v-model="form.buyerCountry"
              placeholder="Njemačka"
              autocomplete="country"
            />
          </ElFormItem>
          <ElFormItem label="Napomena" prop="description">
            <ElInput
              v-model="form.description"
              placeholder="Napomena..."
              type="textarea"
              autosize
              :rows="2"
            />
          </ElFormItem>
        </ElForm>
      </ElRow>
      <ElRow justify="center" align="middle" class="mb-24">
        <ElButton
          type="primary"
          plain
          size="large"
          :loading="isLoading"
          @click="placeOrder(ruleFormRef)"
          v-loading.fullscreen.lock="fullscreenLoading"
        >
          <ElIcon :size="20" class="mr-8"><ShoppingCart /></ElIcon>
          Naruči
        </ElButton>
      </ElRow>
    </template>
  </div>
</template>

<style lang="css" scoped>
.product-card {
  min-height: 147px;
  width: fit-content;
  height: fit-content;
  padding: 1rem 1rem;
}
.w-200 {
  width: 200px;
}
</style>

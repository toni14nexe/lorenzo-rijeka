<script setup lang="ts">
import { ShoppingCartFull } from '@element-plus/icons-vue'
import type { FormInstance, FormRules } from 'element-plus'
import { Back } from '@element-plus/icons-vue'

interface RuleForm {
  totalPrice: number
  buyerFullname: string
  buyerEmail: string
  buyerNumber: string
  buyerAddress: string
  buyerPlace: string
  buyerZipCode: string
  buyerCountry: string
  description: string
  shipping: string
  payment: string
}

type ShippingOption = {
  label: string
  price: number
}

const emits = defineEmits(['backStep'])

const { $axios } = useNuxtApp()
const fullscreenLoading = ref(false)
const ruleFormRef = ref<FormInstance>()
const shippingOptions = ref<ShippingOption[]>([
  { label: 'Osobno preuzimanje', price: 0 },
  { label: 'DPD paketomat', price: 3 },
  { label: 'DPD na adresu', price: 5 }
])
const shippingPrice = ref(0)
const form = reactive<RuleForm>({
  totalPrice: 0,
  buyerFullname: '',
  buyerEmail: '',
  buyerNumber: '',
  buyerAddress: '',
  buyerPlace: '',
  buyerZipCode: '',
  buyerCountry: '',
  description: '',
  shipping: '',
  payment: ''
})
const rules = reactive<FormRules<RuleForm>>({
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
  buyerNumber: [
    { required: true, message: 'Unesite mjesto', trigger: 'change' },
    {
      validator: (_, value, callback) => {
        if (!validateMobileNumber(value))
          callback(new Error('Unesite ispravni broj mobitela'))
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
  ],
  shipping: [
    { required: true, message: 'Odaberite način dostave', trigger: 'change' }
  ],
  payment: [
    { required: true, message: 'Odaberite način plaćanja', trigger: 'change' }
  ]
})

async function proceed(formEl: FormInstance | undefined) {
  if (!formEl) return
  await formEl.validate(async valid => {
    if (valid) {
      if (form.payment === 'Pouzećem') {
        placeCashOrder()
      } else {
        // TODO Go to Stripe payment
        console.log('Go to Stripe payment')
      }
    }
  })
}

function handleShippingChange(shippingOptions: ShippingOption) {
  form.payment = ''
  shippingPrice.value = shippingOptions.price
}

async function placeCashOrder() {
  fullscreenLoading.value = true
  const cartList = getCartItems()
  try {
    const response = await $axios.post('/order', {
      ...form,
      list: cartList,
      totalPrice: Number((getCartTotal() + shippingPrice.value).toFixed(2)),
      shippingPrice: shippingPrice.value
    })

    clearCart()
    navigateTo(`/narudzba/${response.data.id}`)
    ElNotification({
      type: 'success',
      message: 'Uspješno smo zaprimili vašu narudžbu!',
      duration: 10000
    })
  } catch (error) {
    console.error('API Error:', error)
  } finally {
    fullscreenLoading.value = false
  }
}
</script>

<template>
  <div class="page-container">
    <ElRow align="middle" justify="center">
      <h3 class="color-primary">Narudžba</h3>
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
        <ElFormItem label="Ime i prezime" prop="buyerFullname">
          <ElInput
            v-model="form.buyerFullname"
            placeholder="Pero Perić"
            autocomplete="name"
            class="maxw-300"
          />
        </ElFormItem>
        <ElFormItem label="Email" prop="buyerEmail">
          <ElInput
            v-model="form.buyerEmail"
            placeholder="pero.peric@mail.com"
            autocomplete="email"
            class="maxw-300"
          />
        </ElFormItem>
        <ElFormItem label="Broj mobitela" prop="buyerNumber">
          <ElInput
            v-model="form.buyerNumber"
            placeholder="+385912345678"
            autocomplete="tel"
            class="maxw-300"
          />
        </ElFormItem>
        <ElFormItem label="Adresa" prop="buyerAddress">
          <ElInput
            v-model="form.buyerAddress"
            placeholder="Trg Josipa bana Jelačića 123AB"
            autocomplete="street-address"
            class="maxw-300"
          />
        </ElFormItem>
        <ElFormItem label="Mjesto" prop="buyerPlace">
          <ElInput
            v-model="form.buyerPlace"
            placeholder="Zagreb"
            autocomplete="address-level2"
            class="maxw-300"
          />
        </ElFormItem>
        <ElFormItem label="Poštanski broj" prop="buyerZipCode">
          <ElInput
            v-model="form.buyerZipCode"
            placeholder="10000"
            autocomplete="postal-code"
            class="maxw-300"
          />
        </ElFormItem>
        <ElFormItem label="Država" prop="buyerCountry">
          <ElInput
            v-model="form.buyerCountry"
            placeholder="Hrvatska"
            autocomplete="country"
            class="maxw-300"
          />
        </ElFormItem>
        <ElFormItem label="Napomena" prop="description">
          <ElInput
            v-model="form.description"
            placeholder="Napomena..."
            type="textarea"
            autosize
            :rows="2"
            class="maxw-300"
          />
        </ElFormItem>

        <ElDivider />

        <ElFormItem
          label="Dostava"
          prop="shipping"
          class="mt-16"
          style="width: 200px"
        >
          <ElRadioGroup v-model="form.shipping" class="maxw-100">
            <!-- TODO dostave koje pružaju dodati -->
            <ElRadio
              v-for="option in shippingOptions"
              :value="option.label"
              size="large"
              @change="handleShippingChange(option)"
              >{{
                `${option.label}${option.price ? ' - ' + option.price.toFixed(2) : ''}`
              }}</ElRadio
            >
          </ElRadioGroup>
        </ElFormItem>

        <ElDivider />

        <ElFormItem label="Plaćanje" prop="payment" class="mt-16">
          <ElRadioGroup v-model="form.payment" class="maxw-100">
            <!-- TODO plaćanja koja pružaju dodati -->
            <ElRadio
              v-if="form.shipping === 'Osobno preuzimanje'"
              value="Pouzećem"
              size="large"
              >Pouzećem</ElRadio
            >
            <ElRadio value="Karticom jednokratno" size="large"
              >Karticom - jednokratno</ElRadio
            >
          </ElRadioGroup>
        </ElFormItem>

        <ElDivider />

        <ElFormItem label="Ukupna cijena" prop="totalPrice" class="mt-16">
          <b class="ml-4"
            >{{ getCartTotal().toFixed(2) }}
            {{
              shippingPrice ? ` + Dostava ${shippingPrice.toFixed(2)}` : ''
            }}</b
          >
        </ElFormItem>

        <ElDivider />
      </ElForm>
    </ElRow>

    <ElRow justify="center" align="middle" class="mt-24">
      <ElButton type="danger" plain size="large" @click="emits('backStep')">
        <ElIcon :size="20" class="mr-8"><Back /></ElIcon>
        Natrag
      </ElButton>
      <ElButton
        type="primary"
        plain
        size="large"
        @click="proceed(ruleFormRef)"
        v-loading.fullscreen.lock="fullscreenLoading"
      >
        <ElIcon :size="20" class="mr-8"><ShoppingCartFull /></ElIcon>
        Naruči
      </ElButton>
    </ElRow>
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
.maxw-100 {
  max-width: 100px;
}
.maxw-300 {
  max-width: 300px;
}
</style>

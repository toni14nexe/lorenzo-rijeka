<script setup lang="ts">
const emits = defineEmits(['nextStep'])
const cart = ref(getCartItems())
const cartStore = useCartStore()
const { cartChangeState } = storeToRefs(cartStore)

function handleQuantityChange(product: CartItem) {
  cart.value = updateQuantity(product.id, Number(product.quantity))
}

function handleNextStep() {
  cart.value = cart.value.filter(p => p.quantity > 0)
  localStorage.setItem('cart', JSON.stringify(cart.value))

  emits('nextStep')
}
</script>

<template>
  <ElRow align="middle" justify="center">
    <h3 class="color-primary">Košarica</h3>
  </ElRow>

  <ElEmpty v-if="!getCartTotal()" description="Košarica je prazna" />

  <template v-else>
    <ElRow justify="center" align="middle" class="mb-16">
      <ElCol :xs="0" :sm="4" />
      <ElCol :xs="10" :sm="8">
        <p>NAZIV</p>
      </ElCol>
      <ElCol :xs="5" :sm="4">
        <p>CIJENA</p>
      </ElCol>
      <ElCol :xs="4" :sm="4">
        <p>{{ $viewport.isGreaterOrEquals('tablet') ? 'KOLIČINA' : 'KOL' }}</p>
      </ElCol>
      <ElCol :xs="5" :sm="4">
        <p>UKUPNO</p>
      </ElCol>
    </ElRow>
    <ElDivider />

    <ElRow v-for="product in cart" justify="center" align="middle">
      <ElCol
        v-if="$viewport.isGreaterOrEquals('tablet')"
        :xs="0"
        :sm="4"
        align="middle"
      >
        <img v-if="product?.image" :src="product.image" class="cart-image" />
        <ElEmpty v-else class="cart-image" description="Nema slike" />
      </ElCol>
      <ElCol :xs="10" :sm="8">
        <p>{{ product.name }}</p>
      </ElCol>
      <ElCol :xs="5" :sm="4">
        <p>{{ `${product.price.toFixed(2)}` }}</p>
      </ElCol>
      <ElCol :xs="4" :sm="4">
        <ElInput
          v-model="product.quantity"
          type="number"
          :min="0"
          @change="handleQuantityChange(product)"
          @input="handleQuantityChange(product)"
          size="small"
          :style="`width: ${$viewport.isGreaterOrEquals('tablet') ? '60px' : '43px'};`"
        />
      </ElCol>
      <ElCol :xs="5" :sm="4">
        <p>{{ `${product.totalPrice.toFixed(2)}` }}</p>
      </ElCol>
      <ElDivider />
    </ElRow>

    <ElRow justify="center" align="middle" class="mt-16">
      <ElCol
        :xs="5"
        :sm="4"
        :offset="$viewport.isGreaterOrEquals('tablet') ? 20 : 19"
      >
        <p :key="cartChangeState">{{ `${getCartTotal().toFixed(2)}` }}</p>
      </ElCol>
    </ElRow>

    <ElRow justify="center" align="middle" class="mt-8">
      <ElButton type="primary" @click="handleNextStep" plain>Nastavi </ElButton>
    </ElRow>
  </template>
</template>

<style scoped>
.cart-image {
  width: 96px;
  height: 96px;
}

@media (max-width: 767px) {
  p {
    font-size: small;
  }
}

@media (max-width: 350px) {
  p {
    font-size: x-small;
  }
}
</style>

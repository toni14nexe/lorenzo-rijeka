<script setup lang="ts">
import { PriceTag } from '@element-plus/icons-vue'

defineProps(['product'])
</script>

<template>
  <div
    v-if="product"
    class="product cursor-pointer"
    :style="`--product-bg: url(${product.images.length ? product.images[0] : ''})`"
  >
    <NuxtLink :to="`/webshop/${product.id}`">
      <div class="product-opacity-container" />
      <div class="product-text-container">
        <h3>{{ truncateText(product.name, 105) }}</h3>
        <ElRow class="datetime mb-16" align="middle">
          <ElIcon :size="18" class="mr-8">
            <PriceTag />
          </ElIcon>
          {{ Number(product.price).toFixed(2) }} €
        </ElRow>
      </div>
    </NuxtLink>
  </div>
  <ElEmpty v-else class="product" description="Trenutno nedostupno!" />
</template>

<style lang="css" scoped>
.product {
  position: relative;
  border: 1px solid var(--el-border-color);
  height: 100%;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: var(--el-box-shadow-light);
}
.product::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: var(--product-bg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition: transform 0.4s ease;
  z-index: 0;
  will-change: transform;
}
.product:hover::before {
  transform: scale(1.1);
}
.product-opacity-container {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: black;
  opacity: 0.3333;
  transition: opacity 0.3s ease-in-out;
  z-index: 1;
}
.product:hover .product-opacity-container {
  opacity: 0.75;
}
.product-text-container {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: white;
  text-align: center;
  padding: 16px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
}
.datetime {
  font-weight: 400;
}
@media screen and (max-width: 1025px) {
  h3 {
    font-size: medium;
  }
  .datetime {
    font-size: small;
  }
}
</style>

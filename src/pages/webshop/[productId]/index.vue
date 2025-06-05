<script setup lang="ts">
import { useRoute, useRuntimeConfig, useHead } from '#imports'
import ProductPage from '~/components/webshop/ProductPage.vue'
import { stripHtml } from 'string-strip-html'
import { decode } from 'html-entities'
import type { Product } from '~/types/webshop'

const config = useRuntimeConfig()
const route = useRoute()
const productId = route.params.productId as string
const baseUrl = config.public.appBaseUrl.replace(/\/$/, '')

const { data: product, pending: isLoading } = await useAsyncData<Product>(
  `product-${productId}`,
  () => $fetch(`${config.public.axiosApiBaseUrl}/product/${productId}`)
)

if (product.value) {
  let descriptionRaw = stripHtml((product.value.description as string) || '').result

  // Zamjena non-breaking spaces i višestrukih razmaka
  descriptionRaw = descriptionRaw
    .replace(/&nbsp;|\u00A0/g, ' ')
    .replace(/\s+/g, ' ')

  const description = decode(descriptionRaw).trim().slice(0, 160)

  const image =
    (product.value.images?.[0] as string) ||
    'https://res.cloudinary.com/dhaa1aobr/image/upload/v1747342580/favicon-180x180_we2zi4.png'
  const url = `${baseUrl}${route.fullPath}`

  useHead({
    title: product.value.name as string,
    meta: [
      {
        name: 'description',
        content: description
      },
      {
        property: 'og:title',
        content: product.value.name as string
      },
      {
        property: 'og:description',
        content: description
      },
      {
        property: 'og:image',
        content: image
      },
      {
        property: 'og:url',
        content: url
      },
      {
        property: 'og:type',
        content: 'article'
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        name: 'twitter:title',
        content: product.value.name as string
      },
      {
        name: 'twitter:description',
        content: description
      },
      {
        name: 'twitter:image',
        content: image
      }
    ]
  })
}
</script>

<template>
  <ProductPage :product="product" :is-loading="isLoading" />
</template>

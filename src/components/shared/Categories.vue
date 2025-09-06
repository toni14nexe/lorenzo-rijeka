<script setup lang="ts">
import CategoryWidget from '~/components/shared/CategoryWidget.vue'

const { $viewport } = useNuxtApp()
const categoryStore = useCategoriesStore()
const { categoriesLoading, webshopCategories } = storeToRefs(categoryStore)
</script>

<template>
  <div class="page-container">
    <template v-if="categoriesLoading">
      <ElRow justify="center">
        <h3>KATEGORIJE</h3>
      </ElRow>
      <ElRow :gutter="12" class="mb-24">
        <ElCol
          v-for="(_, index) in 3"
          :xs="12"
          :sm="8"
          :class="{
            'mt-12':
              (index > 1 && $viewport.isLessThan('tablet')) ||
              (index > 2 && $viewport.isGreaterOrEquals('tablet'))
          }"
        >
          <ElSkeletonItem variant="image" class="skeleton-image" />
        </ElCol>
      </ElRow>
    </template>

    <template v-else-if="!webshopCategories.length">
      <ElRow justify="center">
        <h3>KATEGORIJE</h3>
      </ElRow>
      <ElEmpty description="Ups! Ovdje nema dostupnih kategorija..." />
    </template>

    <template v-else>
      <ElRow justify="center">
        <h3>KATEGORIJE</h3>
      </ElRow>
      <ElRow :gutter="12" class="mb-24" justify="center">
        <ElCol
          v-for="(category, index) in webshopCategories"
          :xs="12"
          :sm="8"
          :class="{
            'mt-12':
              (index > 1 && $viewport.isLessThan('tablet')) ||
              (index > 2 && $viewport.isGreaterOrEquals('tablet'))
          }"
        >
          <CategoryWidget :category="category" />
        </ElCol>
      </ElRow>
    </template>
  </div>
</template>

<style lang="css" scoped>
.skeleton-image {
  height: 30dvh;
  border-radius: 4px;
}
</style>

import { defineStore } from 'pinia'
import type { ProductCategory } from '~/types/webshop'

export const useCategoriesStore = defineStore('categories', {
  state: () => ({
    categoriesLoading: true,
    webshopCategories: <ProductCategory[]>[]
  }),
  actions: {
    async getCategories() {
      this.categoriesLoading = true
      try {
        const response = await useNuxtApp().$axios.get(`/categories`)
        this.webshopCategories = response.data
      } catch (error) {
        console.error('API Error:', error)
      } finally {
        this.categoriesLoading = false
      }
    }
  }
})

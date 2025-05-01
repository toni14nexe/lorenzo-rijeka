import { defineStore } from 'pinia'
import type { PortalCategory } from '~/types/portal'

export const useCategoriesStore = defineStore('categories', {
  state: () => ({
    portalCategoriesLoading: true,
    portalCategories: <PortalCategory[]>[]
  }),
  actions: {
    async getPortalCategories() {
      this.portalCategoriesLoading = true
      try {
        const response = await useNuxtApp().$axios.get(`/portal-category`)
        this.portalCategories = response.data
      } catch (error) {
        console.error('API Error:', error)
      } finally {
        this.portalCategoriesLoading = false
      }
    }
  }
})

import { defineStore } from 'pinia'
import type { JobsCategory } from '~/types/jobs'
import type { PortalCategory } from '~/types/portal'
import type { ProductCategory } from '~/types/webshop'

export const useCategoriesStore = defineStore('categories', {
  state: () => ({
    categoriesLoading: true,
    portalCategories: <PortalCategory[]>[],
    jobsCategories: <JobsCategory[]>[],
    webshopCategories: <ProductCategory[]>[]
  }),
  actions: {
    async getPortalCategories() {
      this.categoriesLoading = true
      try {
        const response = await useNuxtApp().$axios.get(`/categories`)
        this.portalCategories = response.data.portal
        this.jobsCategories = response.data.jobs
        this.webshopCategories = response.data.webshop
      } catch (error) {
        console.error('API Error:', error)
      } finally {
        this.categoriesLoading = false
      }
    }
  }
})

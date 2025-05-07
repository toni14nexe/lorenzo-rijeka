import { useCookie } from '#app'
import { defineStore } from 'pinia'
import type { DashboardSideAds, Ad, AdSettings } from '~/types/ad'

type AdDetailsResponse = {
  adSettings: AdSettings[]
  ads: Ad[]
}

export const useAdStore = defineStore('ad', {
  state: () => ({
    adsLoading: true,
    adSettings:
      useCookie<AdSettings[]>('adSettings').value || <AdSettings[] | null>null,
    dashboardSide:
      useCookie<DashboardSideAds>('dashboardSide').value ||
      <DashboardSideAds | null>null,
    footerSlider: useCookie<Ad[]>('footerSlider').value || <Ad[] | null>null,
    footerLarge: useCookie<Ad>('footerLarge').value || <Ad | null>null
  }),
  actions: {
    async getAdDetails() {
      if (
        !this.dashboardSide ||
        !this.footerSlider ||
        !this.adSettings ||
        !this.footerLarge
      ) {
        this.adsLoading = true
        try {
          const response = await useNuxtApp().$axios.get(`/ad`)

          // Set adSettings
          this.adSettings = response.data.adSettings
          const cookie = useCookie<AdSettings[]>('adSettings', {
            maxAge: 600
          }) // 10 minutes
          cookie.value = this.adSettings

          // Set ads
          if (this.adSettings[0].show) this.setDashboardSide(response.data)
          if (this.adSettings[1].show) this.setFooterSlider(response.data)
          if (this.adSettings[2].show) this.setFooterLarge(response.data)
        } catch (error) {
          console.error('API Error:', error)
        } finally {
          this.adsLoading = false
        }
      } else this.adsLoading = false
    },

    setDashboardSide(data: AdDetailsResponse) {
      this.dashboardSide = {
        left: data.ads[0],
        right: data.ads[1]
      }
      const cookie = useCookie<DashboardSideAds>('dashboardSide', {
        maxAge: 600
      }) // 10 minutes
      cookie.value = this.dashboardSide
    },

    setFooterSlider(data: AdDetailsResponse) {
      this.footerSlider = [data.ads[2], data.ads[3], data.ads[4], data.ads[5]]
      const cookie = useCookie<Ad[]>('footerSlider', { maxAge: 600 }) // 10 minutes
      cookie.value = this.footerSlider
    },

    setFooterLarge(data: AdDetailsResponse) {
      this.footerLarge = data.ads[6]
      const cookie = useCookie<Ad>('footerLarge', { maxAge: 600 }) // 10 minutes
      cookie.value = this.footerLarge
    }
  }
})

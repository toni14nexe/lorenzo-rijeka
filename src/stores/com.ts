import { defineStore } from 'pinia'
import type { DashboardSideAds, Ad, AdSettings } from '~/types/ad'

type AdDetailsResponse = {
  adSettings: AdSettings[]
  ads: Ad[]
}

export const useComStore = defineStore('com', {
  state: () => ({
    comsLoading: true,
    comSettings: getLocalItem<AdSettings[]>('comSettings') || null,
    dashboardSide: getLocalItem<DashboardSideAds>('dashboardSide') || null,
    footerSlider: getLocalItem<Ad[]>('footerSlider') || null,
    footerLarge: getLocalItem<Ad>('footerLarge') || null
  }),
  actions: {
    async setComDetails() {
      this.comsLoading = true
      this.comSettings = getLocalItem('comSettings')
      this.dashboardSide = getLocalItem('dashboardSide')
      this.footerSlider = getLocalItem('footerSlider')
      this.footerLarge = getLocalItem('footerLarge')

      if (
        !this.comSettings ||
        (this.comSettings[0]?.show && !this.dashboardSide) ||
        (this.comSettings[1]?.show && !this.footerSlider) ||
        (this.comSettings[2]?.show && !this.footerLarge)
      ) {
        try {
          const response = await useNuxtApp().$axios.get(`/ad`)

          this.comSettings = response.data.adSettings
          setLocalItem('comSettings', this.comSettings, 600_000) // 10 min

          // @ts-expect-error
          if (this.comSettings[0].show) this.setDashboardSide(response.data)
          // @ts-expect-error
          if (this.comSettings[1].show) this.setFooterSlider(response.data)
          // @ts-expect-error
          if (this.comSettings[2].show) this.setFooterLarge(response.data)
        } catch (error) {
          console.error('API Error:', error)
        } finally {
          this.comsLoading = false
        }
      } else {
        this.comsLoading = false
      }
    },

    setDashboardSide(data: AdDetailsResponse) {
      this.dashboardSide = {
        left: data.ads[0],
        right: data.ads[1]
      }
      setLocalItem('dashboardSide', this.dashboardSide, 600_000) // 10 min
    },

    setFooterSlider(data: AdDetailsResponse) {
      this.footerSlider = [data.ads[2], data.ads[3], data.ads[4], data.ads[5]]
      setLocalItem('footerSlider', this.footerSlider, 600_000) // 10 min
    },

    setFooterLarge(data: AdDetailsResponse) {
      this.footerLarge = data.ads[6]
      setLocalItem('footerLarge', this.footerLarge, 600_000) // 10 min
    }
  }
})

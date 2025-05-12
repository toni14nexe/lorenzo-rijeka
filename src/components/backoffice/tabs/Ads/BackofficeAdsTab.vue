<script setup lang="ts">
import BackofficeAdsGeneralSettings from '~/components/backoffice/tabs/Ads/BackofficeAdsGeneralSettings.vue'
import BackofficeAdsSettings from '~/components/backoffice/tabs/Ads/BackofficeAdsSettings.vue'
import type { AdSettings, Ad } from '~/types/ad'

const { $axios } = useNuxtApp()
const isLoading = ref(true)
const adSettings = ref<AdSettings>()
const ads = ref<Ad[]>()

onMounted(() => getAdDetails())

async function getAdDetails() {
  isLoading.value = true
  try {
    const response = await $axios.get(`/ad`)
    adSettings.value = response.data.adSettings
    ads.value = response.data.ads
  } catch (error) {
    console.error('API Error:', error)
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <div class="backoffice-page">
    <ElRow justify="center" align="middle" class="w-100">
      <h3 class="color-primary">Reklame</h3>
    </ElRow>

    <div
      v-if="isLoading"
      v-loading.fullscreen.lock="true"
      element-loading-text="Učitavanje..."
    />

    <template v-else>
      <BackofficeAdsGeneralSettings
        :ad-settings="adSettings as AdSettings"
        @save="getAdDetails"
      />
      <BackofficeAdsSettings :ads="ads as Ad[]" @save="getAdDetails" />

      <ElRow justify="center" align="middle" class="mt-24">
        <img
          src="https://res.cloudinary.com/dtp08anpy/image/upload/v1747073768/1_rqrx5b_obajrn.png"
          style="width: 60dvw"
        />
      </ElRow>
      <ElRow justify="center" align="middle" class="mt-24">
        <img
          src="https://res.cloudinary.com/dtp08anpy/image/upload/v1747073768/2_o3xcor_euc3om.png"
          style="width: 60dvw"
        />
      </ElRow>
    </template>
  </div>
</template>

<style lang="css" scoped></style>

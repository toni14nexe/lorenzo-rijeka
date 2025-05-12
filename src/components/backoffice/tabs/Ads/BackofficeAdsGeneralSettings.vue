<script setup lang="ts">
import type { AdSettings } from '~/types/ad'

interface Props {
  adSettings: AdSettings
}
interface Emits {
  (e: 'save'): void
}
const props = defineProps<Props>()
const emit = defineEmits<Emits>()

const { $axios } = useNuxtApp()
const settings = ref({
  'dashboard-side': false,
  'footer-slider': false,
  'footer-large': false
})
const isButtonDisabled = ref(true)
const buttonLoading = ref(false)

onMounted(() => setAdSettings())

function setAdSettings() {
  // @ts-expect-error
  settings.value['dashboard-side'] = props.adSettings[0].show
  // @ts-expect-error
  settings.value['footer-slider'] = props.adSettings[1].show
  // @ts-expect-error
  settings.value['footer-large'] = props.adSettings[2].show
}

async function saveSettings() {
  buttonLoading.value = true
  try {
    await $axios.put(`/ad/settings`, settings.value)
    emit('save')
    ElNotification({
      type: 'success',
      message: 'Uspješno ste spremili promijene postavki reklama.',
      duration: 3000
    })
  } catch (error) {
    console.error('API Error:', error)
  } finally {
    buttonLoading.value = false
  }
}
</script>

<template>
  <div class="backoffice-page">
    <ElRow justify="center" align="middle">
      <span class="color-primary"><b>Općenite postavke</b></span>
    </ElRow>

    <ElRow justify="center" align="middle">
      <span class="switch-label">Naslovnica bočni</span>
      <ElSwitch
        v-model="settings['dashboard-side']"
        active-text="Prikaži"
        inactive-text="Sakrij"
        @change="isButtonDisabled = false"
      />
    </ElRow>

    <ElRow justify="center" align="middle">
      <span class="switch-label">Klizno podnožje</span>
      <ElSwitch
        v-model="settings['footer-slider']"
        active-text="Prikaži"
        inactive-text="Sakrij"
        @change="isButtonDisabled = false"
      />
    </ElRow>

    <ElRow justify="center" align="middle">
      <span class="switch-label">Podnožje velika</span>
      <ElSwitch
        v-model="settings['footer-large']"
        active-text="Prikaži"
        inactive-text="Sakrij"
        @change="isButtonDisabled = false"
      />
    </ElRow>

    <ElRow justify="center" align="middle">
      <ElButton
        type="primary"
        :disabled="isButtonDisabled"
        :loading="buttonLoading"
        @click="saveSettings"
      >
        Spremi
      </ElButton>
    </ElRow>
  </div>
</template>

<style lang="css" scoped>
.switch-label {
  width: 160px;
}
</style>

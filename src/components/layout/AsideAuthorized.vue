<script setup lang="ts">
import { DArrowRight, HomeFilled, Loading } from '@element-plus/icons-vue'
import FarmingIcon from '~/assets/icons/farming.vue'
import CattleBreedingIcon from '~/assets/icons/cattle-breeding.vue'
import FruitFarmingIcon from '~/assets/icons/fruit-farming.vue'
import VegetableGrowingIcon from '~/assets/icons/vegetable-growing.vue'
import ViticultureIcon from '~/assets/icons/viticulture.vue'
import BeekeepingIcon from '~/assets/icons/beekeeping.vue'
import OliveGrowingIcon from '~/assets/icons/olive-growing.vue'
import TradeAndServicesIcon from '~/assets/icons/trade-and-services.vue'
import ConsultingServicesIcon from '~/assets/icons/consulting-services.vue'
import EducationalServicesIcon from '~/assets/icons/educational-services.vue'
import AlcoholicBeveragesIcon from '~/assets/icons/alcoholic-beverages.vue'
import MedicinalPlantsIcon from '~/assets/icons/medicinal-plants.vue'
import SeedProductionIcon from '~/assets/icons/seed-production.vue'
import NurseryIcon from '~/assets/icons/nursery.vue'
import EarthIcon from '~/assets/icons/earth.vue'
import PdfIcon from '~/assets/icons/pdf.vue'

const userStore = useUserStore()
const { validLandsRoute } = storeToRefs(userStore)
const drawerOpened = ref(false)
const cookieActivities = useCookie('activities')
const loadingActivities = ref(true)
const activities = ref()
const route = useRoute()

onMounted(() => {
  activities.value = getMappedActivities(cookieActivities.value)
  loadingActivities.value = false
})
</script>

<template>
  <div class="aside" v-motion-slide-left :duration="1000">
    <div class="aside-scrollbar">
      <ElLink
        class="aside-option drawer-btn"
        @click="drawerOpened = !drawerOpened"
      >
        <ElIcon size="24" color="white"><DArrowRight /></ElIcon>
      </ElLink>
      <div class="aside-option">
        <NuxtLink
          to="/dashboard"
          @click="drawerOpened = false"
          class="nuxt-link"
          :class="{ 'active-tab': route.name === 'dashboard' }"
        >
          <ElIcon size="24" color="white"><HomeFilled /></ElIcon>
        </NuxtLink>
      </div>

      <ClientOnly>
        <div class="aside-option">
          <NuxtLink
            v-if="validLandsRoute"
            to="/lands"
            @click="drawerOpened = false"
            class="nuxt-link"
            :class="{ 'active-tab': route.name === 'lands' }"
          >
            <ElIcon size="24" color="white"><EarthIcon /></ElIcon>
          </NuxtLink>
        </div>
      </ClientOnly>
      <div class="aside-option">
        <NuxtLink
          to="/export"
          class="nuxt-link"
          @click="drawerOpened = false"
          :class="{ 'active-tab': route.name === 'export' }"
        >
          <ElIcon size="24" color="white"><PdfIcon /></ElIcon>
        </NuxtLink>
      </div>
      <div v-if="loadingActivities" class="aside-option loading-wrapper">
        <ElIcon size="24" color="white" class="loading-icon"
          ><Loading
        /></ElIcon>
      </div>
      <div v-else v-for="option in activities" class="aside-option">
        <NuxtLink
          class="nuxt-link"
          :to="`/${option.value}`"
          @click="drawerOpened = false"
          :class="{ 'active-tab': route.name === option.value }"
        >
          <ElIcon size="24" color="white">
            <FarmingIcon v-if="option.value === 'farming'" />
            <CattleBreedingIcon
              v-else-if="option.value === 'cattle-breeding'"
            />
            <FruitFarmingIcon v-else-if="option.value === 'fruit-farming'" />
            <VegetableGrowingIcon
              v-else-if="option.value === 'vegetable-growing'"
            />
            <ViticultureIcon v-else-if="option.value === 'viticulture'" />
            <BeekeepingIcon v-else-if="option.value === 'beekeeping'" />
            <OliveGrowingIcon v-else-if="option.value === 'olive-growing'" />
            <TradeAndServicesIcon
              v-else-if="option.value === 'trade-and-services'"
            />
            <ConsultingServicesIcon
              v-else-if="option.value === 'consulting-services'"
            />
            <EducationalServicesIcon
              v-else-if="option.value === 'educational-services'"
            />
            <AlcoholicBeveragesIcon
              v-else-if="option.value === 'alcoholic-beverages'"
            />
            <MedicinalPlantsIcon
              v-else-if="option.value === 'medicinal-plants'"
            />
            <SeedProductionIcon
              v-else-if="option.value === 'seed-production'"
            />
            <NurseryIcon v-else-if="option.value === 'nursery'" />
          </ElIcon>
        </NuxtLink>
      </div>
    </div>
  </div>

  <ElDrawer v-model="drawerOpened" direction="ltr">
    <template #default>
      <ElScrollbar :always="true">
        <NuxtLink
          to="/dashboard"
          class="drawer-option"
          @click="drawerOpened = false"
          :class="{ 'active-tab': route.name === 'dashboard' }"
        >
          <ElIcon size="24" color="white"><HomeFilled /></ElIcon>
          <span class="drawer-option-text">Početna</span>
        </NuxtLink>
        <NuxtLink
          v-if="validLandsRoute"
          to="/lands"
          class="drawer-option"
          @click="drawerOpened = false"
          :class="{ 'active-tab': route.name === 'lands' }"
        >
          <ElIcon size="24" color="white"><EarthIcon /></ElIcon>
          <span class="drawer-option-text">Zemljišta</span>
        </NuxtLink>
        <NuxtLink
          to="/export"
          class="drawer-option"
          @click="drawerOpened = false"
          :class="{ 'active-tab': route.name === 'export' }"
        >
          <ElIcon size="24" color="white"><PdfIcon /></ElIcon>
          <span class="drawer-option-text">Izvoz podataka</span>
        </NuxtLink>
        <NuxtLink
          v-for="option in activities"
          class="drawer-option"
          :to="`/${option.value}`"
          @click="drawerOpened = false"
          :class="{ 'active-tab': route.name === option.value }"
        >
          <ElIcon size="24" color="white">
            <FarmingIcon v-if="option.value === 'farming'" />
            <CattleBreedingIcon
              v-else-if="option.value === 'cattle-breeding'"
            />
            <FruitFarmingIcon v-else-if="option.value === 'fruit-farming'" />
            <VegetableGrowingIcon
              v-else-if="option.value === 'vegetable-growing'"
            />
            <ViticultureIcon v-else-if="option.value === 'viticulture'" />
            <BeekeepingIcon v-else-if="option.value === 'beekeeping'" />
            <OliveGrowingIcon v-else-if="option.value === 'olive-growing'" />
            <TradeAndServicesIcon
              v-else-if="option.value === 'trade-and-services'"
            />
            <ConsultingServicesIcon
              v-else-if="option.value === 'consulting-services'"
            />
            <EducationalServicesIcon
              v-else-if="option.value === 'educational-services'"
            />
            <AlcoholicBeveragesIcon
              v-else-if="option.value === 'alcoholic-beverages'"
            />
            <MedicinalPlantsIcon
              v-else-if="option.value === 'medicinal-plants'"
            />
            <SeedProductionIcon
              v-else-if="option.value === 'seed-production'"
            />
            <NurseryIcon v-else-if="option.value === 'nursery'" />
          </ElIcon>
          <span class="drawer-option-text">{{ option.label }}</span>
        </NuxtLink>
      </ElScrollbar>
    </template>
  </ElDrawer>
</template>

<style scoped>
.aside {
  background-color: var(--el-color-primary);
  border-right: 2px solid var(--el-color-primary-light-5);
}

.aside-scrollbar {
  height: calc(100vh - 94px);
  max-height: calc(100vh - 94px);
  overflow-y: auto;
  padding-bottom: 4px;
}

.aside-scrollbar::-webkit-scrollbar {
  width: 8px;
}
.aside-scrollbar::-webkit-scrollbar-track {
  border-radius: 4px;
}
.aside-scrollbar::-webkit-scrollbar-thumb {
  background-color: var(--el-color-primary-light-5);
  border-radius: 4px;
}
.aside-scrollbar::-webkit-scrollbar-thumb:hover {
  background-color: var(--el-color-primary-light-3);
}

.drawer-btn {
  padding: 8px 0;
}

.nuxt-link {
  width: 100%;
  z-index: 1;
  padding: 8px 0;
  display: flex;
  align-content: center;
  justify-content: center;
}

.active-tab {
  cursor: initial !important;
  background-color: var(--el-color-primary-light-3) !important;
}

.aside-option,
.drawer-option {
  border: 1px solid var(--el-color-primary-light-3);
  margin: 8px 8px 4px 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
}
.drawer-option {
  padding: 8px 0;
}
.aside-option:hover,
.aside-option:focus,
.drawer-option:hover,
.drawer-option:focus {
  cursor: pointer;
  background-color: var(--el-color-primary-light-3);
}
.aside-option:last-child,
.drawer-option:last-child {
  margin-bottom: 8px;
}
.aside-option:hover,
.drawer-option:hover {
  cursor: pointer;
  background-color: var(--el-color-primary-light-3);
}

a {
  text-decoration: none;
}

.drawer-option {
  background-color: var(--el-color-primary);
  color: white;
  justify-content: flex-start;
  padding-inline: 16px;
  margin-right: 16px;
}

.drawer-option-text {
  margin-left: 16px;
}

.loading-wrapper {
  height: 22px;
  padding: 8px 0;
}

.loading-icon {
  animation: rotate-circle 2s linear infinite;
  cursor: auto;
}

@keyframes rotate-circle {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>

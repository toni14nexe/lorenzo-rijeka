<script setup lang="ts">
import { useUserStore } from '~/stores/user'
import { HomeFilled } from '@element-plus/icons-vue'
import SettingsIcon from '~/assets/icons/settings.vue'
import LogoutIcon from '~/assets/icons/logout.vue'
import LogoIcon from '~/assets/icons/logo.vue'
import MessageIcon from '~/assets/icons/message.vue'
import HamburgerIcon from '~/assets/icons/hamburger.vue'
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

const { $viewport } = useNuxtApp()
const drawerOpened = ref(false)
const userStore = useUserStore()
const { validLandsRoute } = storeToRefs(userStore)
const cookieActivities = useCookie('activities')
const activities = ref()
const route = useRoute()

onMounted(() => {
  activities.value = getMappedActivities(cookieActivities.value)
})

function logout() {
  userStore.logout()
}
</script>

<template>
  <ElRow
    justify="space-between"
    align="middle"
    class="header-row"
    :class="{ 'mx-24': $viewport.isGreaterOrEquals('tablet') }"
  >
    <div v-if="$viewport.isGreaterOrEquals('tablet')" style="width: 126px" />
    <NuxtLink to="/dashboard" v-motion-slide-top :duration="300" :delay="600">
      <ElRow align="middle">
        <ElIcon :size="40" class="mr-8">
          <LogoIcon />
        </ElIcon>
        <h1>Agro App</h1>
      </ElRow>
    </NuxtLink>
    <div
      v-if="$viewport.isGreaterOrEquals('tablet')"
      class="right-icons-container"
    >
      <ElTooltip content="Kontaktirajte nas" effect="light" :enterable="false">
        <NuxtLink to="/contact" v-motion-slide-top :duration="300" :delay="900">
          <ElIcon size="24" class="cursor-pointer">
            <MessageIcon class="header-icon" />
          </ElIcon>
        </NuxtLink>
      </ElTooltip>
      <ElTooltip content="Postavke" effect="light" :enterable="false">
        <NuxtLink
          to="/settings"
          v-motion-slide-top
          :duration="300"
          :delay="1200"
        >
          <ElIcon size="24" class="cursor-pointer">
            <SettingsIcon class="header-icon" />
          </ElIcon>
        </NuxtLink>
      </ElTooltip>
      <ElTooltip content="Odjavi se" effect="light" :enterable="false">
        <ElIcon
          size="30"
          class="cursor-pointer"
          @click="logout"
          v-motion-slide-top
          :duration="300"
          :delay="1700"
        >
          <LogoutIcon class="header-icon" />
        </ElIcon>
      </ElTooltip>
    </div>
    <div v-else class="right-icons-container">
      <ElIcon
        :size="28"
        class="cursor-pointer"
        @click="drawerOpened = !drawerOpened"
        v-motion-slide-top
        :duration="300"
        :delay="1200"
      >
        <HamburgerIcon class="header-icon" />
      </ElIcon>
    </div>
  </ElRow>

  <ElDrawer
    v-if="$viewport.isLessThan('tablet')"
    v-model="drawerOpened"
    direction="ltr"
    size="100%"
    append-to-body
  >
    <template #header>
      <ElRow align="middle" justify="center" class="color-primary">
        <ElIcon :size="28" class="mr-8">
          <LogoIcon />
        </ElIcon>
        <p><b>Agro App</b></p>
      </ElRow>
    </template>
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
        <ElRow justify="center" align="middle">
          <ElDivider class="color-primary divider" />
        </ElRow>
        <NuxtLink
          to="/settings"
          class="drawer-option"
          @click="drawerOpened = false"
          :class="{ 'active-tab': route.name === 'settings' }"
        >
          <ElIcon size="24" color="white"><SettingsIcon /></ElIcon>
          <span class="drawer-option-text">Postavke</span>
        </NuxtLink>
        <NuxtLink
          to="/contact"
          class="drawer-option"
          @click="drawerOpened = false"
          :class="{ 'active-tab': route.name === 'contact' }"
        >
          <ElIcon size="24" color="white"><MessageIcon /></ElIcon>
          <span class="drawer-option-text">Kontakt</span>
        </NuxtLink>
        <div class="drawer-option" @click="logout">
          <ElIcon size="24" color="white"><LogoutIcon /></ElIcon>
          <span class="drawer-option-text">Odjavi se</span>
        </div>
      </ElScrollbar>
    </template>
  </ElDrawer>
</template>

<style scoped>
.header-row {
  width: 100%;
}

a {
  text-decoration: none;
  color: white;
  transition: 0.3s;
}

a:hover {
  transition: 0.3s;
  color: var(--el-color-primary-light-7);
}

a:hover i {
  transition: 0.3s;
  color: var(--el-color-primary-light-7);
}

.right-icons-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
}

.header-icon {
  transition: 0.3s;
  color: white;
}
.header-icon:hover {
  transition: 0.3s;
  color: var(--el-color-primary-light-7);
}

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
.drawer-option:hover,
.drawer-option:focus {
  cursor: pointer;
  background-color: var(--el-color-primary-light-3);
}
.drawer-option:last-child {
  margin-bottom: 8px;
}
.drawer-option:hover {
  cursor: pointer;
  background-color: var(--el-color-primary-light-3);
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
.divider {
  padding-inline: 16px;
  margin-right: 16px;
  margin-left: 8px;
  background-color: var(--el-color-primary);
}

.active-tab {
  cursor: initial;
  background-color: var(--el-color-primary-light-5);
}
</style>

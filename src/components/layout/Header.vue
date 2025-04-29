<script setup lang="ts">
import {
  Search,
  HomeFilled,
  Shop,
  OfficeBuilding
} from '@element-plus/icons-vue'
import HamburgerIcon from '~/assets/icons/hamburger.vue'
import FacebookIcon from '~/assets/icons/facebook.vue'
import InstagramIcon from '~/assets/icons/instagram.vue'
import MessageIcon from '~/assets/icons/message.vue'
import MegafoneIcon from '~/assets/icons/megafone.vue'

const { $viewport } = useNuxtApp()
const route = useRoute()
const searchValue = ref('')
const isMobileDrawerMenuOpen = ref(false)
const categories = shallowRef([
  { id: 0, name: 'Naslovnica', icon: HomeFilled, iconSize: 24 },
  { id: 1, name: 'Portal', icon: MegafoneIcon, iconSize: 14 },
  { id: 2, name: 'Poslovi', icon: OfficeBuilding, iconSize: 24 },
  { id: 3, name: 'Webshop', icon: Shop, iconSize: 24 },
  { id: 4, name: 'Kontakt', icon: MessageIcon, iconSize: 18 }
])

function getCategoryNameText(name: string) {
  if (name === 'Naslovnica' && $viewport.match('tablet')) return 'POČETNA'
  return name.toUpperCase()
}

function handleSearch() {
  console.log(searchValue.value)
}
</script>

<template>
  <!-- MOBILE HEADER -->
  <ElAffix>
    <ElRow
      v-if="$viewport.isLessThan('tablet')"
      class="header-container"
      v-motion-slide-top
      :duration="400"
    >
      <ElCol
        :span="4"
        style="margin: auto"
        v-motion-slide-top
        :duration="400"
        :delay="200"
      >
        <ElIcon
          :size="28"
          color="var(--el-color-primary)"
          class="cursor-pointer"
          @click="isMobileDrawerMenuOpen = true"
        >
          <HamburgerIcon />
        </ElIcon>
      </ElCol>
      <ElCol
        :span="16"
        align="center"
        v-motion-slide-top
        :duration="400"
        :delay="400"
      >
        <NuxtLink to="/" class="mobile-title">
          <h3 class="color-primary">Gastrabajter.de</h3></NuxtLink
        >
      </ElCol>
      <ElCol
        :span="4"
        style="margin: auto"
        align="end"
        v-motion-slide-top
        :duration="400"
        :delay="600"
      >
        <ElPopover placement="bottom-start" trigger="click" :width="300">
          <template #reference>
            <ElIcon
              :size="28"
              color="var(--el-color-primary)"
              class="cursor-pointer"
            >
              <Search />
            </ElIcon>
          </template>
          <template #default>
            <ElRow>
              <ElInput
                v-model="searchValue"
                placeholder="Traži..."
                @keyup.enter="handleSearch"
              >
                <template #suffix>
                  <ElIcon :size="18" class="search-icon" @click="handleSearch">
                    <Search />
                  </ElIcon>
                </template>
              </ElInput>
            </ElRow>
            <ElRow class="mt-12" justify="end">
              <ElButton @click="handleSearch" type="primary"> Traži </ElButton>
            </ElRow>
          </template>
        </ElPopover>
      </ElCol>
    </ElRow>

    <!-- DESKTOP HEADER -->
    <ElRow v-else class="header-container" v-motion-slide-top :duration="400">
      <ElCol :span="5" align="center" v-motion-slide-top :duration="400">
        <NuxtLink to="/" class="title">
          <h3 class="color-primary">Gastrabajter.de</h3>
        </NuxtLink>
      </ElCol>
      <ElCol
        v-for="(category, index) in categories"
        :key="category.id"
        :span="3"
        v-motion-slide-top
        :duration="400"
        :delay="400 + index * 200"
      >
        <NuxtLink
          :to="
            category.name === 'Naslovnica' ? '/' : category.name.toLowerCase()
          "
          class="el-button header-button"
          :class="{
            'el-button--primary':
              category.name.toLowerCase() === route.name ||
              (route.name === 'index' && category.name === 'Naslovnica')
          }"
        >
          <ElIcon
            v-if="$viewport.isGreaterOrEquals('desktop')"
            :size="24"
            class="home-icon"
          >
            <component :is="category.icon" />
          </ElIcon>
          {{ getCategoryNameText(category.name) }}
        </NuxtLink>
      </ElCol>
      <ElCol :span="4" v-motion-slide-top :duration="200" :delay="1600">
        <ElRow class="desktop-search-wrapper" align="middle">
          <ElCol :span="20" align="middle" justify="center">
            <input
              v-model="searchValue"
              placeholder="Traži..."
              class="desktop-search"
              @keyup.enter="handleSearch"
            />
          </ElCol>
          <ElCol :span="4" align="end">
            <ElIcon :size="18" class="search-icon" @click="handleSearch">
              <Search />
            </ElIcon>
          </ElCol>
        </ElRow>
      </ElCol>
    </ElRow>
  </ElAffix>

  <!-- MOBILE DRAWER MENU -->
  <ElDrawer
    v-model="isMobileDrawerMenuOpen"
    show-close
    direction="ltr"
    size="100%"
  >
    <template #header>
      <ElRow style="width: 100%">
        <h3 class="color-primary">Gastrabajter.de</h3>
      </ElRow>
    </template>
    <template #default>
      <div class="drawer-container">
        <NuxtLink
          v-for="category in categories"
          :key="category.id"
          :to="
            category.name === 'Naslovnica' ? '/' : category.name.toLowerCase()
          "
          class="el-button drawer-button"
          :class="{
            'el-button--primary':
              category.name.toLowerCase() === route.name ||
              (route.name === 'index' && category.name === 'Naslovnica')
          }"
        >
          <ElRow class="drawer-button-text-wrapper" align="middle">
            <ElIcon class="home-icon">
              <component :is="category.icon" />
            </ElIcon>
            {{ category.name.toUpperCase() }}
          </ElRow>
        </NuxtLink>
      </div>
    </template>
    <template #footer>
      <ElRow
        justify="center"
        align="middle"
        class="w-100 color-zinc text-align-center"
      >
        <NuxtLink to="/kontakt" class="icon-link mr-4" target="_blank">
          <ElIcon :size="32">
            <MessageIcon />
          </ElIcon>
        </NuxtLink>
        <NuxtLink
          to="https://facebook.com/"
          class="icon-link mr-4 ml-4"
          target="_blank"
        >
          <ElIcon :size="32">
            <FacebookIcon />
          </ElIcon>
        </NuxtLink>
        <NuxtLink
          to="https://instagram.com/"
          class="icon-link ml-4"
          target="_blank"
        >
          <ElIcon :size="32">
            <InstagramIcon />
          </ElIcon>
        </NuxtLink>
      </ElRow>
    </template>
  </ElDrawer>
</template>

<style scoped>
.header-container {
  width: 100%;
  background-color: white;
  border-bottom: 2px solid var(--el-border-color);
  padding: 0 20px;
}
.mobile-title {
  text-decoration: none;
}
.title {
  border-bottom: 1px solid var(--el-border-color);
  text-decoration: none;
}
.header-button {
  height: 100%;
  width: 100%;
  border-radius: 0;
  font-weight: 700;
  text-decoration: none;
  display: flex;
  gap: 4px;
  border-bottom: none;
}
.home-icon {
  width: 18px;
  margin-right: 4px;
}
.desktop-search-wrapper {
  border-left: 1px solid var(--el-border-color);
  height: 62px;
}
.desktop-search {
  width: 100%;
  margin: 0;
  padding: 0;
  border: none;
  outline: none;
  padding-left: 16px;
  font-size: 16px;
}
.desktop-search:focus {
  border: none;
  outline: none;
}
.search-icon {
  cursor: pointer;
}
.search-icon:hover {
  color: var(--el-color-primary);
}
.drawer-container {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.drawer-button {
  height: 45px;
  font-weight: 700;
  text-decoration: none;
  margin: 0;
  border-radius: 8px;
}
.drawer-button-text-wrapper {
  width: 100%;
  gap: 12px;
}
.icon-link {
  color: var(--el-text-color-secondary);
  transition: 0.3s ease-in-out;
}
.icon-link:hover {
  color: var(--el-color-primary);
}
</style>

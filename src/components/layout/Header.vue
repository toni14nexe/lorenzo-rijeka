<script setup lang="ts">
import {
  Search,
  HomeFilled,
  Shop,
  OfficeBuilding,
  Football,
  FirstAidKit
} from '@element-plus/icons-vue'
import HamburgerIcon from '~/assets/icons/Hamburger.vue'
import MessageIcon from '~/assets/icons/message.vue'

const { $viewport } = useNuxtApp()
const route = useRoute()
const searchValue = ref('')
const isMobileDrawerMenuOpen = ref(false)
const categories = shallowRef([
  { id: 0, name: 'NASLOVNICA', icon: HomeFilled },
  { id: 1, name: 'GRAD', icon: OfficeBuilding },
  { id: 2, name: 'SPORT', icon: Football },
  { id: 3, name: 'CRNA KRONIKA', icon: FirstAidKit },
  { id: 4, name: 'TRGOVINA', icon: Shop }
])

function getCategoryNameText(name) {
  if (name === 'CRNA KRONIKA' && $viewport.isLessOrEquals('desktop'))
    return 'KRONIKA'
  return name.toUpperCase()
}

function handleSearch() {
  console.log(searchValue.value)
}
</script>

<template>
  <!-- MOBILE HEADER -->
  <ElRow
    v-if="$viewport.isLessThan('tablet')"
    class="mobile-header"
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
        <h3 class="color-primary">Našice Portal</h3></NuxtLink
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
  <ElRow
    v-else
    style="border-bottom: 1px solid var(--el-border-color)"
    v-motion-slide-top
    :duration="400"
  >
    <ElCol :span="5" align="center" v-motion-slide-top :duration="400">
      <NuxtLink to="/" class="title">
        <h3 class="color-primary">Našice Portal</h3>
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
        :to="category.name.toLowerCase()"
        class="el-button header-button"
        :class="{
          'el-button--primary':
            category.name.toLowerCase() === route.name ||
            (route.name === 'index' && category.name === 'NASLOVNICA')
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

  <!-- MOBILE DRAWER MENU -->
  <ElDrawer
    v-model="isMobileDrawerMenuOpen"
    show-close
    direction="ltr"
    size="100%"
  >
    <template #header>
      <div style="width: 100%">
        <h3 class="color-primary">Našice Portal</h3>
      </div>
    </template>
    <template #default>
      <div class="drawer-container">
        <NuxtLink
          v-for="(category, index) in categories"
          :key="category.id"
          :to="category.name.toLowerCase()"
          class="el-button drawer-button"
          :class="{
            'el-button--primary':
              category.name.toLowerCase() === route.name ||
              (route.name === 'index' && category.name === 'NASLOVNICA')
          }"
        >
          <ElRow class="drawer-button-text-wrapper" align="middle">
            <ElIcon :size="24" class="home-icon">
              <component :is="category.icon" />
            </ElIcon>
            {{ category.name }}
          </ElRow>
        </NuxtLink>
        <NuxtLink
          to="kontakt"
          class="el-button drawer-button"
          :class="{
            'el-button--primary': route.name === 'kontakt'
          }"
        >
          <ElRow class="drawer-button-text-wrapper" align="middle">
            <ElIcon :size="18">
              <MessageIcon />
            </ElIcon>
            KONTAKTIRAJTE NAS
          </ElRow>
        </NuxtLink>
      </div>
    </template>
  </ElDrawer>
</template>

<style scoped>
.mobile-header {
  border-bottom: 1px solid var(--el-border-color);
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
}
.home-icon {
  margin-bottom: 7px;
}
.desktop-search-wrapper {
  border-left: 1px solid var(--el-border-color);
  border-bottom: 1px solid var(--el-border-color);
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
</style>

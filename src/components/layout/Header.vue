<script setup lang="ts">
import {
  Search,
  HomeFilled,
  Shop,
  OfficeBuilding,
  CloseBold,
  ArrowDown,
  ArrowRight,
  Postcard
} from '@element-plus/icons-vue'
import HamburgerIcon from '~/assets/icons/hamburger.vue'
import FacebookIcon from '~/assets/icons/facebook.vue'
import InstagramIcon from '~/assets/icons/instagram.vue'
import TikTokIcon from '~/assets/icons/tiktok.vue'
import MessageIcon from '~/assets/icons/message.vue'
import MegafoneIcon from '~/assets/icons/megafone.vue'
import HeaderPortalDrawerItem from '~/components/layout/HeaderPortalDrawerItem.vue'

const { $viewport } = useNuxtApp()
const adStore = useAdStore()
const categoriesStore = useCategoriesStore()
const { portalCategories, categoriesLoading } = storeToRefs(categoriesStore)
const route = useRoute()
const mobileSearchPopoverRef = ref()
const searchValue = ref('')
const isMobileDrawerMenuOpen = ref(false)
const isPortalDrawerMenuOpen = ref(false)
const isMobilePortalOpen = ref(false)
const facebookLinks = getFacebookLinks()
const categories = shallowRef([
  { name: 'Poslovi', icon: OfficeBuilding, iconSize: 24 },
  { name: 'Webshop', icon: Shop, iconSize: 24 },
  { name: 'Kontakt', icon: MessageIcon, iconSize: 18 }
])

watch(
  () => route.path,
  () => {
    isMobileDrawerMenuOpen.value = false
    if (route.name !== 'pretrazivanje') searchValue.value = ''
  }
)

onMounted(() => {
  adStore.getAdDetails()
  categoriesStore.getCategories()
})

function handleSearch() {
  if (searchValue.value.trim().length < 3)
    ElNotification({
      type: 'warning',
      message: 'Vrijednost pretraživanja ne smije biti kraća od 3 znaka!',
      duration: 3000
    })
  else if (searchValue.value.trim().length > 100)
    ElNotification({
      type: 'warning',
      message: 'Vrijednost pretraživanja ne smije biti duža od 100 znakova!',
      duration: 3000
    })
  else {
    navigateTo(`/pretrazivanje?value=${searchValue.value}`)
    if (mobileSearchPopoverRef.value) mobileSearchPopoverRef.value.hide()
  }
}
</script>

<template>
  <!-- MOBILE HEADER -->
  <div class="sticky">
    <ElHeader v-motion-slide-top :duration="400">
      <ElRow v-if="$viewport.isLessThan('tablet')" class="header-container">
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
            <h3 class="color-primary">Gastarbajter.de</h3></NuxtLink
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
          <ElPopover
            ref="mobileSearchPopoverRef"
            placement="bottom-start"
            trigger="click"
            :width="300"
          >
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
                    <NuxtLink
                      :to="
                        searchValue ? `/pretrazivanje?value=${searchValue}` : ''
                      "
                    >
                      <ElIcon :size="20" class="search-icon mt-8">
                        <Search />
                      </ElIcon>
                    </NuxtLink>
                  </template>
                </ElInput>
              </ElRow>
              <ElRow class="mt-12" justify="end">
                <NuxtLink
                  :to="searchValue ? `/pretrazivanje?value=${searchValue}` : ''"
                >
                  <ElButton type="primary"> Traži </ElButton>
                </NuxtLink>
              </ElRow>
            </template>
          </ElPopover>
        </ElCol>
      </ElRow>

      <!-- DESKTOP HEADER -->
      <ElRow v-else class="header-container">
        <ElCol :span="5" align="center" v-motion-slide-top :duration="400">
          <NuxtLink to="/" class="title">
            <h3 class="color-primary">Gastarbajter.de</h3>
          </NuxtLink>
        </ElCol>
        <ElCol :span="3" v-motion-slide-top :duration="400" :delay="200">
          <NuxtLink
            to="/"
            class="el-button header-button"
            :class="{
              'el-button--primary': 'index' === route.name
            }"
          >
            <ElIcon
              v-if="$viewport.isGreaterOrEquals('desktop')"
              :size="24"
              class="home-icon"
            >
              <HomeFilled />
            </ElIcon>
            {{ $viewport.match('tablet') ? 'POČETNA' : 'NASLOVNICA' }}
          </NuxtLink>
        </ElCol>
        <ElCol :span="3" v-motion-slide-top :duration="400" :delay="400">
          <div class="portal-btn-wrapper" justify="center" align="middle">
            <ElCol :span="18" align="middle">
              <NuxtLink
                to="/portal"
                class="el-button header-button portal-button"
                :class="{
                  'el-button--primary': 'portal' === route.name
                }"
              >
                <ElIcon
                  v-if="$viewport.isGreaterOrEquals('desktop')"
                  :size="24"
                  class="home-icon"
                >
                  <MegafoneIcon />
                </ElIcon>
                PORTAL
              </NuxtLink>
            </ElCol>
            <ElCol :span="6" align="middle">
              <ElTooltip
                effect="dark"
                content="Otvorite izbornik Portala"
                placement="top"
                :show-after="1000"
              >
                <ElButton
                  class="portal-more-button"
                  @click="isPortalDrawerMenuOpen = true"
                >
                  <ElIcon
                    :size="$viewport.isLessOrEquals('tablet') ? 18 : 24"
                    :class="{
                      'rotate-minus-90': isPortalDrawerMenuOpen,
                      'rotate-0': !isPortalDrawerMenuOpen
                    }"
                    class="transition-transform"
                  >
                    <ArrowDown />
                  </ElIcon>
                </ElButton>
              </ElTooltip>
            </ElCol>
          </div>
        </ElCol>
        <ElCol
          v-for="(category, index) in categories"
          :key="category.name"
          :span="3"
          v-motion-slide-top
          :duration="400"
          :delay="600 + index * 200"
        >
          <NuxtLink
            :to="category.name === 'Naslovnica' ? '/' : `/${category.name}`"
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
            {{ category.name.toUpperCase() }}
          </NuxtLink>
        </ElCol>
        <ElCol :span="4" v-motion-slide-top :duration="400" :delay="1200">
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
              <NuxtLink
                :to="searchValue ? `/pretrazivanje?value=${searchValue}` : ''"
              >
                <ElIcon :size="22" class="search-icon mt-8">
                  <Search />
                </ElIcon>
              </NuxtLink>
            </ElCol>
          </ElRow>
        </ElCol>
      </ElRow>
    </ElHeader>
  </div>

  <!-- MOBILE DRAWER MENU -->
  <ElDrawer v-model="isMobileDrawerMenuOpen" direction="ltr" size="100%">
    <template #header>
      <ElRow>
        <h3 class="color-primary">Gastarbajter.de</h3>
      </ElRow>
    </template>
    <template #default>
      <div class="drawer-container">
        <NuxtLink
          to="/"
          class="el-button drawer-button"
          :class="{
            'el-button--primary': 'index' === route.name
          }"
        >
          <ElRow class="drawer-button-text-wrapper" align="middle">
            <ElIcon class="home-icon" :size="48">
              <HomeFilled />
            </ElIcon>
            NASLOVNICA
          </ElRow>
        </NuxtLink>
        <ElRow align="middle">
          <ElCol :span="21">
            <NuxtLink
              to="/portal"
              class="el-button mobile-portal-drawer-button w-100"
              :class="{
                'el-button--primary': 'portal' === route.name
              }"
            >
              <ElRow class="drawer-button-text-wrapper" align="middle">
                <ElIcon class="home-icon" :size="48">
                  <MegafoneIcon />
                </ElIcon>
                PORTAL
              </ElRow>
            </NuxtLink>
          </ElCol>
          <ElCol :span="3">
            <ElButton
              class="mobile-portal-more-button"
              @click="isMobilePortalOpen = !isMobilePortalOpen"
            >
              <ElIcon
                :size="20"
                :class="{
                  'rotate-90': isMobilePortalOpen,
                  'rotate-0': !isMobilePortalOpen
                }"
                class="transition-transform"
              >
                <ArrowRight />
              </ElIcon>
            </ElButton>
          </ElCol>
        </ElRow>
        <template v-if="isMobilePortalOpen">
          <div
            v-if="categoriesLoading"
            v-loading="true"
            element-loading-text="Učitavanje kategorija..."
            style="height: 100px; margin-bottom: 40px"
          />
          <HeaderPortalDrawerItem
            v-else-if="isMobilePortalOpen"
            v-for="category in portalCategories"
            :key="category.id as string"
            :category="category"
            :tree-deep="1"
            @close-menu="isPortalDrawerMenuOpen = false"
          />
        </template>
        <NuxtLink
          v-for="category in categories"
          :key="category.name"
          :to="category.name === 'Naslovnica' ? '/' : `/${category.name}`"
          class="el-button drawer-button"
          :class="{
            'el-button--primary':
              category.name.toLowerCase() === route.name ||
              (route.name === 'index' && category.name === 'Naslovnica')
          }"
        >
          <ElRow class="drawer-button-text-wrapper" align="middle">
            <ElIcon class="home-icon" :size="48">
              <component :is="category.icon" />
            </ElIcon>
            {{ category.name.toUpperCase() }}
          </ElRow>
        </NuxtLink>
        <NuxtLink
          to="/reklamiranje"
          class="el-button drawer-button"
          :class="{ 'el-button--primary': 'reklamiranje' === route.name }"
        >
          <ElRow class="drawer-button-text-wrapper" align="middle">
            <ElIcon class="home-icon" :size="48">
              <Postcard />
            </ElIcon>
            REKLAMIRANJE
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
        <ElButton
          class="w-100 drawer-button"
          type="danger"
          plain
          @click="isMobileDrawerMenuOpen = false"
        >
          <ElRow align="middle">
            <ElIcon :size="18" class="mr-8">
              <CloseBold />
            </ElIcon>
            Zatvori
          </ElRow>
        </ElButton>
      </ElRow>
      <ElRow
        justify="center"
        align="middle"
        class="w-100 color-zinc text-align-center mt-16"
      >
        <NuxtLink
          to="/kontakt"
          class="icon-link mr-4"
          @click="isPortalDrawerMenuOpen = false"
        >
          <ElIcon :size="32">
            <MessageIcon />
          </ElIcon>
        </NuxtLink>
        <ElPopover placement="top" trigger="click" width="300">
          <template #reference>
            <ElIcon :size="32" class="icon-link cursor-pointer mb-4">
              <FacebookIcon />
            </ElIcon>
          </template>
          <template #default>
            <ElRow justify="center">
              <p style="font-size: larger">Facebook grupe</p>
            </ElRow>
            <div v-for="item in facebookLinks" class="mb-4">
              -
              <NuxtLink :to="item.url" target="_blank">
                {{ item.name }}
              </NuxtLink>
            </div>
          </template>
        </ElPopover>
        <NuxtLink
          to="https://www.instagram.com/promotim_augsburg/?utm_source=qr&igsh=MXNrenN6aDNlNGI3eQ%3D%3D#"
          class="icon-link ml-4"
          target="_blank"
        >
          <ElIcon :size="32">
            <InstagramIcon />
          </ElIcon>
        </NuxtLink>
        <NuxtLink
          to="https://www.tiktok.com/@gastarbajteri_augsburg?_t=ZN-8vwIsWxNLok&_r=1"
          class="icon-link ml-8"
          target="_blank"
        >
          <ElIcon :size="32">
            <TikTokIcon />
          </ElIcon>
        </NuxtLink>
      </ElRow>
    </template>
  </ElDrawer>

  <!-- PORTAL MENU DRAWER -->
  <ElDrawer v-model="isPortalDrawerMenuOpen" direction="ltr" size="500px">
    <template #header>
      <ElRow>
        <h3 class="color-primary">Portal izbornik</h3>
      </ElRow>
    </template>
    <template #default>
      <div
        v-if="categoriesLoading"
        v-loading="true"
        element-loading-text="Učitavanje kategorija..."
        style="height: 100%"
      />
      <div v-else class="drawer-container">
        <HeaderPortalDrawerItem
          v-for="category in portalCategories"
          :key="category.name as string"
          :category="category"
          :tree-deep="0"
          @close-menu="isPortalDrawerMenuOpen = false"
        />
      </div>
    </template>
    <template #footer>
      <ElRow
        justify="center"
        align="middle"
        class="w-100 color-zinc text-align-center mt-16"
      >
        <NuxtLink
          to="/kontakt"
          class="icon-link mr-4"
          @click="isPortalDrawerMenuOpen = false"
        >
          <ElIcon :size="32">
            <MessageIcon />
          </ElIcon>
        </NuxtLink>
        <ElPopover placement="top" trigger="click" width="300">
          <template #reference>
            <ElIcon :size="32" class="icon-link cursor-pointer mb-4">
              <FacebookIcon />
            </ElIcon>
          </template>
          <template #default>
            <ElRow justify="center">
              <p style="font-size: larger">Facebook grupe</p>
            </ElRow>
            <div v-for="item in facebookLinks" class="mb-4">
              -
              <NuxtLink :to="item.url" target="_blank">
                {{ item.name }}
              </NuxtLink>
            </div>
          </template>
        </ElPopover>
        <NuxtLink
          to="https://www.instagram.com/promotim_augsburg/?utm_source=qr&igsh=MXNrenN6aDNlNGI3eQ%3D%3D#"
          class="icon-link ml-4"
          target="_blank"
        >
          <ElIcon :size="32">
            <InstagramIcon />
          </ElIcon>
        </NuxtLink>
        <NuxtLink
          to="https://www.tiktok.com/@gastarbajteri_augsburg?_t=ZN-8vwIsWxNLok&_r=1"
          class="icon-link ml-8"
          target="_blank"
        >
          <ElIcon :size="32">
            <TikTokIcon />
          </ElIcon>
        </NuxtLink>
      </ElRow>
    </template>
  </ElDrawer>
</template>

<style scoped>
.sticky {
  position: sticky;
  top: 0;
  z-index: 999;
}
.el-header {
  --el-header-padding: 0;
}
.header-container {
  position: relative;
  width: 100%;
  background-color: white;
  padding: 0 20px;
}
.header-container::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 20px;
  right: 20px;
  height: 2px;
  background-color: var(--el-border-color);
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
.portal-btn-wrapper {
  display: flex;
  height: 100%;
}
.portal-button {
  height: 60px;
  border-top: none;
}
.portal-more-button {
  width: 100%;
  height: 60px;
  border: none;
}
.portal-more-button:hover {
  color: var(--el-button-hover-text-color) !important;
  background-color: var(--el-color-primary-light-9) !important;
}
.mobile-portal-more-button {
  width: 100%;
  height: 45px;
  border-radius: 0 8px 8px 0;
  border-left: none;
}
.mobile-portal-more-button:hover {
  color: var(--el-button-hover-text-color) !important;
  background-color: var(--el-color-primary-light-9) !important;
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
  color: var(--el-text-color-secondary);
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
.mobile-portal-drawer-button {
  height: 45px;
  font-weight: 700;
  text-decoration: none;
  margin: 0;
  border-radius: 8px 0 0 8px;
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
.rotate-minus-90 {
  transform: rotate(-90deg);
}
.rotate-90 {
  transform: rotate(90deg);
}
.rotate-0 {
  transform: rotate(0deg);
}
.transition-transform {
  transition: transform 0.3s ease;
}
</style>

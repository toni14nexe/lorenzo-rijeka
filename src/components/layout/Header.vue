<script setup lang="ts">
import {
  Search,
  HomeFilled,
  CloseBold,
  ArrowRight,
  ShoppingCart,
  ShoppingCartFull
} from '@element-plus/icons-vue'
import HamburgerIcon from '~/assets/icons/hamburger.vue'
import FacebookIcon from '~/assets/icons/facebook.vue'
import InstagramIcon from '~/assets/icons/instagram.vue'
import TikTokIcon from '~/assets/icons/tiktok.vue'
import MegafoneIcon from '~/assets/icons/megafone.vue'
import HeaderWebshopDrawerItem from '~/components/layout/HeaderWebshopDrawerItem.vue'
import LogoIcon from '~/assets/icons/logo.vue'
import InfoIcon from '~/assets/icons/infoIcon.vue'
import MessageIcon from '~/assets/icons/message.vue'

const { $viewport } = useNuxtApp()
const categoriesStore = useCategoriesStore()
const cartStore = useCartStore()
const { webshopCategories, categoriesLoading } = storeToRefs(categoriesStore)
const { cartChangeState } = storeToRefs(cartStore)
const route = useRoute()
const mobileSearchPopoverRef = ref()
const searchValue = ref('')
const mounted = ref(false)
const isMobileDrawerMenuOpen = ref(false)
const isWebshopDrawerMenuOpen = ref(false)
const isMobileWebshopOpen = ref(false)
const categories = shallowRef([
  { name: 'O nama', icon: InfoIcon, iconSize: 24, url: 'o-nama' },
  { name: 'Kontakt', icon: MessageIcon, iconSize: 18, url: 'kontakt' }
])

watch(
  () => route.path,
  () => {
    isMobileDrawerMenuOpen.value = false
  }
)

onMounted(() => {
  categoriesStore.getCategories()
  mounted.value = true
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
    <ElHeader>
      <div v-if="$viewport.isLessThan('tablet')" class="header-container">
        <NuxtLink to="/" v-motion-slide-top :duration="1000">
          <ElIcon :size="36">
            <LogoIcon />
          </ElIcon>
        </NuxtLink>
        <NuxtLink
          to="/webshop"
          v-motion-slide-top
          :duration="1000"
          :delay="300"
          class="icon-link"
        >
          <p>TRGOVINA</p>
        </NuxtLink>
        <NuxtLink
          to="/o-nama"
          v-motion-slide-top
          :duration="1000"
          :delay="600"
          class="icon-link"
        >
          <p>O NAMA</p>
        </NuxtLink>
        <NuxtLink
          to="/kontakt"
          v-motion-slide-top
          :duration="1000"
          :delay="900"
          class="icon-link"
        >
          <p>KONTAKT</p>
        </NuxtLink>
        <NuxtLink
          to="/kosarica"
          v-motion-slide-top
          :duration="1000"
          :delay="1200"
          class="icon-link"
        >
          <div :key="cartChangeState">
            <ElRow v-if="!getCartTotal()">
              <ElIcon :size="28">
                <ShoppingCart />
              </ElIcon>
            </ElRow>
            <ElRow v-else justify="end" align="middle">
              <span>{{ getCartCount() > 99 ? '99+' : getCartCount() }}</span>
              <ElIcon :size="36">
                <ShoppingCartFull />
              </ElIcon>
            </ElRow>
          </div>
        </NuxtLink>
      </div>

      <!-- DESKTOP HEADER -->
      <template v-else>
        <ElRow
          justify="space-between"
          align="middle"
          style="width: 100%; padding: 0 20px; background-color: white"
        >
          <ElRow align="middle">
            <NuxtLink to="/" class="title" v-motion-slide-top :duration="1000">
              <h3 :class="{ 'color-primary': route.name === 'index' }">
                <ElRow justify="center" align="middle">
                  <ElIcon :size="36">
                    <LogoIcon style="margin-right: 8px" />
                  </ElIcon>
                  NASLOVNICA
                </ElRow>
              </h3>
            </NuxtLink>
            <NuxtLink
              to="/webshop"
              class="title ml-24"
              v-motion-slide-top
              :duration="1000"
              :delay="300"
            >
              <h3 :class="{ 'color-primary': route.name === 'webshop' }">
                <ElRow justify="center" align="middle"> TRGOVINA </ElRow>
              </h3>
            </NuxtLink>
            <NuxtLink
              to="/o-nama"
              class="title ml-24"
              v-motion-slide-top
              :duration="1000"
              :delay="600"
            >
              <h3 :class="{ 'color-primary': route.name === 'o-nama' }">
                <ElRow justify="center" align="middle"> O NAMA </ElRow>
              </h3>
            </NuxtLink>
            <NuxtLink
              to="/kontakt"
              class="title ml-24"
              v-motion-slide-top
              :duration="1000"
              :delay="900"
            >
              <h3 :class="{ 'color-primary': route.name === 'kontakt' }">
                <ElRow justify="center" align="middle"> KONTAKT </ElRow>
              </h3>
            </NuxtLink>
          </ElRow>
          <ElRow
            align="middle"
            v-motion-slide-top
            :duration="1000"
            :delay="1200"
          >
            <ClientOnly>
              <ElRow
                v-motion-slide-top
                :duration="mounted ? 0 : 400"
                :delay="mounted ? 0 : 1400"
                justify="end"
                align="middle"
                :key="cartChangeState"
              >
                <NuxtLink to="/kosarica" style="text-decoration: none">
                  <ElRow v-if="!getCartTotal()" class="cart">
                    <span class="mr-24">KOŠARICA</span>
                    <ElIcon :size="36">
                      <ShoppingCart />
                    </ElIcon>
                  </ElRow>
                  <ElRow v-else justify="end" align="middle" class="cart">
                    <span class="mr-24">KOŠARICA</span>
                    <span>{{
                      getCartCount() > 99 ? '99+' : getCartCount()
                    }}</span>
                    <ElIcon :size="36">
                      <ShoppingCartFull />
                    </ElIcon>
                  </ElRow>
                </NuxtLink>
              </ElRow>
            </ClientOnly>
          </ElRow>
        </ElRow>
      </template>
    </ElHeader>
  </div>

  <!-- MOBILE DRAWER MENU -->
  <ElDrawer v-model="isMobileDrawerMenuOpen" direction="ltr" size="100%">
    <template #header>
      <ElRow>
        <h3 class="color-primary">
          <ElRow justify="center" align="middle">
            <ElIcon :size="24">
              <LogoIcon style="margin-right: 8px" />
            </ElIcon>
            s.art
          </ElRow>
        </h3>
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
              to="/webshop"
              class="el-button mobile-portal-drawer-button w-100"
              :class="{
                'el-button--primary': 'webshop' === route.name
              }"
            >
              <ElRow class="drawer-button-text-wrapper" align="middle">
                <ElIcon class="home-icon" :size="48">
                  <MegafoneIcon />
                </ElIcon>
                WEBSHOP
              </ElRow>
            </NuxtLink>
          </ElCol>
          <ElCol :span="3">
            <ElButton
              class="mobile-portal-more-button"
              @click="isMobileWebshopOpen = !isMobileWebshopOpen"
            >
              <ElIcon
                :size="20"
                :class="{
                  'rotate-90': isMobileWebshopOpen,
                  'rotate-0': !isMobileWebshopOpen
                }"
                class="transition-transform"
              >
                <ArrowRight />
              </ElIcon>
            </ElButton>
          </ElCol>
        </ElRow>
        <template v-if="isMobileWebshopOpen">
          <div
            v-if="categoriesLoading"
            v-loading="true"
            element-loading-text="Učitavanje kategorija..."
            style="height: 100px; margin-bottom: 40px"
          />
          <HeaderWebshopDrawerItem
            v-else-if="isMobileWebshopOpen"
            v-for="category in webshopCategories"
            :key="category.id as string"
            :category="category"
            :tree-deep="1"
            @close-menu="isWebshopDrawerMenuOpen = false"
          />
        </template>
        <NuxtLink
          to="/kosarica"
          class="el-button drawer-button"
          :class="{
            'el-button--primary': 'kosarica' === route.name
          }"
          :key="cartChangeState"
        >
          <ElRow
            v-if="!getCartTotal()"
            class="drawer-button-text-wrapper"
            align="middle"
          >
            <ElIcon class="home-icon" :size="48">
              <ShoppingCart />
            </ElIcon>
            KOŠARICA
          </ElRow>
          <ElRow v-else class="drawer-button-text-wrapper" align="middle">
            <ElIcon class="home-icon" :size="48">
              <ShoppingCartFull />
            </ElIcon>
            {{
              getCartCount() > 99
                ? 'KOŠARICA (99+)'
                : `KOŠARICA (${getCartCount()})`
            }}
          </ElRow>
        </NuxtLink>
        <NuxtLink
          v-for="category in categories"
          :key="category.name"
          :to="category.name === 'Naslovnica' ? '/' : `/${category.url}`"
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
          class="icon-link"
          @click="isWebshopDrawerMenuOpen = false"
          style="margin-right: -2px"
        >
          <ElIcon :size="36">
            <MessageIcon />
          </ElIcon>
        </NuxtLink>
        <NuxtLink
          to="https://web.facebook.com/people/sart/61566776001032"
          class="icon-link ml-4"
          target="_blank"
        >
          <ElIcon :size="32">
            <FacebookIcon />
          </ElIcon>
        </NuxtLink>
        <NuxtLink
          to="https://www.instagram.com/svjetlana_art"
          class="icon-link ml-4"
          target="_blank"
        >
          <ElIcon :size="32">
            <InstagramIcon />
          </ElIcon>
        </NuxtLink>
        <NuxtLink
          to="https://www.tiktok.com/@svjetlanaart"
          class="icon-link ml-4"
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
  width: 100%;
  background-color: white;
  padding: 12px 5px;
  height: 60px;
  display: flex;
  gap: 8px;
  justify-content: space-between;
  align-content: center;
  align-items: center;
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
.title {
  text-decoration: none;
  color: black;
  transition: 0.1s ease-in-out;
}
.title:hover {
  color: var(--el-color-primary);
  transition: 0.1s ease-in-out;
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
.cart {
  background-color: black;
  color: white;
  cursor: pointer;
  padding: 4px;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  font-size: 28px;
  border: 3px solid black;
  border-radius: 20px;
  padding: 5px 20px;
}
.cart:hover {
  color: var(--el-color-primary);
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
  text-decoration: none;
}
.icon-link:hover {
  color: var(--el-color-primary);
}
</style>

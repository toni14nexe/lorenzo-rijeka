<script setup lang="ts">
import FacebookIcon from '~/assets/icons/facebook.vue'
import InstagramIcon from '~/assets/icons/instagram.vue'
import TikTokIcon from '~/assets/icons/tiktok.vue'
import MessageIcon from '~/assets/icons/message.vue'
import FooterMenuCard from '~/components/layout/FooterMenuCard.vue'

defineProps(['dividerMarginTop'])

const categoriesStore = useCategoriesStore()
const { categoriesLoading, portalCategories } = storeToRefs(categoriesStore)
const facebookLinks = getFacebookLinks()
const mainCategories = ref([
  { id: 1, name: 'Naslovnica' },
  { id: 2, name: 'Portal' },
  { id: 3, name: 'Poslovi' },
  { id: 4, name: 'Webshop' },
  { id: 5, name: 'Kontakt' },
  { id: 6, name: 'Reklamiranje' }
])
</script>

<template>
  <div class="footer-top">
    <ElDivider
      class="divider"
      :style="`margin-top: ${dividerMarginTop ? `${dividerMarginTop}px` : '4px'} !important`"
    />

    <FooterMenuCard :categories="mainCategories" title="Glavni izbornik" />

    <FooterMenuCard
      :categories="portalCategories"
      title="Portal"
      urlPrefix="/portal/"
      :loading="categoriesLoading"
    />

    <ElRow
      justify="center"
      align="middle"
      class="w-100 color-zinc text-align-center"
    >
      <NuxtLink to="/kontakt" class="icon-link mr-4">
        <ElIcon :size="44.45">
          <MessageIcon />
        </ElIcon>
      </NuxtLink>
      <ElPopover placement="top" trigger="click" width="300">
        <template #reference>
          <ElIcon :size="40" class="icon-link cursor-pointer mb-4">
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
        <ElIcon :size="40">
          <InstagramIcon />
        </ElIcon>
      </NuxtLink>
      <NuxtLink
        to="https://www.tiktok.com/@gastarbajteri_augsburg?_t=ZN-8vwIsWxNLok&_r=1"
        class="icon-link ml-4"
        target="_blank"
      >
        <ElIcon :size="40">
          <TikTokIcon />
        </ElIcon>
      </NuxtLink>
    </ElRow>
    <ElRow
      justify="center"
      align="middle"
      class="w-100 color-zinc mt-8 text-align-center"
    >
      Sva prava pridržana, Gatstrabajter.de
    </ElRow>

    <ElRow
      justify="center"
      align="middle"
      class="w-100 color-zinc mt-8 text-align-center"
    >
      <NuxtLink to="https://innova-tech.live/" class="link" target="_blank">
        Web aplikaciju izradio Innovatech obrt za informatičke usluge
      </NuxtLink>
    </ElRow>
  </div>

  <ElRow justify="center" align="middle" class="w-100 bottom-line mt-8">
    Copyright © 2025 Gatstrabajter.de
  </ElRow>
</template>

<style scoped>
.divider {
  margin-bottom: 24px !important;
}
.footer-top {
  max-width: calc(1600px - 40px);
  margin-left: auto;
  margin-right: auto;
  padding: 0 20px;
}
.link {
  text-decoration: none;
  color: var(--el-text-color-secondary);
}
.link:hover {
  text-decoration: none;
  color: var(--el-color-primary);
}
.icon-link {
  color: var(--el-text-color-secondary);
  transition: 0.3s ease-in-out;
}
.icon-link:hover {
  color: var(--el-color-primary);
}
.bottom-line {
  background-color: var(--el-text-color-secondary);
  height: 30px;
  font-size: small;
}
.color-zinc {
  color: var(--el-text-color-secondary);
}
.text-align-center {
  text-align: center;
}
</style>

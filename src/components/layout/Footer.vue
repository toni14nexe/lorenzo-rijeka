<script setup lang="ts">
import FacebookIcon from '~/assets/icons/facebook.vue'
import InstagramIcon from '~/assets/icons/instagram.vue'
import TikTokIcon from '~/assets/icons/tiktok.vue'
import MessageIcon from '~/assets/icons/message.vue'
import FooterMenuCard from '~/components/layout/FooterMenuCard.vue'

defineProps(['dividerMarginTop'])

const categoriesStore = useCategoriesStore()
const { categoriesLoading, webshopCategories } = storeToRefs(categoriesStore)
const mainCategories = ref([
  { id: 1, name: 'Naslovnica', url: '' },
  { id: 2, name: 'Webshop', url: 'webshop' },
  { id: 3, name: 'O nama', url: 'o-nama' },
  { id: 5, name: 'Kontakt', url: 'kontakt' }
])
</script>

<template>
  <div class="footer-top">
    <ElDivider
      class="divider"
      :style="`margin-top: ${dividerMarginTop ? `${dividerMarginTop}px` : '4px'} !important`"
    />

    <FooterMenuCard :categories="mainCategories" title="Izbornik" />

    <FooterMenuCard
      :categories="webshopCategories"
      title="Webshop"
      urlPrefix="/webshop/"
      :loading="categoriesLoading"
    />

    <ElRow
      justify="center"
      align="middle"
      class="w-100 color-zinc text-align-center"
    >
      <NuxtLink to="/kontakt" class="icon-link">
        <ElIcon :size="46">
          <MessageIcon />
        </ElIcon>
      </NuxtLink>
      <NuxtLink
        to="https://web.facebook.com/people/sart/61566776001032"
        class="icon-link"
        style="margin-left: 2px"
        target="_blank"
      >
        <ElIcon :size="40">
          <FacebookIcon />
        </ElIcon>
      </NuxtLink>
      <NuxtLink
        to="https://www.instagram.com/svjetlana_art"
        class="icon-link ml-4"
        target="_blank"
      >
        <ElIcon :size="40">
          <InstagramIcon />
        </ElIcon>
      </NuxtLink>
      <NuxtLink
        to="https://www.tiktok.com/@svjetlanaart"
        class="icon-link ml-4"
        target="_blank"
      >
        <ElIcon :size="40">
          <TikTokIcon />
        </ElIcon>
      </NuxtLink>
    </ElRow>

    <ElRow justify="center" align="middle" style="margin-top: 16px">
      <img
        src="../../assets/images/instagram-qr.jpeg"
        alt="Instagram QR kod"
        style="max-width: 90%; width: 140px"
      />
    </ElRow>

    <ElRow justify="center" align="middle" style="margin: 16px 0">
      <ElCol align="middle" class="small-text"
        >s.art, obrt za umjetničko stvaralaštvo</ElCol
      >
      <ElCol align="middle" class="small-text">Baćina 2, 51219 Čavle</ElCol>
      <ElCol align="middle" class="small-text">Matični broj: 98880349</ElCol>
      <ElCol align="middle" class="small-text">OIB: 76720947227</ElCol>
      <ElCol align="middle" class="small-text">Telefon: +385 99 7900 257</ElCol>
      <ElCol align="middle" class="small-text"
        >Banka: Erste&Steiermärkische Bank d.d.</ElCol
      >
      <ElCol align="middle" class="small-text">SWIFT/BIC: ESBCHR22</ElCol>
      <ElCol align="middle" class="small-text"
        >IBAN: HR5124020061140578266</ElCol
      >
    </ElRow>

    <ElRow
      justify="center"
      align="middle"
      class="w-100 color-zinc mt-8 text-align-center"
    >
      <NuxtLink to="/kolacici" class="link"> Politika kolačića </NuxtLink>
    </ElRow>

    <ElRow
      justify="center"
      align="middle"
      class="w-100 color-zinc mt-8 text-align-center"
    >
      Sva prava pridržana, s.art
    </ElRow>

    <ElRow
      justify="center"
      align="middle"
      class="w-100 color-zinc mt-8 text-align-center"
    >
      <NuxtLink to="https://innova-tech.hr/" class="link" target="_blank">
        Web aplikaciju izradio Innovatech obrt za informatičke usluge
      </NuxtLink>
    </ElRow>
  </div>

  <ElRow justify="center" align="middle" class="w-100 bottom-line mt-8">
    Copyright © 2025 s.art
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
.small-text {
  color: var(--el-text-color-secondary);
  font-size: small;
  font-family: Arial, Helvetica, sans-serif;
}
</style>

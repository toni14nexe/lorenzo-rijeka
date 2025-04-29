<script setup lang="ts">
import FacebookIcon from '~/assets/icons/facebook.vue'
import InstagramIcon from '~/assets/icons/instagram.vue'
import MessageIcon from '~/assets/icons/message.vue'

const { $viewport } = useNuxtApp()
const mainCategories = ref([
  { id: 1, name: 'Naslovnica' },
  { id: 2, name: 'Portal' },
  { id: 3, name: 'Poslovi' },
  { id: 4, name: 'Webshop' }
])
const subcategories = ref([
  { id: 1, name: 'Naslovnica' },
  { id: 2, name: 'Grad' },
  { id: 3, name: 'Sport' },
  { id: 4, name: 'Kronika' },
  { id: 5, name: 'Trgovina' },
  { id: 6, name: 'Naslovnica' },
  { id: 7, name: 'Grad' },
  { id: 8, name: 'Sport' },
  { id: 9, name: 'Kronika' },
  { id: 10, name: 'Trgovina' },
  { id: 11, name: 'Naslovnica' },
  { id: 12, name: 'Grad' },
  { id: 13, name: 'Sport' },
  { id: 14, name: 'Kronika' },
  { id: 15, name: 'Trgovina' }
])
</script>

<template>
  <div class="footer">
    <ElDivider class="divider" />
    <ElCard>
      <ElRow class="footer" justify="center" align="middle">
        <span class="color-primary">Glavni izbornik</span>
      </ElRow>
      <ElRow
        :justify="$viewport.isLessOrEquals('tablet') ? 'start' : 'center'"
        align="middle"
        class="row-gap-4 mt-8"
      >
        <ElCol
          v-for="category in mainCategories"
          :key="category.id"
          :span="
            $viewport.isLessOrEquals('mobileMedium')
              ? 24
              : $viewport.isLessOrEquals('mobileWide')
                ? 12
                : $viewport.isLessOrEquals('tablet')
                  ? 8
                  : 4
          "
          align="center"
        >
          <NuxtLink
            :to="`/kategorije/${category.name.toLowerCase()}`"
            class="link"
          >
            {{ category.name }}
          </NuxtLink>
        </ElCol>
      </ElRow>
    </ElCard>

    <ElCard class="mt-24 mb-24">
      <ElRow class="footer" justify="center" align="middle">
        <span class="color-primary">Podizbornik</span>
      </ElRow>
      <ElRow justify="start" align="middle" class="row-gap-4 mt-8">
        <ElCol
          v-for="category in subcategories"
          :key="category.id"
          :span="
            $viewport.isLessOrEquals('mobileMedium')
              ? 24
              : $viewport.isLessOrEquals('mobileWide')
                ? 12
                : $viewport.isLessOrEquals('tablet')
                  ? 8
                  : 4
          "
          align="center"
        >
          <NuxtLink
            :to="`/kategorije/${category.name.toLowerCase()}`"
            class="link"
          >
            {{ category.name }}
          </NuxtLink>
        </ElCol>
      </ElRow>
    </ElCard>

    <ElRow
      justify="center"
      align="middle"
      class="w-100 color-zinc text-align-center"
    >
      <NuxtLink to="/kontakt" class="icon-link mr-4" target="_blank">
        <ElIcon :size="44.45">
          <MessageIcon />
        </ElIcon>
      </NuxtLink>
      <NuxtLink
        to="https://facebook.com/"
        class="icon-link mr-4 ml-4"
        target="_blank"
      >
        <ElIcon :size="40">
          <FacebookIcon />
        </ElIcon>
      </NuxtLink>
      <NuxtLink
        to="https://instagram.com/"
        class="icon-link ml-4"
        target="_blank"
      >
        <ElIcon :size="40">
          <InstagramIcon />
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
  margin-top: 4px !important;
  margin-bottom: 24px !important;
}
.footer {
  margin: 0 20px;
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
.row-gap-4 {
  row-gap: 4px;
}
.color-zinc {
  color: var(--el-text-color-secondary);
}
.text-align-center {
  text-align: center;
}
</style>

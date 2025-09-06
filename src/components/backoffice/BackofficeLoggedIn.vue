<script setup lang="ts">
import BackofficeAdminTab from '~/components/backoffice/tabs/BackofficeAdminTab.vue'
import BackofficeWebshopCategoriesTab from '~/components/backoffice/tabs/BackofficeWebshopCategoriesTab.vue'
import BackofficeWebshopProductsTab from '~/components/backoffice/tabs/BackofficeWebshopProductsTab.vue'
import BackofficeOrdersTab from '~/components/backoffice/tabs/BackofficeOrdersTab.vue'
import { SwitchButton } from '@element-plus/icons-vue'
import '~/assets/styles/backoffice.css'

const userStore = useUserStore()
const activeTab = ref()
</script>

<template>
  <div class="page-container">
    <ElRow justify="center" align="middle">
      <ElCol :span="4" />
      <ElCol :span="16">
        <ElRow justify="center" align="middle">
          <h2 class="color-primary">Backoffice</h2>
        </ElRow>
      </ElCol>
      <ElCol :span="4" align="end">
        <ElButton
          type="primary"
          plain
          class="mr-24"
          @click="userStore.logout()"
        >
          <ElIcon :size="22">
            <SwitchButton />
          </ElIcon>
        </ElButton>
      </ElCol>
    </ElRow>

    <ElDivider />

    <ElRow :gutter="12" justify="center" class="w-100">
      <ElTabs v-model="activeTab" style="width: 90%">
        <ElTabPane label="Kategorije" name="webshop-categories">
          <BackofficeWebshopCategoriesTab
            v-if="activeTab === 'webshop-categories'"
          />
        </ElTabPane>
        <ElTabPane label="Proizvodi" name="webshop-products">
          <BackofficeWebshopProductsTab
            v-if="activeTab === 'webshop-products'"
          />
        </ElTabPane>
        <ElTabPane label="Narudžbe" name="webshop-orders">
          <BackofficeOrdersTab v-if="activeTab === 'webshop-orders'" />
        </ElTabPane>
        <ElTabPane label="Admin" name="admin">
          <BackofficeAdminTab v-if="activeTab === 'admin'" />
        </ElTabPane>
      </ElTabs>
    </ElRow>
  </div>
</template>

<style lang="css" scoped></style>

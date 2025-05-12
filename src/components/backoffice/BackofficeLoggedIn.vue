<script setup lang="ts">
import BackofficeAdminTab from '~/components/backoffice/tabs/BackofficeAdminTab.vue'
import BackofficePortalCategoriesTab from '~/components/backoffice/tabs/BackofficePortalCategoriesTab.vue'
import BackofficePortalNewsTab from '~/components/backoffice/tabs/BackofficePortalNewsTab.vue'
import BackofficeJobCategoriesTab from '~/components/backoffice/tabs/BackofficeJobCategoriesTab.vue'
import BackofficeProductCategoriesTab from '~/components/backoffice/tabs/BackofficeProductCategoriesTab.vue'
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
      <ElTabs v-model="activeTab">
        <ElTabPane label="Portal kategorije" name="portal-categories">
          <BackofficePortalCategoriesTab
            v-if="activeTab === 'portal-categories'"
          />
        </ElTabPane>
        <ElTabPane label="Portal vijesti" name="portal-news">
          <BackofficePortalNewsTab v-if="activeTab === 'portal-news'" />
        </ElTabPane>
        <ElTabPane label="Posao kategorije" name="job-categories">
          <BackofficeJobCategoriesTab v-if="activeTab === 'job-categories'" />
        </ElTabPane>
        <ElTabPane label="Posao oglasi" name="job-ads">
          Posao oglasi
        </ElTabPane>
        <ElTabPane label="Webshop kategorije" name="webshop-categories">
          <BackofficeProductCategoriesTab
            v-if="activeTab === 'webshop-categories'"
          />
        </ElTabPane>
        <ElTabPane label="Webshop proizvodi" name="webshop-products">
          Webshop proizvodi
        </ElTabPane>
        <ElTabPane label="Narudžbe" name="webshop-orders"> Narudžbe </ElTabPane>
        <ElTabPane label="Reklame" name="ads"> Reklame </ElTabPane>
        <ElTabPane label="Admin" name="admin">
          <BackofficeAdminTab v-if="activeTab === 'admin'" />
        </ElTabPane>
      </ElTabs>
    </ElRow>
  </div>
</template>

<style lang="css" scoped></style>

<script setup lang="ts">
import { SwitchButton } from '@element-plus/icons-vue'

const userStore = useUserStore()
</script>

<template>
  <div class="page-container">
    <ElRow justify="center" align="middle">
      <ElCol :span="4" />
      <ElCol :span="16">
        <ElRow justify="center" align="middle">
          <h3 class="color-primary">Backoffice</h3>
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
  </div>
</template>

<style lang="css" scoped></style>

<script setup lang="ts">
import LogoIcon from '~/assets/icons/logo.vue'
import LogoutIcon from '~/assets/icons/logout.vue'

const route = useRoute()
</script>

<template>
  <ElHeader class="header" v-motion-slide-bottom :duration="1000">
    <ElRow
      align="middle"
      justify="space-between"
      style="width: 100%"
      class="mx-24"
    >
      <ElCol
        :span="8"
        v-if="$viewport.isGreaterOrEquals('tablet') && route.name !== 'login'"
      />
      <ElCol
        :xs="route.name === 'login' ? 24 : 16"
        :span="route.name === 'login' ? 24 : 8"
        align="center"
      >
        <NuxtLink to="/" class="title-link">
          <ElRow
            align="middle"
            :justify="
              $viewport.isGreaterOrEquals('tablet') || route.name === 'login'
                ? 'center'
                : 'start'
            "
          >
            <ElIcon :size="40" color="white" class="mr-8">
              <LogoIcon />
            </ElIcon>
            <h1 class="text-nowrap">Agro App</h1>
          </ElRow>
        </NuxtLink>
      </ElCol>
      <ElCol v-if="route.name !== 'login'" :span="8" align="end">
        <ElTooltip
          content="Prijava / Registracija"
          effect="light"
          :enterable="false"
          :show-after="500"
          placement="left-start"
          :disabled="$viewport.isLessOrEquals('tablet')"
        >
          <NuxtLink to="/login">
            <ElIcon :size="40" class="login-icon">
              <LogoutIcon />
            </ElIcon>
          </NuxtLink>
        </ElTooltip>
      </ElCol>
    </ElRow>
  </ElHeader>
</template>

<style scoped>
.header {
  background-color: var(--el-color-primary);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 !important;
  border-bottom: 2px solid var(--el-color-primary-light-5);
  color: white;
}

.title-link {
  text-decoration: none;
  color: white;
}

.text-nowrap {
  text-wrap: nowrap;
}

a {
  text-decoration: none;
  color: white;
  transition: 0.3s;
}

a:hover {
  transition: 0.3s;
  color: var(--el-color-primary-light-7);
}

a:hover i {
  transition: 0.3s;
  color: var(--el-color-primary-light-7);
}
</style>

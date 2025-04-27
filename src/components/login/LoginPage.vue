<script lang="ts" setup>
const activeComponent = ref('login')
const router = useRouter()

onMounted(() => setComponent())

function setComponent() {
  if (router.currentRoute.value.query.tab === 'registration')
    activeComponent.value = 'registration'
  router.replace({ query: {} })
}
</script>

<template>
  <div v-motion-slide-top :duration="500">
    <ElTabs
      v-model="activeComponent"
      stretch
      v-motion-slide-top
      :duration="1000"
    >
      <ElTabPane label="Prijava" name="login" />
      <ElTabPane label="Registracija" name="registration" />
    </ElTabs>
    <Login
      @change-to-forgotten-password="activeComponent = 'fogotten-password'"
    />
  </div>
</template>

<script setup lang="ts">
const userStore = useUserStore()
const { isAdminLogged } = storeToRefs(userStore)
const isMounted = ref(false)

onMounted(() => (isMounted.value = true))
</script>

<template>
  <div v-if="isMounted" class="page-container backoffice-pages">
    <BackofficeLoggedIn v-if="isAdminLogged" />
    <BackofficeLogin v-else @login-success="isAdminLogged = true" />
  </div>
</template>

<style lang="css" scoped>
.backoffice-pages {
  font-family: Arial, Helvetica, sans-serif;
}
</style>

<script setup lang="ts">
const step = ref(0)

onMounted(() => scrollToPageTop())

function backStep() {
  step.value--
  scrollToPageTop()
}

function nextStep() {
  step.value++
  scrollToPageTop()
}
</script>

<template>
  <div class="page-container mb-24">
    <ClientOnly>
      <CartDetailsView v-if="step === 0" @next-step="nextStep" />
      <CartOrderView v-else-if="step === 1" @back-step="backStep" />
    </ClientOnly>
  </div>
</template>

<style scoped></style>

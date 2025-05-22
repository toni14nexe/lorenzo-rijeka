<script setup lang="ts">
import FacebookIcon from '~/assets/icons/facebook.vue'

function shareOnFacebook() {
  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`
  window.open(facebookShareUrl, '_blank')
}
</script>

<template>
    <ElButton type="primary" plain @click="shareOnFacebook">
        <ElIcon :size="24" class="mr-8">
            <FacebookIcon />
        </ElIcon>
        Podijeli
    </ElButton>
</template>

<style lang="css" scoped>
</style>

<script setup lang="ts">
import { ref } from 'vue'

const cookieAgreement = useCookie<string | null>('cookie_agreement', {
  default: () => null,
  secure: true,
  expires: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000) // 365 days expiration time
})

const show = ref(!cookieAgreement.value)

function acceptCookies() {
  cookieAgreement.value = '1'
  show.value = false
}
</script>

<template>
  <div v-if="show" class="cookie-message-container">
    <ElRow>
      <h3>Postavke kolačića</h3>
    </ElRow>
    <ElRow>
      <p>
        U svrhu pružanja boljeg korisničkog iskustva, Gastarbeiter.de.com
        koristi obavezne kolačiće (cookies). Detaljne informacije možete pronaći
        na stranici <a href="/cookies" class="link">Politika kolačića</a>.
      </p>
    </ElRow>
    <ElButton plain size="large" @click="acceptCookies">Razumijem</ElButton>
  </div>
</template>

<style scoped>
.cookie-message-container {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: var(--el-color-primary);
  border-top: 2px solid black;
  color: white;
  padding: 36px;
  text-align: center;
  font-weight: 700;
  z-index: 9999;
}
.link {
  color: var(--el-color-primary-light-7);
}
.link:hover {
  color: var(--el-color-primary-light-5);
}
</style>

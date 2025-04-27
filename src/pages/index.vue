<script lang="ts" setup>
useHead({
  title: 'Početna',
  meta: [
    {
      name: 'description',
      content:
        'Početna stranica odjavljenog korisnika. Osnovni podaci o aplikaciji, servisima i uslugama koje pružamo i uvijeti korištenja.'
    },
    { property: 'og:title', content: 'Početna' },
    {
      property: 'og:description',
      content:
        'Početna stranica odjavljenog korisnika. Osnovni podaci o aplikaciji, servisima i uslugama koje pružamo i uvijeti korištenja.'
    }
  ]
})

definePageMeta({
  layout: 'unauthorized-dashboard'
})
</script>

<template>
  <ElRow
    align="middle"
    justify="center"
    v-motion-slide-bottom
    :duration="300"
    :delay="1000"
  >
    <h1 class="color-primary">Usluge</h1>
  </ElRow>

  <ElRow
    align="middle"
    justify="center"
    v-motion-slide-left
    :duration="300"
    :delay="1000"
  >
    <p class="text-center">
      Naša aplikacija razvijena je s ciljem da korisnicima olakša vođenje
      različitih usluga bez ograničenja. Posebno smo usmjereni na jednostavnost
      korištenja i prilagodljivost, omogućujući korisnicima da aktivno sudjeluju
      u njezinom razvoju putem svojih ideja i prijedloga.
    </p>
  </ElRow>
  <ElRow
    align="middle"
    justify="center"
    v-motion-slide-right
    :duration="300"
    :delay="1000"
  >
    <p class="text-center">
      Jedna od ključnih značajki aplikacije je mogućnost
      <b>izvoza podataka u PDF format</b>, što korisnicima omogućuje brzo i
      jednostavno generiranje potrebnih dokumenata – posebno u situacijama poput
      inspekcijskih pregleda, kada su ti dokumenti neophodni.
    </p>
  </ElRow>

  <ElRow
    align="middle"
    justify="center"
    v-motion-slide-bottom
    :duration="300"
    :delay="1000"
    :gutter="12"
    class="mt-24 mb-24"
  >
    <ElCol :span="12" align="right">
      <NuxtLink to="/login" class="link-fix" v-motion-slide-left>
        <ElButton type="primary" class="button">Prijava</ElButton>
      </NuxtLink>
    </ElCol>
    <ElCol :span="12">
      <NuxtLink
        to="/login?tab=registration"
        class="link-fix"
        v-motion-slide-left
      >
        <ElButton type="primary" class="button">Registracija</ElButton>
      </NuxtLink>
    </ElCol>
  </ElRow>

  <Activities :h3-title="true" />
  <Terms />
</template>

<style lang="css" scoped>
.button {
  width: 120px;
}
.text-center {
  text-align: center;
}
</style>

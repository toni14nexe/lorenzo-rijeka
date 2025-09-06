<script setup lang="ts">
defineProps<{
  title: string
  text?: string
  text2?: string
  text3?: string
  buttonText?: string
  buttonSrc?: string
}>()
</script>

<template>
  <ElRow align="middle" class="introduction-text-container">
    <ElRow style="row-gap: 16px">
      <ElCol
        v-motion-slide-left
        :duration="1000"
        :delay="250"
        :xs="24"
        :lg="14"
      >
        <h1 class="color-primary">{{ title }}</h1>
      </ElCol>
      <ElCol :xs="0" :lg="10" />
      <ElCol v-if="text || text2" :xs="24" :lg="14">
        <p v-if="text" v-motion-slide-right :duration="1000" :delay="500">
          {{ text }}
        </p>
        <p
          v-if="text2"
          v-motion-slide-left
          :duration="1000"
          :delay="500"
          style="margin-top: 16px"
        >
          {{ text2 }}
        </p>
        <p
          v-if="text3"
          v-motion-slide-right
          :duration="1000"
          :delay="500"
          style="margin-top: 16px"
        >
          {{ text3 }}
        </p>
      </ElCol>
      <ElCol :xs="0" :lg="10" />
      <ElCol
        v-if="buttonSrc && buttonText"
        v-motion-slide-bottom
        :xs="24"
        :lg="14"
        :duration="1000"
        :delay="750"
      >
        <RouterLink :to="`/${buttonSrc}`">
          <ElButton size="large" type="primary">{{ buttonText }}</ElButton>
        </RouterLink>
      </ElCol>
      <ElCol :xs="0" :lg="10" />
    </ElRow>
  </ElRow>
</template>

<style scoped>
.introduction-text-container {
  padding: 120px;
  height: calc(100dvh - 60px);
}
h1 {
  color: black;
  font-weight: 700;
  letter-spacing: 2px;
}
p {
  font-weight: 500;
  letter-spacing: 0.75px;
  color: black;
}
button {
  font-size: large;
}

@media (max-width: 992px) {
  .introduction-text-container {
    padding: 0 16px;
  }
}
</style>

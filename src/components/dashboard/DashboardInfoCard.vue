<script setup lang="ts">
export type InfoCardData = {
  id: string
  title: string
  text: string
  position?: number
}

interface Props {
  cardInfo: InfoCardData
}

const props = defineProps<Props>()

const parsedHtml = computed(() =>
  props.cardInfo?.text ? props.cardInfo.text.replace(/&nbsp;/g, ' ') : ''
)
</script>

<template>
  <ElCard class="info-card">
    <span class="info-card-title">
      {{ cardInfo.title }}
    </span>
    <div v-html="parsedHtml" class="info-text" />
  </ElCard>
</template>

<style lang="css" scoped>
.info-card {
  width: 100%;
  height: 100%;
  margin-bottom: 12px;
}
.info-card-title {
  color: var(--el-color-primary);
  font-weight: 500;
}
.info-text {
  margin-top: 12px;
  line-height: 1.6;
  white-space: normal;
  word-wrap: break-word;
}
@media screen and (min-width: 768px) {
  .info-card {
    height: 330px;
  }
  @media screen and (min-width: 900px) {
    .info-card {
      height: 280px;
    }
    @media screen and (min-width: 1100px) {
      .info-card {
        height: 250px;
      }
    }
  }
}
</style>

<script setup lang="ts">
export type InfoCardData = {
  title: string
  infos: string[]
  icon: Component
}

interface Props {
  cardInfo: InfoCardData
}

defineProps<Props>()
</script>

<template>
  <ElCard class="info-card">
    <div class="info-card-header">
      <ElIcon size="24" class="color-primary">
        <component :is="cardInfo.icon" />
      </ElIcon>
      <span class="info-card-title">
        {{ cardInfo.title }}
      </span>
    </div>
    <p v-for="info in cardInfo.infos">{{ info }}</p>
  </ElCard>
</template>

<style lang="css" scoped>
.info-card {
  width: 100%;
  height: 100%;
  margin-bottom: 12px;
}
.info-card-header {
  display: flex;
  align-items: center;
  gap: 8px;
}
.info-card-title {
  color: var(--el-color-primary);
  font-weight: 500;
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

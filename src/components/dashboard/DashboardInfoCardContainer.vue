<script setup lang="ts">
import DashboardInfoCard from '~/components/dashboard/DashboardInfoCard.vue'
import type { InfoCardData } from '~/components/dashboard/DashboardInfoCard.vue'

defineProps<{
  cards: InfoCardData[] | undefined
}>()
</script>

<template>
  <div class="mb-12">
    <ElDivider style="padding-top: 24px" />

    <ElSkeleton v-if="!cards" animated>
      <template #template>
        <ElRow justify="center" align="middle" :gutter="12">
          <ElCol
            v-for="_ in $viewport.isLessThan('desktopMedium') ? 3 : 4"
            :span="
              $viewport.isLessThan('tablet')
                ? 24
                : $viewport.isLessThan('desktopMedium')
                  ? 8
                  : 6
            "
          >
            <ElSkeletonItem
              variant="image"
              style="height: 250px; border-radius: 4px; margin-bottom: 12px"
            />
          </ElCol>
        </ElRow>
      </template>
    </ElSkeleton>

    <ElRow v-else justify="center" align="middle" :gutter="12">
      <ElCol
        v-for="card in cards"
        :span="
          $viewport.isLessThan('tablet')
            ? 24
            : $viewport.isLessThan('desktopMedium')
              ? 8
              : 6
        "
      >
        <DashboardInfoCard :card-info="card" />
      </ElCol>
    </ElRow>
  </div>
</template>

<style lang="css" scoped></style>

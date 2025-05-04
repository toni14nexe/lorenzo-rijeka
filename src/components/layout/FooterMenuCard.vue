<script setup lang="ts">
defineProps(['categories', 'title', 'urlPrefix', 'loading', 'h3Title'])

const { $viewport } = useNuxtApp()
const colSpan = computed(() => {
  return $viewport.isLessOrEquals('mobileMedium')
    ? 24
    : $viewport.isLessOrEquals('mobileWide')
      ? 12
      : $viewport.isLessOrEquals('tablet')
        ? 8
        : 4
})
</script>

<template>
  <ElCard class="mt-24 mb-24">
    <ElRow class="footer" justify="center" align="middle">
      <h3 v-if="h3Title" class="color-primary">{{ title }}</h3>
      <span v-else class="color-primary">{{ title }}</span>
    </ElRow>
    <ElSkeleton v-if="loading" animated>
      <template #template>
        <ElRow justify="center" align="middle" class="row-gap-4 mt-8">
          <ElCol v-for="_ in 6" :span="colSpan" align="center">
            <ElSkeletonItem variant="h3" style="width: 50%" />
          </ElCol>
        </ElRow>
      </template>
    </ElSkeleton>
    <ElRow v-else justify="center" align="middle" class="row-gap-4 mt-8">
      <ElCol
        v-for="category in categories"
        :key="category.id as string"
        :span="colSpan"
        align="center"
      >
        <NuxtLink
          :to="`${urlPrefix ? urlPrefix : '/'}${category.name === 'Naslovnica' ? '' : category.name}`"
          class="link"
        >
          {{ category.name }}
        </NuxtLink>
      </ElCol>
    </ElRow>
  </ElCard>
</template>

<style scoped>
.link {
  text-decoration: none;
  color: var(--el-text-color-secondary);
}
.link:hover {
  text-decoration: none;
  color: var(--el-color-primary);
}
.row-gap-4 {
  row-gap: 4px;
}
</style>

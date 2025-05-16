<script setup lang="ts">
import { DArrowLeft, DArrowRight } from '@element-plus/icons-vue'

type Pagination = {
  page: number
  perPage: number
  total: number
}

const pagination = defineModel<Pagination>({ required: true })
const emit = defineEmits(['pageChange'])
const props = defineProps(['loading', 'scrollElementId'])
const firstLoading = ref(true)

watch(
  () => props.loading,
  state => {
    if (!state && !firstLoading.value) {
      const scrollTarget = document.getElementById(props.scrollElementId)
      scrollToElementTop(scrollTarget, -60)
    } else firstLoading.value = false
  }
)

function handlePerPageChange(option: 'prev' | 'next') {
  if (option === 'prev') {
    if (pagination.value.page > 1) {
      pagination.value.page -= 1
      emit('pageChange')
    }
  } else {
    if (
      pagination.value.page * pagination.value.perPage <
      pagination.value.total
    ) {
      pagination.value.page += 1
      emit('pageChange')
    }
  }
}
</script>

<template>
  <ElRow justify="center" align="middle" class="pagination-container">
    <ElIcon
      :size="24"
      class="mr-4 pagination-icon"
      :class="{
        'cursor-not-allowed': pagination.page <= 1
      }"
      @click="handlePerPageChange('prev')"
    >
      <DArrowLeft />
    </ElIcon>
    <span class="pagination-text">
      {{
        `${pagination.page * pagination.perPage < pagination.total ? pagination.page * pagination.perPage : pagination.total} / ${pagination.total}`
      }}
    </span>
    <ElIcon
      :size="24"
      class="mr-4 pagination-icon"
      :class="{
        'cursor-not-allowed':
          pagination.page * pagination.perPage >= pagination.total
      }"
      @click="handlePerPageChange('next')"
    >
      <DArrowRight />
    </ElIcon>
  </ElRow>
</template>

<style lang="css" scoped>
.pagination-container {
  padding: 4px 24px;
  border-radius: 4px;
  gap: 24px;
}
.pagination-text {
  font-size: large;
  color: var(--el-text-color-secondary);
}
.pagination-icon {
  width: 30px;
  height: 25px;
  transition: 0.3s ease-in-out;
  cursor: pointer;
  color: var(--el-text-color-secondary);
}
.pagination-icon:hover {
  color: var(--el-color-primary);
}
.cursor-not-allowed {
  cursor: not-allowed;
}
.cursor-not-allowed:hover {
  color: var(--el-text-color-secondary);
}
</style>

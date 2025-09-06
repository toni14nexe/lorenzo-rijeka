<script setup lang="ts">
import { ArrowRight } from '@element-plus/icons-vue'

defineProps(['category', 'treeDeep']) // treeDeep - for margin, start with 0
const emit = defineEmits(['closeMenu'])

const route = useRoute()
const isOpen = ref(false)
</script>

<template>
  <template v-if="category.children.length" v-motion-slide-left :duration="150">
    <ElRow style="display: flex" v-motion-slide-left :duration="150">
      <ElCol :span="21">
        <NuxtLink
          :to="`/webshop/${category.name}`"
          class="el-button button-with-childs"
          :class="{
            'el-button--primary': `/webshop/${category.name}` === route.path
          }"
          :style="`margin-left: ${30 * treeDeep}px; width: calc(100% - ${30 * treeDeep}px`"
          @click="emit('closeMenu')"
        >
          <ElRow class="button-text-wrapper" align="middle">
            {{ category.name }}
          </ElRow>
        </NuxtLink>
      </ElCol>
      <ElCol :span="3">
        <ElButton class="portal-more-button" @click="isOpen = !isOpen">
          <ElIcon
            :size="20"
            :class="{
              'rotate-90': isOpen,
              'rotate-0': !isOpen
            }"
            class="transition-transform"
          >
            <ArrowRight />
          </ElIcon>
        </ElButton>
      </ElCol>
    </ElRow>
    <HeaderWebshopDrawerItem
      v-if="isOpen"
      v-for="category in category.children"
      :key="category.name"
      v-motion-slide-left
      :duration="150"
      :category="category"
      :tree-deep="treeDeep + 1"
      @close-menu="emit('closeMenu')"
    />
  </template>
  <NuxtLink
    v-else
    v-motion-slide-left
    :duration="150"
    :to="`/webshop/${category.name}`"
    class="el-button button"
    :class="{
      'el-button--primary': `/webshop/${category.name}` === route.path
    }"
    :style="`margin-left: ${30 * treeDeep}px`"
    @click="emit('closeMenu')"
  >
    <ElRow class="button-text-wrapper" align="middle">
      {{ category.name }}
    </ElRow>
  </NuxtLink>
</template>

<style scoped>
.button {
  height: 35px;
  font-weight: 500;
  text-decoration: none;
  margin: 0;
  border-radius: 8px;
}
.button-with-childs {
  height: 35px;
  font-weight: 500;
  text-decoration: none;
  margin: 0;
  border-radius: 8px 0 0 8px;
}
.button-text-wrapper {
  width: 100%;
  gap: 12px;
}
.portal-more-button {
  width: 100%;
  height: 35px;
  border-radius: 0 8px 8px 0;
  border-left: none;
}
.portal-more-button:hover {
  color: var(--el-button-hover-text-color) !important;
  background-color: var(--el-color-primary-light-9) !important;
}
.rotate-90 {
  transform: rotate(90deg);
}
.rotate-0 {
  transform: rotate(0deg);
}
.transition-transform {
  transition: transform 0.3s ease;
}
</style>

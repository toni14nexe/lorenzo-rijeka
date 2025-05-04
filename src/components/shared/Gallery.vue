<script setup lang="ts">
import { ref } from 'vue'
import { ArrowRightBold, ArrowLeftBold } from '@element-plus/icons-vue'

const props = defineProps<{
  links: string[]
}>()

const currentIndex = ref(0)
const sliderRef = ref<HTMLDivElement | null>(null)

function next() {
  currentIndex.value = (currentIndex.value + 1) % props.links.length
}
function prev() {
  currentIndex.value =
    (currentIndex.value - 1 + props.links.length) % props.links.length
}
function enterFullscreen() {
  if (sliderRef.value?.requestFullscreen) {
    sliderRef.value.requestFullscreen()
  }
}
</script>

<template>
  <div ref="sliderRef" class="slider-container">
    <div class="media-display">
      <img
        v-if="links[currentIndex].includes('/image/')"
        :src="links[currentIndex]"
        class="media-item"
      />
      <video v-else :src="links[currentIndex]" controls class="media-item" />
    </div>

    <div class="controls">
      <ElButton @click="prev" size="large">
        <ElIcon><ArrowLeftBold /></ElIcon>
      </ElButton>
      <ElButton @click="enterFullscreen" size="large">⛶</ElButton>
      <ElButton @click="next" size="large">
        <ElIcon><ArrowRightBold /></ElIcon>
      </ElButton>
    </div>
  </div>
</template>

<style scoped>
.slider-skeleton {
  height: 60dvh;
}
.slider-container {
  position: relative;
  max-width: 100%;
  background: var(--el-color-primary-light-9);
  padding: 1rem;
  border-radius: 10px;
  overflow: hidden;
}
.media-display {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.media-item {
  max-width: 100%;
  max-height: 60dvh;
  object-fit: contain;
  border-radius: 8px;
}
.controls {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
  transform: translateY(-50%);
}
.controls button {
  background: rgba(0, 0, 0, 0.75);
  border: none;
  color: #fff;
  font-size: 2rem;
  cursor: pointer;
  border-radius: 20px;
}
.controls button:hover {
  background: rgba(0, 0, 0, 0.3);
}
@media (min-width: 767px) {
  .slider-container {
    height: 60dvh;
  }
}
</style>

<script setup lang="ts">
import { Clock, Location } from '@element-plus/icons-vue'

defineProps(['job'])
</script>

<template>
  <div v-if="job" class="job cursor-pointer">
    <NuxtLink :to="`/poslovi/${job.id}`">
      <div class="job-opacity-container" />
      <div class="job-text-container">
        <h3>
          {{ truncateText(job.name, 40) }}
        </h3>
        <ElRow class="datetime mb-16" align="middle" justify="center">
          <ElIcon :size="18" class="mr-8">
            <Location />
          </ElIcon>
          {{ truncateText(job.location, 60) }}
        </ElRow>
        <ElRow class="datetime mb-16" align="middle">
          <ElIcon :size="18" class="mr-8">
            <Clock />
          </ElIcon>
          {{ formatISOToDatetime(job.createdAt) }}
        </ElRow>
      </div>
    </NuxtLink>
  </div>
  <ElEmpty v-else class="job" description="Trenutno nedostupno!" />
</template>

<style lang="css" scoped>
.job {
  position: relative;
  border: 1px solid var(--el-border-color);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  height: 100%;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: var(--el-box-shadow-light);
}
.job-opacity-container {
  opacity: 0.1;
  background-color: black;
  height: 100%;
  transition: 0.3s ease-in-out;
}
.job:hover .job-opacity-container {
  opacity: 0.25;
}
.job-text-container {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: black;
  text-align: center;
}
.datetime {
  font-weight: 400;
}
@media screen and (max-width: 1025px) {
  h3 {
    font-size: medium;
  }
  .datetime {
    font-size: small;
  }
}
</style>

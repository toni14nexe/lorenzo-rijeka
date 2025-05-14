<script setup lang="ts">
import type { Job } from '~/types/jobs'

const { $axios } = useNuxtApp()
const route = useRoute()
const isLoading = ref(true)
const job = ref<Job>()

onMounted(() => getJob())

async function getJob() {
  isLoading.value = true
  try {
    const response = await $axios.get(`/job/${route.params.jobId}`)
    job.value = response.data
  } catch (error) {
    console.error('API Error:', error)
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <div class="page-container">
    <template v-if="isLoading">
      <ElSkeleton animated>
        <template #template>
          <ElRow justify="center">
            <h3 style="width: 30%">
              <ElSkeletonItem variant="h3" />
            </h3>
          </ElRow>
          <ElRow
            v-for="(_, index) in 6"
            justify="space-between"
            align="middle"
            :class="{ 'mb-12': index === 1, 'mb-24': index === 5 }"
            style="height: 21px"
          >
            <ElSkeletonItem variant="text" style="width: 30%" />
          </ElRow>
          <ElRow class="mb-24">
            <ElSkeletonItem
              v-for="_ in 10"
              variant="text"
              style="width: 100%; margin-bottom: 12px"
            />
          </ElRow>
        </template>
      </ElSkeleton>
    </template>
    <ElEmpty v-else-if="!job" description="Ups! Nema dostupnih poslova..." />
    <template v-else>
      <ElRow justify="center" align="middle">
        <h3 class="color-primary">{{ job?.name }}</h3>
      </ElRow>
      <ElRow align="middle" class="color-zinc">
        Oglas objavljen: {{ formatISOToDatetime(job.createdAt) }}
      </ElRow>
      <ElRow align="middle" class="color-zinc mb-12">
        Kategorija:
        {{ job.jobCategory.name }}
      </ElRow>
      <ElRow v-if="job.location" align="middle" class="font-weight-500">
        Lokacija:
        {{ job.location }}
      </ElRow>
      <ElRow v-if="job.contactEmail" align="middle" class="font-weight-500">
        Email:
        <a :href="`mailto:${job.contactEmail}`" class="ml-4">{{
          job.contactEmail
        }}</a>
      </ElRow>
      <ElRow v-if="job.contactNumber" align="middle" class="font-weight-500">
        Broj:
        {{ job.contactNumber }}
      </ElRow>
      <ElRow v-if="job.salary" align="middle" class="mb-24 font-weight-500">
        Plaća:
        {{ Number(job.salary).toFixed(2) }} €
      </ElRow>
      <div v-html="job.description" class="job-content" />
    </template>
  </div>
</template>

<style lang="css" scoped>
.job-content {
  line-height: 1.6;
  white-space: normal;
  word-wrap: break-word;
}
.font-weight-500 {
  font-weight: 500;
}
</style>

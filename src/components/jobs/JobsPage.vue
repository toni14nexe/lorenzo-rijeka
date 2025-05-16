<script setup lang="ts">
import JobWidget from '~/components/shared/JobWidget.vue'
import Pagination from '~/components/shared/Pagination.vue'
import type { Job } from '~/types/jobs'
import { Search } from '@element-plus/icons-vue'

const { $viewport, $axios } = useNuxtApp()
const categoriesStore = useCategoriesStore()
const { categoriesLoading, jobsCategories } = storeToRefs(categoriesStore)
const firstTimeFetchingData = ref(true)
const categorySearch = ref<string[]>([])
const isLoading = ref(true)
const pagination = ref({
  page: 1,
  perPage: 10,
  total: 0
})
const newestJobs = ref<Job[]>()
const jobs = ref<Job[]>([])

onMounted(() => getJobs())

function handleCategorySearch() {
  pagination.value.page = 1
  getJobs()
}

async function getJobs() {
  isLoading.value = true
  try {
    const response = await $axios.get(
      `/job?page=${pagination.value.page}&perPage=${pagination.value.perPage}&categoryIds=${categorySearch.value}`
    )
    pagination.value.total = response.data.total
    jobs.value = response.data.jobs
    if (firstTimeFetchingData.value) newestJobs.value = jobs.value.slice(0, 3)
  } catch (error) {
    console.error('API Error:', error)
  } finally {
    firstTimeFetchingData.value = false
    isLoading.value = false
  }
}
</script>

<template>
  <div class="page-container">
    <template v-if="isLoading">
      <ElSkeleton animated>
        <template #template>
          <ElRow v-if="$viewport.isGreaterOrEquals('tablet')" justify="center">
            <h3 class="color-primary">Najnoviji poslovi</h3>
          </ElRow>
          <ElRow
            v-if="$viewport.isGreaterOrEquals('tablet')"
            :gutter="12"
            class="mb-24"
          >
            <ElCol
              v-for="_ in 3"
              :xs="24"
              :sm="8"
              :class="{ 'mt-12': $viewport.isLessOrEquals('tablet') }"
            >
              <ElSkeletonItem variant="image" class="skeleton-image" />
            </ElCol>
          </ElRow>
          <ElDivider v-if="$viewport.isGreaterOrEquals('tablet')" />
          <ElRow justify="center">
            <h3 class="color-primary">Poslovi</h3>
          </ElRow>
          <ElRow justify="center" align="middle" class="mb-24">
            <ElSkeletonItem
              variant="text"
              :style="`width: ${$viewport.isLessThan('mobileWide') ? '195' : '320'}px; height: 32px`"
            />
            <ElButton
              type="primary"
              plain
              class="ml-8"
              @click="getJobs"
              disabled
            >
              <ElIcon :size="20">
                <Search />
              </ElIcon>
            </ElButton>
          </ElRow>
          <ElRow :gutter="12" class="mb-24">
            <ElCol
              v-for="(_, index) in 10"
              :xs="24"
              :sm="12"
              :class="{
                'mt-12':
                  (index > 0 && $viewport.isLessThan('tablet')) ||
                  (index > 1 && $viewport.isGreaterOrEquals('tablet'))
              }"
            >
              <ElSkeletonItem variant="image" class="skeleton-image" />
            </ElCol>
          </ElRow>
        </template>
      </ElSkeleton>
    </template>
    <template v-else-if="!jobs.length">
      <ElRow justify="center">
        <h3 class="color-primary">Poslovi</h3>
      </ElRow>
      <ElRow justify="center" align="middle">
        <ElSelect
          v-model="categorySearch"
          multiple
          filterable
          allow-create
          default-first-option
          :reserve-keyword="false"
          placeholder="Odaberite kategoriju"
          :loading="categoriesLoading"
          :style="`width: ${$viewport.isLessThan('mobileWide') ? '195' : '320'}px`"
        >
          <ElOption
            v-for="category in jobsCategories"
            :key="String(category.id)"
            :label="String(category.name)"
            :value="String(category.id)"
          />
        </ElSelect>
        <ElButton type="primary" plain class="ml-8" @click="getJobs">
          <ElIcon :size="20">
            <Search />
          </ElIcon>
        </ElButton>
      </ElRow>
      <ElEmpty description="Ups! Ovdje nema dostupnih poslova..." />
    </template>
    <template v-else>
      <ElRow v-if="$viewport.isGreaterOrEquals('tablet')" justify="center">
        <h3 class="color-primary">Najnoviji poslovi</h3>
      </ElRow>
      <ElRow
        v-if="$viewport.isGreaterOrEquals('tablet')"
        :gutter="12"
        class="mb-24"
      >
        <ElCol
          v-for="job in newestJobs"
          :key="String(job.id)"
          :xs="24"
          :sm="8"
          class="job-container"
          :class="{ 'mt-12': $viewport.isLessOrEquals('tablet') }"
        >
          <JobWidget :job="job" />
        </ElCol>
      </ElRow>

      <ElDivider
        id="scroll-element"
        :class="{ 'display-none': $viewport.isLessThan('tablet') }"
      />

      <ElRow justify="center">
        <h3 class="color-primary">Poslovi</h3>
      </ElRow>

      <ElRow justify="center" align="middle" class="mb-24">
        <ElSelect
          v-model="categorySearch"
          multiple
          filterable
          allow-create
          default-first-option
          :reserve-keyword="false"
          placeholder="Odaberite kategoriju"
          :loading="categoriesLoading"
          :style="`width: ${$viewport.isLessThan('mobileWide') ? '195' : '320'}px`"
        >
          <ElOption
            v-for="category in jobsCategories"
            :key="String(category.id)"
            :label="String(category.name)"
            :value="String(category.id)"
          />
        </ElSelect>
        <ElButton
          type="primary"
          plain
          class="ml-8"
          @click="handleCategorySearch"
        >
          <ElIcon :size="20">
            <Search />
          </ElIcon>
        </ElButton>
      </ElRow>

      <ElRow :gutter="12" class="mb-24">
        <ElCol
          v-for="job in jobs"
          :key="String(job.id)"
          :xs="24"
          :sm="12"
          class="mb-12 job"
        >
          <JobWidget :job="job" class="job" />
        </ElCol>
      </ElRow>
    </template>
    <Pagination
      v-if="pagination.total > 10"
      v-model="pagination"
      :loading="isLoading"
      scroll-element-id="scroll-element"
      @page-change="getJobs"
      class="mb-24"
    />
  </div>
</template>

<style lang="css" scoped>
.job-container {
  height: 20dvh;
}
.skeleton-image {
  height: 20dvh;
  border-radius: 4px;
}
.job {
  width: 100%;
  height: 20dvh;
}
</style>

<script setup lang="ts">
import { useRoute, useRuntimeConfig, useHead } from '#imports'
import JobPage from '~/components/jobs/JobPage.vue'
import { stripHtml } from 'string-strip-html'
import type { Job } from '~/types/jobs'

const config = useRuntimeConfig()
const route = useRoute()
const jobId = route.params.jobId as string
const baseUrl = config.public.appBaseUrl.replace(/\/$/, '')

const { data: job, pending: isLoading } = await useAsyncData<Job>(
  `job-${jobId}`,
  () => $fetch(`${config.public.axiosApiBaseUrl}/job/${jobId}`)
)

if (job.value) {
  const description = stripHtml((job.value.description as string) || '')
    .result.trim()
    .slice(0, 160)
  const image =
    'https://res.cloudinary.com/dhaa1aobr/image/upload/v1747342580/favicon-180x180_we2zi4.png'
  const url = `${baseUrl}${route.fullPath}`

  useHead({
    title: job.value.name as string,
    meta: [
      {
        name: 'description',
        content: description
      },
      {
        property: 'og:title',
        content: job.value.name as string
      },
      {
        property: 'og:description',
        content: description
      },
      {
        property: 'og:image',
        content: image
      },
      {
        property: 'og:url',
        content: url
      },
      {
        property: 'og:type',
        content: 'article'
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        name: 'twitter:title',
        content: job.value.name as string
      },
      {
        name: 'twitter:description',
        content: description
      },
      {
        name: 'twitter:image',
        content: image
      }
    ]
  })
}
</script>

<template>
  <JobPage :job="job" :is-loading="isLoading" />
</template>

<script setup lang="ts">
import { useRoute, useRuntimeConfig, useHead } from '#imports'
import PortalNewsPage from '~/components/portal/PortalNewsPage.vue'
import { stripHtml } from 'string-strip-html'
import { decode } from 'html-entities'
import type { News } from '~/types/portal'

const config = useRuntimeConfig()
const route = useRoute()
const newsId = route.params.newsId as string
const baseUrl = config.public.appBaseUrl.replace(/\/$/, '')

const { data: news, pending: isLoading } = await useAsyncData<News>(
  `news-${newsId}`,
  () => $fetch(`${config.public.axiosApiBaseUrl}/portal-news/${newsId}`)
)

if (news.value) {
  let descriptionRaw = stripHtml((news.value.text as string) || '').result

  // Zamjena svih varijacija non-breaking space u obični razmak
  descriptionRaw = descriptionRaw
    .replace(/&nbsp;|\u00A0/g, ' ') // HTML i Unicode NBSP
    .replace(/\s+/g, ' ') // višestruki razmaci -> jedan razmak

  const description = decode(descriptionRaw).trim().slice(0, 160)

  const image =
    (news.value.images?.[0] as string) ||
    'https://res.cloudinary.com/dhaa1aobr/image/upload/v1747342580/favicon-180x180_we2zi4.png'

  const url = `${baseUrl}${route.fullPath}`

  useHead({
    title: news.value.title as string,
    meta: [
      {
        name: 'description',
        content: description
      },
      {
        property: 'og:title',
        content: news.value.title as string
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
        content: news.value.title as string
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
  <PortalNewsPage :news="news" :is-loading="isLoading" />
</template>

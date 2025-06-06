import type { SitemapUrlInput } from '#sitemap/types'

export default defineEventHandler(async () => {
  const baseUrl = process.env.APP_BASE_URL

  // Fetchanje podataka paralelno
  const [newsRes, jobsRes, productsRes, categoriesRes] = await Promise.all([
    fetch(`${baseUrl}/api/portal-news`),
    fetch(`${baseUrl}/api/job`),
    fetch(`${baseUrl}/api/product`),
    fetch(`${baseUrl}/api/portal-category/sitemap`)
  ])

  if (!newsRes.ok || !jobsRes.ok || !productsRes.ok || !categoriesRes.ok) {
    throw new Error('Failed to fetch one of the sitemap sources.')
  }

  const [newsData, jobsData, productsData, portalCategories] =
    await Promise.all([
      newsRes.json(),
      jobsRes.json(),
      productsRes.json(),
      categoriesRes.json()
    ])

  const news = newsData.news ?? []
  const jobs = jobsData.jobs ?? []
  const products = productsData.products ?? []

  const newsUrls = news.map((item: any) => ({
    loc: `/portal/vijest/${item.id}`
  }))

  const jobUrls = jobs.map((item: any) => ({
    loc: `/poslovi/${item.id}`
  }))

  const productUrls = products.map((item: any) => ({
    loc: `/webshop/${item.id}`
  }))

  const portalCategoryUrls = portalCategories.map((item: any) => ({
    loc: `/portal/${item.slug || item.name.toLowerCase().replace(/\s+/g, '-')}`
  }))

  const staticUrls: SitemapUrlInput[] = [
    { loc: '/', changefreq: 'daily', priority: 1.0 },
    { loc: '/portal', changefreq: 'weekly', priority: 0.8 },
    { loc: '/poslovi', changefreq: 'weekly', priority: 0.8 },
    { loc: '/webshop', changefreq: 'weekly', priority: 0.8 },
    { loc: '/kontakt', changefreq: 'monthly', priority: 0.5 },
    { loc: '/reklamiranje', changefreq: 'monthly', priority: 0.5 },
    { loc: '/pretrazivanje', changefreq: 'monthly', priority: 0.5 }
  ]

  return [
    ...staticUrls,
    ...newsUrls,
    ...jobUrls,
    ...productUrls,
    ...portalCategoryUrls
  ] satisfies SitemapUrlInput[]
})

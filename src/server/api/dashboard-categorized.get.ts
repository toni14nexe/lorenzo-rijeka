import { defineEventHandler } from 'h3'
import { prisma } from '~/server/utils/prisma'

export default defineEventHandler(async event => {
  const query = getQuery(event)
  const type = String(query.type || 'portal')
  let data = undefined

  if (type === 'webshop')
    data = await prisma.product.findMany({
      where: { deletedAt: null },
      orderBy: { createdAt: 'desc' },
      take: 3,
      include: { productCategory: true }
    })
  else if (type === 'jobs')
    data = await prisma.job.findMany({
      where: { deletedAt: null },
      orderBy: { createdAt: 'desc' },
      take: 3,
      include: { jobCategory: true }
    })
  else
    data = await prisma.news.findMany({
      where: { deletedAt: null },
      orderBy: { createdAt: 'desc' },
      take: 3,
      include: { category: true }
    })

  return { ...data }
})

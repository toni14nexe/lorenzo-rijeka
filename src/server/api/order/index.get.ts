import { defineEventHandler } from 'h3'
import { prisma } from '~/server/utils/prisma'

export default defineEventHandler(async event => {
  const query = getQuery(event)
  const perPage = Number(query.perPage) || 10
  const page = Number(query.page) || 1
  const skip = (page - 1) * perPage
  const search = String(query.search || '')

  const where: any = { deletedAt: null }

  if (search)
    where.name = {
      contains: search,
      mode: 'insensitive'
    }

  const [orders, total] = await Promise.all([
    prisma.order.findMany({
      where: {
        deletedAt: null,
        ...(search && {
          OR: [
            { id: { contains: search, mode: 'insensitive' } },
            { buyerFullname: { contains: search, mode: 'insensitive' } },
            { product: { name: { contains: search, mode: 'insensitive' } } }
          ]
        })
      },
      orderBy: { createdAt: 'desc' },
      skip,
      take: perPage,
      include: { product: true }
    }),
    prisma.order.count({ where: { deletedAt: null } })
  ])

  return { orders, total }
})

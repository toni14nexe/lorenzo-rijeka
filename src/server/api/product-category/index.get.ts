import { defineEventHandler } from 'h3'
import { prisma } from '~/server/utils/prisma'

export default defineEventHandler(async event => {
  const query = getQuery(event)
  const deletedOnly = query.deletedOnly === 'true'
  const search = query.search || ''

  if (deletedOnly) var where: any = { deletedAt: { not: null } }
  else where = { deletedAt: null }

  if (search)
    where.name = {
      contains: search,
      mode: 'insensitive'
    }

  const categories = await prisma.productCategory.findMany({
    where,
    orderBy: { name: 'asc' }
  })

  return categories
})

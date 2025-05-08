import { defineEventHandler } from 'h3'
import { prisma } from '~/server/utils/prisma'

export default defineEventHandler(async event => {
  const query = getQuery(event)
  const deletedOnly = query.deletedOnly === 'true'

  if (deletedOnly) var where: any = { deletedAt: { not: null } }
  else where = { deletedAt: null }

  const categories = await prisma.jobsCategory.findMany({
    where,
    orderBy: { name: 'asc' }
  })

  return categories
})

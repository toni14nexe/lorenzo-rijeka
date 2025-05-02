import { defineEventHandler } from 'h3'
import { prisma } from '~/server/utils/prisma'

export default defineEventHandler(async event => {
  const categories = await prisma.jobsCategory.findMany({
    where: { deletedAt: null },
    orderBy: { name: 'asc' }
  })

  return categories
})

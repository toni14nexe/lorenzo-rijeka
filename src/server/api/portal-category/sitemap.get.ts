import { defineEventHandler } from 'h3'

export default defineEventHandler(async event => {
  const portalCategories = await prisma.portalCategory.findMany({
    orderBy: { name: 'asc' },
    include: { parent: true }
  })

  return portalCategories || []
})

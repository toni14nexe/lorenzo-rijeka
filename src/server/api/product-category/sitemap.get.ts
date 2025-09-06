import { defineEventHandler } from 'h3'

export default defineEventHandler(async event => {
  const categories = await prisma.productCategory.findMany({
    orderBy: { name: 'asc' },
    include: { parent: true }
  })

  return categories || []
})

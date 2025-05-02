import { createError, defineEventHandler } from 'h3'
import { prisma } from '~/server/utils/prisma'

export default defineEventHandler(async event => {
  const { params } = event.context
  if (!params || !params.id) {
    throw createError({
      statusCode: 400,
      statusMessage: 'ID parameter is required'
    })
  }

  await prisma.product.update({
    where: { id: params.id },
    data: { deletedAt: new Date() }
  })

  return { message: 'Product deleted successfully' }
})

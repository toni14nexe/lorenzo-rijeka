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

  const product = await prisma.product.findUnique({
    where: {
      id: params.id,
      deletedAt: null
    },
    include: { productCategory: true }
  })

  if (!product) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Product not found or deleted'
    })
  }

  return product
})

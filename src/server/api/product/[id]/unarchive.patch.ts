import { createError, defineEventHandler, readBody } from 'h3'
import { prisma } from '~/server/utils/prisma'

export default defineEventHandler(async event => {
  const { params } = event.context

  if (!params || !params.id) {
    throw createError({
      statusCode: 400,
      statusMessage: 'ID parameter is required'
    })
  }

  try {
    const product = await prisma.product.update({
      where: { id: params.id },
      data: {
        deletedAt: null,
        updatedAt: new Date()
      }
    })

    return product
  } catch (error) {
    console.error('Error updating webshop product:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to update webshop product'
    })
  }
})

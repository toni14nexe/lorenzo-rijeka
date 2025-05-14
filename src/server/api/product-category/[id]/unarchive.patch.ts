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
    const productCategory = await prisma.productCategory.update({
      where: { id: params.id },
      data: {
        deletedAt: null,
        updatedAt: new Date()
      }
    })

    return productCategory
  } catch (error) {
    console.error('Error updating product category:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to update product category'
    })
  }
})

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

  const category = await prisma.productCategory.findUnique({
    where: {
      id: params.id,
      deletedAt: null
    }
  })

  if (!category) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Webshop category not found or deleted'
    })
  }

  return category
})

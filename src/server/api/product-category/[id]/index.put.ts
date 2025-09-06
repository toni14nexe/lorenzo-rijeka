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

  const body = await readBody(event)

  try {
    const category = await prisma.productCategory.update({
      where: { id: params.id },
      data: {
        name: body.name,
        parentId: body.parentId ? body.parentId : null,
        image: body.image ? body.image : null,
        updatedAt: new Date()
      }
    })

    return category
  } catch (error) {
    console.error('Error updating webshop category:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to update webshop category'
    })
  }
})

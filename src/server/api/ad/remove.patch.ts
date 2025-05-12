import { createError, defineEventHandler, readBody } from 'h3'
import { prisma } from '~/server/utils/prisma'

export default defineEventHandler(async event => {
  const body = await readBody(event)

  if (!body.id) {
    throw createError({
      statusCode: 400,
      statusMessage: 'ID parameter is required'
    })
  }

  try {
    const ad = await prisma.ad.update({
      where: { id: body.id },
      data: {
        url: null,
        imageUrl: ''
      }
    })

    return ad
  } catch (error) {
    console.error('Error updating ad:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed updating ad'
    })
  } finally {
    await prisma.$disconnect()
  }
})

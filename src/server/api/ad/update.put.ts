import { createError, defineEventHandler, readBody } from 'h3'
import { prisma } from '~/server/utils/prisma'

export default defineEventHandler(async event => {
  const body = await readBody(event)

  if (!body.id || !body.imageUrl || !body.price) {
    throw createError({
      statusCode: 400,
      statusMessage:
        "Body parameter is missing, this body should include: 'id', 'imageUrl' and 'price'."
    })
  }

  try {
    const ad = await prisma.ad.update({
      where: { id: body.id },
      data: {
        url: body.url ? body.url : null,
        imageUrl: body.imageUrl,
        price: Number(body.price)
      }
    })

    return ad
  } catch (error) {
    console.error('Error updating ad:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed updating ad'
    })
  }
})

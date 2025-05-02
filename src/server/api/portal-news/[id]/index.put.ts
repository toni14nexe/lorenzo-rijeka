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

  const category = await prisma.portalCategory.findUnique({
    where: { id: body.categoryId }
  })

  if (!category) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Invalid categoryId'
    })
  }

  try {
    const news = await prisma.news.update({
      where: { id: params.id },
      data: {
        title: body.title,
        text: body.text,
        author: body.author,
        images: body.images || [],
        videos: body.videos || [],
        categoryId: body.categoryId,
        updatedAt: new Date()
      }
    })

    return news
  } catch (error) {
    console.error('Error updating news:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to update news'
    })
  } finally {
    await prisma.$disconnect()
  }
})

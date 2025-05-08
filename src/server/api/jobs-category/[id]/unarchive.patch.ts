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
    const jobsCategory = await prisma.jobsCategory.update({
      where: { id: params.id },
      data: {
        deletedAt: null,
        updatedAt: new Date()
      }
    })

    return jobsCategory
  } catch (error) {
    console.error('Error updating jobs category:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to update jobs category'
    })
  } finally {
    await prisma.$disconnect()
  }
})

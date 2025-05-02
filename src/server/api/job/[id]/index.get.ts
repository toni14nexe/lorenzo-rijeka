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

  const jobs = await prisma.job.findUnique({
    where: {
      id: params.id,
      deletedAt: null
    }
  })

  if (!jobs) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Job not found or deleted'
    })
  }

  return jobs
})

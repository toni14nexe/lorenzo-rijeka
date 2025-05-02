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

  const jobCategory = await prisma.jobsCategory.findUnique({
    where: { id: body.jobCategoryId }
  })

  if (!jobCategory) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Invalid jobCategoryId'
    })
  }

  try {
    const job = await prisma.job.update({
      where: { id: params.id },
      data: {
        name: body.name,
        description: body.description,
        salary: body.salary,
        jobCategoryId: body.jobCategoryId,
        updatedAt: new Date()
      }
    })

    return job
  } catch (error) {
    console.error('Error updating job:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to update job'
    })
  } finally {
    await prisma.$disconnect()
  }
})

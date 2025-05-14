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

  if (
    !body.contactEmail ||
    !body.name ||
    !body.description ||
    !body.salary ||
    !body.location
  ) {
    throw createError({
      statusCode: 400,
      statusMessage:
        "Body parameter is missing, this body should include: 'contactEmail', 'name', 'description', 'salary' and 'location'. 'contactNumber' is optional."
    })
  }

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
        contactEmail: body.contactEmail,
        contactNumber: body.contactNumber,
        location: body.location,
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
  }
})

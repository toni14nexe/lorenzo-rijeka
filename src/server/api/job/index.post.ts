import { defineEventHandler, readBody } from 'h3'
import { prisma } from '~/server/utils/prisma'

export default defineEventHandler(async event => {
  if (event.req.method === 'POST') {
    const body = await readBody(event)

    if (!body.contactEmail || !body.name || !body.description || !body.salary) {
      throw createError({
        statusCode: 400,
        statusMessage:
          "Body parameter is missing, this body should include: 'contactEmail', 'name', 'description' and 'salary'. 'contactNumber' is optional."
      })
    }

    const job = await prisma.job.create({
      data: {
        name: body.name,
        description: body.description,
        salary: body.salary,
        contactEmail: body.contactEmail,
        contactNumber: body.contactNumber,
        jobCategory: {
          connect: {
            id: body.jobCategoryId
          }
        }
      }
    })

    return job
  }
})

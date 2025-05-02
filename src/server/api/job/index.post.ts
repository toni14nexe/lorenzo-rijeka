import { defineEventHandler, readBody } from 'h3'
import { prisma } from '~/server/utils/prisma'

export default defineEventHandler(async event => {
  if (event.req.method === 'POST') {
    const body = await readBody(event)

    const job = await prisma.job.create({
      data: {
        name: body.name,
        description: body.description,
        salary: body.salary,
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

import { defineEventHandler, readBody } from 'h3'
import { prisma } from '~/server/utils/prisma'

export default defineEventHandler(async event => {
  if (event.req.method === 'POST') {
    const body = await readBody(event)

    const portalCategory = await prisma.portalCategory.create({
      data: {
        name: body.name,
        parentId: body.parentId
      }
    })

    return portalCategory
  }
})

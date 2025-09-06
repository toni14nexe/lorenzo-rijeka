import { defineEventHandler, readBody } from 'h3'
import { prisma } from '~/server/utils/prisma'

export default defineEventHandler(async event => {
  if (event.req.method === 'POST') {
    const body = await readBody(event)

    const category = await prisma.productCategory.create({
      data: {
        name: body.name,
        parentId: body.parentId,
        image: body.image
      }
    })

    return category
  }
})

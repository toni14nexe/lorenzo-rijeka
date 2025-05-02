import { defineEventHandler, readBody } from 'h3'
import { prisma } from '~/server/utils/prisma'

export default defineEventHandler(async event => {
  if (event.req.method === 'POST') {
    const body = await readBody(event)

    const product = await prisma.product.create({
      data: {
        name: body.name,
        description: body.description,
        price: body.price,
        images: body.images || [],
        videos: body.videos || [],
        productCategory: {
          connect: {
            id: body.productCategoryId
          }
        }
      }
    })

    return product
  }
})

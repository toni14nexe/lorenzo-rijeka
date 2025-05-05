import { defineEventHandler, readBody } from 'h3'
import { prisma } from '~/server/utils/prisma'

export default defineEventHandler(async event => {
  if (event.req.method === 'POST') {
    const body = await readBody(event)

    if (
      !body.productId ||
      !body.quantity ||
      !body.buyerFullname ||
      !body.buyerEmail ||
      !body.buyerAddress ||
      !body.buyerPlace ||
      !body.buyerZipCode ||
      !body.buyerCountry
    )
      throw createError({
        statusCode: 400,
        statusMessage:
          "Body parameter is missing, this body should include: 'productId', 'buyerFullname', 'buyerEmail', 'buyerAddress', 'buyerPlace', 'buyerZipCode' and 'buyerCountry'. 'buyerNumber' and 'description' are optional."
      })

    const product = await prisma.product.findUnique({
      where: {
        id: body.productId,
        deletedAt: null
      }
    })

    if (!product)
      throw createError({
        statusCode: 404,
        statusMessage: `Product with ID ${body.productId} can not be found.`
      })

    const totalPrice = String(Number(product.price) * body.quantity.toFixed(2))

    const order = await prisma.order.create({
      data: {
        quantity: body.quantity,
        totalPrice: totalPrice,
        buyerFullname: body.buyerFullname,
        buyerEmail: body.buyerEmail,
        buyerNumber: body.buyerNumber,
        buyerAddress: body.buyerAddress,
        buyerPlace: body.buyerPlace,
        buyerZipCode: body.buyerZipCode,
        buyerCountry: body.buyerCountry,
        description: body.description,
        product: {
          connect: {
            id: body.productId
          }
        }
      }
    })

    return order
  }
})

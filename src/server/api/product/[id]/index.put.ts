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

  const productCategory = await prisma.productCategory.findUnique({
    where: { id: body.productCategoryId }
  })

  if (!productCategory) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Invalid productCategoryId'
    })
  }

  try {
    const product = await prisma.product.update({
      where: { id: params.id },
      data: {
        name: body.name,
        description: body.description,
        price: body.price,
        images: body.images || [],
        videos: body.videos || [],
        productCategoryId: body.productCategoryId,
        contactEmail: body.contactEmail,
        contactNumber: body.contactNumber,
        locationCountry: body.locationCountry,
        locationPlace: body.locationPlace,
        updatedAt: new Date()
      }
    })

    return product
  } catch (error) {
    console.error('Error updating product:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to update product'
    })
  } finally {
    await prisma.$disconnect()
  }
})

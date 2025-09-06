import { defineEventHandler, getQuery } from 'h3'
import { prisma } from '~/server/utils/prisma'

async function getAllDescendantCategoryIds(
  parentId: string
): Promise<string[]> {
  const children = await prisma.productCategory.findMany({
    where: { parentId },
    select: { id: true }
  })

  const childIds = children.map(c => c.id)
  const descendantIds = await Promise.all(
    childIds.map(childId => getAllDescendantCategoryIds(childId))
  )

  return [parentId, ...descendantIds.flat()]
}

export default defineEventHandler(async event => {
  const query = getQuery(event)
  const categoryName = String(query.categoryName || '')
  const perPage = Number(query.perPage) || 10
  const page = Number(query.page) || 1
  const skip = (page - 1) * perPage
  const deletedOnly = query.deletedOnly === 'true'
  const search = query.search || ''

  if (!categoryName) {
    if (deletedOnly) var where: any = { deletedAt: { not: null } }
    else where = { deletedAt: null }

    if (search)
      where.title = {
        contains: search,
        mode: 'insensitive'
      }

    const [products, total] = await Promise.all([
      prisma.product.findMany({
        where,
        orderBy: { createdAt: 'desc' },
        skip,
        take: perPage,
        include: { productCategory: true }
      }),
      prisma.product.count({ where })
    ])

    return { products, total }
  } else {
    const rootCategory = await prisma.productCategory.findUnique({
      where: { name: categoryName },
      select: { id: true }
    })

    if (!rootCategory)
      throw createError({
        statusCode: 404,
        message: 'Category does not exist or it is deleted'
      })

    const categoryIds = await getAllDescendantCategoryIds(rootCategory.id)

    const whereCondition = {
      deletedAt: deletedOnly ? { not: null } : null,
      productCategoryId: { in: categoryIds }
    }

    const [products, total] = await Promise.all([
      prisma.product.findMany({
        where: whereCondition,
        orderBy: { createdAt: 'desc' },
        skip,
        take: perPage,
        include: { productCategory: true }
      }),
      prisma.product.count({ where: whereCondition })
    ])

    return { products, total }
  }
})

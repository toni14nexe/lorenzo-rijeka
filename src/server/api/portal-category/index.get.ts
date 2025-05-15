import { defineEventHandler } from 'h3'
import { prisma } from '~/server/utils/prisma'

const getAllCategories = async (deletedOnly: boolean, search: string) => {
  if (deletedOnly) var where: any = { deletedAt: { not: null } }
  else where = { deletedAt: null }

  if (search)
    where.name = {
      contains: search,
      mode: 'insensitive'
    }

  return await prisma.portalCategory.findMany({
    where,
    orderBy: { name: 'asc' },
    include: { parent: true }
  })
}

const buildHierarchy = (categories: any[]) => {
  const categoryMap = new Map<string, any>()
  const rootCategories: any[] = []

  categories.forEach(category => {
    categoryMap.set(category.id, { ...category, children: [] })
  })

  categories.forEach(category => {
    if (category.parentId) {
      const parentCategory = categoryMap.get(category.parentId)
      if (parentCategory)
        parentCategory.children.push(categoryMap.get(category.id))
    } else rootCategories.push(categoryMap.get(category.id))
  })

  return rootCategories
}

export default defineEventHandler(async event => {
  const query = getQuery(event)
  const deletedOnly = query.deletedOnly === 'true'
  const withoutHierarchy = query.withoutHierarchy === 'true'
  const search = (query.search as string) || ''
  let portalCategories = undefined

  if (deletedOnly)
    portalCategories = await getAllCategories(deletedOnly, search)
  else {
    if (withoutHierarchy)
      portalCategories = await getAllCategories(deletedOnly, search)
    else {
      const categories = await getAllCategories(deletedOnly, search)
      if (withoutHierarchy) portalCategories = buildHierarchy(categories)
    }
  }

  return portalCategories
})

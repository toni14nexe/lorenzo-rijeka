import { defineEventHandler } from 'h3'
import { prisma } from '~/server/utils/prisma'

const getAllCategories = async () => {
  const [portal, jobs, webshop] = await Promise.all([
    prisma.portalCategory.findMany({
      where: { deletedAt: null },
      orderBy: { createdAt: 'asc' }
    }),
    prisma.jobsCategory.findMany({
      where: { deletedAt: null },
      orderBy: { createdAt: 'asc' }
    }),
    prisma.productCategory.findMany({
      where: { deletedAt: null },
      orderBy: { createdAt: 'asc' }
    })
  ])

  return {
    portal,
    jobs,
    webshop
  }
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
  const allCategories = await getAllCategories()
  const portalCategories = buildHierarchy(allCategories.portal)

  return {
    portal: portalCategories,
    jobs: allCategories.jobs,
    webshop: allCategories.webshop
  }
})

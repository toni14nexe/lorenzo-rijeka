import { defineEventHandler } from 'h3'
import { prisma } from '~/server/utils/prisma'

export default defineEventHandler(async event => {
  const [adSettings, ads] = await Promise.all([
    prisma.adSettings.findMany({ orderBy: { id: 'asc' } }),
    prisma.ad.findMany({ orderBy: { id: 'asc' } })
  ])

  return { adSettings, ads }
})

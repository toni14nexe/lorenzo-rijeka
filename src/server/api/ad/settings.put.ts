import { createError, defineEventHandler, readBody } from 'h3'
import { prisma } from '~/server/utils/prisma'

export default defineEventHandler(async event => {
  const body = await readBody(event)

  try {
    await Promise.all([
      prisma.adSettings.update({
        where: { id: '1' },
        data: { show: Boolean(body['dashboard-side']) }
      }),
      prisma.adSettings.update({
        where: { id: '2' },
        data: { show: Boolean(body['footer-slider']) }
      }),
      prisma.adSettings.update({
        where: { id: '3' },
        data: { show: Boolean(body['footer-large']) }
      })
    ])

    return
  } catch (error) {
    console.error('Error updating ad settings:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to update ad settings'
    })
  }
})

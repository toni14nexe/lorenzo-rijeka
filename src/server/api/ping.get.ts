import { defineEventHandler } from 'h3'
import { prisma } from '~/server/utils/prisma'

type NowResult = { now: Date }

export default defineEventHandler(async () => {
  try {
    const result = await prisma.$queryRaw<NowResult[]>`SELECT NOW()`
    return {
      status: 'ok',
      time: result[0]?.now.toISOString()
    }
  } catch (error: any) {
    return {
      status: 'error',
      message: error.message
    }
  }
})

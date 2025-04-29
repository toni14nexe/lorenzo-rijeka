import { createError, defineEventHandler } from 'h3'
import { prisma } from '~/server/utils/prisma'

export default defineEventHandler(async event => {
  const userId = event.context.user.userId

  if (!userId)
    throw createError({
      statusCode: 400,
      statusMessage: 'User ID is required'
    })

  const user = await prisma.user.findUnique({
    where: {
      id: userId
    }
  })

  if (!user)
    throw createError({ statusCode: 404, statusMessage: 'User not found' })

  const { password, ...userWithoutPassword } = user
  return userWithoutPassword
})

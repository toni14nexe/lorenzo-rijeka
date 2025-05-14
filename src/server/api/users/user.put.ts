import { createError, defineEventHandler, readBody } from 'h3'
import bcrypt from 'bcrypt'
import { prisma } from '~/server/utils/prisma'

export default defineEventHandler(async event => {
  const userId = event.context.user.userId
  const body = await readBody(event)

  if (body.password) body.password = await bcrypt.hash(body.password, 10)

  try {
    const user = await prisma.user.update({
      where: {
        id: userId
      },
      data: {
        ...body
      }
    })

    const { password, ...userWithoutPassword } = user
    return {
      statusCode: 200,
      user: userWithoutPassword
    }
  } catch (error) {
    console.error('Error updating user:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to update user'
    })
  }
})

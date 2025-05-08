import { defineEventHandler, getHeader, createError } from 'h3'
import jwt from 'jsonwebtoken'
import { prisma } from '~/server/utils/prisma'

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret'

export default defineEventHandler(async event => {
  const token = getHeader(event, 'Authorization')?.split(' ')[1]
  const userData = event.context.user

  if (!token)
    throw createError({
      statusCode: 401,
      message: 'Authorization token is required'
    })

  try {
    const user = await prisma.user.findUnique({
      where: { id: userData.userId }
    })

    if (!user) throw createError({ statusCode: 401, message: 'User not found' })

    // If token is valid, create a new token with a refreshed expiration
    const newToken = jwt.sign(
      {
        userId: user.id,
        role: user.role
      },
      JWT_SECRET,
      { expiresIn: '2h' }
    )

    return {
      token: newToken,
      role: user.role
    }
  } catch (error) {
    throw createError({
      statusCode: 401,
      message: 'Invalid or expired token'
    })
  }
})

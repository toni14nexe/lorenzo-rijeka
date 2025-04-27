import { defineEventHandler } from 'h3'
import { prisma } from '~/server/utils/prisma'

export default defineEventHandler(async event => {
  const body = await readBody(event)

  const user = await prisma.user.findFirst({
    where: { verificationToken: body.token }
  })

  if (user?.verified) return { message: 'Email is already verificated' }

  if (!user)
    throw createError({
      statusCode: 404,
      message: 'Invalid verification token'
    })

  // Mark the user as verified and remove the token
  await prisma.user.update({
    where: { id: user.id },
    data: {
      verified: true
    }
  })

  return { message: 'Email verified successfully' }
})

import { defineEventHandler } from 'h3'
import bcrypt from 'bcrypt'
import { prisma } from '~/server/utils/prisma'

export default defineEventHandler(async event => {
  const body = await readBody(event)

  const user = await prisma.user.findFirst({
    where: { forgetPassHash: body.forgetPassHash }
  })

  if (!user)
    throw createError({
      statusCode: 404,
      message: 'User not find!'
    })

  const hashedPassword = await bcrypt.hash(body.password, 10)

  await prisma.user.update({
    where: { email: user.email },
    data: {
      password: hashedPassword,
      forgetPassHash: null
    }
  })

  return { message: 'Password changed successfully' }
})

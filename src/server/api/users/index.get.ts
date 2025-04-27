import { defineEventHandler } from 'h3'
import { prisma } from '~/server/utils/prisma'

export default defineEventHandler(async event => {
  const users = await prisma.user.findMany()
  const usersWithoutPassword = users.map(
    ({ password, ...userWithoutPassword }) => userWithoutPassword
  )
  return usersWithoutPassword
})

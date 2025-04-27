import { defineEventHandler, readBody, createError } from 'h3'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { prisma } from '~/server/utils/prisma'

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret'

export default defineEventHandler(async event => {
  const body = await readBody(event)

  const { email, password } = body
  const checkingEmail = email.trim().toLowerCase()

  if (!checkingEmail || !password) {
    throw createError({
      statusCode: 400,
      message: 'Email and password are required'
    })
  }

  let user = await prisma.user.findUnique({
    where: { email: checkingEmail }
  })

  if (!user || !(await bcrypt.compare(password, user.password)))
    throw createError({ statusCode: 401, message: 'Invalid email or password' })

  if (!user.verified)
    throw createError({
      statusCode: 403,
      message: 'Account is not verified yet'
    })

  // Getting the total count of lands
  const totalUserLands = await prisma.lands.count({
    where: { userId: user.id }
  })

  // Create a JWT token
  const token = jwt.sign(
    {
      userId: user.id,
      role: user.role
    },
    JWT_SECRET,
    { expiresIn: '2h' } // Token expiry time
  )

  if (user.firstLogin) {
    user = await prisma.user.update({
      where: { id: user.id },
      data: { lastLogin: new Date() }
    })
  } else {
    user = await prisma.user.update({
      where: { id: user.id },
      data: {
        firstLogin: new Date(),
        lastLogin: new Date(),
        licenceType: 'trial',
        licenceExpiration: new Date(
          new Date().setDate(new Date().getDate() + 20)
        )
      }
    })
  }

  return {
    token,
    role: user.role,
    activities: user.activities,
    userLandsExist: totalUserLands ? true : false
  }
})

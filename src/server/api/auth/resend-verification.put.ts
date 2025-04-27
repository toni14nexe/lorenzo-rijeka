import { defineEventHandler } from 'h3'
import nodemailer from 'nodemailer'
import { prisma } from '~/server/utils/prisma'

export default defineEventHandler(async event => {
  const body = await readBody(event)

  const user = await prisma.user.findUnique({
    where: { email: body.email }
  })

  if (!user)
    throw createError({
      statusCode: 404,
      message: 'User not find!'
    })

  // Verification email
  const url = process.env.APP_BASE_URL
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.APP_EMAIL,
      pass: process.env.APP_EMAIL_PASSWORD
    }
  })
  const verificationUrl = `${process.env.APP_BASE_URL}/login?token=${user.verificationToken}`
  const mailOptions = {
    from: process.env.APP_EMAIL,
    to: body.email,
    subject: 'Potvrdite svoju email adresu',
    html: `
           <a href="${url}" style="text-decoration: none"><h1 style="background-color: #409EFF; color: white; width: fit-content; padding: 0 15px 0 14px; border-radius: 4px">Agro App</h1></a>
           <p>Bok ${user.firstname} ${user.lastname},</p>
           <p>Hvala na registraciji u Agro App. Molimo vas potvrdite email otvaranjem linka:</p>
           <a href="${verificationUrl}">Potvrdite email</a>`
  }
  await transporter.sendMail(mailOptions)

  return { message: 'Email verified successfully' }
})

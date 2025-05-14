import { defineEventHandler } from 'h3'
import crypto from 'crypto'
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
      message: 'Invalid forget password email'
    })

  const forgetPassHash = crypto.randomBytes(32).toString('hex')

  await prisma.user.update({
    where: { email: body.email },
    data: {
      forgetPassHash
    }
  })

  // Reset password email

  const url = process.env.APP_BASE_URL
  // Use for gmail auth
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

  // Use for Zoho auth
  /* const transporter = nodemailer.createTransport({
    service: 'Zoho',
    host: 'smtp.zoho.com',
    port: 465, // Use 587 for TLS if you prefer
    secure: true, // true for 465, false for 587
    auth: {
      user: process.env.APP_EMAIL,
      pass: process.env.APP_EMAIL_PASSWORD
    }
  }) */

  const verificationUrl = `${process.env.APP_BASE_URL}/reset-password?token=${forgetPassHash}`
  const mailOptions = {
    from: process.env.APP_EMAIL,
    to: body.email,
    subject: 'Promijenite svoju lozinku',
    html: `
           <a href="${url}" style="text-decoration: none"><h1 style="background-color: #409EFF; color: white; width: fit-content; padding: 0 15px 0 14px; border-radius: 4px">Gastarbajter.de</h1></a>
           <p>Bok ${user.firstname} ${user.lastname},</p>
           <p>Zatražili ste promijenu lozinke. Molimo vas pristupite promijeni lozinke otvaranjem linka:</p>
           <a href="${verificationUrl}">Promijenite lozinku</a>`
  }
  await transporter.sendMail(mailOptions)

  return { message: 'Forget password request successfully performed' }
})

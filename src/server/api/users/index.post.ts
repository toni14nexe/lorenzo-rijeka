import { defineEventHandler, readBody } from 'h3'
import bcrypt from 'bcrypt'
import crypto from 'crypto'
import nodemailer from 'nodemailer'
import { prisma } from '~/server/utils/prisma'

export default defineEventHandler(async event => {
  if (event.req.method === 'POST') {
    const body = await readBody(event)

    const hashedPassword = await bcrypt.hash(body.password, 10)
    const verificationToken = crypto.randomBytes(32).toString('hex')

    const user = await prisma.user.create({
      data: {
        email: body.email.trim().toLowerCase(),
        password: hashedPassword,
        role: body.role,
        firstname: body.firstname,
        lastname: body.lastname,
        mobile: body.mobile,
        country: body.country,
        place: body.place,
        address: body.address,
        verificationToken
      }
    })

    // Verification email
    const transporter = nodemailer.createTransport({
      service:
        process.env.APP_EMAIL_HOST === 'smtp.zoho.eu' ? undefined : 'gmail',
      host: process.env.APP_EMAIL_HOST,
      port: 465,
      secure: true,
      auth: {
        user: process.env.APP_EMAIL,
        pass: process.env.APP_EMAIL_PASSWORD
      }
    })
    const verificationUrl = `${process.env.APP_BASE_URL}/login?token=${verificationToken}`
    const mailOptions = {
      from: `"s.art" <${process.env.APP_EMAIL}>`,
      to: body.email,
      subject: 'Potvrdite svoju email adresu',
      html: `
             <h1 style="background-color: #d9d950; color: white; width: fit-content; padding: 0 15px 0 14px; border-radius: 4px">s.art</h1>
             <p>Bok ${body.firstname} ${body.lastname},</p>
             <p>Hvala na registraciji u s.art. Molimo vas potvrdite email otvaranjem linka:</p>
             <a href="${verificationUrl}">Potvrdite email</a>`
    }
    await transporter.sendMail(mailOptions)

    const { password, ...userWithoutPassword } = user
    return userWithoutPassword
  }
})

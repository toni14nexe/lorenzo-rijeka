import { defineEventHandler } from 'h3'
import nodemailer from 'nodemailer'

export default defineEventHandler(async event => {
  const body = await readBody(event)

  const url = process.env.APP_BASE_URL
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

  const mailOptions = {
    from: `"Gastarbajter.de" <${process.env.APP_EMAIL}>`,
    to: process.env.APP_EMAIL,
    subject: `Gastarbajter.de reklame - ${body.email}`,
    html: `
           <a href="${url}" style="text-decoration: none"><h1 style="background-color: #409EFF; color: white; width: fit-content; padding: 0 15px 0 14px; border-radius: 4px">Gastarbajter.de</h1></a>
           <h3>Kupovina reklame #${body.adId}</h3>
           <p>Korisnik: ${body.fullname || '-'}</p>
           <p>Email: ${body.email}</p>
           <br/>
           <p>Poruka:</p>
           <p>${body.message}</p>`
  }
  await transporter.sendMail(mailOptions)

  return { message: 'Message is successfully send' }
})

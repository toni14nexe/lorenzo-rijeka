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
    from: `"s.art" <${process.env.APP_EMAIL}>`,
    to: process.env.APP_EMAIL,
    subject: `s.art kontakt - ${body.email}`,
    html: `
           <a href="${url}" style="text-decoration: none"><h1 style="background-color: #d9d950; color: white; width: fit-content; padding: 0 15px 0 14px; border-radius: 4px">s.art</h1></a>
           <h3>Kontakt</h3>
           <p>Korisnik: ${body.fullname || '-'}</p>
           <p>Email: ${body.email}</p>
           <br/>
           <p>Poruka:</p>
           <p>${body.message}</p>`
  }
  await transporter.sendMail(mailOptions)

  return { message: 'Message is successfully send' }
})

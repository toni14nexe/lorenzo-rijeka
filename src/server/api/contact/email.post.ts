import { defineEventHandler } from 'h3'
import nodemailer from 'nodemailer'

export default defineEventHandler(async event => {
  const body = await readBody(event)

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

  const mailOptions = {
    from: body.email,
    to: 'toni14nexe@gmail.com',
    subject: `Gastabajter.de kontakt - ${body.email}`,
    html: `
           <a href="${url}" style="text-decoration: none"><h1 style="background-color: #409EFF; color: white; width: fit-content; padding: 0 15px 0 14px; border-radius: 4px">Gastabajter.de</h1></a>
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

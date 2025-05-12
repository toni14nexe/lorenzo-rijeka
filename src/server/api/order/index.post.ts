import nodemailer from 'nodemailer'
import { defineEventHandler, readBody } from 'h3'
import { prisma } from '~/server/utils/prisma'

export default defineEventHandler(async event => {
  if (event.req.method === 'POST') {
    const body = await readBody(event)

    if (
      !body.productId ||
      !body.quantity ||
      !body.buyerFullname ||
      !body.buyerEmail ||
      !body.buyerAddress ||
      !body.buyerPlace ||
      !body.buyerZipCode ||
      !body.buyerCountry
    )
      throw createError({
        statusCode: 400,
        statusMessage:
          "Body parameter is missing, this body should include: 'productId', 'buyerFullname', 'buyerEmail', 'buyerAddress', 'buyerPlace', 'buyerZipCode' and 'buyerCountry'. 'buyerNumber' and 'description' are optional."
      })

    let product = await prisma.product.findUnique({
      where: {
        id: body.productId,
        deletedAt: null
      }
    })

    if (!product)
      throw createError({
        statusCode: 404,
        statusMessage: `Product with ID ${body.productId} can not be found.`
      })

    const totalPrice = String(Number(product.price) * body.quantity.toFixed(2))

    const order = await prisma.order.create({
      data: {
        quantity: String(body.quantity),
        totalPrice: totalPrice,
        buyerFullname: body.buyerFullname,
        buyerEmail: body.buyerEmail,
        buyerNumber: body.buyerNumber,
        buyerAddress: body.buyerAddress,
        buyerPlace: body.buyerPlace,
        buyerZipCode: body.buyerZipCode,
        buyerCountry: body.buyerCountry,
        description: body.description,
        product: {
          connect: {
            id: body.productId
          }
        }
      }
    })

    product = await prisma.product.update({
      where: { id: product.id },
      data: { sold: Number(product.sold + body.quantity) }
    })

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

    const mailOptions = {
      from: process.env.APP_EMAIL,
      to: [body.buyerEmail, product.contactEmail, process.env.APP_EMAIL],
      subject: `Gastabajter.de narudžba ${order.id}`,
      html: `
               <a href="${process.env.APP_BASE_URL}" style="text-decoration: none"><h1 style="background-color: #409EFF; color: white; width: fit-content; padding: 0 15px 0 14px; border-radius: 4px">Gastabajter.de</h1></a>
               <h3>Narudžba ${order.id} je zaprimljena u ${formatToDatetime(String(order.createdAt))}.</h3>
               <br/>
               <b><p>Kupac</p></b>
               <p>Ime i prezime: ${order.buyerFullname}</p>
               <p>Email: ${order.buyerEmail}</p>
               <p>Mobitel: ${order.buyerNumber || '-'}</p>
               <p>Adresa: ${order.buyerAddress}</p>
               <p>Mjesto: ${order.buyerPlace}</p>
               <p>Država: ${order.buyerCountry}</p>
               <p>Poštanski broj: ${order.buyerZipCode}</p>
               <p>Napomena: ${order.description || '-'}</p>
               <br/>
               <b><p>Prodavač</p></b>
               <p>Email: ${product.contactEmail}</p>
               <p>Mobitel: ${product.contactNumber}</p>
               <p>Mjesto: ${product.locationPlace}</p>
               <p>Država: ${product.locationCountry}</p>
               <br/>
               <b><p>Proizvod</p></b>
               <p>ID: ${product.id}</p>
               <p>Naziv: ${product.name}</p>
               <p>Cijena jedinice: ${product.price} €</p>
               <p>Količina: ${order.quantity}</p>
               <p>Ukupna cijena: ${totalPrice} €</p>
               <br/>
               <a href="${process.env.APP_BASE_URL}/webshop/${product.id}/narudzba/${order.id}">Narudžba dostupna ovdje</a>`
    }
    await transporter.sendMail(mailOptions)

    return order
  }
})

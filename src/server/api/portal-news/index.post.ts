import { defineEventHandler, readBody } from 'h3'
import { prisma } from '~/server/utils/prisma'

export default defineEventHandler(async event => {
  if (event.req.method === 'POST') {
    const body = await readBody(event)

    const news = await prisma.news.create({
      data: {
        title: body.title,
        text: body.text,
        author: body.author,
        images: body.images || [],
        videos: body.videos || [],
        category: {
          connect: {
            id: body.categoryId
          }
        }
      }
    })

    return news
  }
})

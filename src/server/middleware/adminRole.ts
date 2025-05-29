import { defineEventHandler, createError, H3Event } from 'h3'
import jwt from 'jsonwebtoken'

const secretKey = process.env.JWT_SECRET || ''

export default defineEventHandler(async (event: H3Event) => {
  // Avoid if url is server side
  if (!import.meta.server) return

  const url = String(event.req.url)

  // Routes to check with middleware
  if (
    (url.includes('/api/portal-category') && event.req.method !== 'GET') ||
    (url.includes('/api/portal-news') && event.req.method !== 'GET') ||
    (url.includes('/api/jobs-category') && event.req.method !== 'GET') ||
    (url.includes('/api/job') && event.req.method !== 'GET') ||
    (url.includes('/api/product-category') && event.req.method !== 'GET') ||
    (url.includes('/api/product') && event.req.method !== 'GET') ||
    (url.includes('/api/order') &&
      event.req.method !== 'POST' &&
      event.req.method !== 'GET') ||
    (url.includes('/api/ad') &&
      event.req.method !== 'POST' &&
      event.req.method !== 'GET') ||
    (url.includes('/api/dashboard-card') && event.req.method !== 'GET')
  ) {
    const token = event.req.headers['authorization']?.split(' ')[1]
    try {
      const decoded = jwt.verify(String(token), secretKey)
      event.context.user = decoded
      if (event.context.user.role !== 'admin')
        throw createError({
          statusCode: 401,
          statusMessage: 'Forbidden: Insufficient privileges'
        })
    } catch (error) {
      throw createError({
        statusCode: 401,
        statusMessage: 'Forbidden: Insufficient privileges'
      })
    }
  }

  return
})

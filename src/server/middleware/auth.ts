import { eventHandler, createError, H3Event } from 'h3'
import jwt from 'jsonwebtoken'

const secretKey = process.env.JWT_SECRET || ''

export default eventHandler(async (event: H3Event) => {
  const token = event.req.headers['authorization']?.split(' ')[1]

  // Define protected routes and their methods
  const protectedRoutes = [
    { path: '/api/users*', method: 'POST', requiresAuth: true },
    { path: '/api/users*', method: 'PUT', requiresAuth: true },
    { path: '/api/users*', method: 'DELETE', requiresAuth: true },
    { path: '/api/users/user', method: 'ALL', requiresAuth: true },
    { path: '/api/auth/refresh', method: 'ALL', requiresAuth: true }
  ]

  // Check if the request URL is protected
  const isProtected = protectedRoutes.some(route => {
    return (
      event.req.url?.includes(route.path) &&
      (route.method === 'ALL' || event.req.method === route.method)
    )
  })

  // Token validation for protected routes
  if (isProtected) {
    if (!token) {
      throw createError({
        statusCode: 401,
        statusMessage: 'No token provided'
      })
    }

    try {
      const decoded = jwt.verify(token, secretKey)
      event.context.user = decoded
    } catch (error) {
      throw createError({
        statusCode: 401,
        statusMessage: 'Unauthorized: Invalid token'
      })
    }
  }

  // No return needed, the event handler will continue
})

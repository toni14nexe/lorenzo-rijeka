import { defineEventHandler, getHeader, setHeader } from 'h3'

export default defineEventHandler(event => {
  const origin = getHeader(event, 'origin') || ''
  const isProduction = process.env.ENVIROMENT === 'production'

  const allowedOrigins = [
    'https://gastarbeiter.de.com',
    'https://gastabajter.de'
  ]

  if (!isProduction || allowedOrigins.includes(origin)) {
    setHeader(event, 'Access-Control-Allow-Origin', origin)
    setHeader(
      event,
      'Access-Control-Allow-Methods',
      'GET,POST,PUT,DELETE,OPTIONS,PATCH'
    )
    setHeader(
      event,
      'Access-Control-Allow-Headers',
      'Content-Type, Authorization'
    )
    setHeader(event, 'Access-Control-Allow-Credentials', 'true')
  }

  // Added: preflight OPTIONS response without error
  if (event.method === 'OPTIONS') {
    event.node.res.statusCode = 204
    return ''
  }
})

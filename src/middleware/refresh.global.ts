import { useCookie } from '#app'

// Middleware to refresh token if older than 15 minutes
export default defineNuxtRouteMiddleware(async (to, from) => {
  // Skip middleware on server side
  if (import.meta.server) return

  const bearerCookie = useCookie('bearer_token')

  if (bearerCookie.value) {
    try {
      // If the token is older than 15 minutes, refresh it
      const { $axios } = useNuxtApp()
      const response = await $axios.post('/auth/refresh')

      // Update cookies
      const bearerCookie = useCookie('bearer_token', {
        maxAge: 60 * 60 * 2, // 2h
        secure: true
      })
      bearerCookie.value = response.data.token

      const roleCookie = useCookie('role', {
        maxAge: 60 * 60 * 2, // 2h
        secure: true
      })
      roleCookie.value = response.data.role

      const activitiesCookie = useCookie('activities', {
        maxAge: 60 * 60 * 2, // 2h
        secure: true
      })
      activitiesCookie.value = response.data.activities

      const userStore = useUserStore()
      const { isAdminLogged } = storeToRefs(userStore)
      isAdminLogged.value = true
    } catch (error) {
      console.error('Error refreshing token:', error)
    }
  }
})

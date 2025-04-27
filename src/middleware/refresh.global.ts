import { useCookie } from '#app'

// Middleware to refresh token if older than 15 minutes
export default defineNuxtRouteMiddleware(async (to, from) => {
  // Skip middleware on server side
  /*  if (import.meta.server) return

  const bearerCookie = useCookie('bearer_token')

  if (
    !bearerCookie.value &&
    to.path !== '/login' &&
    to.path !== '/reset-password' &&
    to.path !== '/'
  )
    window.location.href = '/login'
  else if (
    bearerCookie.value &&
    (to.path === '/' || to.path === '/login' || to.path === '/reset-password')
  )
    window.location.href = '/dashboard'
  else if (bearerCookie.value) {
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

      useUserStore().MIBPG = response.data.MIBPG
      useUserStore().licenceLifetime = response.data.licenceLifetime
      useUserStore().licenceType = response.data.licenceType
      useUserStore().licenceExpiration = response.data.licenceExpiration

      // Blocking unauthorized links
      const validUrlNames = [
        'dashboard',
        'settings',
        'contact',
        'export',
        'payment',
        'reset-password'
      ]

      const userStore = useUserStore()
      const { validLandsRoute, userLandsExist } = storeToRefs(userStore)
      userStore.checkLandsRoute()

      // Set userLandsExist value
      userLandsExist.value = response.data.userLandsExist

      // Validating lands routes
      if (validLandsRoute.value) {
        validUrlNames.push('lands')
        validUrlNames.push('lands-id')
      }

      if (
        !validUrlNames.includes(String(to.name)) &&
        !activitiesCookie.value?.includes(String(to.name))
      )
        window.location.href = '/dashboard'
    } catch (error) {
      console.error('Error refreshing token:', error)
    }
  } */
})

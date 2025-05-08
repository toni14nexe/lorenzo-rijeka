import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    isAdminLogged: ref(false)
  }),
  actions: {
    logout() {
      this.isAdminLogged = false
      const bearerCookie = useCookie('bearer_token')
      bearerCookie.value = null
      const roleCookie = useCookie('role')
      roleCookie.value = null
      const activitiesCookie = useCookie(' activities')
      activitiesCookie.value = null
    }
  }
})

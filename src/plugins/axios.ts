import axios from 'axios'
import { defineNuxtPlugin } from '#app'
import { useRuntimeConfig } from '#app'
import { ElNotification } from 'element-plus'

export default defineNuxtPlugin(nuxtApp => {
  const config = useRuntimeConfig()
  const baseURL = config.public.axiosApiBaseUrl
  const userStore = useUserStore()
  const route = useRoute()

  const apiClient = axios.create({
    baseURL: baseURL,
    headers: {
      'Content-Type': 'application/json'
    }
  })

  // Add a request interceptor
  apiClient.interceptors.request.use(
    config => {
      const token = useCookie('bearer_token').value
      if (token) config.headers.authorization = `Bearer ${token}`
      return config
    },
    error => {
      return Promise.reject(error)
    }
  )

  // Add a response interceptor
  apiClient.interceptors.response.use(
    response => {
      return response
    },
    error => {
      const status = error.response ? error.response.status : null
      switch (status) {
        case 400:
          showErrorToast(
            'Neispravan zahtjev: provjerite svoj unos i pokušajte ponovno.',
            status
          )
          break
        case 401:
          if (error.response.data.message === 'Invalid email or password')
            showErrorToast('Netočni podaci za prijavu.', status)
          else
            showErrorToast(
              'Neovlašteni pristup: prijavite se za pristup.',
              status
            )
          userStore.logout()
          if (route.name !== 'login')
            setTimeout(() => (window.location.href = '/'), 3000)
          break
        case 403:
          if (error.response.data.message === 'Account is not verified yet')
            break
          showErrorToast(
            'Zabranjeno: nemate dozvolu za izvođenje ove radnje.',
            status
          )
          userStore.logout()
          if (route.name !== 'login')
            setTimeout(() => (window.location.href = '/'), 3000)
          break
        case 404:
          if (error.response.data.message === 'Invalid forget password email')
            showErrorToast('Upisali ste nepostojeći email.', status)
          else
            showErrorToast(
              'Nije pronađeno: traženi izvor nije moguće pronaći.',
              status
            )
          break
        case 500:
          showErrorToast('Pogreška poslužitelja: Nešto nije u redu.', status)
          break
        default:
          showErrorToast(
            'Došlo je do neočekivane pogreške. Pokušajte ponovno kasnije.',
            status
          )
      }

      console.error(
        'API Error:',
        error.response ? error.response.data : error.message
      )
      return Promise.reject(error)
    }
  )

  function showErrorToast(message: string, status: number) {
    ElNotification({
      title: `Error ${status || ''}`,
      message: message,
      duration: 5000,
      type: 'error'
    })
  }

  nuxtApp.provide('axios', apiClient)
})

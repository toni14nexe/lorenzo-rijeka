import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    cartChangeState: ref(0)
  }),
  actions: {
    changeCartChangeState() {
      this.cartChangeState++
    }
  }
})

export type CartItem = {
  id: string
  name: string
  price: number
  quantity: number
  totalPrice: number
  image?: string
}

const CART_KEY = 'cart'

function getCart(): CartItem[] {
  if (typeof window === 'undefined') return []
  const stored = localStorage.getItem(CART_KEY)
  return stored ? JSON.parse(stored) : []
}

function saveCart(cart: CartItem[]) {
  const cartStore = useCartStore()
  const { cartChangeState } = storeToRefs(cartStore)
  cartChangeState.value++

  localStorage.setItem(CART_KEY, JSON.stringify(cart))
}

export function addToCart(
  product: { id: string; name: string; price: number; images?: string[] },
  quantity = 1
) {
  const cart = getCart()
  const existing = cart.find(item => item.id === product.id)

  if (existing) {
    existing.quantity += quantity
    existing.totalPrice = Number(
      (existing.quantity * existing.price).toFixed(2)
    )
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: Number(product.price),
      quantity,
      totalPrice: Number((Number(product.price) * quantity).toFixed(2)),
      image:
        product.images && product.images.length > 0
          ? product.images[0]
          : undefined
    })
  }

  saveCart(cart)
  return cart
}

export function removeFromCart(productId: string) {
  let cart = getCart()
  cart = cart.filter(item => item.id !== productId)
  saveCart(cart)
  return cart
}

export function increaseQuantity(productId: string) {
  const cart = getCart()
  const item = cart.find(i => i.id === productId)
  if (item) {
    item.quantity += 1
    item.totalPrice = Number((item.price * item.quantity).toFixed(2))
  }
  saveCart(cart)
  return cart
}

export function decreaseQuantity(productId: string) {
  const cart = getCart()
  const item = cart.find(i => i.id === productId)
  if (item) {
    if (item.quantity > 1) {
      item.quantity -= 1
      item.totalPrice = Number((item.price * item.quantity).toFixed(2))
    } else {
      // remove item if quantity goes to 0
      return removeFromCart(productId)
    }
  }
  saveCart(cart)
  return cart
}

export function clearCart() {
  saveCart([])
  return []
}

export function getCartItems() {
  return getCart()
}

export function getCartTotal() {
  return getCart().reduce((sum, item) => sum + item.totalPrice, 0)
}

export function getCartCount() {
  return getCart().reduce((sum, item) => sum + item.quantity, 0)
}

export function updateQuantity(productId: string, quantity: number) {
  const cart = getCart()
  const item = cart.find(i => i.id === productId)

  if (item) {
    item.quantity = quantity
    item.totalPrice = Number((item.price * item.quantity).toFixed(2))
  }

  saveCart(cart)
  return cart
}

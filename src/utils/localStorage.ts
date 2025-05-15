export function setLocalItem(key: string, value: any, ttl: number = 600_000) {
  const data = {
    value,
    expiresAt: Date.now() + ttl
  }
  localStorage.setItem(key, JSON.stringify(data))
}

export function getLocalItem<T = any>(key: string): T | null {
  if (!process.client) return null

  const raw = localStorage.getItem(key)
  if (!raw) return null

  try {
    const data = JSON.parse(raw)
    if (data.expiresAt && Date.now() > data.expiresAt) {
      localStorage.removeItem(key)
      return null
    }
    return data.value
  } catch {
    localStorage.removeItem(key)
    return null
  }
}

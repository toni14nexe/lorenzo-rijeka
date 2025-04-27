export function validateEmail(email: string) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  return emailRegex.test(email)
}

export function validatePassword(password: string) {
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[a-zA-Z\d\W_]{8,}$/
  return passwordRegex.test(password)
}

export function validateMobileNumber(mobile: string) {
  if (mobile) {
    const mobileRegex =
      /^\+?\d{1,3}[- ]?\(?\d{1,4}?\)?[- ]?\d{1,4}[- ]?\d{1,4}[- ]?\d{1,9}$/
    return mobileRegex.test(mobile)
  }
  return true
}

export function isValuesEqual(
  value1: string | number,
  value2: string | number
) {
  if (value1 === value2) return true
  return false
}

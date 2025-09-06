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
    mobile = mobile.trim()
    const mobileRegex =
      /^\+?\d{1,3}[- ]?\(?\d{1,4}?\)?[- ]?\d{1,4}[- ]?\d{1,4}[- ]?\d{1,9}$/
    return mobileRegex.test(mobile)
  }
  return true
}

export function validateFullname(fullname: string) {
  if (fullname) {
    const fullnameRegex = /^[A-ZČĆŽŠĐ][a-zčćžšđ]+(?: [A-ZČĆŽŠĐ][a-zčćžšđ]+)+$/
    return fullnameRegex.test(fullname)
  }
  return true
}

export function validateAddress(address: string) {
  if (address) {
    const addressRegex =
      /^[A-Za-zČĆŽŠĐčćžšđ0-9\s\.\-\/]+(,\s?[A-Za-zČĆŽŠĐčćžšđ0-9\s\.\-\/]+)?$/
    return addressRegex.test(address)
  }
  return true
}

export function validateZipCode(zip: string) {
  if (zip) {
    const zipRegex = /^[0-9]{4,5}(-[0-9]{3,4})?$/
    return zipRegex.test(zip)
  }
  return true
}

export function validateCountry(country: string) {
  if (country) {
    const countryRegex = /^[A-Za-zČĆŽŠĐčćžšđ\s\-]{2,}$/
    return countryRegex.test(country)
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

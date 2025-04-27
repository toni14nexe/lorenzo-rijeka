export function formatToDate(dateString: string): string {
  const date = new Date(dateString)
  const options: Intl.DateTimeFormatOptions = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  }
  const formattedDate = new Intl.DateTimeFormat('hr-HR', options).format(date)
  return formattedDate.replaceAll(' ', '')
}

export function formatToDatetime(dateString: string): string {
  const date = new Date(dateString)
  const optionsDate: Intl.DateTimeFormatOptions = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  }
  const optionsTime: Intl.DateTimeFormatOptions = {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
    timeZone: 'Europe/Zagreb'
  }
  const formattedDate = new Intl.DateTimeFormat('hr-HR', optionsDate).format(
    date
  )
  const formattedTime = new Intl.DateTimeFormat('hr-HR', optionsTime).format(
    date
  )
  return `${formattedDate.replaceAll(' ', '')} u ${formattedTime} sati`
}

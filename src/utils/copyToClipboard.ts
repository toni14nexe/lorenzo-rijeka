export function copyToClipboard(text: string, showNotification?: boolean) {
  navigator.clipboard.writeText(text)
  if (showNotification)
    ElNotification({
      type: 'success',
      message: 'Uspješno kopirano!',
      duration: 3000
    })
}

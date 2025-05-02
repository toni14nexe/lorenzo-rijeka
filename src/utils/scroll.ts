export function scrollToPageTop() {
  const top = 0
  window.scrollTo({ top, behavior: 'smooth' })
}

export function scrollToElementTop(
  element: HTMLElement | null,
  offset?: number
) {
  if (element) {
    const elementOffset = offset ? offset : 0
    const top =
      element.getBoundingClientRect().top + window.pageYOffset + elementOffset
    window.scrollTo({ top, behavior: 'smooth' })
  }
}

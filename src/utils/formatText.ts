export function formatKebabToCamelCase(text: string) {
  return text
    .toLowerCase()
    .split('-')
    .map((word, index) =>
      index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join('')
}

export function formatCamelToKebabCase(str: string): string {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
}

export function formatCamelToNormalCase(str: string): string {
  return str
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/([A-Z])([A-Z][a-z])/g, '$1 $2')
    .toLowerCase()
    .replace(/^./, match => match.toUpperCase())
}

export function formatKebabToNormalCase(str: string): string {
  return str.replace(/-/g, ' ').replace(/^./, match => match.toUpperCase())
}

export function kebabToPascal(str: string): string {
  return str
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('')
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export const isValidEmail = (value: string) => EMAIL_PATTERN.test(value)

export function readFormValues(form: HTMLFormElement) {
  const values: Record<string, string> = {}
  for (const [key, value] of new FormData(form)) {
    values[key] = typeof value === 'string' ? value.trim() : ''
  }
  return values
}

export function focusField(form: HTMLFormElement, name: string) {
  const field = form.elements.namedItem(name)
  if (field instanceof HTMLElement) field.focus()
}

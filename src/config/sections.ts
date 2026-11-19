export const SECTION = {
  top: 'top',
  main: 'main',
  how: 'how',
  topics: 'topics',
  inside: 'inside',
  free: 'free',
  request: 'request',
  faq: 'faq',
} as const

export type SectionId = (typeof SECTION)[keyof typeof SECTION]

export const anchor = (id: SectionId) => `#${id}`

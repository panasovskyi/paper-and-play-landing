import { SECTION, anchor } from './sections'

export interface NavLink {
  label: string
  href: string
}

export const NAV_LINKS: readonly NavLink[] = [
  { label: 'How it works', href: anchor(SECTION.how) },
  { label: 'Topics', href: anchor(SECTION.topics) },
  { label: "What's inside", href: anchor(SECTION.inside) },
  { label: 'Request a topic', href: anchor(SECTION.request) },
]

export const FREE_PACK_LINK: NavLink = {
  label: 'Free pack',
  href: anchor(SECTION.free),
}

export const MARKETPLACE_LINKS: readonly NavLink[] = [
  { label: 'Teachers Pay Teachers', href: '#' },
  { label: 'Tes', href: '#' },
  { label: 'Gumroad', href: '#' },
]

export const LEGAL_LINKS: readonly NavLink[] = [
  { label: 'Privacy', href: '#privacy' },
  { label: 'Contact', href: anchor(SECTION.request) },
]

import type { ReactNode } from 'react'
import { cx } from '../../utils/cx'
import styles from './Icon.module.scss'

interface IconProps {
  className?: string
}

function Icon({ className, children }: IconProps & { children: ReactNode }) {
  return (
    <svg
      className={cx(styles.icon, className)}
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      {children}
    </svg>
  )
}

export function CheckIcon({ className }: IconProps) {
  return (
    <Icon className={className}>
      <path d="M5 12l5 5L20 7" />
    </Icon>
  )
}

export function MailIcon({ className }: IconProps) {
  return (
    <Icon className={className}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </Icon>
  )
}

export function DownloadIcon({ className }: IconProps) {
  return (
    <Icon className={className}>
      <path d="M12 3v12M7 10l5 5 5-5M4 19h16" />
    </Icon>
  )
}

export function ScreenIcon({ className }: IconProps) {
  return (
    <Icon className={className}>
      <rect x="3" y="4" width="18" height="12" rx="1.5" />
      <path d="M8 20h8M12 16v4" />
    </Icon>
  )
}

export function PrintIcon({ className }: IconProps) {
  return (
    <Icon className={className}>
      <path d="M7 9V3h10v6" />
      <rect x="3" y="9" width="18" height="8" rx="1.5" />
      <path d="M7 14h10v7H7z" />
    </Icon>
  )
}

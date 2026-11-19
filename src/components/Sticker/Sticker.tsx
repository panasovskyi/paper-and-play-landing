import type { ReactNode } from 'react'
import { cx } from '../../utils/cx'
import styles from './Sticker.module.scss'

interface StickerProps {
  className?: string
  children: ReactNode
}

export function Sticker({ className, children }: StickerProps) {
  return <span className={cx(styles.sticker, className)}>{children}</span>
}

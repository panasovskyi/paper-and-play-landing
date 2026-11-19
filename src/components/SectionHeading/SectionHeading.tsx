import type { ReactNode } from 'react'
import styles from './SectionHeading.module.scss'

interface SectionHeadingProps {
  eyebrow: string
  title: ReactNode
}

export function SectionHeading({ eyebrow, title }: SectionHeadingProps) {
  return (
    <div>
      <span className={styles.eyebrow}>{eyebrow}</span>
      <h2 className={styles.title}>{title}</h2>
    </div>
  )
}

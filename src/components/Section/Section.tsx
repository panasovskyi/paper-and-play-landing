import type { ReactNode } from 'react'
import type { SectionId } from '../../config/sections'
import { cx } from '../../utils/cx'
import styles from './Section.module.scss'

interface SectionProps {
  id: SectionId
  className?: string
  children: ReactNode
}

export function Section({ id, className, children }: SectionProps) {
  return (
    <section id={id} className={cx(styles.section, className)}>
      {children}
    </section>
  )
}

import type { ComponentPropsWithoutRef } from 'react'
import { cx } from '../../utils/cx'
import styles from './Card.module.scss'

export function Card({ className, ...rest }: ComponentPropsWithoutRef<'div'>) {
  return <div className={cx(styles.card, className)} {...rest} />
}

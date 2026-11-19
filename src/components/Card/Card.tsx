import type { HTMLAttributes } from 'react'
import { cx } from '../../utils/cx'
import styles from './Card.module.scss'

type CardProps = HTMLAttributes<HTMLElement> & {
  as?: 'div' | 'li' | 'article'
}

export function Card({ as: Tag = 'div', className, ...rest }: CardProps) {
  return <Tag className={cx(styles.card, className)} {...rest} />
}

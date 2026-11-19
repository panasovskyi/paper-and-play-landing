import type { HTMLAttributes } from 'react'
import { cx } from '../../utils/cx'
import styles from './Card.module.scss'

type CardProps = HTMLAttributes<HTMLElement> & {
  as?: 'div' | 'li' | 'article'
  variant?: 'default' | 'dashed' | 'accent'
}

export function Card({
  as: Tag = 'div',
  variant = 'default',
  className,
  ...rest
}: CardProps) {
  return (
    <Tag
      className={cx(styles.card, variant !== 'default' && styles[variant], className)}
      {...rest}
    />
  )
}

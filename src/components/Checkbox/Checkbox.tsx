import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import { cx } from '../../utils/cx'
import styles from './Checkbox.module.scss'

type CheckboxProps = {
  className?: string
  children: ReactNode
} & Omit<ComponentPropsWithoutRef<'input'>, 'type' | 'className' | 'children'>

export function Checkbox({ className, children, ...input }: CheckboxProps) {
  return (
    <label className={cx(styles.checkbox, className)}>
      <input type="checkbox" className={styles.box} {...input} />
      <span>{children}</span>
    </label>
  )
}

import type { ComponentPropsWithoutRef } from 'react'
import { Link } from '../Link/Link'
import { cx } from '../../utils/cx'
import styles from './Button.module.scss'

interface OwnProps {
  variant?: 'primary' | 'secondary'
  size?: 'md' | 'sm'
}

type AnchorProps = OwnProps &
  Omit<ComponentPropsWithoutRef<'a'>, keyof OwnProps | 'href'> & { href: string }

type NativeButtonProps = OwnProps &
  Omit<ComponentPropsWithoutRef<'button'>, keyof OwnProps> & { href?: undefined }

export type ButtonProps = AnchorProps | NativeButtonProps

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  ...rest
}: ButtonProps) {
  const classes = cx(styles.button, styles[variant], styles[size], className)

  if (rest.href !== undefined) {
    return <Link className={classes} {...rest} />
  }

  return <button type="button" className={classes} {...rest} />
}

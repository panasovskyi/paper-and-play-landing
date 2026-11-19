import { Logo } from '../Logo/Logo'
import { cx } from '../../utils/cx'
import styles from './Brand.module.scss'

interface BrandProps {
  size?: 'lg' | 'sm'
}

export function Brand({ size = 'lg' }: BrandProps) {
  return (
    <span className={cx(styles.brand, styles[size])}>
      <Logo className={styles.mark} />
      <span>
        Paper <span className={styles.amp}>&amp;</span> Play
      </span>
    </span>
  )
}

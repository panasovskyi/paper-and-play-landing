import { CheckIcon } from '../Icon/Icon'
import { cx } from '../../utils/cx'
import styles from './FormSuccess.module.scss'

interface FormSuccessProps {
  title: string
  text: string
  className?: string
}

export function FormSuccess({ title, text, className }: FormSuccessProps) {
  return (
    <div className={cx(styles.success, className)}>
      <span className={styles.badge}>
        <CheckIcon className={styles.icon} />
      </span>
      <div>
        <div className={styles.title}>{title}</div>
        <div className={styles.text}>{text}</div>
      </div>
    </div>
  )
}

import styles from './Logo.module.scss'

interface LogoProps {
  className?: string
}

export function Logo({ className }: LogoProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      aria-hidden="true"
      focusable="false"
    >
      <rect className={styles.frame} x="6" y="6" width="88" height="88" rx="14" />
      <line className={styles.rule} x1="6" y1="32" x2="94" y2="32" />
      <line className={styles.rule} x1="6" y1="52" x2="94" y2="52" />
      <line className={styles.rule} x1="6" y1="72" x2="94" y2="72" />
      <line className={styles.margin} x1="22" y1="8" x2="22" y2="92" />
      <text className={styles.text} x="59" y="66" textAnchor="middle">
        P<tspan className={styles.amp}>&amp;</tspan>P
      </text>
    </svg>
  )
}

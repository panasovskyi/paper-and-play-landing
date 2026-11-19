import { Brand } from '../../components/Brand/Brand'
import { Link } from '../../components/Link/Link'
import { LEGAL_LINKS, MARKETPLACE_LINKS } from '../../config/navigation'
import { SITE } from '../../config/site'
import styles from './Footer.module.scss'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Brand size="sm" />

      <div className={styles.market}>
        <span>Also on:</span>
        <ul className={styles.list}>
          {MARKETPLACE_LINKS.map(({ label, href }) => (
            <li key={label}>
              <Link href={href}>{label}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.legal}>
        <ul className={styles.list}>
          {LEGAL_LINKS.map(({ label, href }) => (
            <li key={label}>
              <Link href={href}>{label}</Link>
            </li>
          ))}
        </ul>
        <small className={styles.copy}>
          © {SITE.year} {SITE.name}
        </small>
      </div>
    </footer>
  )
}

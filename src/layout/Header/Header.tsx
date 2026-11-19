import { Brand } from '../../components/Brand/Brand'
import { Button } from '../../components/Button/Button'
import { Link } from '../../components/Link/Link'
import { FREE_PACK_LINK, NAV_LINKS } from '../../config/navigation'
import { SECTION, anchor } from '../../config/sections'
import { SITE } from '../../config/site'
import styles from './Header.module.scss'

export function Header() {
  return (
    <header className={styles.header}>
      <a
        className={styles.home}
        href={anchor(SECTION.top)}
        aria-label={`${SITE.name}, home`}
      >
        <Brand size="lg" />
      </a>

      <nav className={styles.nav} aria-label="Main">
        <ul className={styles.list}>
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <Link className={styles.link} href={href}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <Button href={FREE_PACK_LINK.href} size="sm">
        {FREE_PACK_LINK.label}
      </Button>
    </header>
  )
}

import type { ReactNode } from 'react'
import { SECTION, anchor } from '../../config/sections'
import { Footer } from '../Footer/Footer'
import { Header } from '../Header/Header'
import styles from './Layout.module.scss'

interface LayoutProps {
  children?: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div id={SECTION.top} className={styles.page}>
      <a className={styles.skip} href={anchor(SECTION.main)}>
        Skip to content
      </a>
      <Header />
      <main id={SECTION.main} className={styles.main}>
        {children}
      </main>
      <Footer />
    </div>
  )
}

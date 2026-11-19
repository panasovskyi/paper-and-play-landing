import { Card } from '../../components/Card/Card'
import {
  DownloadIcon,
  PrintIcon,
  ScreenIcon,
} from '../../components/Icon/Icon'
import { Section } from '../../components/Section/Section'
import { SectionHeading } from '../../components/SectionHeading/SectionHeading'
import { SECTION } from '../../config/sections'
import styles from './HowItWorks.module.scss'

const STEPS = [
  {
    Icon: DownloadIcon,
    title: '1. Download one file',
    text: 'Open it in any browser — laptop, smart board or phone. Nothing to install, no accounts.',
  },
  {
    Icon: ScreenIcon,
    title: '2. Play on the board',
    text: 'Flashcards, anagram, quiz and matching with the whole class, on 16:9 or 4:3 screens.',
  },
  {
    Icon: PrintIcon,
    title: '3. Print the worksheet',
    text: 'The same words on paper, from picture cards to writing, with an answer key.',
  },
] as const

export function HowItWorks() {
  return (
    <Section id={SECTION.how}>
      <SectionHeading eyebrow="How it works" title="One topic. Three steps." />
      <ol className={styles.steps}>
        {STEPS.map(({ Icon, title, text }) => (
          <Card as="li" key={title} className={styles.step}>
            <span className={styles.iconBox}>
              <Icon className={styles.icon} />
            </span>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.text}>{text}</p>
          </Card>
        ))}
      </ol>
    </Section>
  )
}

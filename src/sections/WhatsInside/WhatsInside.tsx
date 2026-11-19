import { CheckIcon } from '../../components/Icon/Icon'
import { Section } from '../../components/Section/Section'
import { SectionHeading } from '../../components/SectionHeading/SectionHeading'
import { SECTION } from '../../config/sections'
import styles from './WhatsInside.module.scss'

const FEATURES = [
  {
    title: 'Games for the whole class',
    text: 'Flashcards, anagram, quiz, matching and more. All games for a topic in one HTML file that works without internet.',
  },
  {
    title: 'One word list, with pictures',
    text: 'Every topic has its own word list. The same words and pictures appear in the games and on paper.',
  },
  {
    title: 'Printable worksheet',
    text: 'From picture cards to writing: puzzles, grammar, reading and speaking tasks on the topic words.',
  },
  {
    title: 'Answer key',
    text: 'For the teacher, always matching the puzzles.',
  },
] as const

export function WhatsInside() {
  return (
    <Section id={SECTION.inside}>
      <div className={styles.layout}>
        <div className={styles.intro}>
          <SectionHeading
            eyebrow="What's inside a pack"
            title="A ready lesson, not just a worksheet."
          />
          <p className={styles.lead}>
            Games help students recognise the words. The worksheet makes them
            use the words. Both are built from the same topic, so they always
            match. The exact contents are listed on each topic.
          </p>
        </div>

        <ul className={styles.list}>
          {FEATURES.map(({ title, text }) => (
            <li key={title} className={styles.item}>
              <span className={styles.mark}>
                <CheckIcon className={styles.icon} />
              </span>
              <div>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.text}>{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}

import { Section } from '../../components/Section/Section'
import { SectionHeading } from '../../components/SectionHeading/SectionHeading'
import { SECTION } from '../../config/sections'
import styles from './Faq.module.scss'

const FAQ_ITEMS = [
  {
    question: 'Do my students need accounts?',
    answer:
      'No. Nobody signs up — not you, not your students. You open the file and play.',
  },
  {
    question: 'Does it work without internet?',
    answer:
      'Yes. Once downloaded, the games run offline in any modern browser.',
  },
  {
    question: 'Which screens does it fit?',
    answer: 'Projectors and smart boards (16:9 and 4:3), laptops and phones.',
  },
  {
    question: 'Can I share it with colleagues?',
    answer:
      'One pack is for one teacher. Need it for your whole school? Write to us through the request form.',
  },
] as const

export function Faq() {
  return (
    <Section id={SECTION.faq}>
      <SectionHeading eyebrow="Questions" title="Good to know" />
      <div className={styles.list}>
        {FAQ_ITEMS.map(({ question, answer }, index) => (
          <details key={question} className={styles.item} open={index === 0}>
            <summary className={styles.question}>{question}</summary>
            <p className={styles.answer}>{answer}</p>
          </details>
        ))}
      </div>
    </Section>
  )
}

import { Section } from '../../components/Section/Section'
import { SectionHeading } from '../../components/SectionHeading/SectionHeading'
import { SECTION } from '../../config/sections'
import { SPORTS_TOPIC, TOPICS } from '../../data/topics'
import { TopicCard } from './TopicCard'
import styles from './Topics.module.scss'

export function Topics() {
  return (
    <Section id={SECTION.topics}>
      <SectionHeading
        eyebrow="Topics"
        title={`Start with ${SPORTS_TOPIC.name}. More every month.`}
      />
      <ul className={styles.grid}>
        {TOPICS.map((topic) => (
          <TopicCard key={topic.id} topic={topic} />
        ))}
      </ul>
    </Section>
  )
}

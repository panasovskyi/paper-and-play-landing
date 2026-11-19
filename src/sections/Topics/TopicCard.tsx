import { Card } from '../../components/Card/Card'
import { Sticker } from '../../components/Sticker/Sticker'
import type { Topic } from '../../data/topics'
import styles from './TopicCard.module.scss'

interface TopicCardProps {
  topic: Topic
}

export function TopicCard({ topic }: TopicCardProps) {
  const available = topic.status === 'available'

  return (
    <Card
      as="li"
      variant={available ? 'default' : 'dashed'}
      className={styles.card}
    >
      <div className={styles.picture} aria-hidden="true">
        picture: {topic.id}
      </div>
      <div className={styles.row}>
        <h3 className={styles.name}>{topic.name}</h3>
        {available ? (
          topic.free && <Sticker>Free</Sticker>
        ) : (
          <span className={styles.soon}>Coming soon</span>
        )}
      </div>
      <p className={styles.meta}>
        {available
          ? `${topic.games.length} games · ${topic.worksheetPages}-page worksheet · ${topic.level}`
          : 'Want it sooner? Request it below.'}
      </p>
    </Card>
  )
}

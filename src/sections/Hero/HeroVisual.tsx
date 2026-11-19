import { Card } from '../../components/Card/Card'
import { Logo } from '../../components/Logo/Logo'
import { Sticker } from '../../components/Sticker/Sticker'
import { SITE } from '../../config/site'
import type { Topic } from '../../data/topics'
import styles from './HeroVisual.module.scss'

const SCRAMBLED_WORDS = [
  's n e t i n',
  'k y e h o c',
  'b y g u r',
  'f l o g',
] as const

interface HeroVisualProps {
  topic: Topic
}

export function HeroVisual({ topic }: HeroVisualProps) {
  return (
    <div
      className={styles.visual}
      role="img"
      aria-label={`Preview of the ${topic.name} pack: games on a projector screen and a printable worksheet`}
    >
      <Card className={styles.screenCard}>
        <div className={styles.screen}>
          <div className={styles.head}>
            <div>
              <div className={styles.topic}>{topic.name}</div>
              <div className={styles.meta}>
                Vocabulary games · {topic.level} · {topic.wordsCount} words
              </div>
            </div>
            <span className={styles.brand}>{SITE.name}</span>
          </div>
          <div className={styles.games}>
            {topic.games.map((game) => (
              <div key={game} className={styles.game}>
                {game}
              </div>
            ))}
          </div>
        </div>
      </Card>

      <div className={styles.sheet}>
        <div className={styles.sheetHead}>
          <Logo className={styles.sheetLogo} />
          <span className={styles.sheetTitle}>{topic.name}</span>
        </div>
        <div className={styles.exercise}>
          <span className={styles.num}>2</span>
          <span className={styles.exerciseTitle}>Unscramble the words</span>
        </div>
        {SCRAMBLED_WORDS.map((word) => (
          <div key={word} className={styles.row}>
            <span className={styles.box} />
            <span className={styles.scrambled}>{word}</span>
          </div>
        ))}
      </div>

      <Sticker className={styles.sticker}>On the projector</Sticker>
    </div>
  )
}

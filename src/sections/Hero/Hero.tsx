import { Button } from '../../components/Button/Button'
import { CheckIcon } from '../../components/Icon/Icon'
import { SECTION, anchor } from '../../config/sections'
import { SPORTS_TOPIC } from '../../data/topics'
import { HeroVisual } from './HeroVisual'
import styles from './Hero.module.scss'

const PERKS = ['No sign-up', 'Works offline', 'One file per topic'] as const

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.copy}>
        <span className={styles.eyebrow}>
          Vocabulary games + printable worksheets
        </span>
        <h1 className={styles.title}>
          Play it on the board.
          <br />
          <span className={styles.accent}>Practise it on paper.</span>
        </h1>
        <p className={styles.lead}>
          Topic packs for A1–A2 classes: games that open in any browser and a
          printable worksheet with the same words.
        </p>
        <div className={styles.actions}>
          <Button href={anchor(SECTION.free)}>
            Get the free {SPORTS_TOPIC.name} pack
          </Button>
          <Button href={anchor(SECTION.inside)} variant="secondary">
            See what&apos;s inside
          </Button>
        </div>
        <ul className={styles.perks}>
          {PERKS.map((perk) => (
            <li key={perk} className={styles.perk}>
              <CheckIcon className={styles.check} />
              {perk}
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.visualCol}>
        <HeroVisual topic={SPORTS_TOPIC} />
      </div>
    </section>
  )
}

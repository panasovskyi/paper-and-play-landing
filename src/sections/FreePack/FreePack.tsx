import { useState } from 'react'
import type { FormEvent } from 'react'
import { Button } from '../../components/Button/Button'
import { Card } from '../../components/Card/Card'
import { Checkbox } from '../../components/Checkbox/Checkbox'
import { FormError, InputField } from '../../components/Field/Field'
import { FormSuccess } from '../../components/FormSuccess/FormSuccess'
import { MailIcon } from '../../components/Icon/Icon'
import { Link } from '../../components/Link/Link'
import { Section } from '../../components/Section/Section'
import { Sticker } from '../../components/Sticker/Sticker'
import { PRIVACY_HREF } from '../../config/navigation'
import { SECTION } from '../../config/sections'
import { SPORTS_TOPIC } from '../../data/topics'
import { useFormSubmit } from '../../hooks/useFormSubmit'
import { focusField, isValidEmail, readFormValues } from '../../utils/form'
import styles from './FreePack.module.scss'

const EMAIL_ERROR = 'Check the email address'

export function FreePack() {
  const { status, submit } = useFormSubmit('free-pack')
  const [emailError, setEmailError] = useState<string>()

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const values = readFormValues(form)

    if (!isValidEmail(values.email ?? '')) {
      setEmailError(EMAIL_ERROR)
      focusField(form, 'email')
      return
    }

    setEmailError(undefined)
    await submit({
      email: values.email,
      newsletter: values.newsletter === 'on',
      topic: SPORTS_TOPIC.id,
    })
  }

  return (
    <Section id={SECTION.free}>
      <Card variant="accent" className={styles.card}>
        <div className={styles.intro}>
          <Sticker>Free</Sticker>
          <h2 className={styles.title}>Get the {SPORTS_TOPIC.name} pack</h2>
          <p className={styles.lead}>
            Leave your email and we&apos;ll send the download link. No account,
            no password.
          </p>
        </div>

        <div className={styles.panel} aria-live="polite">
          {status === 'sent' ? (
            <FormSuccess
              title="Check your inbox!"
              text="The link is on its way. Not there in 5 minutes? Look in spam."
            />
          ) : (
            <form className={styles.form} onSubmit={handleSubmit} noValidate>
              <InputField
                label="Your email"
                name="email"
                type="email"
                placeholder="teacher@school.ie"
                autoComplete="email"
                required
                error={emailError}
                onChange={() => setEmailError(undefined)}
              />
              <Checkbox name="newsletter">
                Also tell me when a new topic comes out (about once a month).
              </Checkbox>
              <Button
                type="submit"
                className={styles.submit}
                disabled={status === 'sending'}
              >
                <MailIcon className={styles.icon} />
                {status === 'sending' ? 'Sending…' : 'Send me the pack'}
              </Button>
              {status === 'error' && (
                <FormError>
                  Something went wrong. Please try again in a moment.
                </FormError>
              )}
              <p className={styles.note}>
                We only use your email to send the pack and, if you tick the
                box, new topics. Unsubscribe any time.{' '}
                <Link href={PRIVACY_HREF}>Privacy</Link>
              </p>
            </form>
          )}
        </div>
      </Card>
    </Section>
  )
}

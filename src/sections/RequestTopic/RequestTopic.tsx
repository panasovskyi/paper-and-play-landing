import { useState } from 'react'
import type { FormEvent } from 'react'
import { Button } from '../../components/Button/Button'
import { Card } from '../../components/Card/Card'
import {
  FormError,
  InputField,
  SelectField,
  TextareaField,
} from '../../components/Field/Field'
import { FormSuccess } from '../../components/FormSuccess/FormSuccess'
import { Section } from '../../components/Section/Section'
import { SectionHeading } from '../../components/SectionHeading/SectionHeading'
import { SECTION } from '../../config/sections'
import { useFormSubmit } from '../../hooks/useFormSubmit'
import { focusField, isValidEmail, readFormValues } from '../../utils/form'
import styles from './RequestTopic.module.scss'

const LEVELS = ['A1', 'A2', 'B1', 'Not sure'] as const
const LANGUAGES = ['English', 'German', 'Ukrainian', 'Other'] as const
const AGES = ['7–10', '11–14', '15–18', 'Adults'] as const

const EMAIL_ERROR = 'Check the email address'
const TOPIC_ERROR = 'Tell us which topic you need'

interface FieldErrors {
  email?: string
  topic?: string
}

export function RequestTopic() {
  const { status, submit } = useFormSubmit('topic-request')
  const [errors, setErrors] = useState<FieldErrors>({})

  function clearError(field: keyof FieldErrors) {
    setErrors((current) => ({ ...current, [field]: undefined }))
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const values = readFormValues(form)

    const nextErrors: FieldErrors = {}
    if (!isValidEmail(values.email ?? '')) nextErrors.email = EMAIL_ERROR
    if (!values.topic) nextErrors.topic = TOPIC_ERROR

    setErrors(nextErrors)
    if (nextErrors.email) return focusField(form, 'email')
    if (nextErrors.topic) return focusField(form, 'topic')

    await submit(values)
  }

  return (
    <Section id={SECTION.request}>
      <div className={styles.layout}>
        <div className={styles.intro}>
          <SectionHeading
            eyebrow="Request a topic"
            title="Need something for your class?"
          />
          <p className={styles.lead}>
            A topic, a level, another language — tell us what you teach. We
            read every request and make the most wanted topics first.
          </p>
        </div>

        <Card className={styles.card}>
          <div aria-live="polite">
            {status === 'sent' ? (
              <FormSuccess
                className={styles.done}
                title="Thanks, we got it!"
                text="If we make your topic, you'll be the first to know."
              />
            ) : (
              <form className={styles.form} onSubmit={handleSubmit} noValidate>
                <InputField
                  className={styles.wide}
                  label="Your email"
                  name="email"
                  type="email"
                  placeholder="teacher@school.ie"
                  autoComplete="email"
                  required
                  error={errors.email}
                  onChange={() => clearError('email')}
                />
                <InputField
                  label="Topic"
                  name="topic"
                  type="text"
                  placeholder="e.g. Weather, Shopping"
                  required
                  error={errors.topic}
                  onChange={() => clearError('topic')}
                />
                <SelectField label="Level" name="level" options={LEVELS} />
                <SelectField
                  label="Language"
                  name="language"
                  options={LANGUAGES}
                />
                <SelectField
                  label="Age of students"
                  name="age"
                  options={AGES}
                />
                <TextareaField
                  className={styles.wide}
                  label="Anything else?"
                  hint="(optional)"
                  name="comment"
                  rows={3}
                  placeholder="Words you need, exam, how you'd use it…"
                />
                <div className={styles.actions}>
                  <Button type="submit" disabled={status === 'sending'}>
                    {status === 'sending' ? 'Sending…' : 'Send request'}
                  </Button>
                  <span className={styles.note}>
                    We&apos;ll only write to you about this request.
                  </span>
                </div>
                {status === 'error' && (
                  <div className={styles.wide}>
                    <FormError>
                      Something went wrong. Please try again in a moment.
                    </FormError>
                  </div>
                )}
              </form>
            )}
          </div>
        </Card>
      </div>
    </Section>
  )
}

import { useId } from 'react'
import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import { cx } from '../../utils/cx'
import styles from './Field.module.scss'

interface FieldBaseProps {
  label: string
  hint?: string
  error?: string
  className?: string
}

interface FrameProps extends FieldBaseProps {
  id: string
  children: ReactNode
}

function Frame({ id, label, hint, error, className, children }: FrameProps) {
  return (
    <div className={cx(styles.field, className)}>
      <label className={styles.label} htmlFor={id}>
        {label}
        {hint && <span className={styles.hint}> {hint}</span>}
      </label>
      {children}
      {error && (
        <span id={`${id}-error`} className={styles.error} role="alert">
          {error}
        </span>
      )}
    </div>
  )
}

type InputFieldProps = FieldBaseProps &
  Omit<ComponentPropsWithoutRef<'input'>, 'id' | 'className'>

export function InputField({
  label,
  hint,
  error,
  className,
  ...input
}: InputFieldProps) {
  const id = useId()

  return (
    <Frame id={id} label={label} hint={hint} error={error} className={className}>
      <input
        id={id}
        className={styles.control}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        {...input}
      />
    </Frame>
  )
}

type SelectFieldProps = FieldBaseProps & {
  options: readonly string[]
} & Omit<ComponentPropsWithoutRef<'select'>, 'id' | 'className' | 'children'>

export function SelectField({
  label,
  hint,
  error,
  className,
  options,
  ...select
}: SelectFieldProps) {
  const id = useId()

  return (
    <Frame id={id} label={label} hint={hint} error={error} className={className}>
      <select
        id={id}
        className={styles.control}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        {...select}
      >
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </Frame>
  )
}

type TextareaFieldProps = FieldBaseProps &
  Omit<ComponentPropsWithoutRef<'textarea'>, 'id' | 'className'>

export function TextareaField({
  label,
  hint,
  error,
  className,
  ...textarea
}: TextareaFieldProps) {
  const id = useId()

  return (
    <Frame id={id} label={label} hint={hint} error={error} className={className}>
      <textarea
        id={id}
        className={styles.control}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        {...textarea}
      />
    </Frame>
  )
}

export function FormError({ children }: { children: ReactNode }) {
  return (
    <p className={styles.formError} role="alert">
      {children}
    </p>
  )
}

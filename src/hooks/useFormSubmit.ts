import { useState } from 'react'
import { submitForm } from '../api/forms'
import type { FormKind, FormPayload } from '../api/forms'

export type FormStatus = 'idle' | 'sending' | 'sent' | 'error'

export function useFormSubmit(kind: FormKind) {
  const [status, setStatus] = useState<FormStatus>('idle')

  async function submit(payload: FormPayload) {
    setStatus('sending')
    try {
      await submitForm(kind, payload)
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  return { status, submit }
}

export type FormKind = 'free-pack' | 'topic-request'

export type FormPayload = Record<string, string | boolean>

const ENDPOINT = import.meta.env.VITE_FORMS_ENDPOINT as string | undefined

export async function submitForm(kind: FormKind, payload: FormPayload) {
  if (!ENDPOINT) {
    if (import.meta.env.DEV) {
      console.info('[forms] VITE_FORMS_ENDPOINT is not set, simulating success', {
        kind,
        payload,
      })
      return
    }
    throw new Error('VITE_FORMS_ENDPOINT is not set')
  }

  const response = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ kind, ...payload }),
  })

  if (!response.ok) {
    throw new Error(`Form request failed with status ${response.status}`)
  }
}

import { useState, useEffect, useRef } from 'react'

interface SpamProtectionResult {
  isValid: boolean
  error: string | null
}

const MIN_FORM_TIME = 3000
const MAX_FORM_TIME = 3600000

export function useSpamProtection() {
  const [honeypotValue, setHoneypotValue] = useState<string>('')
  const formStartTime = useRef<number>(Date.now())
  const [isInitialized, setIsInitialized] = useState<boolean>(false)

  useEffect(() => {
    formStartTime.current = Date.now()
    setIsInitialized(true)
  }, [])

  const validate = (): SpamProtectionResult => {
    if (!isInitialized) {
      return {
        isValid: false,
        error: 'Form henüz hazır değil'
      }
    }

    if (honeypotValue !== '') {
      return {
        isValid: false,
        error: 'Spam tespit edildi'
      }
    }

    const timeElapsed = Date.now() - formStartTime.current

    if (timeElapsed < MIN_FORM_TIME) {
      return {
        isValid: false,
        error: 'Form çok hızlı gönderildi. Lütfen tekrar deneyin.'
      }
    }

    if (timeElapsed > MAX_FORM_TIME) {
      return {
        isValid: false,
        error: 'Form süresi doldu. Lütfen sayfayı yenileyin.'
      }
    }

    return {
      isValid: true,
      error: null
    }
  }

  return {
    validate,
    honeypotValue,
    setHoneypotValue
  }
}


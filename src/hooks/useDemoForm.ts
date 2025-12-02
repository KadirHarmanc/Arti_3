import { useState } from 'react'
import { useSpamProtection } from './useSpamProtection'

export type FormSubmitStatus = 'idle' | 'submitting' | 'success' | 'error'

export interface DemoFormData {
  program: string
  firma: string
  adSoyad: string
  telefon: string
  aciklama: string
}

export function useDemoForm() {
  const [formData, setFormData] = useState<DemoFormData>({
    program: '',
    firma: '',
    adSoyad: '',
    telefon: '',
    aciklama: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<FormSubmitStatus>('idle')
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [spamError, setSpamError] = useState<string | null>(null)
  
  const spamProtection = useSpamProtection()

  const handleChange = (field: keyof DemoFormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
    if (spamError) setSpamError(null)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    const spamCheck = spamProtection.validate()
    if (!spamCheck.isValid) {
      setSpamError(spamCheck.error || 'Spam koruması hatası')
      setSubmitStatus('error')
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('submitting')
    setSpamError(null)

    try {
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      setSubmitStatus('success')
      setShowSuccessModal(true)
      setFormData({
        program: '',
        firma: '',
        adSoyad: '',
        telefon: '',
        aciklama: ''
      })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return {
    formData,
    isSubmitting,
    submitStatus,
    showSuccessModal,
    setShowSuccessModal,
    handleChange,
    handleSubmit,
    spamError,
    honeypotValue: spamProtection.honeypotValue,
    setHoneypotValue: spamProtection.setHoneypotValue
  }
}


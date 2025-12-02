import { useState } from 'react'
import { useSpamProtection } from './useSpamProtection'

export type FormSubmitStatus = 'idle' | 'submitting' | 'success' | 'error'

export interface ContactFormData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

export function useContactForm(locale: string) {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<FormSubmitStatus>('idle')
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [spamError, setSpamError] = useState<string | null>(null)
  
  const spamProtection = useSpamProtection()

  const handleChange = (field: keyof ContactFormData, value: string) => {
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
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
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


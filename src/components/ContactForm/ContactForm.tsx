import React from 'react'
import Button from '../ui/Button/Button'
import Input from '../ui/Input/Input'
import Label from '../ui/Label/Label'
import Textarea from '../ui/Textarea/Textarea'
import { AlertCircle } from '../ui/Icons/Icons'
import { ContactFormData, FormSubmitStatus } from '../../hooks/useContactForm'
import './ContactForm.css'

interface ContactFormProps {
  formData: ContactFormData
  isSubmitting: boolean
  submitStatus: FormSubmitStatus
  onChange: (field: keyof ContactFormData, value: string) => void
  onSubmit: (e: React.FormEvent) => void
  t: (key: string) => string
  spamError?: string | null
  honeypotValue: string
  setHoneypotValue: (value: string) => void
}

const ContactForm: React.FC<ContactFormProps> = ({
  formData,
  isSubmitting,
  submitStatus,
  onChange,
  onSubmit,
  t,
  spamError,
  honeypotValue,
  setHoneypotValue
}) => {
  return (
    <form onSubmit={onSubmit} className="contact-form">
      <div style={{ position: 'absolute', left: '-9999px', opacity: 0, pointerEvents: 'none' }} aria-hidden="true">
        <label htmlFor="website-url">Website URL (boş bırakın)</label>
        <input
          type="text"
          id="website-url"
          name="website-url"
          tabIndex={-1}
          autoComplete="off"
          value={honeypotValue || ''}
          onChange={(e) => setHoneypotValue(e.target.value)}
        />
      </div>
      <div className="contact-form-row">
        <div className="contact-form-group">
          <Label htmlFor="name" className="contact-form-label">
            {t('contactPage.form.name.label')} <span className="contact-form-required">*</span>
          </Label>
          <Input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder={t('contactPage.form.name.placeholder')}
            value={formData.name}
            onChange={(e) => onChange('name', e.target.value)}
            required
            className="contact-form-input"
          />
        </div>

        <div className="contact-form-group">
          <Label htmlFor="email" className="contact-form-label">
            {t('contactPage.form.email.label')} <span className="contact-form-required">*</span>
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder={t('contactPage.form.email.placeholder')}
            value={formData.email}
            onChange={(e) => onChange('email', e.target.value)}
            required
            className="contact-form-input"
          />
        </div>
      </div>

      <div className="contact-form-row">
        <div className="contact-form-group">
          <Label htmlFor="phone" className="contact-form-label">
            {t('contactPage.form.phone.label')} <span className="contact-form-required">*</span>
          </Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder={t('contactPage.form.phone.placeholder')}
            value={formData.phone}
            onChange={(e) => onChange('phone', e.target.value)}
            required
            className="contact-form-input"
          />
        </div>

        <div className="contact-form-group">
          <Label htmlFor="subject" className="contact-form-label">
            {t('contactPage.form.subject.label')} <span className="contact-form-required">*</span>
          </Label>
          <Input
            id="subject"
            name="subject"
            type="text"
            placeholder={t('contactPage.form.subject.placeholder')}
            value={formData.subject}
            onChange={(e) => onChange('subject', e.target.value)}
            required
            className="contact-form-input"
          />
        </div>
      </div>

      <div className="contact-form-group">
        <Label htmlFor="message" className="contact-form-label">
          {t('contactPage.form.message.label')} <span className="contact-form-required">*</span>
        </Label>
        <Textarea
          id="message"
          name="message"
          rows={4}
          placeholder={t('contactPage.form.message.placeholder')}
          value={formData.message}
          onChange={(e) => onChange('message', e.target.value)}
          required
          className="contact-form-textarea"
        />
      </div>

      {spamError && (
        <div className="contact-form-error">
          <AlertCircle className="contact-form-error-icon" />
          <div>
            <div className="contact-form-error-title">{t('contactPage.form.error.title')}</div>
            <div className="contact-form-error-message">{spamError}</div>
          </div>
        </div>
      )}

      {submitStatus === 'error' && !spamError && (
        <div className="contact-form-error">
          <AlertCircle className="contact-form-error-icon" />
          <div>
            <div className="contact-form-error-title">{t('contactPage.form.error.title')}</div>
            <div className="contact-form-error-message">{t('contactPage.form.error.message')}</div>
          </div>
        </div>
      )}

      <Button
        type="submit"
        disabled={isSubmitting}
        className="contact-form-submit"
      >
        {isSubmitting ? t('contactPage.form.submitting') : t('contactPage.form.submit')}
      </Button>
    </form>
  )
}

export default ContactForm


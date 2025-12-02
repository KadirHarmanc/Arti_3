import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import Button from '../ui/Button/Button'
import Input from '../ui/Input/Input'
import Label from '../ui/Label/Label'
import Textarea from '../ui/Textarea/Textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/Select/Select'
import { AlertCircle, Cpu, Zap, Users, Rocket, Shield } from '../ui/Icons/Icons'
import { getPrograms, SUPPORT_TYPES } from '../../constants/programs'
import { SupportFormData, FormSubmitStatus } from '../../hooks/useSupportForm'
import './SupportForm.css'

interface SupportFormProps {
  formData: SupportFormData
  isSubmitting: boolean
  submitStatus: FormSubmitStatus
  onInputChange: (field: keyof SupportFormData, value: string) => void
  onSubmit: (e: React.FormEvent) => void
  t: (key: string) => string
  spamError?: string | null
  honeypotValue: string
  setHoneypotValue: (value: string) => void
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Cpu,
  Zap,
  Users,
  AlertCircle,
  Rocket,
  Shield
}

const supportTypeOptions = SUPPORT_TYPES.map(type => ({
  value: type.value,
  label: type.label
}))

function SupportForm({
  formData,
  isSubmitting,
  submitStatus,
  onInputChange,
  onSubmit,
  t,
  spamError,
  honeypotValue,
  setHoneypotValue,
}: SupportFormProps) {
  const { i18n } = useTranslation()
  const programs = getPrograms(i18n.language)

  return (
    <form onSubmit={onSubmit} className="support-form">
          <div style={{ position: 'absolute', left: '-9999px', opacity: 0, pointerEvents: 'none' }} aria-hidden="true">
            <label htmlFor="website-url-support">Website URL (boş bırakın)</label>
            <input
              type="text"
              id="website-url-support"
              name="website-url-support"
              tabIndex={-1}
              autoComplete="off"
              value={honeypotValue || ''}
              onChange={(e) => setHoneypotValue(e.target.value)}
            />
          </div>
          <div className="support-form-row">
            <div className="support-form-group">
              <Label htmlFor="program" className="support-form-label">
                {t('supportPage.form.program.label')} <span className="support-form-required">*</span>
              </Label>
              <Select
                value={formData.program}
                onValueChange={(value) => onInputChange("program", value)}
                required
              >
                <SelectTrigger className="support-form-select-trigger">
                  <SelectValue placeholder={t('supportPage.form.program.placeholder')} options={programs} />
                </SelectTrigger>
                <SelectContent>
                  {programs.map((program) => (
                    <SelectItem key={program.value} value={program.value} className="support-form-select-item">
                      {program.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="support-form-group">
              <Label htmlFor="destekTuru" className="support-form-label">
                {t('supportPage.form.supportType.label')} <span className="support-form-required">*</span>
              </Label>
              <Select
                value={formData.destekTuru}
                onValueChange={(value) => onInputChange("destekTuru", value)}
                required
              >
                <SelectTrigger className="support-form-select-trigger">
                  <SelectValue placeholder={t('supportPage.form.supportType.placeholder')} options={supportTypeOptions} />
                </SelectTrigger>
                <SelectContent>
                  {SUPPORT_TYPES.map((type) => {
                    const IconComponent = iconMap[type.icon] || Shield
                    return (
                      <SelectItem key={type.value} value={type.value} className="support-form-select-item">
                        <div className="support-form-select-item-content">
                          <IconComponent className="support-form-select-item-icon" />
                          {type.label}
                        </div>
                      </SelectItem>
                    )
                  })}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="support-form-row">
            <div className="support-form-group">
              <Label htmlFor="firma" className="support-form-label">
                {t('supportPage.form.company.label')} <span className="support-form-required">*</span>
              </Label>
              <Input
                id="firma"
                name="firma"
                autoComplete="organization"
                placeholder={t('supportPage.form.company.placeholder')}
                value={formData.firma}
                onChange={(e) => onInputChange("firma", e.target.value)}
                required
                className="support-form-input"
              />
            </div>

            <div className="support-form-group">
              <Label htmlFor="adSoyad" className="support-form-label">
                {t('supportPage.form.name.label')} <span className="support-form-required">*</span>
              </Label>
              <Input
                id="adSoyad"
                name="adSoyad"
                autoComplete="name"
                placeholder={t('supportPage.form.name.placeholder')}
                value={formData.adSoyad}
                onChange={(e) => onInputChange("adSoyad", e.target.value)}
                required
                className="support-form-input"
              />
            </div>
          </div>

          <div className="support-form-group">
            <Label htmlFor="telefon" className="support-form-label">
              {t('supportPage.form.phone.label')} <span className="support-form-required">*</span>
            </Label>
            <Input
              id="telefon"
              name="telefon"
              type="tel"
              autoComplete="tel"
              placeholder={t('supportPage.form.phone.placeholder')}
              value={formData.telefon}
              onChange={(e) => onInputChange("telefon", e.target.value)}
              required
              className="support-form-input"
            />
            <p className="support-form-hint">{t('supportPage.form.phone.hint')}</p>
          </div>

          <div className="support-form-group">
            <Label htmlFor="aciklama" className="support-form-label">
              {t('supportPage.form.description.label')} <span className="support-form-required">*</span>
            </Label>
            <Textarea
              id="aciklama"
              name="aciklama"
              autoComplete="off"
              placeholder={t('supportPage.form.description.placeholder')}
              value={formData.aciklama}
              onChange={(e) => onInputChange("aciklama", e.target.value)}
              rows={6}
              required
              className="support-form-textarea"
            />
            <p className="support-form-hint">{t('supportPage.form.description.hint')}</p>
          </div>

          {spamError && (
            <div className="support-form-error">
              <AlertCircle className="support-form-error-icon" />
              <div>
                <div className="support-form-error-title">{t('supportPage.form.error.title')}</div>
                <div className="support-form-error-message">{spamError}</div>
              </div>
            </div>
          )}

          {submitStatus === "error" && !spamError && (
            <div className="support-form-error">
              <AlertCircle className="support-form-error-icon" />
              <div>
                <div className="support-form-error-title">{t('supportPage.form.error.title')}</div>
                <div className="support-form-error-message">{t('supportPage.form.error.message')}</div>
              </div>
            </div>
          )}

          <Button
            type="submit"
            disabled={isSubmitting}
            className="support-form-submit"
          >
            {isSubmitting ? t('supportPage.form.submitting') : t('supportPage.form.submit')}
          </Button>
        </form>
  )
}

export default memo(SupportForm, (prevProps, nextProps) => {
  return (
    prevProps.formData === nextProps.formData &&
    prevProps.isSubmitting === nextProps.isSubmitting &&
    prevProps.submitStatus === nextProps.submitStatus
  )
})

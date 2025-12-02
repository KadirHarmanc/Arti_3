import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import Button from '../ui/Button/Button'
import Input from '../ui/Input/Input'
import Label from '../ui/Label/Label'
import Textarea from '../ui/Textarea/Textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/Select/Select'
import { AlertCircle } from '../ui/Icons/Icons'
import { getPrograms } from '../../constants/programs'
import { DemoFormData, FormSubmitStatus } from '../../hooks/useDemoForm'
import './DemoForm.css'

interface DemoFormProps {
  formData: DemoFormData
  isSubmitting: boolean
  submitStatus: FormSubmitStatus
  onInputChange: (field: keyof DemoFormData, value: string) => void
  onSubmit: (e: React.FormEvent) => void
  t: (key: string) => string
  spamError?: string | null
  honeypotValue: string
  setHoneypotValue: (value: string) => void
}

function DemoForm({
  formData,
  isSubmitting,
  submitStatus,
  onInputChange,
  onSubmit,
  t,
  spamError,
  honeypotValue,
  setHoneypotValue,
}: DemoFormProps) {
  const { i18n } = useTranslation()
  const programs = getPrograms(i18n.language)

  return (
    <form onSubmit={onSubmit} className="demo-form">
          <div style={{ position: 'absolute', left: '-9999px', opacity: 0, pointerEvents: 'none' }} aria-hidden="true">
            <label htmlFor="website-url-demo">Website URL (boş bırakın)</label>
            <input
              type="text"
              id="website-url-demo"
              name="website-url-demo"
              tabIndex={-1}
              autoComplete="off"
              value={honeypotValue || ''}
              onChange={(e) => setHoneypotValue(e.target.value)}
            />
          </div>
          <div className="demo-form-group">
            <Label htmlFor="program" className="demo-form-label">
              {t('demoPage.form.program.label')} <span className="demo-form-required">*</span>
            </Label>
            <Select
              value={formData.program}
              onValueChange={(value) => onInputChange("program", value)}
              required
            >
              <SelectTrigger className="demo-form-select-trigger">
                <SelectValue placeholder={t('demoPage.form.program.placeholder')} options={programs} />
              </SelectTrigger>
              <SelectContent>
                {programs.map((program) => (
                  <SelectItem key={program.value} value={program.value} className="demo-form-select-item">
                    {program.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <p className="demo-form-hint">{t('demoPage.form.program.hint')}</p>
          </div>

          <div className="demo-form-row">
            <div className="demo-form-group">
              <Label htmlFor="firma" className="demo-form-label">
                {t('demoPage.form.company.label')} <span className="demo-form-required">*</span>
              </Label>
              <Input
                id="firma"
                name="firma"
                autoComplete="organization"
                placeholder={t('demoPage.form.company.placeholder')}
                value={formData.firma}
                onChange={(e) => onInputChange("firma", e.target.value)}
                required
                className="demo-form-input"
              />
            </div>

            <div className="demo-form-group">
              <Label htmlFor="adSoyad" className="demo-form-label">
                {t('demoPage.form.name.label')} <span className="demo-form-required">*</span>
              </Label>
              <Input
                id="adSoyad"
                name="adSoyad"
                autoComplete="name"
                placeholder={t('demoPage.form.name.placeholder')}
                value={formData.adSoyad}
                onChange={(e) => onInputChange("adSoyad", e.target.value)}
                required
                className="demo-form-input"
              />
            </div>
          </div>

          <div className="demo-form-group">
            <Label htmlFor="telefon" className="demo-form-label">
              {t('demoPage.form.phone.label')} <span className="demo-form-required">*</span>
            </Label>
            <Input
              id="telefon"
              name="telefon"
              type="tel"
              autoComplete="tel"
              placeholder={t('demoPage.form.phone.placeholder')}
              value={formData.telefon}
              onChange={(e) => onInputChange("telefon", e.target.value)}
              required
              className="demo-form-input"
            />
            <p className="demo-form-hint">{t('demoPage.form.phone.hint')}</p>
          </div>

          <div className="demo-form-group">
            <Label htmlFor="aciklama" className="demo-form-label">
              {t('demoPage.form.description.label')} <span className="demo-form-required">*</span>
            </Label>
            <Textarea
              id="aciklama"
              name="aciklama"
              autoComplete="off"
              placeholder={t('demoPage.form.description.placeholder')}
              value={formData.aciklama}
              onChange={(e) => onInputChange("aciklama", e.target.value)}
              rows={6}
              required
              className="demo-form-textarea"
            />
            <p className="demo-form-hint">{t('demoPage.form.description.hint')}</p>
          </div>

          {spamError && (
            <div className="demo-form-error">
              <AlertCircle className="demo-form-error-icon" />
              <div>
                <div className="demo-form-error-title">{t('demoPage.form.error.title')}</div>
                <div className="demo-form-error-message">{spamError}</div>
              </div>
            </div>
          )}

          {submitStatus === "error" && !spamError && (
            <div className="demo-form-error">
              <AlertCircle className="demo-form-error-icon" />
              <div>
                <div className="demo-form-error-title">{t('demoPage.form.error.title')}</div>
                <div className="demo-form-error-message">{t('demoPage.form.error.message')}</div>
              </div>
            </div>
          )}

          <Button
            type="submit"
            disabled={isSubmitting}
            className="demo-form-submit"
          >
            {isSubmitting ? t('demoPage.form.submitting') : t('demoPage.form.submit')}
          </Button>
        </form>
  )
}

export default memo(DemoForm, (prevProps, nextProps) => {
  return (
    prevProps.formData === nextProps.formData &&
    prevProps.isSubmitting === nextProps.isSubmitting &&
    prevProps.submitStatus === nextProps.submitStatus
  )
})

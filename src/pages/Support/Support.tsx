import React from 'react'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'
import { useSupportForm } from '../../hooks/useSupportForm'
import SupportForm from '../../components/SupportForm/SupportForm'
import ContactSuccessModal from '../../components/ContactSuccessModal/ContactSuccessModal'
import './Support.css'

const Support: React.FC = () => {
  const { t, i18n } = useTranslation()
  const currentLocale = i18n.language

  const {
    formData,
    isSubmitting,
    submitStatus,
    showSuccessModal,
    setShowSuccessModal,
    handleChange,
    handleSubmit,
    spamError,
    honeypotValue,
    setHoneypotValue,
  } = useSupportForm()

  const baseUrl = typeof window !== 'undefined' ? window.location.origin : ''
  const seoTitle = currentLocale === 'tr'
    ? 'Destek Talebi - Artı 3 Bilişim'
    : 'Support Request - Arti 3 Bilişim'
  const seoDescription = currentLocale === 'tr'
    ? 'Akınsoft ürünleri için destek talebi oluşturun. Size en kısa sürede dönüş yapacağız.'
    : 'Create a support request for Akinsoft products. We will get back to you as soon as possible.'

  return (
    <>
      <Helmet>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${baseUrl}/support`} />
        <link rel="canonical" href={`${baseUrl}/support`} />
        <html lang={currentLocale} />
      </Helmet>
      <div className="support-page">
        <section className="support-hero">
          <div className="support-hero-container">
            <div className="support-hero-content">
              <h1 className="support-hero-title">
                {t('supportPage.hero.title')}
              </h1>
              <p className="support-hero-description">
                {t('supportPage.hero.description')}
              </p>
            </div>
          </div>
        </section>

        <section className="support-form-section">
          <div className="support-form-container">
            <div className="support-form-card">
              <div className="support-form-header">
                <div className="support-form-header-content">
                  <h2 className="support-form-title">
                    {t('supportPage.form.title')}
                  </h2>
                  <p className="support-form-subtitle">
                    {t('supportPage.form.subtitle')}
                  </p>
                </div>
              </div>
              <SupportForm
                formData={formData}
                isSubmitting={isSubmitting}
                submitStatus={submitStatus}
                onInputChange={handleChange}
                onSubmit={handleSubmit}
                t={t}
                spamError={spamError}
                honeypotValue={honeypotValue}
                setHoneypotValue={setHoneypotValue}
              />
            </div>
          </div>
        </section>

        <ContactSuccessModal
          isOpen={showSuccessModal}
          onClose={() => setShowSuccessModal(false)}
          title={currentLocale === 'tr' ? 'Başarılı!' : 'Success!'}
          message={currentLocale === 'tr' 
            ? 'Destek talebiniz başarıyla gönderildi! En kısa sürede size dönüş yapacağız.'
            : 'Your support request has been sent successfully! We will get back to you as soon as possible.'}
          okButtonText={currentLocale === 'tr' ? 'Tamam' : 'Okay'}
          backButtonText={currentLocale === 'tr' ? 'Ürünlere Dön' : 'Back to Products'}
          backButtonHref="/products"
        />
      </div>
    </>
  )
}

export default Support

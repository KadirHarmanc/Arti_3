import React from 'react'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'
import { useDemoForm } from '../../hooks/useDemoForm'
import DemoForm from '../../components/DemoForm/DemoForm'
import ContactSuccessModal from '../../components/ContactSuccessModal/ContactSuccessModal'
import './Demo.css'

const Demo: React.FC = () => {
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
  } = useDemoForm()

  const baseUrl = typeof window !== 'undefined' ? window.location.origin : ''
  const seoTitle = currentLocale === 'tr'
    ? 'Demo Talep Et - Artı 3 Bilişim'
    : 'Request Demo - Arti 3 Bilişim'
  const seoDescription = currentLocale === 'tr'
    ? 'Akınsoft ürünleri için ücretsiz demo talep edin. Size en kısa sürede dönüş yapacağız.'
    : 'Request a free demo for Akinsoft products. We will get back to you as soon as possible.'

  return (
    <>
      <Helmet>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${baseUrl}/demo`} />
        <link rel="canonical" href={`${baseUrl}/demo`} />
        <html lang={currentLocale} />
      </Helmet>
      <div className="demo-page">
        <section className="demo-hero">
          <div className="demo-hero-container">
            <div className="demo-hero-content">
              <h1 className="demo-hero-title">
                {t('demoPage.hero.title')}
              </h1>
              <p className="demo-hero-description">
                {t('demoPage.hero.description')}
              </p>
            </div>
          </div>
        </section>

        <section className="demo-form-section">
          <div className="demo-form-container">
            <div className="demo-form-card">
              <div className="demo-form-header">
                <div className="demo-form-header-content">
                  <h2 className="demo-form-title">
                    {t('demoPage.form.title')}
                  </h2>
                  <p className="demo-form-subtitle">
                    {t('demoPage.form.subtitle')}
                  </p>
                </div>
              </div>
              <DemoForm
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
            ? 'Demo talebiniz başarıyla gönderildi! En kısa sürede size dönüş yapacağız.'
            : 'Your demo request has been sent successfully! We will get back to you as soon as possible.'}
          okButtonText={currentLocale === 'tr' ? 'Tamam' : 'Okay'}
        />
      </div>
    </>
  )
}

export default Demo

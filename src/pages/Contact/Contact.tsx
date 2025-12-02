import React from 'react'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'
import { Mail, Phone, MapPin, Clock } from '../../components/ui/Icons/Icons'
import { useContactForm } from '../../hooks/useContactForm'
import ContactForm from '../../components/ContactForm/ContactForm'
import ContactSuccessModal from '../../components/ContactSuccessModal/ContactSuccessModal'
import './Contact.css'

const Contact: React.FC = () => {
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
  } = useContactForm()

  const baseUrl = typeof window !== 'undefined' ? window.location.origin : ''
  const seoTitle = currentLocale === 'tr'
    ? 'İletişim - Artı 3 Bilişim'
    : 'Contact - Arti 3 Bilişim'
  const seoDescription = currentLocale === 'tr'
    ? 'Bizimle iletişime geçin. Sorularınız, önerileriniz veya iş birliği teklifleriniz için bize ulaşın. Size en kısa sürede dönüş yapacağız.'
    : 'Contact us. Reach out to us for your questions, suggestions or partnership offers. We will get back to you as soon as possible.'

  return (
    <>
      <Helmet>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${baseUrl}/contact`} />
        <link rel="canonical" href={`${baseUrl}/contact`} />
        <html lang={currentLocale} />
      </Helmet>
      <div className="contact-page">
      <section className="contact-hero">
        <div className="contact-hero-container">
          <div className="contact-hero-content">
            <h1 className="contact-hero-title">
              {t('contactPage.hero.title')}
            </h1>
            <p className="contact-hero-description">
              {t('contactPage.hero.description')}
            </p>
          </div>
        </div>
      </section>

      <section className="contact-form-section">
        <div className="contact-form-container">
          <div className="contact-form-card">
            <div className="contact-form-header">
              <div className="contact-form-header-content">
                <h2 className="contact-form-title">
                  {t('contactPage.form.title')}
                </h2>
                <p className="contact-form-subtitle">
                  {t('contactPage.form.subtitle')}
                </p>
              </div>
            </div>
            <ContactForm
              formData={formData}
              isSubmitting={isSubmitting}
              submitStatus={submitStatus}
              onChange={handleChange}
              onSubmit={handleSubmit}
              t={t}
              spamError={spamError}
              honeypotValue={honeypotValue}
              setHoneypotValue={setHoneypotValue}
            />
          </div>
        </div>
      </section>

      <section className="contact-info-section">
        <div className="contact-info-container">
          <div className="contact-info-header">
            <h2 className="contact-info-title">
              {t('contactPage.info.title')}
            </h2>
            <p className="contact-info-description">
              {t('contactPage.info.description')}
            </p>
          </div>

          <div className="contact-info-grid">
            <div className="contact-info-item">
              <div className="contact-info-icon">
                <MapPin className="contact-info-icon-svg" />
              </div>
              <h3 className="contact-info-item-title">
                {t('contactPage.info.address.title')}
              </h3>
              <p className="contact-info-item-value">
                {t('contactPage.info.address.value')}
              </p>
            </div>

            <a
              href={`tel:${t('contactPage.info.phone.value')}`}
              className="contact-info-item contact-info-link"
            >
              <div className="contact-info-icon">
                <Phone className="contact-info-icon-svg" />
              </div>
              <h3 className="contact-info-item-title">
                {t('contactPage.info.phone.title')}
              </h3>
              <p className="contact-info-item-value">
                {t('contactPage.info.phone.value')}
              </p>
            </a>

            <a
              href={`mailto:${t('contactPage.info.email.value')}`}
              className="contact-info-item contact-info-link"
            >
              <div className="contact-info-icon">
                <Mail className="contact-info-icon-svg" />
              </div>
              <h3 className="contact-info-item-title">
                {t('contactPage.info.email.title')}
              </h3>
              <p className="contact-info-item-value">
                {t('contactPage.info.email.value')}
              </p>
            </a>

            <div className="contact-info-item">
              <div className="contact-info-icon">
                <Clock className="contact-info-icon-svg" />
              </div>
              <h3 className="contact-info-item-title">
                {t('contactPage.info.hours.title')}
              </h3>
              <p className="contact-info-item-value">
                {t('contactPage.info.hours.value')}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-map-section">
        <div className="contact-map-container">
          <div className="contact-map-header">
            <h2 className="contact-map-title">
              {currentLocale === 'tr' ? 'Konumumuz' : 'Our Location'}
            </h2>
            <p className="contact-map-description">
              {currentLocale === 'tr' 
                ? 'Bizi ziyaret etmek veya yolumuzu bulmak için haritamızı kullanabilirsiniz'
                : 'You can use our map to visit us or find our way'}
            </p>
          </div>

          <div className="contact-map-wrapper">
            <iframe
              src="https://www.google.com/maps?q=Art%C4%B1+3+Bili%C5%9Fim+ve+Teknoloji+%C3%9Cr%C3%BCnleri+Ticaret+Limited+%C5%9Eirketi,+Mustafa+Kemal+Pa%C5%9Fa,+Mahir+Sk.+No:87+D:A,+34320+Avc%C4%B1lar/%C4%B0stanbul&ftid=0x14caa0f0b4f2fa3b:0x688c476b76bc9575&entry=gps&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="contact-map-iframe"
              title={currentLocale === 'tr' ? 'Artı 3 Bilişim Konum Haritası' : 'Artı 3 Bilişim Location Map'}
            />
          </div>

          <div className="contact-map-actions">
            <a
              href="https://maps.app.goo.gl/y3DpBFYq6QiySE4CA?g_st=ipc"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-map-button contact-map-button-primary"
            >
              <MapPin className="contact-map-button-icon" />
              <span>{currentLocale === 'tr' ? 'Yol Tarifi Al' : 'Get Directions'}</span>
            </a>
            <a
              href="tel:+902124232784"
              className="contact-map-button contact-map-button-secondary"
            >
              <Phone className="contact-map-button-icon" />
              <span>{currentLocale === 'tr' ? 'Hemen Ara' : 'Call Now'}</span>
            </a>
          </div>
        </div>
      </section>

      <ContactSuccessModal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        title={currentLocale === 'tr' ? 'Başarılı!' : 'Success!'}
        message={t('contactPage.form.success')}
        okButtonText={currentLocale === 'tr' ? 'Tamam' : 'Okay'}
      />
      </div>
    </>
  )
}

export default Contact

import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import './About.css'

function StructuredData({ locale }: { locale: string }) {
  const baseUrl = window.location.origin

  const keywords = locale === 'tr'
    ? ["ARTI 3 BİLİŞİM", "bilişim şirketi", "teknoloji çözümleri", "İstanbul bilişim", "elektrik projeleri", "zayıf akım sistemleri", "yazılım geliştirme", "bilgisayar sistemleri", "IT hizmetleri", "2004 kuruluş"]
    : ["ARTI 3 BİLİŞİM", "IT company", "technology solutions", "Istanbul IT", "electrical projects", "low current systems", "software development", "computer systems", "IT services", "founded 2004"]

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ARTI 3 BİLİŞİM",
    "alternateName": "Artı 3 Bilişim",
    "url": baseUrl,
    "logo": `${baseUrl}/photos/arti3_logo.png`,
    "description": locale === 'tr' 
      ? "2004 yılında İstanbul'da kurulan ARTI 3 BİLİŞİM, bilgisayar, yazılım, donanım, proje bazlı elektrik ve zayıf akım işleri konularında uzmanlaşmış teknoloji çözümleri sunmaktadır."
      : "ARTI 3 BİLİŞİM, founded in Istanbul in 2004, specializes in computer, software, hardware, project-based electrical and low current systems, providing technology solutions.",
    "foundingDate": "2004",
    "keywords": keywords.join(", "),
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "İstanbul",
      "addressCountry": "TR"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+90-212-423-27-84",
      "contactType": "Customer Service",
      "areaServed": "TR",
      "availableLanguage": ["Turkish", "English"]
    },
    "sameAs": [],
    "knowsAbout": [
      "Bilgisayar Sistemleri",
      "Yazılım Geliştirme",
      "Elektrik Projeleri",
      "Zayıf Akım Sistemleri",
      "IT Hizmetleri"
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

const About: React.FC = () => {
  const { t, i18n } = useTranslation()
  const currentLocale = i18n.language || 'tr'
  const baseUrl = window.location.origin

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Helmet>
        <title>{t('aboutPage.meta.title')}</title>
        <meta name="description" content={t('aboutPage.meta.description')} />
        <link rel="canonical" href={`${baseUrl}/about`} />
        <html lang={currentLocale} />
        
        <meta property="og:title" content={t('aboutPage.meta.title')} />
        <meta property="og:description" content={t('aboutPage.meta.description')} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${baseUrl}/about`} />
        <meta property="og:image" content={`${baseUrl}/photos/arti3_logo.png`} />
        <meta property="og:locale" content={currentLocale === 'tr' ? 'tr_TR' : 'en_US'} />
        <meta property="og:site_name" content="ARTI 3 BİLİŞİM" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t('aboutPage.meta.title')} />
        <meta name="twitter:description" content={t('aboutPage.meta.description')} />
        <meta name="twitter:image" content={`${baseUrl}/photos/arti3_logo.png`} />
      </Helmet>
      <StructuredData locale={currentLocale} />

      <div className="about-page">
        <section className="about-hero">
          <div className="about-hero-container">
            <div className="about-hero-content">
              <h1 className="about-hero-title">
                {t('aboutPage.hero.companyName')}
              </h1>
            </div>
          </div>
        </section>

        <section className="about-content">
          <div className="about-content-container">
            <div className="about-content-wrapper">
              <h2 className="about-content-title">
                {t('aboutPage.hero.title')}
              </h2>
              <div className="about-content-text">
                <p className="about-content-paragraph">
                  {t('aboutPage.content.paragraph1')}
                </p>
                <p className="about-content-paragraph">
                  {t('aboutPage.content.paragraph2')}
                </p>
                <p className="about-content-paragraph">
                  {t('aboutPage.content.paragraph3')}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="about-tagline">
          <div className="about-tagline-container">
            <div className="about-tagline-content">
              <p className="about-tagline-text">
                {t('aboutPage.tagline.text')}
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default About


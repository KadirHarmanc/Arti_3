import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'
import { ArrowDown } from '../../components/ui/Icons/Icons'
import { useSmoothScroll } from '../../hooks/useSmoothScroll'
import BrandSlider from '../../components/BrandSlider/BrandSlider'
import ServiceSection from '../../components/ServiceSection/ServiceSection'
import AkinsoftPromo from '../../components/AkinsoftPromo/AkinsoftPromo'
import CTA from '../../components/CTA/CTA'
import { getServiceSections } from '../../data/serviceSections'
import './Home.css'

function StructuredData({ locale }: { locale: string }) {
  const baseUrl = window.location.origin

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Artı 3 Bilişim",
    "url": baseUrl,
    "logo": `${baseUrl}/photos/arti3_logo.png`,
    "description": locale === 'tr' 
      ? "20 yıllık tecrübemizle bilişim, zayıf akım, elektrik, IT hizmetleri ve Akınsoft ürünleri konularında profesyonel çözümler sunuyoruz."
      : "With 20 years of experience, we provide professional solutions in IT, low current, electrical, IT services and Akınsoft products.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "İstanbul",
      "addressCountry": "TR"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+90-212-423-27-84",
      "contactType": "customer service"
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

const Home: React.FC = () => {
  const { t, i18n } = useTranslation()
  const currentLocale = i18n.language as 'tr' | 'en'

  useSmoothScroll()

  const servicesData = getServiceSections(currentLocale)

  useEffect(() => {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Artı 3 Bilişim",
      "url": window.location.origin,
      "logo": `${window.location.origin}/photos/arti3_logo.png`,
      "description": currentLocale === 'tr' 
        ? "20 yıllık tecrübemizle bilişim, zayıf akım, elektrik, IT hizmetleri ve Akınsoft ürünleri konularında profesyonel çözümler sunuyoruz."
        : "With 20 years of experience, we provide professional solutions in IT, low current, electrical, IT services and Akınsoft products.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "İstanbul",
        "addressCountry": "TR"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+90-212-423-27-84",
        "contactType": "customer service"
      }
    })
    document.head.appendChild(script)

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script)
      }
    }
  }, [currentLocale])


  const baseUrl = typeof window !== 'undefined' ? window.location.origin : ''
  const seoTitle = currentLocale === 'tr' 
    ? 'Artı 3 Bilişim - Bilişim, Elektrik ve IT Hizmetleri'
    : 'Arti 3 Bilişim - IT, Electrical and Technology Services'
  const seoDescription = currentLocale === 'tr'
    ? '20 yıllık tecrübemizle bilişim, zayıf akım, elektrik, IT hizmetleri ve Akınsoft ürünleri konularında profesyonel çözümler sunuyoruz.'
    : 'With 20 years of experience, we provide professional solutions in IT, low current, electrical, IT services and Akınsoft products.'
  const seoKeywords = currentLocale === 'tr'
    ? 'bilişim hizmetleri, elektrik proje, zayıf akım sistemleri, IT çözümleri, Akınsoft, teknoloji çözümleri'
    : 'IT services, electrical projects, weak current systems, IT solutions, Akinsoft, technology solutions'

  return (
    <>
      <Helmet>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
        <meta name="keywords" content={seoKeywords} />
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={baseUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoTitle} />
        <meta name="twitter:description" content={seoDescription} />
        <link rel="canonical" href={baseUrl} />
        <html lang={currentLocale} />
      </Helmet>
      <div className="home-page">
      <StructuredData locale={currentLocale} />

      <section className="home-hero home-hero-lazy">
        <div className="home-hero-floating-shapes">
          <div className="home-hero-shape home-hero-shape-1"></div>
          <div className="home-hero-shape home-hero-shape-2"></div>
          <div className="home-hero-shape home-hero-shape-3"></div>
        </div>
        
        <div className="home-hero-background">
          <div className="home-hero-overlay"></div>
          <div className="home-hero-image-wrapper">
            <img
              src="/photos/server_tamir.jpg"
              alt={currentLocale === 'tr' ? 'Artı 3 Bilişim - Profesyonel bilişim ve teknoloji çözümleri sunan şirket' : 'Artı 3 Bilişim - Professional IT and technology solutions company'}
              className="home-hero-image"
            />
          </div>
        </div>

        <div className="home-hero-content">
          <div className="home-hero-text">
            <h1 className="home-hero-title">
              {t('hero.title')}
            </h1>
            <p className="home-hero-description">
              {t('hero.description')}
            </p>
          </div>
        </div>

        <span 
          className="home-hero-scroll-text"
          onClick={() => {
            const servicesSection = document.getElementById('services')
            if (servicesSection) {
              servicesSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }
          }}
        >
          {currentLocale === 'tr' ? 'Keşfet' : 'Explore'}
        </span>
        <div 
          className="home-hero-scroll-indicator"
          onClick={() => {
            const servicesSection = document.getElementById('services')
            if (servicesSection) {
              servicesSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }
          }}
        >
          <ArrowDown className="home-hero-scroll-icon" />
        </div>
      </section>

      <BrandSlider />

      <section id="services">
        {servicesData.map((service, index) => (
        <ServiceSection
          key={index}
          title={service.title}
          description={service.description}
          images={service.images}
          imageAlts={service.imageAlts}
          linkTo={service.linkTo}
          linkText={service.linkText}
          reverse={service.reverse}
          showHeader={service.showHeader}
          headerTitle={service.headerTitle}
          sectionClass={service.sectionClass}
        />
      ))}
      </section>

      <AkinsoftPromo />

      <CTA
        title={currentLocale === 'tr' ? 'Projenize Başlayalım' : 'Let\'s Start Your Project'}
        description={currentLocale === 'tr' 
          ? '20 yıllık tecrübemizle işletmenizin ihtiyaçlarına özel çözümler sunuyoruz. Hemen iletişime geçin, size en uygun çözümü birlikte belirleyelim.'
          : 'With 20 years of experience, we offer customized solutions for your business needs. Contact us now and let\'s determine the best solution together.'}
        buttons={[
          {
            text: currentLocale === 'tr' ? 'İletişime Geç' : 'Contact Us',
            href: '/contact',
            variant: 'primary'
          }
        ]}
      />
      </div>
    </>
  )
}

export default Home

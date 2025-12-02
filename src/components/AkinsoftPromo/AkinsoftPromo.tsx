import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { ArrowRight } from '../ui/Icons/Icons'
import './AkinsoftPromo.css'

function StructuredData({ locale }: { locale: string }) {
  const baseUrl = window.location.origin

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Akınsoft Yazılım Çözümleri",
    "description": locale === 'tr' 
      ? "Verimliliği yeniden tanımlayan modern iş teknolojileri. İşletmenizin tüm operasyonlarını tek bir merkezde toplayan entegre yazılım altyapısı. Üretimden muhasebeye, satış yönetiminden e-ticarete kadar tüm iş akışlarını dijitalleştirin."
      : "Redefining efficiency with modern business technologies. Integrated software infrastructure that consolidates all your business operations in a single center. Digitize all workflows from production to accounting, from sales management to e-commerce.",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Windows, Web",
    "provider": {
      "@type": "Organization",
      "name": "Artı 3 Bilişim",
      "url": baseUrl,
      "logo": `${baseUrl}/photos/arti3_logo.png`
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

const AkinsoftPromo: React.FC = () => {
  const { i18n } = useTranslation()
  const currentLocale = i18n.language as 'tr' | 'en'

  return (
    <div className="akinsoft-promo-page">
      <StructuredData locale={currentLocale} />
      
      <section className="akinsoft-promo">
        <h2 className="akinsoft-promo-title">
          {currentLocale === 'tr' 
            ? 'İşinizi Dönüştüren Modern Teknolojiler'
            : 'Transforming Your Business with Modern Technologies'}
        </h2>
        
        <div className="akinsoft-promo-container">
          <div className="akinsoft-promo-content">
            <p className="akinsoft-promo-description">
              {currentLocale === 'tr' 
                ? 'İşletmenizin tüm operasyonlarını tek bir merkezde toplayan entegre yazılım altyapısıyla tanışın. Üretimden muhasebeye, satış yönetiminden e-ticarete kadar tüm iş akışlarını dijitalleştirerek daha verimli ve kontrollü bir çalışma deneyimi oluşturun.'
                : 'Discover an integrated software infrastructure that consolidates all your business operations in a single center. Digitize all workflows from production to accounting, from sales management to e-commerce, creating a more efficient and controlled work experience.'}
            </p>

            <div className="akinsoft-promo-brand">
              <img 
                src="/photos/akinsoft.png" 
                alt="Akınsoft" 
                className="akinsoft-promo-brand-logo"
              />
              <span className="akinsoft-promo-brand-text">
                {currentLocale === 'tr' ? 'ile Profesyonel Çözüm' : 'with Professional Solutions'}
              </span>
            </div>

            <Link to="/products" className="akinsoft-promo-cta">
              <span>{currentLocale === 'tr' ? 'Tüm Ürünleri Gör' : 'View All Products'}</span>
              <ArrowRight className="akinsoft-promo-cta-icon" />
            </Link>
          </div>

          <div className="akinsoft-promo-visual">
            <div className="akinsoft-promo-image-box">
              <img
                src="/photos/akinsoft-promo.png"
                alt={currentLocale === 'tr' ? 'Akınsoft Ürünleri' : 'Akınsoft Products'}
                className="akinsoft-promo-image"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AkinsoftPromo
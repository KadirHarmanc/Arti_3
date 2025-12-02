import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'
import Button from '../../components/ui/Button/Button'
import { ArrowLeft, Phone, ArrowRight, CheckCircle } from '../../components/ui/Icons/Icons'
import { getProductById } from '../../data/products'
import CTA from '../../components/CTA/CTA'
import NotFound from '../NotFound/NotFound'
import './ProductDetail.css'

const ProductDetail: React.FC = () => {
  const { productId } = useParams<{ productId: string }>()
  const { i18n } = useTranslation()
  const currentLocale = i18n.language
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : ''

  const product = productId ? getProductById(productId, currentLocale) : null

  const [activeSection, setActiveSection] = useState<string>('section-0')

  const sections = (product?.sections || []).map((section, index) => ({
    key: `section-${index}`,
    heading: section.heading,
    text: section.text,
    bullets: section.bullets || []
  }))

  useEffect(() => {
    if (sections.length > 0) {
      setActiveSection(sections[0].key)
    }
  }, [productId, currentLocale, sections.length])

  if (!product) {
    return <NotFound />
  }

  const seoTitle = `${product.title} | Arti 3 Bilişim`
  const seoDescription = product.description
  const seoKeywords = `${product.title}, Akınsoft, yazılım, ERP, iş yazılımı, ${product.slug}`

  const getStructuredData = () => {
    return {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": product.title,
      "description": product.description,
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Windows, Web",
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock",
        "priceCurrency": "TRY"
      },
      "provider": {
        "@type": "Organization",
        "name": "Artı 3 Bilişim",
        "url": baseUrl,
        "logo": `${baseUrl}/photos/arti3_logo.png`,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "İstanbul",
          "addressCountry": "TR"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+90-212-423-27-84",
          "contactType": "customer service",
          "availableLanguage": ["Turkish", "English"]
        }
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.5",
        "reviewCount": "100"
      }
    }
  }

  useEffect(() => {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.id = 'product-structured-data'
    script.text = JSON.stringify(getStructuredData())
    document.head.appendChild(script)

    return () => {
      const existingScript = document.head.querySelector('#product-structured-data')
      if (existingScript) {
        document.head.removeChild(existingScript)
      }
    }
  }, [product, baseUrl, currentLocale])

  const activeSectionData = sections.find(s => s.key === activeSection)
  const compactHeadingVariants = new Set([
    'Kullanım Alanları',
    'Usage Areas',
    'Öne Çıkan Özellikler',
    'Key Features',
    'İçerdiği Modüller',
    'Included Modules'
  ])

  const demoHref = `/demo?product=${product.slug}`
  const supportHref = `/support?product=${product.slug}`

  return (
    <>
      <Helmet>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
        <meta name="keywords" content={seoKeywords} />
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:type" content="product" />
        <meta property="og:url" content={`${baseUrl}/products/${productId}`} />
        {product.heroImage && (
          <meta property="og:image" content={`${baseUrl}${product.heroImage}`} />
        )}
        <meta property="og:locale" content={currentLocale === 'tr' ? 'tr_TR' : 'en_US'} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoTitle} />
        <meta name="twitter:description" content={seoDescription} />
        {product.heroImage && (
          <meta name="twitter:image" content={`${baseUrl}${product.heroImage}`} />
        )}
        <link rel="canonical" href={`${baseUrl}/products/${productId}`} />
        <html lang={currentLocale} />
      </Helmet>

      <div className="product-detail-page">
        <section className="product-detail-hero">
          <div className="product-detail-hero-container">
            <Link to="/products" className="product-detail-back-link">
              <ArrowLeft className="product-detail-back-icon" />
              <span>{currentLocale === 'tr' ? 'Ürünlere Dön' : 'Back to Products'}</span>
            </Link>

            <div className="product-detail-hero-content">
              <h1 className="product-detail-hero-title">
                {product.title}
              </h1>
              <p className="product-detail-hero-description">
                {product.description}
              </p>
              <div className="product-detail-hero-cta">
                <Link to={demoHref}>
                  <Button size="lg" className="product-detail-cta-button">
                    {currentLocale === 'tr' ? 'Demo Talep Et' : 'Request Demo'}
                    <ArrowRight className="product-detail-cta-icon" />
                  </Button>
                </Link>
                <Link to={supportHref}>
                  <Button variant="outline" size="lg" className="product-detail-cta-button">
                    {currentLocale === 'tr' ? 'Destek Talebi' : 'Support Request'}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <div className="product-detail-content-wrapper">
          <div className="product-detail-section-header">
            <h2 className="product-detail-section-title">
              {currentLocale === 'tr' ? 'Ürün Detayları' : 'Product Details'}
            </h2>
            <p className="product-detail-section-description">
              {product.description}
            </p>
          </div>

          <div className="product-detail-tabs">
            {sections.map((section) => (
              <button
                key={section.key}
                className={`product-detail-tab ${activeSection === section.key ? 'product-detail-tab-active' : ''}`}
                onClick={() => setActiveSection(section.key)}
              >
                {section.heading}
              </button>
            ))}
          </div>

          <div className="product-detail-content">
            {activeSectionData && (
              <div
                className={`product-detail-section-content ${
                  compactHeadingVariants.has(activeSectionData.heading)
                    ? 'product-detail-section-content-compact'
                    : ''
                }`}
              >
                <h3 className="product-detail-section-heading">
                  {activeSectionData.heading}
                </h3>
                {activeSectionData.text && (
                  <p className="product-detail-section-text">
                    {activeSectionData.text}
                  </p>
                )}
                {activeSectionData.bullets && activeSectionData.bullets.length > 0 && (
                  <ul className="product-detail-features">
                    {activeSectionData.bullets.map((bullet, index) => (
                      <li key={index} className="product-detail-feature">
                        <CheckCircle className="product-detail-feature-icon" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>
        </div>

        <CTA
          title={currentLocale === 'tr' 
            ? `${product.title} hakkında daha fazla bilgi alın`
            : `Get more information about ${product.title}`}
          description={currentLocale === 'tr'
            ? 'Demo talep edin, destek talebi oluşturun veya bizimle iletişime geçin'
            : 'Request a demo, create a support request or contact us'}
          buttons={[
            {
              text: currentLocale === 'tr' ? 'Demo Talep Et' : 'Request Demo',
              href: demoHref,
              variant: 'primary',
              icon: <Phone />
            },
            {
              text: currentLocale === 'tr' ? 'Destek Talebi' : 'Support Request',
              href: supportHref,
              variant: 'secondary'
            },
            {
              text: currentLocale === 'tr' ? 'İletişime Geç' : 'Contact Us',
              href: '/contact',
              variant: 'secondary'
            }
          ]}
        />
      </div>
    </>
  )
}

export default ProductDetail

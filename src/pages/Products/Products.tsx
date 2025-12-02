import React, { useState, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'
import ProductCard from '../../components/ProductCard/ProductCard'
import { getAllProducts, getProductById } from '../../data/products'
import { Filter, X } from '../../components/ui/Icons/Icons'
import './Products.css'

const Products: React.FC = () => {
  const { t, i18n } = useTranslation()
  const currentLocale = i18n.language
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : ''
  const [selectedGroup, setSelectedGroup] = useState<string>('Tümü')

  const allProducts = getAllProducts(currentLocale)
  const totalProducts = 55
  const allProductIds = Array.from({ length: totalProducts }, (_, i) => i + 1)

  const getMainCategory = (selected: string): string | null => {
    if (selected === 'Tümü' || selected === 'Araçlar') return null
    if (selected === 'Ticari' || selected === 'Wolvox' || selected === 'OctoPlus') {
      return 'Ticari'
    }
    if (selected === 'Bulut') {
      const hasTicariBulut = allProductIds.some(id => {
        const p = getProductById(String(id), currentLocale)
        return p && p.subCategory === 'Ticari/Bulut'
      })
      return hasTicariBulut ? 'Ticari' : null
    }
    if (selected === 'Sektörel' || selected === 'Sektörel/Bulut' || selected === 'Cafe' || selected === 'Sektörel-Genel') {
      return 'Sektörel'
    }
    if (selected === 'Mobil' || selected === 'Android' || selected === 'IOS' || selected === 'Windows Mobil') {
      return 'Mobil'
    }
    return null
  }

  const mainCategory = getMainCategory(selectedGroup)
  const showSubCategories = mainCategory !== null

  const filteredProductIds = useMemo(() => {
    if (selectedGroup === 'Tümü') {
      return allProductIds
    }

    return allProductIds.filter((id) => {
      const product = getProductById(String(id), currentLocale)
      if (!product) return false

      let matchesGroup = false

      switch (selectedGroup) {
        case 'Ticari':
          matchesGroup = product.category === 'Ticari'
          break
        case 'Wolvox':
          matchesGroup = product.subCategory === 'Ticari/Wolvox'
          break
        case 'OctoPlus':
          matchesGroup = product.subCategory === 'Ticari/OctoPlus'
          break
        case 'Bulut':
          if (mainCategory === 'Ticari') {
            matchesGroup = product.subCategory === 'Ticari/Bulut'
          } else {
            matchesGroup = product.group === 'Bulut' || product.subCategory === 'Sektörel/Bulut'
          }
          break
        case 'Sektörel':
          matchesGroup = product.category === 'Sektörel'
          break
        case 'Sektörel-Genel':
          matchesGroup = product.category === 'Sektörel' && !product.subCategory
          break
        case 'Sektörel/Bulut':
          matchesGroup = product.subCategory === 'Sektörel/Bulut'
          break
        case 'Cafe':
          matchesGroup = product.subCategory === 'Sektörel/Cafe'
          break
        case 'Mobil':
          matchesGroup = product.category === 'Mobil'
          break
        case 'Android':
          matchesGroup = product.subCategory === 'Mobil/Android'
          break
        case 'IOS':
          matchesGroup = product.subCategory === 'Mobil/IOS'
          break
        case 'Windows Mobil':
          matchesGroup = product.subCategory === 'Mobil/Windows Mobil'
          break
        case 'Araçlar':
          matchesGroup = product.category === 'Araçlar'
          break
        default:
          matchesGroup = false
      }

      return matchesGroup
    })
  }, [selectedGroup, currentLocale, allProductIds, showSubCategories])

  const getStructuredData = () => {
    return {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": t('products.title'),
      "description": currentLocale === 'tr' 
        ? "Akınsoft ürünleri ve çözümleri"
        : "Akinsoft products and solutions",
      "url": `${baseUrl}/products`,
      "mainEntity": {
        "@type": "ItemList",
        "numberOfItems": totalProducts,
        "itemListElement": allProducts.slice(0, 10).map((product, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "item": {
            "@type": "SoftwareApplication",
            "name": product.title,
            "description": product.description,
            "url": `${baseUrl}/products/${index + 1}`
          }
        }))
      }
    }
  }

  return (
    <>
      <Helmet>
        <title>{t('products.title')} | Arti 3 Bilişim</title>
        <meta name="description" content={currentLocale === 'tr' 
          ? "Akınsoft ürünleri ve çözümleri. ERP, CRM, İnsan Kaynakları ve daha fazlası."
          : "Akinsoft products and solutions. ERP, CRM, Human Resources and more."} />
        <meta name="keywords" content="Akınsoft, WOLVOX, ERP, CRM, yazılım, iş yazılımı" />
        <meta property="og:title" content={t('products.title')} />
        <meta property="og:description" content={currentLocale === 'tr' 
          ? "Akınsoft ürünleri ve çözümleri"
          : "Akinsoft products and solutions"} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${baseUrl}/products`} />
        <link rel="canonical" href={`${baseUrl}/products`} />
        <html lang={currentLocale} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(getStructuredData()) }}
        />
      </Helmet>
      <div className="products">
        <div className="products-container">
          <h1 className="products-title">{t('products.title')}</h1>
          <p className="products-description">
            {currentLocale === 'tr' 
              ? 'Akınsoft\'un kapsamlı ürün portföyünü keşfedin. İşletmeniz için en uygun çözümü bulun.'
              : 'Discover Akinsoft\'s comprehensive product portfolio. Find the right solution for your business.'}
          </p>
          
          <div className="products-filters">
            <div className="products-filters-header">
              <Filter className="products-filters-icon" />
              <span className="products-filters-title">
                {currentLocale === 'tr' ? 'Filtrele' : 'Filter'}
              </span>
              {selectedGroup !== 'Tümü' && (
                <button
                  className="products-filters-clear"
                  onClick={() => setSelectedGroup('Tümü')}
                  aria-label={currentLocale === 'tr' ? 'Filtreyi temizle' : 'Clear filter'}
                >
                  <X className="products-filters-clear-icon" />
                  {currentLocale === 'tr' ? 'Temizle' : 'Clear'}
                </button>
              )}
            </div>
            <div className="products-filters-buttons">
              <div className="products-filter-group">
                <button
                  className={`products-filter-button products-filter-button-main ${selectedGroup === 'Tümü' ? 'active' : ''}`}
                  onClick={() => setSelectedGroup('Tümü')}
                >
                  {currentLocale === 'tr' ? 'Tümü' : 'All'}
                </button>
              </div>
              
              <div className="products-filter-group">
                <button
                  className={`products-filter-button products-filter-button-main ${selectedGroup === 'Ticari' || mainCategory === 'Ticari' ? 'active' : ''}`}
                  onClick={() => setSelectedGroup('Ticari')}
                >
                  {currentLocale === 'tr' ? 'Ticari' : 'Commercial'}
                </button>
                {showSubCategories && mainCategory === 'Ticari' && (
                  <div className="products-filter-subgroup">
                    <button
                      className={`products-filter-button products-filter-button-sub ${selectedGroup === 'Wolvox' ? 'active' : ''}`}
                      onClick={() => setSelectedGroup('Wolvox')}
                    >
                      Wolvox
                    </button>
                    <button
                      className={`products-filter-button products-filter-button-sub ${selectedGroup === 'Bulut' ? 'active' : ''}`}
                      onClick={() => setSelectedGroup('Bulut')}
                    >
                      {currentLocale === 'tr' ? 'Bulut' : 'Cloud'}
                    </button>
                    <button
                      className={`products-filter-button products-filter-button-sub ${selectedGroup === 'OctoPlus' ? 'active' : ''}`}
                      onClick={() => setSelectedGroup('OctoPlus')}
                    >
                      OctoPlus
                    </button>
                  </div>
                )}
              </div>
              
              <div className="products-filter-group">
                <button
                  className={`products-filter-button products-filter-button-main ${selectedGroup === 'Sektörel' || mainCategory === 'Sektörel' ? 'active' : ''}`}
                  onClick={() => setSelectedGroup('Sektörel')}
                >
                  {currentLocale === 'tr' ? 'Sektörel' : 'Sectoral'}
                </button>
                {showSubCategories && mainCategory === 'Sektörel' && (
                  <div className="products-filter-subgroup">
                    <button
                      className={`products-filter-button products-filter-button-sub ${selectedGroup === 'Sektörel/Bulut' ? 'active' : ''}`}
                      onClick={() => setSelectedGroup('Sektörel/Bulut')}
                    >
                      {currentLocale === 'tr' ? 'Bulut' : 'Cloud'}
                    </button>
                    <button
                      className={`products-filter-button products-filter-button-sub ${selectedGroup === 'Cafe' ? 'active' : ''}`}
                      onClick={() => setSelectedGroup('Cafe')}
                    >
                      Cafe
                    </button>
                    {(() => {
                      const genelProducts = allProductIds.filter(id => {
                        const p = getProductById(String(id), currentLocale)
                        return p && p.category === 'Sektörel' && !p.subCategory
                      })
                      return genelProducts.length > 0 ? (
                        <button
                          className={`products-filter-button products-filter-button-sub ${selectedGroup === 'Sektörel-Genel' ? 'active' : ''}`}
                          onClick={() => setSelectedGroup('Sektörel-Genel')}
                        >
                          {currentLocale === 'tr' ? 'Genel' : 'General'}
                        </button>
                      ) : null
                    })()}
                  </div>
                )}
              </div>
              
              <div className="products-filter-group">
                <button
                  className={`products-filter-button products-filter-button-main ${selectedGroup === 'Mobil' || mainCategory === 'Mobil' ? 'active' : ''}`}
                  onClick={() => setSelectedGroup('Mobil')}
                >
                  {currentLocale === 'tr' ? 'Mobil' : 'Mobile'}
                </button>
                {showSubCategories && mainCategory === 'Mobil' && (
                  <div className="products-filter-subgroup">
                    <button
                      className={`products-filter-button products-filter-button-sub ${selectedGroup === 'Android' ? 'active' : ''}`}
                      onClick={() => setSelectedGroup('Android')}
                    >
                      Android
                    </button>
                    <button
                      className={`products-filter-button products-filter-button-sub ${selectedGroup === 'IOS' ? 'active' : ''}`}
                      onClick={() => setSelectedGroup('IOS')}
                    >
                      iOS
                    </button>
                    <button
                      className={`products-filter-button products-filter-button-sub ${selectedGroup === 'Windows Mobil' ? 'active' : ''}`}
                      onClick={() => setSelectedGroup('Windows Mobil')}
                    >
                      {currentLocale === 'tr' ? 'Windows Mobil' : 'Windows Mobile'}
                    </button>
                  </div>
                )}
              </div>
              
              <div className="products-filter-group">
                <button
                  className={`products-filter-button products-filter-button-main ${selectedGroup === 'Araçlar' ? 'active' : ''}`}
                  onClick={() => setSelectedGroup('Araçlar')}
                >
                  {currentLocale === 'tr' ? 'Araçlar' : 'Tools'}
                </button>
              </div>
            </div>
          </div>

          <div className="products-results">
            <span className="products-results-count">
              {currentLocale === 'tr' 
                ? `${filteredProductIds.length} ürün bulundu`
                : `${filteredProductIds.length} products found`}
            </span>
          </div>

          <div className="products-grid">
            {filteredProductIds.map((id) => (
              <ProductCard key={id} productId={id} />
            ))}
          </div>

          <section className="products-brand-layer">
            <div className="products-brand-logos">
              <img
                src="/photos/akinsoft.png"
                alt="AKINSOFT Logo"
                className="products-brand-logo"
              />
              <img
                src="/photos/akinsoft_robotics.png"
                alt="AKINROBOTICS Logo"
                className="products-brand-logo products-brand-logo-robotics"
              />
              <img
                src="/photos/wolvox-erp.png"
                alt="WOLVOX Logo"
                className="products-brand-logo"
              />
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default Products


import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { getProductById } from '../../data/products'
import { 
  Database, Cloud, Smartphone, Package, Coffee, ShoppingCart, 
  Users, Settings, BarChart3, Hotel, Briefcase, Monitor, FileText, 
  Zap, Globe, Target, CheckCircle, Home, Heart, GraduationCap, 
  Scissors, Car, Store, MessageSquare, Save, Printer, Phone, Eye, 
  Key, QrCode, CreditCard, Calendar, Rocket, ArrowRight,
  Building2, LifeBuoy
} from '../ui/Icons/Icons'
import PdfViewerModal from '../PdfViewerModal/PdfViewerModal'
import './ProductCard.css'

interface ProductCardProps {
  productId: number
  onOpenPdf?: (productName: string, pdfUrl: string) => void
}

const getProductIcon = (slug: string) => {
  const iconMap: Record<string, React.FC<{ className?: string }>> = {
    'wolvox-erp': Database,
    'wolvox-mrp': Package,
    'wolvox-restoran': Coffee,
    'wolvox-hizli-satis': ShoppingCart,
    'wolvox-crm': Users,
    'wolvox-servis': Settings,
    'wolvox-genel-muhasebe': BarChart3,
    'wolvox-terazi-otomasyon': Settings,
    'yazarkasa-otomasyonu': CreditCard,
    'wolvox-otel': Hotel,
    'wolvox-insan-kaynaklari': Briefcase,
    'wolvox-online-ik': Briefcase,
    'wolvox-kapi-ekrani': Monitor,
    'wolvox-ziyaretci-takip': Users,
    'wolvox-mobil-satis-server': Smartphone,
    'wolvox-demirbas': Building2,
    'wolvox-veri-transfer': Database,
    'e-defter': FileText,
    'fiyatmatik': Monitor,
    'akaryakit-veri-aktarimi': Zap,
    'webconnect': Globe,
    'web-entegrasyon': Globe,
    'online-is-merkezi': Target,
    'beyanname': FileText,
    'octocloud': Cloud,
    'octoplus': Database,
    'e-ticaret': Globe,
    'rezzta': Calendar,
    'myrezzta': Calendar,
    'myfranchise': Store,
    'limondesk': LifeBuoy,
    'qr-menu': QrCode,
    'taskpano': Target,
    'prokuafor': Scissors,
    'e-mutabakat': CheckCircle,
    'cafeplus': Coffee,
    'netsurucu-plus': Car,
    'otopark': Car,
    'netemlak': Home,
    'rentagent': Car,
    'kurs-otomasyonu': GraduationCap,
    'hipokrat': Heart,
    'prosemp': GraduationCap,
    'netgaleri': Car,
    'eofis': Building2,
    'mobil-satis-android': Smartphone,
    'mobil-fiyatgor-android': Eye,
    'mobil-fiyatgor-ios': Eye,
    'keybox-ios': Key,
    'mobil-satis-windows-mobile': Smartphone,
    'officemessenger': MessageSquare,
    'yedekleme': Save,
    'barkod': Printer,
    'santral-server': Phone,
    'senet-basimi': Printer,
  }
  
  return iconMap[slug] || Database
}

const ProductCard: React.FC<ProductCardProps> = ({ productId, onOpenPdf }) => {
  const { i18n } = useTranslation()
  const currentLocale = i18n.language
  const product = getProductById(String(productId), currentLocale)
  const [pdfModal, setPdfModal] = useState<{ isOpen: boolean; productName: string; pdfUrl: string }>({
    isOpen: false,
    productName: '',
    pdfUrl: '',
  })

  if (!product) {
    return null
  }

  const IconComponent = getProductIcon(product.slug)

  const getProductPdfUrl = (slug: string) => {
    const pdfMap: Record<string, string> = {
      'wolvox-erp': '/akinsoft_katalog/erp_v5.pdf',
      'wolvox-restoran': '/akinsoft_katalog/restoran_v9.pdf',
      'wolvox-hizli-satis': '/akinsoft_katalog/supermarket_v6.pdf',
      'wolvox-crm': '/akinsoft_katalog/wolvox_crm_v6.pdf',
      'wolvox-servis': '/akinsoft_katalog/servis-seri_lot_v6.pdf',
      'wolvox-genel-muhasebe': '/akinsoft_katalog/genel-muhasebe_v6.pdf',
      'wolvox-otel': '/akinsoft_katalog/otel_v3.pdf',
      'wolvox-insan-kaynaklari': '/akinsoft_katalog/wolvox_hrm_v7.pdf',
      'e-defter': '/akinsoft_katalog/e-defter_v1.pdf',
      'octocloud': '/akinsoft_katalog/octocloud_v2.pdf',
      'e-ticaret': '/akinsoft_katalog/e-ticaret-v7.pdf',
      'myrezzta': '/akinsoft_katalog/MyRezzta.pdf',
      'myfranchise': '/akinsoft_katalog/AKINSOFT-MyFranchise.pdf',
      'limondesk': '/akinsoft_katalog/limondesk_v3.pdf',
      'qr-menu': '/akinsoft_katalog/qr-menu_v1.pdf',
      'taskpano': '/akinsoft_katalog/taskpano_v1.pdf',
      'prokuafor': '/akinsoft_katalog/prokuafor_v1.pdf',
      'e-mutabakat': '/akinsoft_katalog/e-mutabakat_v1.pdf',
      'eofis': '/akinsoft_katalog/e-ofis_v3.pdf',
    }
    return pdfMap[slug] || null
  }

  const pdfUrl = getProductPdfUrl(product.slug)
  const hasPdf = Boolean(pdfUrl)


  const handlePdfClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (hasPdf && pdfUrl) {
      if (onOpenPdf) {
        onOpenPdf(product.title, pdfUrl)
      } else {
        setPdfModal({ isOpen: true, productName: product.title, pdfUrl })
      }
    }
  }

  const shortDescription = product.description.length > 100 
    ? `${product.description.substring(0, 100)}...` 
    : product.description

  return (
    <>
      <div className="product-card">
        <div className="product-card-content">
          <div className="product-card-header">
            <div className="product-card-icon-wrapper">
              <IconComponent className="product-card-icon" />
            </div>
          </div>

          <div className="product-card-body">
            <h3 className="product-card-title">{product.title}</h3>
            <p className="product-card-description">{shortDescription}</p>
            
            <div className="product-card-tags">
              {product.subCategory ? (
                <>
                  <span className="product-card-tag product-card-tag-main">
                    {product.category}
                  </span>
                  <span className="product-card-tag product-card-tag-sub">
                    {product.subCategory.includes('/') 
                      ? product.subCategory.split('/')[1] 
                      : product.subCategory}
                  </span>
                </>
              ) : product.category && (
                <span className="product-card-tag product-card-tag-main">
                  {product.category}
                </span>
              )}
            </div>
          </div>

          <div className="product-card-footer">
            {hasPdf && pdfUrl && (
              <>
                <button
                  type="button"
                  className="product-card-action"
                  onClick={handlePdfClick}
                >
                  <FileText className="product-card-action-icon" />
                  {currentLocale === 'tr' ? 'Broşürü Görüntüle' : 'View Brochure'}
                </button>
                <div className="product-card-divider" />
              </>
            )}
            
            <Link to={`/products/${productId}`} className="product-card-action">
              {currentLocale === 'tr' ? 'Ürünü İncele' : 'Explore product'}
              <ArrowRight className="product-card-action-icon" />
            </Link>
            
            <div className="product-card-divider" />
            
            <Link to={`/demo?product=${productId}`} className="product-card-action product-card-action-primary">
              <Rocket className="product-card-action-icon" />
              {currentLocale === 'tr' ? 'Ücretsiz Tanıtım Talep Et' : 'Request a free demo'}
            </Link>
          </div>
        </div>
      </div>

      {pdfModal.isOpen && (
        <PdfViewerModal
          isOpen={pdfModal.isOpen}
          onClose={() => setPdfModal({ isOpen: false, productName: '', pdfUrl: '' })}
          productName={pdfModal.productName}
          pdfUrl={pdfModal.pdfUrl}
        />
      )}
    </>
  )
}

export default ProductCard

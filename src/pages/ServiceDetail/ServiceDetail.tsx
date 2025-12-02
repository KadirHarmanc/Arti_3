import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'
import { Zap, Lightbulb, Power, Battery, Settings, CheckCircle, Search, FileCheck, Rocket, ArrowDown, Phone, Code, Cloud, Database, HardDrive, Cpu, Shield, Users, Wifi, Camera, Lock, Monitor, Volume2, PhoneCall, Briefcase, Wrench, Package, CheckSquare } from '../../components/ui/Icons/Icons'
import CTA from '../../components/CTA/CTA'
import NotFound from '../NotFound/NotFound'
import './ServiceDetail.css'

const ServiceDetail: React.FC = () => {
  const { serviceType } = useParams<{ serviceType: string }>()
  const { t, i18n } = useTranslation()
  const currentLocale = i18n.language

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth'
    return () => {
      document.documentElement.style.scrollBehavior = 'auto'
    }
  }, [])

  const getServiceData = () => {
    if (serviceType === 'electrical') {
      return {
        hero: {
          title: t('electricalPage.hero.title'),
          description: t('electricalPage.hero.description'),
          explore: t('electricalPage.hero.explore'),
          image: '/photos/electricty_worker.jpg'
        },
        services: [
          {
            title: t('electricalPage.services.lighting.title'),
            description: t('electricalPage.services.lighting.description'),
            icon: Lightbulb,
            features: [
              t('electricalPage.services.lighting.features.0'),
              t('electricalPage.services.lighting.features.1'),
              t('electricalPage.services.lighting.features.2'),
              t('electricalPage.services.lighting.features.3')
            ].filter(Boolean)
          },
          {
            title: t('electricalPage.services.powerSystems.title'),
            description: t('electricalPage.services.powerSystems.description'),
            icon: Power,
            features: [
              t('electricalPage.services.powerSystems.features.0'),
              t('electricalPage.services.powerSystems.features.1'),
              t('electricalPage.services.powerSystems.features.2'),
              t('electricalPage.services.powerSystems.features.3')
            ].filter(Boolean)
          },
          {
            title: t('electricalPage.services.highVoltage.title'),
            description: t('electricalPage.services.highVoltage.description'),
            icon: Zap,
            features: [
              t('electricalPage.services.highVoltage.features.0'),
              t('electricalPage.services.highVoltage.features.1'),
              t('electricalPage.services.highVoltage.features.2'),
              t('electricalPage.services.highVoltage.features.3')
            ].filter(Boolean)
          },
          {
            title: t('electricalPage.services.panelSystems.title'),
            description: t('electricalPage.services.panelSystems.description'),
            icon: Settings,
            features: [
              t('electricalPage.services.panelSystems.features.0'),
              t('electricalPage.services.panelSystems.features.1'),
              t('electricalPage.services.panelSystems.features.2'),
              t('electricalPage.services.panelSystems.features.3')
            ].filter(Boolean)
          },
          {
            title: t('electricalPage.services.consulting.title'),
            description: t('electricalPage.services.consulting.description'),
            icon: Battery,
            features: [
              t('electricalPage.services.consulting.features.0'),
              t('electricalPage.services.consulting.features.1'),
              t('electricalPage.services.consulting.features.2'),
              t('electricalPage.services.consulting.features.3')
            ].filter(Boolean)
          }
        ],
        projects: {
          title: t('electricalPage.projects.title'),
          description: t('electricalPage.projects.description'),
          images: [
            { src: '/photos/aydinlatma.jpg', alt: t('electricalPage.projects.electricalPanel.title'), layout: 'large' },
            { src: '/photos/ev_elektrik_kablolari.jpg', alt: t('electricalPage.projects.lighting.title'), layout: 'medium' },
            { src: '/photos/Elektrik_panosu.jpg', alt: t('electricalPage.projects.powerDistribution.title'), layout: 'medium' },
            { src: '/photos/Mutfak_aydinlatma.jpg', alt: t('electricalPage.projects.installation.title'), layout: 'small' },
            { src: '/photos/electricity_cabin_worker.jpg', alt: t('electricalPage.projects.transformer.title'), layout: 'small' },
            { src: '/photos/elektrik_panel_1.jpg', alt: t('electricalPage.projects.infrastructure.title'), layout: 'small' }
          ]
        },
        process: {
          title: t('electricalPage.process.title'),
          description: t('electricalPage.process.description'),
          steps: [
            {
              step: "01",
              title: t('electricalPage.process.step1.title'),
              description: t('electricalPage.process.step1.description'),
              icon: Search
            },
            {
              step: "02",
              title: t('electricalPage.process.step2.title'),
              description: t('electricalPage.process.step2.description'),
              icon: FileCheck
            },
            {
              step: "03",
              title: t('electricalPage.process.step3.title'),
              description: t('electricalPage.process.step3.description'),
              icon: Rocket
            },
            {
              step: "04",
              title: t('electricalPage.process.step4.title'),
              description: t('electricalPage.process.step4.description'),
              icon: CheckCircle
            }
          ]
        },
        cta: {
          title: t('electricalPage.cta.title'),
          description: t('electricalPage.cta.description'),
          contactButton: t('electricalPage.cta.contactButton')
        },
        seo: {
          title: t('electricalPage.seo.title'),
          description: t('electricalPage.seo.description'),
          keywords: t('electricalPage.seo.keywords')
        }
      }
    }

    if (serviceType === 'it') {
      return {
        hero: {
          title: t('itPage.hero.title'),
          description: t('itPage.hero.description'),
          explore: t('itPage.hero.explore'),
          image: '/photos/Dell_servers.jpg'
        },
        services: [
          {
            title: t('itPage.services.software.title'),
            description: t('itPage.services.software.description'),
            icon: Code,
            features: [
              t('itPage.services.software.features.0'),
              t('itPage.services.software.features.1'),
              t('itPage.services.software.features.2'),
              t('itPage.services.software.features.3')
            ].filter(Boolean)
          },
          {
            title: t('itPage.services.cloud.title'),
            description: t('itPage.services.cloud.description'),
            icon: Cloud,
            features: [
              t('itPage.services.cloud.features.0'),
              t('itPage.services.cloud.features.1'),
              t('itPage.services.cloud.features.2'),
              t('itPage.services.cloud.features.3')
            ].filter(Boolean)
          },
          {
            title: t('itPage.services.enterprise.title'),
            description: t('itPage.services.enterprise.description'),
            icon: Database,
            features: [
              t('itPage.services.enterprise.features.0'),
              t('itPage.services.enterprise.features.1'),
              t('itPage.services.enterprise.features.2'),
              t('itPage.services.enterprise.features.3')
            ].filter(Boolean)
          },
          {
            title: t('itPage.services.hardware.title'),
            description: t('itPage.services.hardware.description'),
            icon: HardDrive,
            features: [
              t('itPage.services.hardware.features.0'),
              t('itPage.services.hardware.features.1'),
              t('itPage.services.hardware.features.2'),
              t('itPage.services.hardware.features.3')
            ].filter(Boolean)
          },
          {
            title: t('itPage.services.support.title'),
            description: t('itPage.services.support.description'),
            icon: Cpu,
            features: [
              t('itPage.services.support.features.0'),
              t('itPage.services.support.features.1'),
              t('itPage.services.support.features.2'),
              t('itPage.services.support.features.3')
            ].filter(Boolean)
          }
        ],
        projects: {
          title: t('itPage.projects.title'),
          description: t('itPage.projects.description'),
          images: [
            { src: '/photos/server_tamir.jpg', alt: t('itPage.projects.serverInstallation.title'), layout: 'large' },
            { src: '/photos/bilgisayar_odasi.jpg', alt: currentLocale === 'tr' ? 'Bilgisayar Odası' : 'Computer Room', layout: 'small' },
            { src: '/photos/ofis_bilgisayar_odasi.jpg', alt: currentLocale === 'tr' ? 'Ofis Bilgisayar Odası' : 'Office Computer Room', layout: 'small' },
            { src: '/photos/servers_cables.jpg', alt: t('itPage.projects.networkInfrastructure.title'), layout: 'small' },
            { src: '/photos/server_cabinet.jpg', alt: currentLocale === 'tr' ? 'Server Kabini' : 'Server Cabinet', layout: 'medium' },
            { src: '/photos/server_multi_cabin.jpg', alt: currentLocale === 'tr' ? 'Çoklu Server Kabinleri' : 'Multiple Server Cabinets', layout: 'medium' }
          ]
        },
        process: {
          title: t('itPage.process.title'),
          description: t('itPage.process.description'),
          steps: [
            {
              step: "01",
              title: t('itPage.process.step1.title'),
              description: t('itPage.process.step1.description'),
              icon: Search
            },
            {
              step: "02",
              title: t('itPage.process.step2.title'),
              description: t('itPage.process.step2.description'),
              icon: FileCheck
            },
            {
              step: "03",
              title: t('itPage.process.step3.title'),
              description: t('itPage.process.step3.description'),
              icon: Rocket
            },
            {
              step: "04",
              title: t('itPage.process.step4.title'),
              description: t('itPage.process.step4.description'),
              icon: CheckCircle
            }
          ]
        },
        cta: {
          title: t('itPage.cta.title'),
          description: t('itPage.cta.description'),
          contactButton: t('itPage.cta.contactButton')
        },
        seo: {
          title: t('itPage.seo.title'),
          description: t('itPage.seo.description'),
          keywords: t('itPage.seo.keywords')
        }
      }
    }

    if (serviceType === 'weak-current') {
      return {
        hero: {
          title: t('weakCurrentPage.hero.title'),
          description: t('weakCurrentPage.hero.description'),
          explore: t('weakCurrentPage.hero.explore'),
          image: '/photos/server_tamir.jpg'
        },
        services: [
          {
            title: t('weakCurrentPage.services.network.title'),
            description: t('weakCurrentPage.services.network.description'),
            icon: Wifi,
            features: [
              t('weakCurrentPage.services.network.features.0'),
              t('weakCurrentPage.services.network.features.1'),
              t('weakCurrentPage.services.network.features.2'),
              t('weakCurrentPage.services.network.features.3')
            ].filter(Boolean)
          },
          {
            title: t('weakCurrentPage.services.fireDetection.title'),
            description: t('weakCurrentPage.services.fireDetection.description'),
            icon: Shield,
            features: [
              t('weakCurrentPage.services.fireDetection.features.0'),
              t('weakCurrentPage.services.fireDetection.features.1'),
              t('weakCurrentPage.services.fireDetection.features.2'),
              t('weakCurrentPage.services.fireDetection.features.3')
            ].filter(Boolean)
          },
          {
            title: t('weakCurrentPage.services.security.title'),
            description: t('weakCurrentPage.services.security.description'),
            icon: Camera,
            features: [ 
              t('weakCurrentPage.services.security.features.0'),
              t('weakCurrentPage.services.security.features.1'),
              t('weakCurrentPage.services.security.features.2'),
              t('weakCurrentPage.services.security.features.3'),
              t('weakCurrentPage.services.security.features.4'),
              t('weakCurrentPage.services.security.features.5'),
              t('weakCurrentPage.services.security.features.6'),
              t('weakCurrentPage.services.security.features.7')
            ].filter(Boolean)
          },
          {
            title: t('weakCurrentPage.services.automation.title'),
            description: t('weakCurrentPage.services.automation.description'),
            icon: Settings,
            features: [
              t('weakCurrentPage.services.automation.features.0'),
              t('weakCurrentPage.services.automation.features.1'),
              t('weakCurrentPage.services.automation.features.2'),
              t('weakCurrentPage.services.automation.features.3'),
              t('weakCurrentPage.services.automation.features.4'),
              t('weakCurrentPage.services.automation.features.5')
            ].filter(Boolean)
          },
          {
            title: t('weakCurrentPage.services.personnelTracking.title'),
            description: t('weakCurrentPage.services.personnelTracking.description'),
            icon: Users,
            features: [
              t('weakCurrentPage.services.personnelTracking.features.0'),
              t('weakCurrentPage.services.personnelTracking.features.1'),
              t('weakCurrentPage.services.personnelTracking.features.2'),
              t('weakCurrentPage.services.personnelTracking.features.3')
            ].filter(Boolean)
          },
          {
            title: t('weakCurrentPage.services.dataCenter.title'),
            description: t('weakCurrentPage.services.dataCenter.description'),
            icon: Database,
            features: [
              t('weakCurrentPage.services.dataCenter.features.0'),
              t('weakCurrentPage.services.dataCenter.features.1'),
              t('weakCurrentPage.services.dataCenter.features.2'),
              t('weakCurrentPage.services.dataCenter.features.3'),
              t('weakCurrentPage.services.dataCenter.features.4'),
              t('weakCurrentPage.services.dataCenter.features.5'),
              t('weakCurrentPage.services.dataCenter.features.6'),
              t('weakCurrentPage.services.dataCenter.features.7')
            ].filter(Boolean)
          },
          {
            title: t('weakCurrentPage.services.burglarAlarm.title'),
            description: t('weakCurrentPage.services.burglarAlarm.description'),
            icon: Lock,
            features: [
              t('weakCurrentPage.services.burglarAlarm.features.0'),
              t('weakCurrentPage.services.burglarAlarm.features.1'),
              t('weakCurrentPage.services.burglarAlarm.features.2')
            ].filter(Boolean)
          },
          {
            title: t('weakCurrentPage.services.cctv.title'),
            description: t('weakCurrentPage.services.cctv.description'),
            icon: Monitor,
            features: [
              t('weakCurrentPage.services.cctv.features.0'),
              t('weakCurrentPage.services.cctv.features.1')
            ].filter(Boolean)
          },
          {
            title: t('weakCurrentPage.services.audioBroadcast.title'),
            description: t('weakCurrentPage.services.audioBroadcast.description'),
            icon: Volume2,
            features: [
              t('weakCurrentPage.services.audioBroadcast.features.0'),
              t('weakCurrentPage.services.audioBroadcast.features.1')
            ].filter(Boolean)
          },
          {
            title: t('weakCurrentPage.services.videoIntercom.title'),
            description: t('weakCurrentPage.services.videoIntercom.description'),
            icon: Phone,
            features: [
              t('weakCurrentPage.services.videoIntercom.features.0')
            ].filter(Boolean)
          },
          {
            title: t('weakCurrentPage.services.telephoneExchange.title'),
            description: t('weakCurrentPage.services.telephoneExchange.description'),
            icon: PhoneCall,
            features: [
              t('weakCurrentPage.services.telephoneExchange.features.0'),
              t('weakCurrentPage.services.telephoneExchange.features.1'),
              t('weakCurrentPage.services.telephoneExchange.features.2')
            ].filter(Boolean)
          }
        ],
        projects: {
          title: t('weakCurrentPage.projects.title'),
          description: t('weakCurrentPage.projects.description'),
          images: [
            { src: '/photos/guvenlik_odasi.jpg', alt: t('weakCurrentPage.projects.securityRoom.title'), layout: 'large' },
            { src: '/photos/yangin_alarmi.jpg', alt: t('weakCurrentPage.projects.fireDetection.title'), layout: 'medium' },
            { src: '/photos/servers_cables.jpg', alt: t('weakCurrentPage.projects.dataCenter.title'), layout: 'medium' },
            { src: '/photos/Dell_servers.jpg', alt: t('weakCurrentPage.projects.serverInstallation.title'), layout: 'small' },
            { src: '/photos/projeksiyon_sinema_odasi.jpg', alt: currentLocale === 'tr' ? 'Projeksiyon ve Sinema Odası' : 'Projection and Cinema Room', layout: 'small' },
            { src: '/photos/server_cabinet.jpg', alt: currentLocale === 'tr' ? 'Server Kabini Kurulumu' : 'Server Cabinet Installation', layout: 'small' }
          ]
        },
        process: {
          title: t('weakCurrentPage.process.title'),
          description: t('weakCurrentPage.process.description'),
          steps: [
            {
              step: "01",
              title: t('weakCurrentPage.process.step1.title'),
              description: t('weakCurrentPage.process.step1.description'),
              icon: Search
            },
            {
              step: "02",
              title: t('weakCurrentPage.process.step2.title'),
              description: t('weakCurrentPage.process.step2.description'),
              icon: FileCheck
            },
            {
              step: "03",
              title: t('weakCurrentPage.process.step3.title'),
              description: t('weakCurrentPage.process.step3.description'),
              icon: Rocket
            },
            {
              step: "04",
              title: t('weakCurrentPage.process.step4.title'),
              description: t('weakCurrentPage.process.step4.description'),
              icon: CheckCircle
            }
          ]
        },
        cta: {
          title: t('weakCurrentPage.cta.title'),
          description: t('weakCurrentPage.cta.description'),
          contactButton: t('weakCurrentPage.cta.contactButton')
        },
        seo: {
          title: t('weakCurrentPage.seo.title'),
          description: t('weakCurrentPage.seo.description'),
          keywords: t('weakCurrentPage.seo.keywords')
        }
      }
    }

    if (serviceType === 'subcontracting') {
      return {
        hero: {
          title: t('subcontractingPage.hero.title'),
          description: t('subcontractingPage.hero.description'),
          explore: t('subcontractingPage.hero.explore'),
          image: '/photos/tesisatci.jpg'
        },
        services: [
          {
            title: t('subcontractingPage.services.construction.title'),
            description: t('subcontractingPage.services.construction.description'),
            icon: Briefcase,
            features: [
              t('subcontractingPage.services.construction.features.0'),
              t('subcontractingPage.services.construction.features.1'),
              t('subcontractingPage.services.construction.features.2'),
              t('subcontractingPage.services.construction.features.3')
            ].filter(Boolean)
          },
          {
            title: t('subcontractingPage.services.maintenance.title'),
            description: t('subcontractingPage.services.maintenance.description'),
            icon: Wrench,
            features: [
              t('subcontractingPage.services.maintenance.features.0'),
              t('subcontractingPage.services.maintenance.features.1'),
              t('subcontractingPage.services.maintenance.features.2'),
              t('subcontractingPage.services.maintenance.features.3')
            ].filter(Boolean)
          },
          {
            title: t('subcontractingPage.services.installation.title'),
            description: t('subcontractingPage.services.installation.description'),
            icon: Package,
            features: [
              t('subcontractingPage.services.installation.features.0'),
              t('subcontractingPage.services.installation.features.1'),
              t('subcontractingPage.services.installation.features.2'),
              t('subcontractingPage.services.installation.features.3')
            ].filter(Boolean)
          },
          {
            title: t('subcontractingPage.services.projectManagement.title'),
            description: t('subcontractingPage.services.projectManagement.description'),
            icon: CheckSquare,
            features: [
              t('subcontractingPage.services.projectManagement.features.0'),
              t('subcontractingPage.services.projectManagement.features.1'),
              t('subcontractingPage.services.projectManagement.features.2'),
              t('subcontractingPage.services.projectManagement.features.3')
            ].filter(Boolean)
          },
          {
            title: t('subcontractingPage.services.consulting.title'),
            description: t('subcontractingPage.services.consulting.description'),
            icon: Battery,
            features: [
              t('subcontractingPage.services.consulting.features.0'),
              t('subcontractingPage.services.consulting.features.1'),
              t('subcontractingPage.services.consulting.features.2'),
              t('subcontractingPage.services.consulting.features.3')
            ].filter(Boolean)
          }
        ],
        projects: {
          title: t('subcontractingPage.projects.title'),
          description: t('subcontractingPage.projects.description'),
          images: [
            { src: '/photos/tesisatci.jpg', alt: t('subcontractingPage.projects.installation.title'), layout: 'large' },
            { src: '/photos/kablo_kesim.jpg', alt: currentLocale === 'tr' ? 'Kablo Kesim İşleri' : 'Cable Cutting Works', layout: 'small' },
            { src: '/photos/Halatli_isci.jpg', alt: currentLocale === 'tr' ? 'Halatlı İşçi Çalışması' : 'Rope Worker Operations', layout: 'small' },
            { src: '/photos/vinc.jpg', alt: currentLocale === 'tr' ? 'Vinç Operasyonları' : 'Crane Operations', layout: 'small' }
          ]
        },
        process: {
          title: t('subcontractingPage.process.title'),
          description: t('subcontractingPage.process.description'),
          steps: [
            {
              step: "01",
              title: t('subcontractingPage.process.step1.title'),
              description: t('subcontractingPage.process.step1.description'),
              icon: Search
            },
            {
              step: "02",
              title: t('subcontractingPage.process.step2.title'),
              description: t('subcontractingPage.process.step2.description'),
              icon: FileCheck
            },
            {
              step: "03",
              title: t('subcontractingPage.process.step3.title'),
              description: t('subcontractingPage.process.step3.description'),
              icon: Rocket
            },
            {
              step: "04",
              title: t('subcontractingPage.process.step4.title'),
              description: t('subcontractingPage.process.step4.description'),
              icon: CheckCircle
            }
          ]
        },
        cta: {
          title: t('subcontractingPage.cta.title'),
          description: t('subcontractingPage.cta.description'),
          contactButton: t('subcontractingPage.cta.contactButton')
        },
        seo: {
          title: t('subcontractingPage.seo.title'),
          description: t('subcontractingPage.seo.description'),
          keywords: t('subcontractingPage.seo.keywords')
        }
      }
    }

    return null
  }

  const serviceData = getServiceData()

  if (!serviceData) {
    return <NotFound />
  }

  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
  }

  useEffect(() => {
    if (!serviceData) return

    const getStructuredData = () => {
      const baseUrl = typeof window !== 'undefined' ? window.location.origin : ''
      return {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": serviceData.seo.title,
        "description": serviceData.seo.description,
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
        "areaServed": {
          "@type": "Country",
          "name": "Turkey"
        },
        "serviceType": serviceData.seo.title,
        "keywords": serviceData.seo.keywords
      }
    }

    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.id = 'service-structured-data'
    script.text = JSON.stringify(getStructuredData())
    document.head.appendChild(script)

    return () => {
      const existingScript = document.head.querySelector('#service-structured-data')
      if (existingScript) {
        document.head.removeChild(existingScript)
      }
    }
  }, [serviceType, currentLocale, serviceData])


  return (
    <>
      <Helmet>
        <title>{serviceData.seo.title} | Arti 3 Bilişim</title>
        <meta name="description" content={serviceData.seo.description} />
        <meta name="keywords" content={serviceData.seo.keywords} />
        <meta property="og:title" content={`${serviceData.seo.title} | Arti 3 Bilişim`} />
        <meta property="og:description" content={serviceData.seo.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={typeof window !== 'undefined' ? `${window.location.origin}/services/${serviceType}` : ''} />
        <meta property="og:image" content={typeof window !== 'undefined' ? `${window.location.origin}${serviceData.hero.image}` : ''} />
        <meta property="og:locale" content={currentLocale === 'tr' ? 'tr_TR' : 'en_US'} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${serviceData.seo.title} | Arti 3 Bilişim`} />
        <meta name="twitter:description" content={serviceData.seo.description} />
        <meta name="twitter:image" content={typeof window !== 'undefined' ? `${window.location.origin}${serviceData.hero.image}` : ''} />
        <link rel="canonical" href={typeof window !== 'undefined' ? `${window.location.origin}/services/${serviceType}` : ''} />
        <html lang={currentLocale} />
      </Helmet>

      <div className="service-detail-page">
        <section className="service-detail-hero">
          <div className="service-detail-hero-background">
            <div className="service-detail-hero-overlay"></div>
            <div className="service-detail-hero-image-wrapper">
              <img
                src={serviceData.hero.image}
                alt={serviceData.hero.title}
                className="service-detail-hero-image"
              />
            </div>
          </div>

          <div className="service-detail-hero-content">
            <div className="service-detail-hero-text">
              <h1 className="service-detail-hero-title">
                {serviceData.hero.title}
              </h1>
              <p className="service-detail-hero-description">
                {serviceData.hero.description}
              </p>
            </div>
          </div>

          <div className="service-detail-hero-scroll" onClick={scrollToContent}>
            <span className="service-detail-hero-scroll-text">{serviceData.hero.explore}</span>
            <ArrowDown className="service-detail-hero-scroll-icon" />
          </div>
        </section>

        <section className="service-detail-services">
          <div className="service-detail-services-container">
            <div className="service-detail-services-header">
              <h2 className="service-detail-services-title">
                {serviceType === 'electrical' ? t('electricalPage.services.title') :
                 serviceType === 'it' ? t('itPage.services.title') :
                 serviceType === 'weak-current' ? t('weakCurrentPage.services.title') :
                 t('subcontractingPage.services.title')}
              </h2>
              <p className="service-detail-services-description">
                {serviceType === 'electrical' ? t('electricalPage.services.description') :
                 serviceType === 'it' ? t('itPage.services.description') :
                 serviceType === 'weak-current' ? t('weakCurrentPage.services.description') :
                 t('subcontractingPage.services.description')}
              </p>
            </div>

            <div className="service-detail-services-grid">
              {serviceData.services.map((service, index) => {
                const IconComponent = service.icon
                return (
                  <div key={index} className="service-detail-service-card">
                    <div className="service-detail-service-card-content">
                      <div className="service-detail-service-card-header">
                        <div className="service-detail-service-card-icon-wrapper">
                          <IconComponent className="service-detail-service-card-icon" />
                        </div>
                        <h3 className="service-detail-service-card-title">
                          {service.title}
                        </h3>
                        <p className="service-detail-service-card-description">
                          {service.description}
                        </p>
                      </div>
                      <div className="service-detail-service-card-features">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="service-detail-service-card-feature">
                            <CheckCircle className="service-detail-service-card-feature-icon" />
                            <span className="service-detail-service-card-feature-text">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section className="service-detail-projects">
          <div className="service-detail-projects-container">
            <div className="service-detail-projects-header">
              <h2 className="service-detail-projects-title">
                {serviceData.projects.title}
              </h2>
              <p className="service-detail-projects-description">
                {serviceData.projects.description}
              </p>
            </div>

            <div className="service-detail-projects-grid">
              {serviceData.projects.images.map((image, index) => {
                const isLarge = image.layout === 'large'
                const isMedium = image.layout === 'medium'
                return (
                  <div
                    key={index}
                    className={`service-detail-project-item ${
                      isLarge ? 'service-detail-project-item-large' : ''
                    } ${isMedium ? 'service-detail-project-item-medium' : ''}`}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="service-detail-project-image"
                      loading="lazy"
                    />
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section className="service-detail-process">
          <div className="service-detail-process-container">
            <div className="service-detail-process-header">
              <h2 className="service-detail-process-title">
                {serviceData.process.title}
              </h2>
              <p className="service-detail-process-description">
                {serviceData.process.description}
              </p>
            </div>

            <div className="service-detail-process-timeline">
              <div className="service-detail-process-line"></div>
              <div className="service-detail-process-steps">
                {serviceData.process.steps.map((step, index) => {
                  const IconComponent = step.icon
                  const isUpper = index === 1 || index === serviceData.process.steps.length - 1
                  return (
                    <div
                      key={step.title}
                      className={`service-detail-process-step ${isUpper ? 'service-detail-process-step-upper' : ''}`}
                    >
                      <div className="service-detail-process-step-content">
                        <div className="service-detail-process-step-spacer" aria-hidden="true" />
                        <div className="service-detail-process-step-icon-wrapper">
                          <IconComponent className="service-detail-process-step-icon" />
                        </div>
                        <div className="service-detail-process-step-card">
                          <h3 className="service-detail-process-step-title">
                            {step.title}
                          </h3>
                          <p className="service-detail-process-step-description">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        <CTA
          title={serviceData.cta.title}
          description={serviceData.cta.description}
          buttons={[
            {
              text: serviceData.cta.contactButton,
              href: '/contact',
              variant: 'primary',
              icon: <Phone />
            }
          ]}
        />
      </div>
    </>
  )
}

export default ServiceDetail

import React from 'react'
import { useTranslation } from 'react-i18next'
import ServiceSection from '../../components/ServiceSection/ServiceSection'
import { getServiceSections } from '../../data/serviceSections'
import './Services.css'

const Services: React.FC = () => {
  const { i18n } = useTranslation()
  const currentLocale = (i18n.language as 'tr' | 'en') || 'tr'
  const servicesData = getServiceSections(currentLocale)

  return (
    <div className="services-page">
      <section className="services-sections">
        {servicesData.map((service, index) => (
          <ServiceSection
            key={`${service.title}-${index}`}
            {...service}
          />
        ))}
      </section>
    </div>
  )
}

export default Services


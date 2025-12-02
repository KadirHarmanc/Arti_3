import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight } from '../ui/Icons/Icons'
import './ServiceSection.css'

interface ServiceSectionProps {
  title: string
  description: string[]
  images: string[]
  imageAlts: string[]
  linkTo: string
  linkText: string
  reverse?: boolean
  showHeader?: boolean
  headerTitle?: string
  sectionClass?: string
}

const ServiceSection: React.FC<ServiceSectionProps> = ({
  title,
  description,
  images,
  imageAlts,
  linkTo,
  linkText,
  reverse = false,
  showHeader = false,
  headerTitle = '',
  sectionClass = ''
}) => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const isMobile = typeof window !== 'undefined' && window.matchMedia('(max-width: 767px)').matches

    if (isMobile) {
      setIsVisible(true)
      return
    }

    if (!sectionRef.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (sectionRef.current) {
            observer.unobserve(sectionRef.current)
          }
        }
      },
      { 
        threshold: 0.4,
        rootMargin: '-100px'
      }
    )

    const currentElement = sectionRef.current
    observer.observe(currentElement)

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement)
      }
    }
  }, [])

  return (
    <section 
      ref={sectionRef}
      className={`home-service-section ${sectionClass} ${isVisible ? 'home-service-section-visible' : ''}`}
    >
      <div className="home-service-section-background">
        <div className="home-service-section-overlay"></div>
      </div>
      <div className="home-service-section-container">
        {showHeader && (
          <div className="home-service-section-header">
            <h2 className="home-service-section-title">
              {headerTitle}
            </h2>
          </div>
        )}
        <div className={`home-service-section-content ${reverse ? 'home-service-section-content-reverse' : ''}`}>
          <div className="home-service-section-gallery">
            <div className="home-service-section-gallery-grid">
              {images.map((image, index) => (
                <div key={index} className="home-service-section-gallery-item">
                  <img
                    src={image}
                    alt={imageAlts[index] || title}
                    className="home-service-section-gallery-image"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="home-service-section-text">
            <h3 className="home-service-section-service-title">
              {title}
            </h3>
            <div className="home-service-section-description">
              {description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            <div className="home-service-section-divider"></div>
            <Link to={linkTo} className="home-service-section-link">
              <span className="home-service-section-link-text">
                {linkText}
              </span>
              <ChevronRight className="home-service-section-link-icon" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceSection


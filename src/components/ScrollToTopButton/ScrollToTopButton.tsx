import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher'
import './ScrollToTopButton.css'

const ScrollToTopButton: React.FC = () => {
  const { t, i18n } = useTranslation()
  const [isHovered, setIsHovered] = useState(false)
  const [isScrollButtonVisible, setIsScrollButtonVisible] = useState(false)

  useEffect(() => {
    let ticking = false

    const toggleVisibility = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const shouldShow = window.pageYOffset > 300
          setIsScrollButtonVisible(prev => {
            if (prev !== shouldShow) {
              return shouldShow
            }
            return prev
          })
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', toggleVisibility, { passive: true })
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div 
      className="scroll-to-top-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="scroll-to-top-button-wrapper">
        <div className={`scroll-to-top-button-group ${isScrollButtonVisible ? 'visible' : 'hidden'}`}>
          <button
            onClick={scrollToTop}
            className="scroll-to-top-button"
            title={t('footer.scrollToTop')}
          >
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
            >
              <path d="M18 15l-6-6-6 6" />
            </svg>
          </button>
          <div className="scroll-to-top-divider" />
        </div>
        <LanguageSwitcher variant="footer" />
      </div>
      {isHovered && (
        <div className="scroll-to-top-tooltip">
          {isScrollButtonVisible 
            ? t('footer.scrollAndLanguage')
            : t('footer.changeLanguage')
          }
          <div className="scroll-to-top-tooltip-arrow" />
        </div>
      )}
    </div>
  )
}

export default ScrollToTopButton


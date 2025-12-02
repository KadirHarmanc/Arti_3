import React from 'react'
import { useTranslation } from 'react-i18next'
import './LanguageSwitcher.css'

interface LanguageSwitcherProps {
  variant?: 'header' | 'footer'
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ variant = 'header' }) => {
  const { i18n } = useTranslation()

  const changeLanguage = (lng: 'tr' | 'en') => {
    if (i18n.language === lng) return
    i18n.changeLanguage(lng)
    if (typeof window !== 'undefined') {
      localStorage.setItem('appLanguage', lng)
      setTimeout(() => {
        window.location.reload()
      }, 50)
    }
  }

  const isFooter = variant === 'footer'

  return (
    <div className={`language-switcher ${isFooter ? 'language-switcher-footer' : ''}`}>
      <button
        className={`language-button ${i18n.language === 'tr' ? 'active' : ''} ${isFooter ? 'language-button-footer' : ''}`}
        onClick={() => changeLanguage('tr')}
      >
        TR
      </button>
      <button
        className={`language-button ${i18n.language === 'en' ? 'active' : ''} ${isFooter ? 'language-button-footer' : ''}`}
        onClick={() => changeLanguage('en')}
      >
        EN
      </button>
    </div>
  )
}

export default LanguageSwitcher


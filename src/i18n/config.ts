import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import enTranslations from './locales/en.json'
import trTranslations from './locales/tr.json'

const getInitialLanguage = () => {
  if (typeof window !== 'undefined') {
    const savedLanguage = localStorage.getItem('appLanguage')
    if (savedLanguage === 'tr' || savedLanguage === 'en') {
      return savedLanguage
    }
  }
  return 'tr'
}

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslations
      },
      tr: {
        translation: trTranslations
      }
    },
    lng: getInitialLanguage(),
    fallbackLng: 'tr',
    interpolation: {
      escapeValue: false
    }
  })

export default i18n


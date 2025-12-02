import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import ScrollToTopButton from '../ScrollToTopButton/ScrollToTopButton'
import './Footer.css'

const Footer: React.FC = () => {
  const { t, i18n } = useTranslation()
  const currentLocale = i18n.language

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-logo-section">
            <div className="footer-logo">
              <img
                src="/photos/arti3_logo.png"
                alt="Arti 3 Bilişim Logo"
                className="footer-logo-image"
              />
            </div>
            <p className="footer-description">
              {t('footer.description')}
            </p>
            <p className="footer-copyright">
              © {new Date().getFullYear()} Arti 3 Bilişim. {t('footer.rights')}
            </p>
          </div>
        </div>

        <div className="footer-grid">
          <div className="footer-column">
            <h3 className="footer-column-title">
              {t('footer.services')}
            </h3>
            <ul className="footer-links">
              <li>
                <Link to="/services/weak-current" className="footer-link">
                  {t('services.weakCurrent')}
                </Link>
              </li>
              <li>
                <Link to="/services/electrical" className="footer-link">
                  {t('services.electrical')}
                </Link>
              </li>
              <li>
                <Link to="/services/it" className="footer-link">
                  {t('services.it')}
                </Link>
              </li>
              <li>
                <Link to="/services/subcontracting" className="footer-link">
                  {t('services.subcontracting')}
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-column-title">
              {t('footer.company')}
            </h3>
            <ul className="footer-links">
              <li>
                <Link to="/#about" className="footer-link">
                  {t('footer.about')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="footer-link">
                  {t('nav.contact')}
                </Link>
              </li>
              <li>
                <Link to="/products" className="footer-link">
                  {t('nav.products')}
                </Link>
              </li>
              <li>
                <Link to="/services" className="footer-link">
                  {t('nav.services')}
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-column-title">
              {t('footer.help')}
            </h3>
            <ul className="footer-links">
              <li>
                <Link to="/kvkk" className="footer-link">
                  KVKK
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="footer-link">
                  {currentLocale === 'tr' ? 'Gizlilik Sözleşmesi' : 'Privacy Policy'}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="footer-link">
                  {t('footer.career')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="footer-link">
                  {t('footer.partnership')}
                </Link>
              </li>
              <li>
                <Link to="/downloadable-content" className="footer-link">
                  {t('footer.downloadable')}
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-column-title">
              {t('footer.social')}
            </h3>
            <ul className="footer-links">
              <li>
                <a 
                  href="https://www.instagram.com/arti3bilisim"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="footer-link footer-link-social"
                >
                  <svg 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                  Instagram
                </a>
              </li>
              <li>
                <a 
                  href="https://www.linkedin.com/company/arti3"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="footer-link footer-link-social"
                >
                  <svg 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                  LinkedIn
                </a>
              </li>
            </ul>
            <div className="footer-contact-button">
              <Link 
                to="/contact"
                className="footer-contact-link"
              >
                {t('footer.contactUs')}
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <ScrollToTopButton />
    </footer>
  )
}

export default Footer

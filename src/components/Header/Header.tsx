import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { createPortal } from 'react-dom'
import { useTranslation } from 'react-i18next'
import Button from '../ui/Button/Button'
import { Menu, X, ChevronDown, Shield, Zap, Cpu, Users } from '../ui/Icons/Icons'
import { cn } from '../../utils/cn'
import './Header.css'

function throttle<T extends (...args: any[]) => void>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null
  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      timeout = null
      func(...args)
    }
    if (!timeout) {
      timeout = setTimeout(later, wait)
    }
  }
}

function IndicatorBar({ 
  linkKey, 
  getPosition 
}: { 
  linkKey: string
  getPosition: (key: string) => { left: number; width: number }
}) {
  const [pos, setPos] = useState({ left: 0, width: 0 })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') return

    const updatePosition = () => {
      const newPos = getPosition(linkKey)
      if (newPos.width > 0 && newPos.left >= 0) {
        setPos(prevPos => {
          if (Math.abs(prevPos.left - newPos.left) < 1 && Math.abs(prevPos.width - newPos.width) < 1) {
            return prevPos
          }
          return newPos
        })
      }
    }

    const timeoutId = setTimeout(updatePosition, 100)
    const timeoutId2 = setTimeout(updatePosition, 200)
    const timeoutId3 = setTimeout(updatePosition, 300)

    window.addEventListener('resize', updatePosition)
    updatePosition()

    return () => {
      clearTimeout(timeoutId)
      clearTimeout(timeoutId2)
      clearTimeout(timeoutId3)
      window.removeEventListener('resize', updatePosition)
    }
  }, [linkKey, getPosition, mounted])

  if (!mounted) return null

  if (pos.width === 0 || pos.left < 0) {
    if (typeof window !== 'undefined') {
      const syncPos = getPosition(linkKey)
      if (syncPos.width > 0 && syncPos.left >= 0) {
        return (
          <div
            className="indicator-bar"
            style={{ left: syncPos.left, width: syncPos.width }}
          />
        )
      }
    }
    return null
  }

  return (
    <div
      className="indicator-bar indicator-bar-visible"
      style={{ left: pos.left, width: pos.width }}
    />
  )
}

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [forceMobileNav, setForceMobileNav] = useState(false)
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)
  const linkRefs = useRef<Record<string, HTMLAnchorElement | HTMLButtonElement | null>>({})
  const navRef = useRef<HTMLDivElement | null>(null)
  const dropdownRef = useRef<HTMLDivElement | null>(null)
  const { t, i18n } = useTranslation()
  const location = useLocation()

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/'
    }
    return location.pathname.startsWith(path)
  }

  const getIndicatorPosition = useCallback((linkKey: string) => {
    if (typeof window === 'undefined' || typeof document === 'undefined') {
      return { left: 0, width: 0 }
    }

    let element = linkRefs.current[linkKey]

    if (!element) {
      const nav = document.getElementById('main-nav')
      if (nav && linkKey === 'home') {
        const homeLink = nav.querySelector('a[href="/"]') as HTMLAnchorElement
        if (homeLink) {
          linkRefs.current.home = homeLink
          element = homeLink
        }
      }
    }

    if (!element) return { left: 0, width: 0 }

    const indicatorContainer = document.getElementById('indicator-container')
    if (!indicatorContainer) return { left: 0, width: 0 }

    const indicatorRect = indicatorContainer.getBoundingClientRect()
    const elementRect = element.getBoundingClientRect()

    const padding = 16
    const elementCenter = elementRect.left + elementRect.width / 2
    const left = elementRect.left - indicatorRect.left - padding / 2

    let adjustedLeft = left
    if (linkKey === 'home') {
      const elementCenterRelativeToContainer = elementCenter - indicatorRect.left
      adjustedLeft = elementCenterRelativeToContainer - (elementRect.width + padding) / 2
    }

    const width = elementRect.width + padding

    return {
      left: adjustedLeft >= 0 ? adjustedLeft : left >= 0 ? left : 0,
      width: width > 0 ? width : 0
    }
  }, [])

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleHashChange = () => {
      if (typeof window !== 'undefined') {
        if (window.location.hash === '#about') {
          setHoveredLink(null)
        }
      }
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('hashchange', handleHashChange)
      return () => window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])

  const evaluateNavigationLayout = useCallback(() => {
    if (typeof window === "undefined") return

    const navElement = navRef.current
    let hasWrapped = false
    let hasOverflow = false

    if (navElement && navElement.children.length > 0) {
      const children = Array.from(navElement.children) as HTMLElement[]
      const firstChildTop = children[0]?.offsetTop ?? 0
      hasWrapped = children.some(child => Math.abs(child.offsetTop - firstChildTop) > 2)
      const { scrollWidth, clientWidth } = navElement
      hasOverflow = scrollWidth - clientWidth > 8
    }

    const shouldCollapse = window.innerWidth < 1100 || hasWrapped || hasOverflow
    setForceMobileNav(shouldCollapse)
  }, [])

  useEffect(() => {
    evaluateNavigationLayout()

    if (typeof window !== "undefined") {
      window.addEventListener("resize", evaluateNavigationLayout)
    }

    let resizeObserver: ResizeObserver | null = null
    const navElement = navRef.current

    if (typeof ResizeObserver !== "undefined" && navElement) {
      resizeObserver = new ResizeObserver(() => evaluateNavigationLayout())
      resizeObserver.observe(navElement)
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", evaluateNavigationLayout)
      }
      if (resizeObserver) {
        resizeObserver.disconnect()
      }
    }
  }, [evaluateNavigationLayout])

  useEffect(() => {
    if (!forceMobileNav) {
      setMobileMenuOpen(false)
      setMobileServicesOpen(false)
    }
  }, [forceMobileNav])

  useEffect(() => {
    let ticking = false

    const handleScroll = throttle(() => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrolled = window.scrollY > 20
          setIsScrolled(prev => {
            if (prev !== scrolled) {
              return scrolled
            }
            return prev
          })
          ticking = false
        })
        ticking = true
      }
    }, 100)

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false)
        setHoveredLink(null)
      }
    }

    if (servicesDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [servicesDropdownOpen])

  const services = useMemo(() => [
    {
      title: t('services.weakCurrent.title'),
      description: t('services.weakCurrent.description'),
      href: '/services/weak-current',
      icon: Shield,
    },
    {
      title: t('services.electrical.title'),
      description: t('services.electrical.description'),
      href: '/services/electrical',
      icon: Zap,
    },
    {
      title: t('services.it.title'),
      description: t('services.it.description'),
      href: '/services/it',
      icon: Cpu,
    },
    {
      title: t('services.subcontracting.title'),
      description: t('services.subcontracting.description'),
      href: '/services/subcontracting',
      icon: Users,
    },
  ], [t])

  return (
    <>
      <header className={cn(
        'header-fixed',
        isScrolled ? 'header-scrolled' : ''
      )}>
        <div className="header-container-inner">
          <div className="header-content">
            <Link 
              to="/"
              className="header-logo-link"
              onClick={() => {
                if (mobileMenuOpen) {
                  setMobileMenuOpen(false)
                }
              }}
            >
              <div className="header-logo-wrapper">
                <img
                  src="/photos/arti3_logo.png"
                  alt="Arti 3 Bilişim Logo"
                  className="header-logo-image"
                />
              </div>
            </Link>

            <div className="header-nav-wrapper">
              <nav
                id="main-nav"
                ref={navRef}
                className={cn(
                  "header-nav",
                  forceMobileNav ? "header-nav-hidden" : "header-nav-desktop"
                )}
              >
                <Link 
                  ref={(el) => { 
                    if (el) {
                      linkRefs.current.home = el
                    }
                  }}
                  to="/"
                  className={cn(
                    'header-nav-link',
                    location.pathname === '/' ? 'header-nav-link-active' : ''
                  )}
                  onMouseEnter={() => {
                    if (location.pathname !== '/') {
                      setHoveredLink('home')
                    }
                  }}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  {t('navbar.home')}
                </Link>

                <div 
                  ref={dropdownRef}
                  className="header-nav-dropdown"
                  onMouseEnter={() => {
                    if (!servicesDropdownOpen) {
                      setHoveredLink('services')
                    }
                  }}
                  onMouseLeave={() => {
                    if (!servicesDropdownOpen) {
                      setHoveredLink(null)
                    }
                  }}
                >
                  <button 
                    ref={(el) => { linkRefs.current.services = el }}
                    className={cn(
                      'header-nav-link header-nav-link-button',
                      isActive('/services') ? 'header-nav-link-active' : ''
                    )}
                    onClick={(e) => {
                      e.preventDefault()
                      setServicesDropdownOpen(!servicesDropdownOpen)
                      if (!servicesDropdownOpen) {
                        setHoveredLink('services')
                      } else {
                        setHoveredLink(null)
                      }
                    }}
                  >
                    {t('navbar.services')}
                    <ChevronDown className={cn(
                      'header-nav-chevron',
                      servicesDropdownOpen ? 'header-nav-chevron-open' : ''
                    )} />
                  </button>

                  {servicesDropdownOpen && (
                    <div className="header-nav-dropdown-menu">
                      <div className="header-nav-dropdown-content">
                        {services.map((service, index) => {
                          const isServiceActive = location.pathname === service.href || location.pathname.startsWith(service.href + '/')
                          const IconComponent = service.icon

                          return (
                            <Link
                              key={index}
                              to={service.href}
                              className={cn(
                                'header-nav-dropdown-item',
                                isServiceActive ? 'header-nav-dropdown-item-active' : ''
                              )}
                            >
                              <div className={cn(
                                'header-nav-dropdown-icon',
                                isServiceActive ? 'header-nav-dropdown-icon-active' : ''
                              )}>
                                <IconComponent className="header-nav-dropdown-icon-svg" />
                              </div>
                              <div className="header-nav-dropdown-text">
                                <h3 className={cn(
                                  'header-nav-dropdown-title',
                                  isServiceActive ? 'header-nav-dropdown-title-active' : ''
                                )}>
                                  {service.title}
                                </h3>
                                <p className="header-nav-dropdown-description">
                                  {service.description}
                                </p>
                              </div>
                            </Link>
                          )
                        })}
                      </div>
                    </div>
                  )}
                </div>

                <Link 
                  ref={(el) => { linkRefs.current.akinsoft = el }}
                  to="/products" 
                  className={cn(
                    'header-nav-link',
                    isActive('/products') ? 'header-nav-link-active' : ''
                  )}
                  onMouseEnter={() => setHoveredLink('akinsoft')}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  {t('navbar.akinsoft')}
                </Link>

                <Link 
                  ref={(el) => { linkRefs.current.about = el }}
                  to="/about"
                  className={cn(
                    'header-nav-link',
                    isActive('/about') ? 'header-nav-link-active' : ''
                  )}
                  onMouseEnter={() => setHoveredLink('about')}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  {t('navbar.about')}
                </Link>

                <Link 
                  ref={(el) => { linkRefs.current.contact = el }}
                  to="/contact" 
                  className={cn(
                    'header-nav-link',
                    isActive('/contact') ? 'header-nav-link-active' : ''
                  )}
                  onMouseEnter={() => setHoveredLink('contact')}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  {t('navbar.contact')}
                </Link>
              </nav>

              <div
                id="indicator-container"
                className={cn(
                  "header-indicator-container",
                  forceMobileNav ? "header-indicator-hidden" : "header-indicator-visible"
                )}
              >
                {(location.pathname === '/') && (
                  <IndicatorBar key="home-active" linkKey="home" getPosition={getIndicatorPosition} />
                )}
                {isActive('/services') && !servicesDropdownOpen && (
                  <IndicatorBar key="services-active" linkKey="services" getPosition={getIndicatorPosition} />
                )}
                {isActive('/products') && (
                  <IndicatorBar key="akinsoft-active" linkKey="akinsoft" getPosition={getIndicatorPosition} />
                )}
                {isActive('/about') && (
                  <IndicatorBar key="about-active" linkKey="about" getPosition={getIndicatorPosition} />
                )}
                {isActive('/contact') && (
                  <IndicatorBar key="contact-active" linkKey="contact" getPosition={getIndicatorPosition} />
                )}

                {hoveredLink === 'home' && location.pathname !== '/' && (
                  <IndicatorBar key="home-hover" linkKey="home" getPosition={getIndicatorPosition} />
                )}
                {hoveredLink === 'services' && !isActive('/services') && !servicesDropdownOpen && (
                  <IndicatorBar key="services-hover" linkKey="services" getPosition={getIndicatorPosition} />
                )}
                {hoveredLink === 'akinsoft' && !isActive('/products') && (
                  <IndicatorBar key="akinsoft-hover" linkKey="akinsoft" getPosition={getIndicatorPosition} />
                )}
                {hoveredLink === 'contact' && !isActive('/contact') && (
                  <IndicatorBar key="contact-hover" linkKey="contact" getPosition={getIndicatorPosition} />
                )}
                {hoveredLink === 'about' && !isActive('/about') && (
                  <IndicatorBar key="about-hover" linkKey="about" getPosition={getIndicatorPosition} />
                )}
              </div>
            </div>

            <div className="header-right">
              <Button
                variant="ghost"
                size="sm"
                className={cn(
                  "header-mobile-button",
                  !forceMobileNav && "header-mobile-button-hidden"
                )}
                onClick={() => setMobileMenuOpen(true)}
              >
                <Menu className="header-mobile-icon" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {mounted && createPortal(
        <>
          {mobileMenuOpen && (
            <>
              <div
                className={cn(
                  "header-mobile-overlay",
                  !forceMobileNav && "header-mobile-overlay-hidden"
                )}
                onClick={() => {
                  setMobileMenuOpen(false)
                  setMobileServicesOpen(false)
                }}
              />

              <div
                className={cn(
                  "header-mobile-menu",
                  !forceMobileNav && "header-mobile-menu-hidden"
                )}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="header-mobile-content">
                  <div className="header-mobile-header">
                    <Link 
                      to="/"
                      className="header-mobile-logo-link"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <div className="header-mobile-logo-wrapper">
                        <img
                          src="/photos/arti3_logo.png"
                          alt="Arti 3 Bilişim Logo"
                          className="header-mobile-logo-image"
                        />
                      </div>
                    </Link>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => {
                        setMobileMenuOpen(false)
                        setMobileServicesOpen(false)
                      }}
                      className="header-mobile-close"
                    >
                      <X className="header-mobile-close-icon" />
                    </Button>
                  </div>

                  <nav className="header-mobile-nav">
                    <Link 
                      to="/"
                      className={cn(
                        'header-mobile-link',
                        location.pathname === '/' ? 'header-mobile-link-active' : ''
                      )}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {t('navbar.home')}
                    </Link>

                    <div>
                      <button 
                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                        className={cn(
                          'header-mobile-link header-mobile-link-button',
                          isActive('/services') ? 'header-mobile-link-active' : ''
                        )}
                      >
                        <span>{t('navbar.services')}</span>
                        <ChevronDown className={cn(
                          'header-mobile-chevron',
                          mobileServicesOpen ? 'header-mobile-chevron-open' : ''
                        )} />
                      </button>

                      {mobileServicesOpen && (
                        <div className="header-mobile-submenu">
                          {services.map((service, index) => {
                            const isServiceActive = location.pathname === service.href || location.pathname.startsWith(service.href + '/')
                            const IconComponent = service.icon

                            return (
                              <Link
                                key={index}
                                to={service.href}
                                className={cn(
                                  'header-mobile-submenu-item',
                                  isServiceActive ? 'header-mobile-submenu-item-active' : ''
                                )}
                                onClick={() => {
                                  setMobileMenuOpen(false)
                                  setMobileServicesOpen(false)
                                }}
                              >
                                <div className={cn(
                                  'header-mobile-submenu-icon',
                                  isServiceActive ? 'header-mobile-submenu-icon-active' : ''
                                )}>
                                  <IconComponent className="header-mobile-submenu-icon-svg" />
                                </div>
                                <div>
                                  <h3 className={cn(
                                    'header-mobile-submenu-title',
                                    isServiceActive ? 'header-mobile-submenu-title-active' : ''
                                  )}>
                                    {service.title}
                                  </h3>
                                  <p className="header-mobile-submenu-description">
                                    {service.description}
                                  </p>
                                </div>
                              </Link>
                            )
                          })}
                        </div>
                      )}
                    </div>

                    <Link 
                      to="/products"
                      className={cn(
                        'header-mobile-link',
                        isActive('/products') ? 'header-mobile-link-active' : ''
                      )}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {t('navbar.akinsoft')}
                    </Link>

                    <Link 
                      to="/about"
                      className={cn(
                        'header-mobile-link',
                        isActive('/about') ? 'header-mobile-link-active' : ''
                      )}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {t('navbar.about')}
                    </Link>

                    <Link 
                      to="/contact"
                      className={cn(
                        'header-mobile-link',
                        isActive('/contact') ? 'header-mobile-link-active' : ''
                      )}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {t('navbar.contact')}
                    </Link>
                  </nav>
                </div>
              </div>
            </>
          )}
        </>,
        document.body
      )}
    </>
  )
}

export default Header

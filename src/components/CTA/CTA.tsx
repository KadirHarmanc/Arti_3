import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../ui/Button/Button'
import { ArrowRight } from '../ui/Icons/Icons'
import './CTA.css'

export interface CTAButton {
  text: string
  href: string
  variant?: 'primary' | 'secondary'
  icon?: React.ReactNode
}

interface CTAProps {
  title: string
  description: string
  buttons: CTAButton[]
}

const CTA: React.FC<CTAProps> = ({ title, description, buttons }) => {
  return (
    <section className="cta">
      <div className="cta-background">
        <div className="cta-blur-1"></div>
        <div className="cta-blur-2"></div>
        <div className="cta-blur-3"></div>
      </div>
      <div className="cta-container">
        <h2 className="cta-title">{title}</h2>
        <p className="cta-description">{description}</p>
        <div className="cta-buttons">
          {buttons.map((button, index) => (
            <Link key={index} to={button.href}>
              <Button
                size="lg"
                className={`cta-button ${button.variant === 'secondary' ? 'cta-button-secondary' : 'cta-button-primary'}`}
              >
                {button.icon && <span className="cta-button-icon">{button.icon}</span>}
                {button.text}
                {button.variant !== 'secondary' && <ArrowRight className="cta-button-icon" />}
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CTA


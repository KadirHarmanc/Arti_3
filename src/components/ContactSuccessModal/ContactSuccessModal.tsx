import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Button from '../ui/Button/Button'
import { Card, CardContent } from '../ui/Card/Card'
import { X, CheckCircle } from '../ui/Icons/Icons'
import './ContactSuccessModal.css'

interface ContactSuccessModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  message: string
  okButtonText: string
  backButtonText?: string
  backButtonHref?: string
}

const ContactSuccessModal: React.FC<ContactSuccessModalProps> = ({
  isOpen,
  onClose,
  title,
  message,
  okButtonText,
  backButtonText,
  backButtonHref
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="success-modal-overlay" onClick={onClose}>
      <div className="success-modal-content" onClick={(e) => e.stopPropagation()}>
        <button
          className="success-modal-close"
          onClick={onClose}
          aria-label="Close"
        >
          <X className="success-modal-close-icon" />
        </button>

        <Card className="success-modal-card">
          <div className="success-modal-header">
            <div className="success-modal-icon-wrapper">
              <CheckCircle className="success-modal-icon" />
            </div>
            <h3 className="success-modal-title">
              {title}
            </h3>
          </div>

          <CardContent className="success-modal-body">
            <p className="success-modal-message">
              {message}
            </p>

            <div className="success-modal-buttons">
              <Button
                onClick={onClose}
                className="success-modal-button-primary"
              >
                {okButtonText}
              </Button>

              {backButtonText && backButtonHref && (
                <Link to={backButtonHref}>
                  <Button
                    variant="outline"
                    className="success-modal-button-secondary"
                  >
                    {backButtonText}
                  </Button>
                </Link>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default ContactSuccessModal

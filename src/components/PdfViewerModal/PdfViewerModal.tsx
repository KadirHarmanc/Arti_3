import React, { useEffect } from 'react'
import { X } from '../ui/Icons/Icons'
import './PdfViewerModal.css'

interface PdfViewerModalProps {
  isOpen: boolean
  onClose: () => void
  productName: string
  pdfUrl: string
}

const PdfViewerModal: React.FC<PdfViewerModalProps> = ({ isOpen, onClose, productName, pdfUrl }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="pdf-viewer-modal-overlay" onClick={onClose}>
      <div className="pdf-viewer-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="pdf-viewer-modal-header">
          <h2 className="pdf-viewer-modal-title">{productName}</h2>
          <button
            type="button"
            onClick={onClose}
            className="pdf-viewer-modal-close"
            aria-label="Close"
          >
            <X className="pdf-viewer-modal-close-icon" />
          </button>
        </div>
        <div className="pdf-viewer-modal-body">
          <iframe
            src={pdfUrl}
            className="pdf-viewer-modal-iframe"
            title={productName}
          />
        </div>
      </div>
    </div>
  )
}

export default PdfViewerModal


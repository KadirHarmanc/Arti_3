import React from 'react'
import './SkeletonLoader.css'

const SkeletonLoader: React.FC = () => {
  return (
    <div className="skeleton-loader">
      <div className="skeleton-header">
        <div className="skeleton-line skeleton-line-header"></div>
        <div className="skeleton-line skeleton-line-subheader"></div>
      </div>
      <div className="skeleton-content">
        <div className="skeleton-section">
          <div className="skeleton-line skeleton-line-title"></div>
          <div className="skeleton-line skeleton-line-text"></div>
          <div className="skeleton-line skeleton-line-text"></div>
          <div className="skeleton-line skeleton-line-text-short"></div>
        </div>
        <div className="skeleton-section">
          <div className="skeleton-grid">
            <div className="skeleton-card"></div>
            <div className="skeleton-card"></div>
            <div className="skeleton-card"></div>
            <div className="skeleton-card"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SkeletonLoader


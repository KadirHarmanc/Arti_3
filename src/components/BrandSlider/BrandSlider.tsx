import React from 'react'
import './BrandSlider.css'

const BrandSlider: React.FC = () => {
  const brands = [
    'akinsoft',
    'dell',
    'hp',
    'lenovo',
    'schneider',
    'siemens',
    'legrand',
    'hikvison',
    'panasonic',
    'honeywell'
  ]

  return (
    <section className="brand-slider-section">
      <div className="brand-slider-container">
        <div className="brand-slider-track">
          {brands.map((brand, index) => (
            <div key={index} className="brand-slider-item">
              <img
                src={`/photos/${brand}.png`}
                alt={brand}
                className="brand-slider-image"
                loading="lazy"
              />
            </div>
          ))}
          {brands.map((brand, index) => (
            <div key={`duplicate-${index}`} className="brand-slider-item">
              <img
                src={`/photos/${brand}.png`}
                alt={brand}
                className="brand-slider-image"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BrandSlider


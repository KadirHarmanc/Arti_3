import React from 'react'
import './Card.css'

interface CardProps {
  children: React.ReactNode
  className?: string
}

export const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div className={`card ${className}`}>
      {children}
    </div>
  )
}

export const CardContent: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div className={`card-content ${className}`}>
      {children}
    </div>
  )
}


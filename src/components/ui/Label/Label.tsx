import React from 'react'
import './Label.css'

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  className?: string
  children: React.ReactNode
}

const Label: React.FC<LabelProps> = ({ className = '', children, ...props }) => {
  return (
    <label
      className={`label ${className}`}
      {...props}
    >
      {children}
    </label>
  )
}

export default Label


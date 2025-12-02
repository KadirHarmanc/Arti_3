import React from 'react'
import './Button.css'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'ghost' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'default', 
  size = 'md', 
  className = '',
  children,
  ...props 
}) => {
  return (
    <button
      className={`button button-${variant} button-${size} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button


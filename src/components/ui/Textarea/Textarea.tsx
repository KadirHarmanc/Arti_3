import React from 'react'
import './Textarea.css'

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string
}

const Textarea: React.FC<TextareaProps> = ({ className = '', ...props }) => {
  return (
    <textarea
      className={`textarea ${className}`}
      {...props}
    />
  )
}

export default Textarea


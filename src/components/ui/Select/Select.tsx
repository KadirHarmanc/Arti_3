import React, { useState, useRef, useEffect } from 'react'
import './Select.css'

interface SelectProps {
  value: string
  onValueChange: (value: string) => void
  children: React.ReactNode
  required?: boolean
}

interface SelectContextValue {
  value: string
  onValueChange: (value: string) => void
  isOpen: boolean
  setIsOpen: (open: boolean) => void
}

const SelectContext = React.createContext<SelectContextValue | null>(null)

export const Select: React.FC<SelectProps> = ({ value, onValueChange, children, required }) => {
  const [isOpen, setIsOpen] = useState(false)
  const selectRef = useRef<HTMLDivElement>(null)
  const isRequired = Boolean(required)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  return (
    <SelectContext.Provider value={{ value, onValueChange, isOpen, setIsOpen }}>
      <div
        className="select-wrapper"
        ref={selectRef}
        aria-required={isRequired || undefined}
        data-required={isRequired ? 'true' : undefined}
      >
        {children}
      </div>
    </SelectContext.Provider>
  )
}

export const SelectTrigger: React.FC<{ className?: string; children: React.ReactNode }> = ({ className = '', children }) => {
  const context = React.useContext(SelectContext)
  if (!context) throw new Error('SelectTrigger must be used within Select')

  return (
    <button
      type="button"
      className={`select-trigger ${context.isOpen ? 'select-trigger-open' : ''} ${className}`}
      onClick={() => context.setIsOpen(!context.isOpen)}
    >
      {children}
      <svg className={`select-chevron ${context.isOpen ? 'select-chevron-open' : ''}`} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M6 9l6 6 6-6" />
      </svg>
    </button>
  )
}

export const SelectValue: React.FC<{ placeholder?: string; options?: Array<{ value: string; label: string }> }> = ({ placeholder, options }) => {
  const context = React.useContext(SelectContext)
  if (!context) throw new Error('SelectValue must be used within Select')

  const selectedLabel = options?.find(opt => opt.value === context.value)?.label || context.value

  return (
    <span className="select-value">
      {context.value ? selectedLabel : <span className="select-placeholder">{placeholder}</span>}
    </span>
  )
}

export const SelectContent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const context = React.useContext(SelectContext)
  if (!context) throw new Error('SelectContent must be used within Select')

  if (!context.isOpen) return null

  return (
    <div className="select-content">
      {children}
    </div>
  )
}

export const SelectGroup: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="select-group">{children}</div>
}

export const SelectLabel: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="select-label">{children}</div>
}

export const SelectSeparator: React.FC = () => {
  return <div className="select-separator" />
}

export const SelectItem: React.FC<{ value: string; className?: string; children: React.ReactNode }> = ({ value, className = '', children }) => {
  const context = React.useContext(SelectContext)
  if (!context) throw new Error('SelectItem must be used within Select')

  const handleClick = () => {
    context.onValueChange(value)
    context.setIsOpen(false)
  }

  return (
    <div
      className={`select-item ${context.value === value ? 'select-item-selected' : ''} ${className}`}
      onClick={handleClick}
    >
      {children}
    </div>
  )
}


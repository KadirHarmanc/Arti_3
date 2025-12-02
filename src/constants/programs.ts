import { getAllProducts } from '../data/products'

export function getPrograms(locale: string = 'tr') {
  const products = getAllProducts(locale)
  const programList = products.map(product => ({
    value: product.slug,
    label: product.title
  }))
  programList.push({ value: 'other', label: locale === 'tr' ? 'Diğer' : 'Other' })
  return programList
}

export const PROGRAMS = getPrograms('tr')

export interface SupportType {
  value: string
  label: string
  icon: string
}

export const SUPPORT_TYPES: SupportType[] = [
  { value: 'technical', label: 'Teknik Destek', icon: 'Cpu' },
  { value: 'installation', label: 'Kurulum Desteği', icon: 'Zap' },
  { value: 'training', label: 'Eğitim Desteği', icon: 'Users' },
  { value: 'bug', label: 'Hata Bildirimi', icon: 'AlertCircle' },
  { value: 'feature', label: 'Özellik Talebi', icon: 'Rocket' },
  { value: 'other', label: 'Diğer', icon: 'Shield' }
]


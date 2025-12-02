import { useEffect } from 'react'

export function useSmoothScroll() {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const anchor = target.closest('a[href^="#"]')
      
      if (anchor) {
        const href = anchor.getAttribute('href')
        if (href && href.startsWith('#')) {
          const id = href.substring(1)
          const element = document.getElementById(id)
          
          if (element) {
            e.preventDefault()
            element.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            })
          }
        }
      }
    }

    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])
}


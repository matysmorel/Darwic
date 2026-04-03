import { useEffect, useRef, useState } from 'react'

/**
 * Attaches an IntersectionObserver to an element and returns a `visible` flag
 * that flips to true (and stays true) once the element enters the viewport.
 *
 * Usage:
 *   const { ref, visible } = useReveal<HTMLDivElement>()
 *   <div ref={ref} className={`rv${visible ? ' on' : ''}`}>…</div>
 *
 * Add optional delay class by appending ` d1`–` d5` to className.
 */
export function useReveal<T extends Element = HTMLDivElement>() {
  const ref = useRef<T>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          io.unobserve(el)
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -48px 0px' }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return { ref, visible }
}

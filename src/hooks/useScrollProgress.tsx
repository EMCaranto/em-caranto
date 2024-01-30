// React JS
import React, { useEffect, useState } from 'react'

const useScrollProgress = () => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const updateScrollProgress = () => {
      const currentProgress = window.scrollY
      const scrollHeight = document.body.scrollHeight - window.innerHeight

      if (scrollHeight) {
        const calcProgress = Number(currentProgress / scrollHeight)
        const parseValue = parseFloat(calcProgress.toFixed(2)) * 100

        setProgress(parseValue)
      }
    }

    // event listener
    window.addEventListener('scroll', updateScrollProgress)

    // clear event listener
    return () => window.removeEventListener('scroll', updateScrollProgress)
  }, [])

  return progress
}

export default useScrollProgress

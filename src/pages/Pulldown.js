import React, { useRef, useEffect } from 'react'
import './Pulldown.css'

const Pulldown = () => {
  const refreshContainer = useRef(null)
  const spinner = useRef(null)

  let isLoading = false
  let pStartY = 0
  let pCurrentY = 0

  const loadInit = () => {
    refreshContainer.current.classList.add('load-init')
    isLoading = true
  }

  const swipeStart = (e) => {
    if (!isLoading) {
      let touch = e.targetTouches[0]
      pStartY = touch.screenY
    }
  }

  const swipe = (e) => {
    if (!isLoading) {
      let touch = e.changedTouches[0]
      pCurrentY = touch.screenY

      let changeY = pStartY < pCurrentY ? Math.abs(pStartY - pCurrentY) : 0
      if (changeY <= 100) {
        refreshContainer.current.style.marginTop = `${changeY + 50}px`
        spinner.current.style.transform = `rotate(${changeY * 13.5}deg)`
        if (changeY >= 80) {
          loadInit()
        }
      }
    }
  }

  const swipeEnd = (e) => {
    let touch = e.changedTouches[0]
    pCurrentY = touch.screenY

    if (isLoading) {
      refreshContainer.current.classList.add('load-start')

      setTimeout(() => {
        isLoading = false
        refreshContainer.current.style.marginTop = '-50px'
        refreshContainer.current.classList.remove('load-init')
        refreshContainer.current.classList.remove('load-start')
      }, 3000)
    }

    if (!isLoading) {
      refreshContainer.current.style.marginTop = '-50px'
      spinner.current.style.transform = `rotate(0deg)`
    }
  }

  useEffect(() => {
    document.addEventListener('touchstart', (e) => swipeStart(e))
    document.addEventListener('touchmove', (e) => swipe(e))
    document.addEventListener('touchend', (e) => swipeEnd(e))
    return () => {
      document.removeEventListener('touchstart', (e) => swipeStart(e))
      document.removeEventListener('touchmove', (e) => swipe(e))
      document.removeEventListener('touchend', (e) => swipeEnd(e))
    }
  })

  return (
    <div className='pulldown-container'>
      <div className='refresh-container' ref={refreshContainer}>
        <svg className='spinner' ref={spinner}>
          <use href='#spinner'></use>
        </svg>
      </div>

      <svg style={{ display: 'none' }}>
        <symbol id='spinner' viewBox='0 0 24 24'>
          <path d='M13.146 11.0499L12.9717 9.05752L15.3463 8.84977C14.4472 7.98322 13.2243 7.4503 11.877 7.4503C9.11553 7.4503 6.87695 9.68888 6.87695 12.4503C6.87695 15.2117 9.11553 17.4503 11.877 17.4503C13.6977 17.4503 15.2912 16.4771 16.1655 15.0224L18.1682 15.5231C17.0302 17.8487 14.6406 19.4503 11.877 19.4503C8.01096 19.4503 4.87695 16.3163 4.87695 12.4503C4.87695 8.58431 8.01096 5.4503 11.877 5.4503C13.8234 5.4503 15.5843 6.24474 16.8531 7.52706L16.6078 4.72412L18.6002 4.5498L19.1232 10.527L13.146 11.0499Z' />
        </symbol>
      </svg>
    </div>
  )
}

export default Pulldown

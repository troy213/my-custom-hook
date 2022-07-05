import React, { useState, useEffect, useLayoutEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Pulldown from './Pulldown'

const Otp = () => {
  const TIME_SECOND = 10
  const TIME_MILISECOND = TIME_SECOND * 1000
  const [timeLeft, setTimeLeft] = useState(
    (Number(localStorage.getItem('timer')) - Date.now()) / 1000
  )

  const firstRender = useRef(true)

  const resetTimer = () => {
    localStorage.setItem('timer', Date.now() + TIME_MILISECOND)
    setTimeLeft(TIME_SECOND)
    console.log('OTP Send!')
  }

  useLayoutEffect(() => {
    if (localStorage.getItem('timer') === null) {
      firstRender.current = false
      resetTimer()
    }

    if (timeLeft > 0) {
      firstRender.current = false
    }

    if (timeLeft <= 0 && firstRender.current) {
      firstRender.current = false
      resetTimer()
    }
  })

  useEffect(() => {
    if (timeLeft >= 1) {
      setTimeout(() => {
        setTimeLeft(timeLeft - 1)
      }, 1000)
    }
  }, [timeLeft])

  return (
    <>
      <Pulldown />
      <Link to='/'>Home</Link>
      {timeLeft < 1 ? (
        <>
          <h1>Time's Up</h1>
          <button onClick={resetTimer}>Reset</button>
        </>
      ) : (
        <h1>{Math.floor(timeLeft)}s</h1>
      )}
    </>
  )
}

export default Otp

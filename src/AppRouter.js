import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from './pages/App'
import Otp from './pages/Otp'
import Pulldown from './pages/Pulldown'
import Error from './pages/Error'

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/otp' element={<Otp />} />
        <Route path='/pulldown' element={<Pulldown />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </Router>
  )
}

export default AppRouter

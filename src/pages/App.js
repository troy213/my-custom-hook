import { Link } from 'react-router-dom'
import HookTest from './HookTest'

function App() {
  return (
    <>
      <nav>
        <Link to='/otp'>OTP</Link>
        <br />
        <Link to='/pulldown'>Pull Down</Link>
      </nav>

      <HookTest />
    </>
  )
}

export default App

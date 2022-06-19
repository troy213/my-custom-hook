import { useState } from 'react'
import useUpdateEffect from '../../hooks/useUpdateEffect'

const UpdateEffect = () => {
  const [count, setCount] = useState(0)
  useUpdateEffect(() => alert(count), [count])

  return (
    <div>
      <h3>useUpdateEffect</h3>
      <p>value: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
    </div>
  )
}

export default UpdateEffect

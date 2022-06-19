import React, { useState } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
import useToggle from '../hooks/useToggle'
import useUpdateLogger from '../hooks/useUpdateLogger'
import useTimeout from '../hooks/useTimeout'
import useDebounce from '../hooks/useDebounce'
import useArray from '../hooks/useArray'

// import UpdateEffect from './components/UpdateEffect'

const HookTest = () => {
  const [count, setCount] = useState(10)
  const [number, setNumber] = useState(0)
  const { array, set, push, remove, filter, update, clearArr } = useArray([
    1, 2, 3, 4, 5, 6, 7, 8, 9,
  ])
  const [name, setName] = useLocalStorage('name', '')
  const [toggleValue, setToggleValue] = useToggle(false)

  const { reset, clear } = useTimeout(() => setCount(0), 1000)
  useDebounce(() => alert(number), 1000, [number])
  useUpdateLogger(name)

  return (
    <>
      <div>
        <h3>useLocalStorage & useUpdateLogger</h3>
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          id='name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <h3>useToggle</h3>
        <p>value: {toggleValue.toString()}</p>
        <button onClick={setToggleValue}>Toggle</button>
        <button onClick={() => setToggleValue(true)}>Toggle True</button>
        <button onClick={() => setToggleValue(false)}>Toggle False</button>
      </div>
      <div>
        <h3>useTimeout</h3>
        <p>value: {count}</p>
        <button onClick={() => setCount((c) => c + 1)}>Increment</button>
        <button onClick={reset}>Reset</button>
        <button onClick={clear}>Clear</button>
      </div>
      <div>
        <h3>useDebounce</h3>
        <p>value: {number}</p>
        <button onClick={() => setNumber((c) => c + 1)}>Increment</button>
      </div>
      {/* <UpdateEffect /> */}
      <div>
        <h3>useArray</h3>
        <p>value: {array.join(', ')}</p>
        <p>set to 1, 2, 3, 4, 5</p>
        <button onClick={() => set([1, 2, 3, 4, 5])}>Set</button>
        <p>push 1</p>
        <button onClick={() => push(1)}>Push</button>
        <p>remove latest index</p>
        <button onClick={() => remove(array.length - 1)}>Remove</button>
        <p>filter less than 4</p>
        <button onClick={() => filter((n) => n < 4)}>Filter</button>
        <p>update index 1 to 3</p>
        <button onClick={() => update(1, 3)}>Update</button>
        <p>clear array</p>
        <button onClick={() => clearArr()}>Clear</button>
      </div>
    </>
  )
}

export default HookTest

# My React Custom Hook

List of my useful custom hook that I get across the Internet

### useLocalstorage

Create a state that can be persisted to localstorage

```
const [state, setState] = useLocalstorate('key', defaultValue)
```

```javascript
  import useLocalstorage from './hooks/useLocalstorage';

  export default const App = () => {
   const [value, setValue] = useLocalstorage('name', '');

   return <h1>{value}</h1>
  }
```

### useUpdateLogger

Similar to console.log();

```
useUpdateLogger(state)
```

```javascript
  import useLocalstorage from './hooks/useLocalstorage';
  import useUpdateLogger from './hooks/useUpdateLogger';

  export default const App = () => {
   const [value, setValue] = useLocalstorage(key, defaultValue);
   useUpdateLogger(value);

   return <h1>{value}</h1>
  }
```

### useTimeout

Invoke a callback after n milisecond(s)

```
const { reset, clear } = useTimeout(callback, delay)
```

```javascript
  import { useState } from 'react';
  import useTimeout from './hooks/useTimeout';

  export default const App = () => {
   const [value, setValue] = useState(10);
   const { reset, clear } = useTimeout(() => setValue(0), 1000)

   return (
    <>
     <h1>{value}</h1>
     <button onClick={reset}>Reset</button>
     <button onClick={clear}>Clear</button>
    </>
   )
  }
```

### useDebounce

Invoke a callback if there is no changes after n milisecond(s)

```
useDebounce(callback, delay, [dependencies])
```

```javascript
  import { useState } from 'react';
  import useDebounce from './hooks/useDebounce';

  export default const App = () => {
   const [value, setValue] = useState(10);
   useDebounce(() => alert(value), 1000, [value]);

   return (
    <>
     <h1>{value}</h1>
     <button onClick={() => setValue((c) => c + 1)}>Increment</button>
    </>
   )
  }
```

### useToggle

Create a function to toggle boolean value

```
useToggle(defaultValue)
```

```javascript
  import useToggle from './hooks/useToggle';

  export default const App = () => {
   const [toggleValue, setToggleValue] = useToggle(false);

   return (
    <>
     <h1>{toggleValue.toString()}</h1>
     <button onClick={setToggleValue}>Toggle</button>
     <button onClick={() => setToggleValue(true)}>Make True</button>
     <button onClick={() => setToggleValue(false)}>Make False</button>
    </>
   )
  }
```

### useUpdateEffect

Create a useEffect hook that will not running in first render

```
useUpdateEffect(callback, [dependencies])
```

```javascript
  import { useState } from 'react';
  import useUpdateEffect from './hooks/useUpdateEffect';

  export default const App = () => {
   const [value, setValue] = useState(10);
   useUpdateEffect(() => alert(value), [value]);

   return (
    <>
     <h1>{value}</h1>
     <button onClick={() => setValue((c) => c + 1)}>Increment</button>
    </>
   )
  }
```

### useArray

Create array manipulation function that can add, filter, push, remove, clear, and set.

```
const { array, set, push, remove, filter, update, clearArr } = useArray(array)
```

```javascript
  import useArray from './hooks/useArray';

  export default const App = () => {
   const { array, set, push, remove, filter, update, clearArr } = useArray([
    1, 2, 3, 4, 5, 6, 7, 8, 9,
  ])

   return (
    <>
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
    </>
   )
  }
```

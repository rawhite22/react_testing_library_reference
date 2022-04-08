import logo from './logo.svg'
import './App.css'
import { useState } from 'react'
import CounterRedux from './CounterRedux'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <p role='counter'>Count is: {count}</p>
      <button role='btnIncrement' onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button role='btnDecrement' onClick={() => setCount(count - 1)}>
        Decrement
      </button>
      <CounterRedux />
    </div>
  )
}

export default App

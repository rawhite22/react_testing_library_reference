import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const CounterRedux = () => {
  const dispatch = useDispatch()
  const { count } = useSelector((state) => {
    return state.counterReducer
  })
  return (
    <div>
      <p role='contentinfo'>Count is: {count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Add</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Subtract</button>
    </div>
  )
}

export default CounterRedux

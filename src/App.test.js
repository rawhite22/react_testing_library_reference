import { fireEvent, render, screen } from '@testing-library/react'
import App from './App'

import { Provider } from 'react-redux'
// redux
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
// reducers

// thunk
import thunk from 'redux-thunk'
import counterReducer from './store/countReducer'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
// store
const store = createStore(
  combineReducers({ counterReducer }),
  composeEnhancers(applyMiddleware(thunk))
)

test('renders count component and original state of 0', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  )
  const counterElement = screen.getByRole('counter')
  const btnIncrement = screen.getByRole('btnIncrement')
  const btnDecrement = screen.getByRole('btnDecrement')
  expect(counterElement).toBeInTheDocument()
  expect(counterElement).toHaveTextContent('Count is: 0')
  expect(counterElement).toHaveAttribute('role', 'counter')
  fireEvent.click(btnIncrement)
  expect(counterElement).toHaveTextContent('Count is: 1')
  fireEvent.click(btnDecrement)
  expect(counterElement).toHaveTextContent('Count is: 0')
})

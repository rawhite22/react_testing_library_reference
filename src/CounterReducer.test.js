import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import CounterRedux from './CounterRedux'
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

describe('Testing Redux', () => {
  test('initial state of 0', () => {
    render(
      <Provider store={store}>
        <CounterRedux />
      </Provider>
    )
    const counter = screen.getByRole('contentinfo')
    expect(counter).toHaveTextContent('Count is: 0')
  })
  test('increment', () => {
    render(
      <Provider store={store}>
        <CounterRedux />
      </Provider>
    )
    const counter = screen.getByRole('contentinfo')
    const btnIncrement = screen.getByText('Add')
    fireEvent.click(btnIncrement)
    expect(counter).toHaveTextContent('Count is: 1')
  })
  test('decrement', () => {
    render(
      <Provider store={store}>
        <CounterRedux />
      </Provider>
    )
    const counter = screen.getByRole('contentinfo')
    const btnDecrement = screen.getByText('Subtract')
    fireEvent.click(btnDecrement)
    expect(counter).toHaveTextContent('Count is: 0')
  })
})

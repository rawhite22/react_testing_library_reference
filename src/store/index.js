// redux
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
// reducers

// thunk
import thunk from 'redux-thunk'
import counterReducer from './countReducer'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// store
const store = createStore(
  combineReducers({ counterReducer }),
  composeEnhancers(applyMiddleware(thunk))
)
export default store

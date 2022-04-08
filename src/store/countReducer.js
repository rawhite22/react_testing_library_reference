const initialState = {
  count: 0,
}

const counterReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 }
    case 'DECREMENT':
      return { ...state, count: state.count - 1 }

    default:
      return state
  }
}

export default counterReducer

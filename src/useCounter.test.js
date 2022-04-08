import { useCounter } from './useCounter'
import { renderHook, act } from '@testing-library/react-hooks'

test('test', () => {
  const { result } = renderHook(() => useCounter())
  act(() => {
    result.current.increment()
  })
  expect(result.current.count).toBe(1)
})

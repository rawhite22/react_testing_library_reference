# Getting Started with React Testing Library

## Available Scripts

In the project directory, you can run:

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Targerting Nodes

|Queries | No Match | 1 Match | 1+ Match | Await |
|--------|----------|---------|----------|-------|
|getBy|throw|return|throw|No
|findBy|throw|return|throw|Yes
|queryBy|null|return|throw|No
|getAllBy|throw|array|array|No
|findAllBy|throw|array|array|Yes
|queryAllBy|[ ]|array|array|No

* ByLabelText find by label or aria-label text content
* ByPlaceHolderText find by input placeholder value
* ByText find by element text content
* ByDisplayValue find by form element current value
* ByAltText find by img alt attribute
* ByTitle find by title attribute or svg title tag
* ByRole find by aria role
* ByTestId find by data-testid attribute

### Example

```<button>Add</button>```

```javascript
const btnIncrement = screen.getByText('Add')
```

## Async

[Async testing api](https://testing-library.com/docs/dom-testing-library/api-async/)

```javascript
import { render, screen, waitFor } from '@testing-library/react'

test('async tesing', async () => {
  render(<APIComponent />)
  const output = await waitFor(() => screen.getByRole('contentinfo'))
  expect(output).toHaveTextContent("Let's Go Rangers")
})
```

## Events

**fireEvent** triggers DOM event

```javascript
import {fireEvent} from '@testing-library/react'

const btnIncrement = screen.getByText('Add')
fireEvent.click(btnIncrement) || fireEvent(btnIncrement,'click;)
```

[See all supported events](https://github.com/testing-library/dom-testing-library/blob/main/src/event-map.js)

## Custom Hooks

`npm install @testing-library/react-hooks --save-dev`

```javascript
import { renderHook, act } from '@testing-library/react-hooks'

test('testing custom hook', () => {
  const { result } = renderHook(() => useCounter())
  act(() => {
    result.current.increment()
  })
  expect(result.current.count).toBe(1)
})
```

[Hooks testing library api](https://react-hooks-testing-library.com/)

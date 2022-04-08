import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import APIComponent from './APIComponent'

const server = setupServer(
  rest.get('/api', (req, res, ctx) => {
    return res(ctx.json({ name: 'Jack' }))
  })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('test', async () => {
  render(<APIComponent />)
  const output = await waitFor(() => screen.getByRole('contentinfo'))
  expect(output).toHaveTextContent('Name is Jack')
})

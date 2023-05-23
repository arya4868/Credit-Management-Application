import { render, fireEvent } from '@testing-library/react'
import Cashkicklanch from './index'
import '@testing-library/jest-dom'

test('renders Cashkicklanch component without errors', () => {
  render(<Cashkicklanch />)
})
test('displays the correct title and description', () => {
  const { getByText } = render(<Cashkicklanch />)
  expect(getByText(/Cash kick launched successfully!/i)).toBeInTheDocument()
  expect(getByText(/We are reviewing your cash kick/i)).toBeInTheDocument()
})

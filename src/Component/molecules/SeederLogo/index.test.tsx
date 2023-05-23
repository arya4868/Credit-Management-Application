import SeederLogo from './index'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

test('renders without error', () => {
  render(<SeederLogo />)
})
test('renders Seeder logo image', () => {
  render(<SeederLogo />)
  const logo = screen.getByAltText('LOGO')
  expect(logo).toBeInTheDocument()
})
test('renders Seeder text', () => {
  render(<SeederLogo />)
  const text = screen.getByText('Seeder')
  expect(text).toBeInTheDocument()
})

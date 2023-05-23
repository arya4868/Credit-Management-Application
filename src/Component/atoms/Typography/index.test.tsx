import { render, screen } from '@testing-library/react'
import MuiTypography from './index'
import '@testing-library/jest-dom'

test('renders without passing props', () => {
  render(<MuiTypography>Hello Saiprabhu</MuiTypography>)
  const typographyElement = screen.getByText('Hello Saiprabhu')
  expect(typographyElement).toBeInTheDocument()
})
test('renders with variant h1', () => {
  render(<MuiTypography variant="h1">Hello User</MuiTypography>)
  const typographyElement = screen.getByText('Hello User')
  expect(typographyElement.tagName).toBe('H1')
})
test('renders with variant h5', () => {
  render(<MuiTypography variant="h5">Hello User</MuiTypography>)
  const typographyElement = screen.getByText('Hello User')
  expect(typographyElement.tagName).toBe('H5')
})

test('renders children', () => {
  render(<MuiTypography>Good Morning</MuiTypography>)
  const typographyElement = screen.getByText('Good Morning')
  expect(typographyElement).toBeInTheDocument()
})
test('passes variant prop correctly', () => {
  render(<MuiTypography variant="h1">Good Evening</MuiTypography>)
  const typographyElement = screen.getByText('Good Evening')
  expect(typographyElement.tagName).toBe('H1')
})

test('does not render text if it is not in the document', () => {
  render(<MuiTypography variant="h1">Good Evening</MuiTypography>)
  const typographyElement = screen.queryByText('Good')
  expect(typographyElement).not.toBeInTheDocument()
})
test('renders as body1 by default', () => {
  render(<MuiTypography>Zemoso Technology</MuiTypography>)
  const typographyElement = screen.getByText('Zemoso Technology')
  expect(typographyElement.tagName).toBe('P')
})

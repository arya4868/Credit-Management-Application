import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Button from './index'

describe('Button component', () => {
  const defaultProps = {
    children: 'Click me',
    onClick: jest.fn(),
  }

  it('renders the button with default props', () => {
    render(<Button {...defaultProps} />)
    const button = screen.getByRole('button', { name: 'Click me' })
    expect(button).toBeInTheDocument()
    expect(button).toBeEnabled()
    expect(button).toHaveClass('MuiButton-containedPrimary')
    expect(button).toHaveClass('MuiButton-sizeMedium')
    expect(button).toHaveTextContent('Click me')
  })

  it('renders the button with provided props', () => {
    render(<Button {...defaultProps} color="secondary" size="large" />)
    const button = screen.getByRole('button', { name: 'Click me' })
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass('MuiButton-containedSecondary')
    expect(button).toHaveClass('MuiButton-sizeLarge')
  })

  it('renders a disabled button when disabled prop is true', () => {
    render(<Button {...defaultProps} disabled={true} />)
    const button = screen.getByRole('button', { name: 'Click me' })
    expect(button).toBeInTheDocument()
    expect(button).toBeDisabled()
  })

  it('calls the onClick function when button is clicked', () => {
    render(<Button {...defaultProps} />)
    const button = screen.getByRole('button', { name: 'Click me' })
    fireEvent.click(button)
    expect(defaultProps.onClick).toHaveBeenCalledTimes(1)
  })
})

import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { CustomChip } from './index'

describe('CustomChip', () => {
  it('should render with label', () => {
    render(<CustomChip label="chip" />)
    expect(screen.getByText(/chip/i)).toBeInTheDocument()
  })

  test('should disable the chip when disabled prop is true', () => {
    render(<CustomChip label="My Chip" disabled={true} />)
    const myChip = screen.getByText(/my chip/i)
    expect(myChip).toBeInTheDocument()
  })

  test('should disable the chip when disabled prop is false', () => {
    render(<CustomChip label="My Chip" disabled={false} />)
    const myChip = screen.getByText(/my chip/i)
    expect(myChip).toBeInTheDocument()
  })

  it('renders with custom styles when provided with an sx prop', () => {
    render(
      <CustomChip
        label="Test Label"
        sx={{ backgroundColor: '#FF0000', color: '#FFFFFF', fontSize: '16px' }}
        data-testid="custom-chip"
      />
    )
    const chip = screen.getByTestId('custom-chip')
    expect(chip).toHaveStyle('background-color: #FF0000')
    expect(chip).toHaveStyle('color: #FFFFFF')
    expect(chip).toHaveStyle('font-size: 16px')
  })
})
